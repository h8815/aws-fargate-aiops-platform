Write-Host "=== TEST 1: Register via Gateway (POST /auth/register) ==="
$body = '{"email":"gateway@example.com","password":"gatewayPass123"}'
try {
    $r = Invoke-WebRequest -Uri 'http://localhost:8080/auth/register' -Method POST -ContentType 'application/json' -Body $body -UseBasicParsing
    Write-Host "Status: $($r.StatusCode) (expected 201)"
    Write-Host "Body: $($r.Content)"
} catch {
    $code = [int]$_.Exception.Response.StatusCode
    Write-Host "Status: $code"
    try { $sr = [System.IO.StreamReader]::new($_.Exception.Response.GetResponseStream()); Write-Host "Body: $($sr.ReadToEnd())"; $sr.Close() } catch { Write-Host "Body: (unavailable)" }
}
Write-Host ""

Write-Host "=== TEST 2: Login via Gateway (POST /auth/login) ==="
$loginBody = '{"email":"gateway@example.com","password":"gatewayPass123"}'
try {
    $r = Invoke-WebRequest -Uri 'http://localhost:8080/auth/login' -Method POST -ContentType 'application/json' -Body $loginBody -UseBasicParsing
    Write-Host "Status: $($r.StatusCode) (expected 200)"
    Write-Host "Body: $($r.Content)"
    $token = ($r.Content | ConvertFrom-Json).token
} catch {
    $code = [int]$_.Exception.Response.StatusCode
    Write-Host "Status: $code"
    $token = $null
}
Write-Host ""

Write-Host "=== TEST 3: user-service profile WITHOUT token (GET /users/profile) ==="
try {
    $r = Invoke-WebRequest -Uri 'http://localhost:8080/users/profile' -Method GET -UseBasicParsing
    Write-Host "Status: $($r.StatusCode)"
    Write-Host "Body: $($r.Content)"
} catch {
    $code = [int]$_.Exception.Response.StatusCode
    Write-Host "Status: $code (expected 401)"
}
Write-Host ""

if ($token) {
    Write-Host "=== TEST 4: user-service profile WITH token (GET /users/profile) ==="
    try {
        $r = Invoke-WebRequest -Uri 'http://localhost:8080/users/profile' -Method GET -Headers @{Authorization="Bearer $token"} -UseBasicParsing
        Write-Host "Status: $($r.StatusCode) (expected 200)"
        Write-Host "Body: $($r.Content)"
    } catch {
        $code = [int]$_.Exception.Response.StatusCode
        Write-Host "Status: $code"
    }
    Write-Host ""

    Write-Host "=== TEST 5: auth-service login with wrong password (POST /auth/login) ==="
    $badBody = '{"email":"gateway@example.com","password":"wrongPassword"}'
    try {
        $r = Invoke-WebRequest -Uri 'http://localhost:8080/auth/login' -Method POST -ContentType 'application/json' -Body $badBody -UseBasicParsing
        Write-Host "Status: $($r.StatusCode)"
        Write-Host "Body: $($r.Content)"
    } catch {
        $code = [int]$_.Exception.Response.StatusCode
        Write-Host "Status: $code (expected 401)"
        try { $sr = [System.IO.StreamReader]::new($_.Exception.Response.GetResponseStream()); Write-Host "Body: $($sr.ReadToEnd())"; $sr.Close() } catch { Write-Host "Body: (unavailable)" }
    }
    Write-Host ""

    Write-Host "=== TEST 6: auth-service register duplicate email (POST /auth/register) ==="
    try {
        $r = Invoke-WebRequest -Uri 'http://localhost:8080/auth/register' -Method POST -ContentType 'application/json' -Body $body -UseBasicParsing
        Write-Host "Status: $($r.StatusCode)"
        Write-Host "Body: $($r.Content)"
    } catch {
        $code = [int]$_.Exception.Response.StatusCode
        Write-Host "Status: $code (expected 409)"
        try { $sr = [System.IO.StreamReader]::new($_.Exception.Response.GetResponseStream()); Write-Host "Body: $($sr.ReadToEnd())"; $sr.Close() } catch { Write-Host "Body: (unavailable)" }
    }
} else {
    Write-Host "SKIPPED Tests 4-6 (no token obtained from login)"
}