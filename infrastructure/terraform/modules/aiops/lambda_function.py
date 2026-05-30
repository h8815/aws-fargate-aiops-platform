import json
import boto3
import os
from datetime import datetime, timedelta, timezone

logs_client   = boto3.client("logs")
bedrock       = boto3.client("bedrock-runtime", region_name=os.environ["AWS_REGION"])
sns_client    = boto3.client("sns")

SNS_TOPIC_ARN = os.environ["SNS_TOPIC_ARN"]

LOG_GROUP_MAP = {
    "auth-service":  "/ecs/auth-service",
    "user-service":  "/ecs/user-service",
    "api-gateway":   "/ecs/api-gateway",
    "auth":          "/ecs/auth-service",
    "user":          "/ecs/user-service",
    "gateway":       "/ecs/api-gateway",
}

def get_log_group(alarm_name: str) -> str:
    alarm_lower = alarm_name.lower()
    for key, log_group in LOG_GROUP_MAP.items():
        if key in alarm_lower:
            return log_group
    return "/ecs/auth-service"

def fetch_recent_logs(log_group: str, minutes: int = 10, max_events: int = 50) -> str:
    end_time   = datetime.now(timezone.utc)
    start_time = end_time - timedelta(minutes=minutes)

    try:
        response = logs_client.filter_log_events(
            logGroupName  = log_group,
            startTime     = int(start_time.timestamp() * 1000),
            endTime       = int(end_time.timestamp() * 1000),
            limit         = max_events,
        )
        events = response.get("events", [])
        if not events:
            return "No log events found in the last 10 minutes."
        return "\n".join(e["message"] for e in events)
    except Exception as e:
        return f"Could not fetch logs: {str(e)}"

def analyze_with_bedrock(alarm_name: str, alarm_reason: str, logs: str) -> str:
    prompt = f"""You are an expert AWS DevOps engineer and site reliability engineer.
A CloudWatch alarm has triggered. Analyze the situation and provide a structured incident report.

ALARM NAME: {alarm_name}
ALARM REASON: {alarm_reason}
RECENT APPLICATION LOGS:
{logs}

Provide your analysis in exactly this format:

**SUMMARY**
One sentence describing what happened.

**ROOT CAUSE**
What specifically caused this alarm to trigger. Be technical and precise.

**IMMEDIATE ACTION**
What the on-call engineer should do right now (within the next 5 minutes).

**FULL FIX**
The complete solution to resolve the underlying issue.

**PREVENTION**
How to prevent this from happening again in the future.
"""

    body = json.dumps({
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 1024,
        "messages": [{"role": "user", "content": prompt}],
    })

    response = bedrock.invoke_model(
        modelId     = "anthropic.claude-haiku-4-5",
        body        = body,
        contentType = "application/json",
        accept      = "application/json",
    )

    result = json.loads(response["body"].read())
    return result["content"][0]["text"]

def lambda_handler(event, context):
    print(f"Event received: {json.dumps(event)}")

    detail       = event.get("detail", {})
    alarm_name   = detail.get("alarmName", "Unknown Alarm")
    alarm_state  = detail.get("state", {}).get("value", "ALARM")
    alarm_reason = detail.get("state", {}).get("reason", "No reason provided")

    log_group = get_log_group(alarm_name)
    print(f"Fetching logs from: {log_group}")

    logs = fetch_recent_logs(log_group)
    print(f"Fetched {len(logs.splitlines())} log lines")

    ai_analysis = analyze_with_bedrock(alarm_name, alarm_reason, logs)
    print("Bedrock analysis complete")

    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    message = f"""
==========================================
  CYBRMOON AIOPS — INCIDENT REPORT
==========================================
Timestamp : {timestamp}
Alarm     : {alarm_name}
State     : {alarm_state}
Reason    : {alarm_reason}
Log Group : {log_group}
------------------------------------------

{ai_analysis}

==========================================
  END OF AIOPS REPORT
==========================================
    """.strip()

    sns_client.publish(
        TopicArn = SNS_TOPIC_ARN,
        Subject  = f"[AIOps] Incident Report — {alarm_name}",
        Message  = message,
    )

    print("SNS notification published successfully")
    return {"statusCode": 200, "body": "AIOps analysis complete"}
