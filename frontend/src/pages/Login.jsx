import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios';
import { AuthContext } from '../context/AuthContext';
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from '@/components/ui/liquid-glass-button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await axiosInstance.post('/auth/login', { email, password });
      if (response.data.token) {
        login(response.data.token);
        navigate('/dashboard');
      }
    } catch (err) {
      if (err.response && (err.response.status === 401 || err.response.status === 404)) {
        setError('Invalid credentials.');
      } else {
        setError('An unexpected error occurred. Please try again later.');
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
          <p className="text-white/60 px-6 max-w-2xl mx-auto text-center text-xs md:text-sm lg:text-lg mt-6">Next-generation access control and token management for distributed AWS microservices architecture.</p>
          <div className="my-8 flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full w-fit mx-auto border border-white/10 shadow-[0_0_20px_rgba(34,197,94,0.1)] hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-shadow">
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <p className="text-xs text-white font-medium">Authentication Nodes Online</p>
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md xl:mr-10">
          <div className="bg-[#0b0c10]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent opacity-80"></div>
            
            <div className="flex flex-col items-center mb-8 text-center pt-2">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Welcome Back</h2>
              <p className="text-white/50 text-sm">Sign in to your CybrMoon account</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                <p className="text-sm text-red-400 font-medium text-center">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-widest text-white/50 pl-1" htmlFor="email">Email Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-[20px]">alternate_email</span>
                  <input className="w-full bg-white/5 border border-white/10 text-white py-3.5 pl-12 pr-4 rounded-xl focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 placeholder:text-white/20 text-sm outline-none shadow-inner" id="email" placeholder="you@example.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              </div>

              <div className="space-y-1.5 pb-2">
                <div className="flex justify-between items-center pl-1 pr-1">
                  <label className="block text-xs font-semibold uppercase tracking-widest text-white/50" htmlFor="password">Password</label>
                  <a href="#" className="text-[10px] text-green-500/80 hover:text-green-400 transition-colors uppercase tracking-wider font-semibold">Forgot?</a>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-[20px]">lock</span>
                  <input className="w-full bg-white/5 border border-white/10 text-white py-3.5 pl-12 pr-4 rounded-xl focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 placeholder:text-white/20 text-sm outline-none shadow-inner" id="password" placeholder="••••••••" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
              </div>

              <div className="pt-2 flex justify-center w-full relative z-20">
                <LiquidButton type="submit" className="w-[80%]" size="xl" disabled={isLoading}>
                  <span className="text-white font-bold tracking-wide">{isLoading ? 'Authenticating...' : "Let's Go"}</span>
                </LiquidButton>
              </div>
            </form>

            <div className="mt-10 text-center text-[13px] text-white/40">
                Don't have an account? 
                <Link to="/register" className="text-green-500 font-medium hover:text-green-400 ml-2 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-green-500/30">Sign up</Link>
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

export default Login;

