import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios';
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from '@/components/ui/liquid-glass-button';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      await axiosInstance.post('/auth/register', { email, password });
      setSuccess('Account created successfully! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      if (err.response && err.response.status === 409) {
        setError('An account with this email already exists.');
      } else if (err.response && err.response.status === 400 && err.response.data.errors) {
        const firstError = Object.values(err.response.data.errors)[0];
        setError(firstError);
      } else {
        setError('Registration failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black selection:bg-green-500/30">
      <WebGLShader/> 
      
      <header className="absolute top-0 w-full flex justify-between items-center px-8 py-6 z-20">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-white">CybrMoon</span>
        </div>
      </header>

      <main className="relative flex w-full max-w-7xl flex-col xl:flex-row items-center justify-center z-10 gap-12 px-4 py-20 mt-12">
        {/* Hero Section */}
        <div className="flex-1 text-center xl:text-left pt-10">
          <h1 className="mb-3 text-white text-center text-7xl font-extrabold tracking-tighter md:text-[clamp(2rem,8vw,5.5rem)] leading-[0.9]">CybrMoon Identity</h1>
          <p className="text-white/60 px-6 max-w-2xl mx-auto text-center text-xs md:text-sm lg:text-lg mt-6">Secure perimeter node enrollment and credential issuance for AWS decentralized architectures.</p>
          <div className="my-8 flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full w-fit mx-auto border border-white/10 shadow-[0_0_20px_rgba(34,197,94,0.1)] hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-shadow">
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <p className="text-xs text-white font-medium">New Node Registration Open</p>
          </div>
        </div>

        {/* Register Form */}
        <div className="w-full max-w-lg z-10">
          <div className="bg-[#0b0c10]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent opacity-80"></div>
            
            <div className="flex flex-col mb-8 text-center pt-2">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Create Account</h2>
              <p className="text-white/50 text-sm">Join the CybrMoon platform</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                <p className="text-sm text-red-500 font-medium text-center">{error}</p>
              </div>
            )}
            {success && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                <p className="text-sm text-green-400 font-medium text-center">{success}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-white/50 pl-1" htmlFor="first-name">First Name</label>
                  <input className="w-full bg-white/5 border border-white/10 text-white py-3 px-4 rounded-xl focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all outline-none placeholder:text-white/20 text-sm" id="first-name" placeholder="John" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-white/50 pl-1" htmlFor="last-name">Last Name</label>
                  <input className="w-full bg-white/5 border border-white/10 text-white py-3 px-4 rounded-xl focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all outline-none placeholder:text-white/20 text-sm" id="last-name" placeholder="Doe" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-white/50 pl-1" htmlFor="email">Email Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-[18px]">mail</span>
                  <input className="w-full bg-white/5 border border-white/10 text-white py-3 pl-11 pr-4 rounded-xl focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 placeholder:text-white/20 text-sm outline-none shadow-inner" id="email" placeholder="you@example.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-white/50 pl-1" htmlFor="password">Password</label>
                <div className="relative pb-2">
                  <span className="material-symbols-outlined absolute left-4 top-[22px] -translate-y-1/2 text-white/30 text-[18px]">lock</span>
                  <input className="w-full bg-white/5 border border-white/10 text-white py-3 pl-11 pr-4 rounded-xl focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 placeholder:text-white/20 text-sm outline-none shadow-inner" id="password" placeholder="••••••••" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
              </div>

              <div className="pt-2 flex justify-center w-full relative z-20">
                <LiquidButton type="submit" disabled={isLoading || success} className="w-[80%]" size="xl">
                  <span className="text-white font-bold tracking-wide">{isLoading ? 'Creating...' : "Sign Up"}</span>
                </LiquidButton>
              </div>
            </form>

            <div className="mt-8 text-center text-[13px] text-white/40">
                Already have an account? 
                <Link to="/login" className="text-green-500 font-medium hover:text-green-400 ml-2 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-green-500/30">Sign in</Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="absolute bottom-5 text-center w-full z-10 pointer-events-none">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-medium">© 2026 CybrMoon Identity</p>
      </footer>
    </div>
  );
};

export default Register;

