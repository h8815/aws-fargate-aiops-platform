import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios';
import { AuthContext } from '../context/AuthContext';
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import { WebGLShader } from '@/components/ui/web-gl-shader';

const Dashboard = () => {
  const { user, token, logout } = useContext(AuthContext);
  const [profileMessage, setProfileMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Extract expiry time from JWT
  const getExpiryTime = () => {
    if (!token) return 'Unknown';
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return new Date(payload.exp * 1000).toLocaleString();
    } catch {
      return 'Unknown';
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axiosInstance.get('/users/profile');
        setProfileMessage(response.data.message);
      } catch (err) {
        setError('Failed to fetch profile data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex bg-black selection:bg-green-500/30 relative overflow-hidden">
      <WebGLShader />
      {/* Sidebar Navigation */}
      <aside className="hidden md:flex flex-col h-screen w-64 border-r border-white/10 bg-[#0b0c10]/40 backdrop-blur-2xl sticky top-0 z-20 shadow-[4px_0_24px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col h-full p-6">
          <div className="mb-10">
            <h1 className="text-xl font-black text-white font-['Space_Grotesk'] tracking-tighter">CybrMoon</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-green-500 font-bold">Celestial Sentinel</p>
          </div>
          <nav className="flex-1 space-y-2">
            <a className="flex items-center gap-3 px-4 py-3 text-green-400 bg-green-500/10 rounded-lg border border-green-500/20 transition-all duration-300 group shadow-inner" href="#">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
              <span className="font-['Space_Grotesk'] font-semibold">Dashboard</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-white/50 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-white/5 transition-all duration-300" href="#">
              <span className="material-symbols-outlined">key</span>
              <span className="font-['Space_Grotesk']">Tokens</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-white/50 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-white/5 transition-all duration-300" href="#">
              <span className="material-symbols-outlined">security</span>
              <span className="font-['Space_Grotesk']">Audit Logs</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-white/50 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-white/5 transition-all duration-300" href="#">
              <span className="material-symbols-outlined">settings</span>
              <span className="font-['Space_Grotesk']">Settings</span>
            </a>
          </nav>
          <div className="mt-auto pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center overflow-hidden border border-green-500/30 shadow-inner">
                 <span className="material-symbols-outlined text-green-400">person</span>
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-medium text-white truncate">{user || 'you@example.com'}</p>
                <p className="text-xs text-white/50 truncate">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 z-10">
        {/* Top Navigation Bar */}
        <header className="w-full sticky top-0 z-50 bg-[#0b0c10]/40 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] px-8 py-4 flex justify-between items-center border-b border-white/10">
          <div className="md:hidden">
            <h1 className="text-2xl font-bold tracking-tighter text-white font-['Space_Grotesk']">CybrMoon</h1>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">search</span>
              <input className="bg-black/40 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 w-64 text-white transition-all placeholder:text-white/30 shadow-inner" placeholder="Global search..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-white/50 hover:text-white transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></span>
            </button>
            <LiquidButton onClick={handleLogout} className="w-fit" size="sm">
              <span className="text-white font-bold tracking-wide">Logout</span>
            </LiquidButton>
          </div>
        </header>

        {/* Dashboard Canvas */}
        <main className="p-8 max-w-7xl mx-auto w-full space-y-10 pb-24 md:pb-8">
          <section className="space-y-4">
            <h2 className="text-6xl md:text-7xl font-extrabold tracking-tighter font-headline text-white leading-none">Dashboard</h2>
            <p className="text-white/60 text-lg font-medium max-w-xl">Welcome back to your secure workspace. Monitor nodes, manage access, and control microservices identity traffic instantly.</p>
          </section>

          {error && <p className="text-red-500 font-medium bg-red-500/10 p-4 rounded-xl border border-red-500/20">{error}</p>}

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* User Profile Card */}
            <div className="bg-black/40 backdrop-blur-xl p-8 rounded-3xl relative overflow-hidden group border border-white/10 shadow-2xl transition-all hover:bg-black/60">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                <span className="material-symbols-outlined text-8xl text-green-500">account_circle</span>
              </div>
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                    <span className="material-symbols-outlined text-white text-3xl">person</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">User Profile</h3>
                </div>
                
                {isLoading ? (
                   <div className="animate-pulse flex space-x-4">
                     <div className="flex-1 space-y-4 py-1">
                       <div className="h-4 bg-white/10 rounded w-3/4"></div>
                       <div className="h-4 bg-white/10 rounded w-1/2"></div>
                     </div>
                   </div>
                ) : (
                  <div className="space-y-6">
                    <div className="space-y-1.5">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Email Address</p>
                      <p className="text-white font-medium truncate text-lg">{user || 'you@example.com'}</p>
                    </div>
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 shadow-inner">
                      <span className="material-symbols-outlined text-green-500 text-3xl">verified_user</span>
                      <div className="flex flex-col">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">System Status</p>
                        <p className="text-sm font-medium text-white/90 mt-0.5">{profileMessage || 'User profile active and synchronized'}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="pt-2">
                  <button className="text-sm text-white/80 hover:text-white font-semibold flex items-center gap-1.5 group/btn transition-colors border border-white/10 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10">
                    Manage Identity
                    <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Security Context Card */}
            <div className="bg-black/40 backdrop-blur-xl p-8 rounded-3xl relative overflow-hidden group border border-white/10 shadow-2xl transition-all hover:bg-black/60">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                <span className="material-symbols-outlined text-8xl text-green-500">security</span>
              </div>
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                    <span className="material-symbols-outlined text-green-400 text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>lock</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">Security Context</h3>
                </div>
                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Active Auth Token</p>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10 shadow-inner font-mono text-[11px] text-white/60 break-all leading-relaxed flex-shrink-0 relative">
                       {token ? `${token.substring(0, 110)}...` : 'None'}
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-black/40 p-3 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-green-500/80">schedule</span>
                      <div className="flex flex-col">
                        <p className="text-[9px] uppercase tracking-[0.1em] text-white/40 font-bold">Token Expiration</p>
                        <p className="text-xs text-white/80 font-medium">{getExpiryTime()}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1.5 bg-green-500/20 text-green-400 text-[10px] font-bold rounded-md uppercase tracking-wider relative overflow-hidden border border-green-500/30">
                       <span className="relative z-10">Active Session</span>
                    </span>
                  </div>
                </div>
                <div className="pt-2">
                  <button className="text-sm text-green-400 hover:text-green-300 transition-colors font-semibold flex items-center gap-1.5 group/btn border border-green-500/20 px-4 py-2 rounded-lg bg-green-500/10 hover:bg-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                    Security Protocols
                    <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">shield</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full h-48 rounded-3xl overflow-hidden relative border border-white/10 bg-black/40 backdrop-blur-md mt-6 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <div className="absolute top-0 right-0 p-8 w-1/2 h-full opacity-20">
               <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/40 via-transparent to-transparent blur-[60px]"></div>
            </div>
            <div className="absolute bottom-8 left-8 z-20">
              <div className="flex items-center gap-3 mb-2 bg-black/60 w-fit px-4 py-1.5 rounded-full border border-white/10">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
                </span>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-500">Global Node Status</p>
              </div>
              <p className="text-white/70 font-medium text-lg leading-relaxed max-w-xl">"Network telemetry optimal. Authentication nodes distributing traffic seamlessly."</p>
            </div>
          </div>
        </main>
      </div>

      {/* Bottom Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-[72px] bg-[#0b0c10]/80 backdrop-blur-2xl flex items-center justify-around px-4 z-50 border-t border-white/10 pb-safe">
        <button className="text-green-400 flex flex-col items-center gap-1.5">
          <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
          <span className="text-[9px] font-bold tracking-widest">DASH</span>
        </button>
        <button className="text-white/40 hover:text-white transition-colors flex flex-col items-center gap-1.5">
          <span className="material-symbols-outlined text-2xl">key</span>
          <span className="text-[9px] font-bold tracking-widest">TOKENS</span>
        </button>
        <button className="text-white/40 hover:text-white transition-colors flex flex-col items-center gap-1.5">
          <span className="material-symbols-outlined text-2xl">security</span>
          <span className="text-[9px] font-bold tracking-widest">AUDIT</span>
        </button>
        <button className="text-white/40 hover:text-white transition-colors flex flex-col items-center gap-1.5">
          <span className="material-symbols-outlined text-2xl">settings</span>
          <span className="text-[9px] font-bold tracking-widest">CONFIG</span>
        </button>
      </nav>
    </div>
  );
};

export default Dashboard;

