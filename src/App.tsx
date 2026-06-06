import { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Send, 
  TrendingUp, 
  Calculator,
  ShieldCheck,
  BrainCircuit,
  UserCheck,
  Globe2
} from 'lucide-react';

// Custom SVG Icons for consistency and reliability
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);



const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const SignalIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </svg>
);

const SlackIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="4" y1="9" x2="20" y2="9" />
    <line x1="4" y1="15" x2="20" y2="15" />
    <line x1="10" y1="3" x2="8" y2="21" />
    <line x1="16" y1="3" x2="14" y2="21" />
  </svg>
);

const IMessageIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

const GoogleChatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
    <path d="M2 10h20" />
  </svg>
);

const WeChatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" />
    <path d="M22 17a2 2 0 0 1-2 2h-4l-4 4v-4H8a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
  </svg>
);

const LineIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    <path d="M8 12h8" />
  </svg>
);

const QQIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2A10 10 0 0 0 2 12c0 4.4 2.9 8.2 6.8 9.5l1.6-4.5h3.2l1.6 4.5C19.1 20.2 22 16.4 22 12A10 10 0 0 0 12 2z" />
  </svg>
);



interface BigFunnelTrichterProps {
  selectedChannels: string[];
  setSelectedChannels: React.Dispatch<React.SetStateAction<string[]>>;
}

const BigFunnelTrichter = ({ selectedChannels, setSelectedChannels }: BigFunnelTrichterProps) => {
  const toggleChannel = (id: string) => {
    setSelectedChannels(prev => {
      if (prev.includes(id)) {
        return prev.filter(x => x !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const channels = [
    { id: 'wa', name: 'WhatsApp', icon: WhatsAppIcon, activeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.15)] opacity-100 scale-[1.03]', inactiveColor: 'text-neutral-500 border-white/5 bg-white/[0.02] opacity-40 hover:opacity-60', stroke: 'rgba(16,185,129,0.65)', startX: 26, animSpeed: '2.5s' },
    { id: 'fb', name: 'Facebook', icon: FacebookIcon, activeColor: 'text-blue-400 border-blue-500/30 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.15)] opacity-100 scale-[1.03]', inactiveColor: 'text-neutral-500 border-white/5 bg-white/[0.02] opacity-40 hover:opacity-60', stroke: 'rgba(59,130,246,0.65)', startX: 79, animSpeed: '3s' },
    { id: 'ig', name: 'Instagram', icon: InstagramIcon, activeColor: 'text-pink-400 border-pink-500/30 bg-pink-500/10 shadow-[0_0_15px_rgba(236,72,153,0.15)] opacity-100 scale-[1.03]', inactiveColor: 'text-neutral-500 border-white/5 bg-white/[0.02] opacity-40 hover:opacity-60', stroke: 'rgba(236,72,153,0.65)', startX: 132, animSpeed: '4s' },
    { id: 'tg', name: 'Telegram', icon: TelegramIcon, activeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.15)] opacity-100 scale-[1.03]', inactiveColor: 'text-neutral-500 border-white/5 bg-white/[0.02] opacity-40 hover:opacity-60', stroke: 'rgba(6,182,212,0.65)', startX: 185, animSpeed: '2.8s' },
    { id: 'im', name: 'iMessage', icon: IMessageIcon, activeColor: 'text-blue-500 border-blue-500/30 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.15)] opacity-100 scale-[1.03]', inactiveColor: 'text-neutral-500 border-white/5 bg-white/[0.02] opacity-40 hover:opacity-60', stroke: 'rgba(59,130,246,0.65)', startX: 238, animSpeed: '3.2s' },
    { id: 'si', name: 'Signal', icon: SignalIcon, activeColor: 'text-blue-300 border-blue-400/30 bg-blue-400/10 shadow-[0_0_15px_rgba(96,165,250,0.15)] opacity-100 scale-[1.03]', inactiveColor: 'text-neutral-500 border-white/5 bg-white/[0.02] opacity-40 hover:opacity-60', stroke: 'rgba(96,165,250,0.65)', startX: 291, animSpeed: '3.5s' },
    { id: 'tw', name: 'Twitter (X)', icon: TwitterIcon, activeColor: 'text-sky-400 border-sky-500/30 bg-sky-500/10 shadow-[0_0_15px_rgba(56,189,248,0.15)] opacity-100 scale-[1.03]', inactiveColor: 'text-neutral-500 border-white/5 bg-white/[0.02] opacity-40 hover:opacity-60', stroke: 'rgba(56,189,248,0.65)', startX: 344, animSpeed: '3.5s' },
    { id: 'sl', name: 'Slack', icon: SlackIcon, activeColor: 'text-fuchsia-400 border-fuchsia-500/30 bg-fuchsia-500/10 shadow-[0_0_15px_rgba(232,121,249,0.15)] opacity-100 scale-[1.03]', inactiveColor: 'text-neutral-500 border-white/5 bg-white/[0.02] opacity-40 hover:opacity-60', stroke: 'rgba(232,121,249,0.65)', startX: 397, animSpeed: '3s' },
    { id: 'gc', name: 'Google Chat', icon: GoogleChatIcon, activeColor: 'text-green-500 border-green-500/30 bg-green-500/10 shadow-[0_0_15px_rgba(34,197,94,0.15)] opacity-100 scale-[1.03]', inactiveColor: 'text-neutral-500 border-white/5 bg-white/[0.02] opacity-40 hover:opacity-60', stroke: 'rgba(34,197,94,0.65)', startX: 450, animSpeed: '3.1s' },
    { id: 'li', name: 'LinkedIn', icon: LinkedInIcon, activeColor: 'text-sky-500 border-sky-500/30 bg-sky-500/10 shadow-[0_0_15px_rgba(14,165,233,0.15)] opacity-100 scale-[1.03]', inactiveColor: 'text-neutral-500 border-white/5 bg-white/[0.02] opacity-40 hover:opacity-60', stroke: 'rgba(14,165,233,0.65)', startX: 503, animSpeed: '3.5s' },
    { id: 'dc', name: 'Discord', icon: DiscordIcon, activeColor: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10 shadow-[0_0_15px_rgba(99,102,241,0.15)] opacity-100 scale-[1.03]', inactiveColor: 'text-neutral-500 border-white/5 bg-white/[0.02] opacity-40 hover:opacity-60', stroke: 'rgba(99,102,241,0.65)', startX: 556, animSpeed: '2.7s' },
    { id: 'wc', name: 'WeChat', icon: WeChatIcon, activeColor: 'text-green-400 border-green-500/30 bg-green-500/10 shadow-[0_0_15px_rgba(74,222,128,0.15)] opacity-100 scale-[1.03]', inactiveColor: 'text-neutral-500 border-white/5 bg-white/[0.02] opacity-40 hover:opacity-60', stroke: 'rgba(74,222,128,0.65)', startX: 609, animSpeed: '3.3s' },
    { id: 'ln', name: 'Line', icon: LineIcon, activeColor: 'text-emerald-500 border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.15)] opacity-100 scale-[1.03]', inactiveColor: 'text-neutral-500 border-white/5 bg-white/[0.02] opacity-40 hover:opacity-60', stroke: 'rgba(16,185,129,0.65)', startX: 662, animSpeed: '2.9s' },
    { id: 'qq', name: 'Tencent QQ', icon: QQIcon, activeColor: 'text-orange-400 border-orange-500/30 bg-orange-500/10 shadow-[0_0_15px_rgba(251,146,60,0.15)] opacity-100 scale-[1.03]', inactiveColor: 'text-neutral-500 border-white/5 bg-white/[0.02] opacity-40 hover:opacity-60', stroke: 'rgba(251,146,60,0.65)', startX: 715, animSpeed: '3.6s' },
    { id: 'tt', name: 'TikTok', icon: TikTokIcon, activeColor: 'text-rose-400 border-rose-500/30 bg-rose-500/10 shadow-[0_0_15px_rgba(244,63,94,0.15)] opacity-100 scale-[1.03]', inactiveColor: 'text-neutral-500 border-white/5 bg-white/[0.02] opacity-40 hover:opacity-60', stroke: 'rgba(244,63,94,0.65)', startX: 768, animSpeed: '2.5s' }
  ];

  const isTelegramActive = selectedChannels.includes('tg');

  return (
    <div className="w-full max-w-4xl mx-auto my-12 glass-panel rounded-3xl border border-white/5 p-8 relative overflow-hidden bg-neutral-950/40 animate-fade-in">
      <div className="absolute top-0 right-0 p-4 text-[10px] uppercase font-bold tracking-widest text-neutral-500">Funnel Architektur</div>
      
      <div className="flex flex-col items-center space-y-8 relative">
        
        {/* Tier 1: Social Media Sources */}
        <div className="w-full">
          <div className="text-center text-[10px] text-neutral-505 uppercase tracking-widest font-semibold mb-4">1. Traffic-Quellen (Social Media) - Zum Aktivieren anklicken</div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {channels.map((sm) => {
              const IconComponent = sm.icon;
              const isSelected = selectedChannels.includes(sm.id);
              return (
                <button
                  key={sm.id}
                  onClick={() => toggleChannel(sm.id)}
                  className={`flex flex-col items-center justify-center border px-3 py-2 rounded-xl gap-1 transition-all duration-300 min-w-[95px] cursor-pointer ${
                    isSelected ? sm.activeColor : sm.inactiveColor
                  }`}
                >
                  <IconComponent className="h-4.5 w-4.5" />
                  <span className={`font-syne font-semibold text-[9px] ${isSelected ? 'text-white' : 'text-neutral-450'}`}>{sm.name}</span>
                  <span className={`text-[7px] font-bold tracking-wider uppercase ${isSelected ? 'text-emerald-400 font-extrabold' : 'text-neutral-550'}`}>
                    {isSelected ? 'Aktiv ●' : '+300 € Setup'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Converging SVG Lines */}
        <div className="w-full h-24 relative overflow-hidden hidden sm:block">
          <svg className="w-full h-full" viewBox="0 0 800 96" fill="none">
            {channels.map((ch) => {
              const isSelected = selectedChannels.includes(ch.id);
              const isFlowing = isSelected && isTelegramActive;
              const strokeColor = isFlowing ? ch.stroke : 'rgba(255, 255, 255, 0.05)';
              const strokeWidth = isFlowing ? '2.5' : '1';
              const dashArray = isFlowing ? '5 5' : '0';
              const animationClass = isFlowing ? `animate-[dash_${ch.animSpeed}_linear_infinite]` : '';
              
              return (
                <path 
                  key={ch.id}
                  d={`M ${ch.startX},0 C ${ch.startX},48 400,48 400,96`} 
                  stroke={strokeColor} 
                  strokeWidth={strokeWidth} 
                  strokeDasharray={dashArray} 
                  className={animationClass} 
                />
              );
            })}
          </svg>
        </div>

        {/* Small connector for mobile instead of svg */}
        <div className={`block sm:hidden h-8 w-0.5 animate-pulse ${
          selectedChannels.filter(c => c !== 'tg').length > 0 && isTelegramActive
            ? 'bg-gradient-to-b from-pink-500 to-cyan-500'
            : 'bg-neutral-800'
        }`} />

        {/* Tier 2: Central Telegram Hub */}
        <div 
          onClick={() => toggleChannel('tg')}
          className={`relative w-full max-w-lg border rounded-2xl p-5 flex items-center justify-between transition-all duration-300 group cursor-pointer ${
            isTelegramActive
              ? 'bg-gradient-to-r from-cyan-500/10 via-cyan-500/20 to-cyan-500/10 border-cyan-500/40 opacity-100 scale-[1.01] shadow-[0_0_30px_rgba(6,182,212,0.15)]'
              : 'bg-white/[0.01] border-white/5 opacity-40 hover:opacity-60'
          }`}
        >
          {isTelegramActive && (
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-cyan-500 rounded-l-2xl shadow-[0_0_10px_#06b6d4]" />
          )}
          <div className="flex items-center gap-4 pl-2 text-left">
            <div className={`h-10 w-10 rounded-xl flex items-center justify-center border transition-colors ${
              isTelegramActive ? 'bg-cyan-500/10 border-cyan-500/35 text-cyan-400' : 'bg-white/5 border-white/5 text-neutral-500'
            }`}>
              <TelegramIcon className="h-5 w-5" />
            </div>
            <div>
              <div className={`font-syne font-semibold text-base flex items-center gap-1.5 ${isTelegramActive ? 'text-white' : 'text-neutral-450'}`}>
                2. Telegram
                {isTelegramActive && (
                  <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_6px_#10b981]" />
                )}
              </div>
              <div className="font-manrope text-xs text-neutral-400">
                Link für Onlyfans
              </div>
            </div>
          </div>
          <div className="text-right pr-2 flex flex-col items-end">
            <span className={`font-syne font-bold text-base transition-colors ${isTelegramActive ? 'text-cyan-400' : 'text-neutral-500'}`}>
              200 € Setup
            </span>
            <div className="font-manrope text-[9px] text-neutral-550 font-semibold">
              {isTelegramActive ? 'Aktiviert' : 'Inaktiv (Klicken zum Aktivieren)'}
            </div>
          </div>
        </div>

        {/* Lower Connector SVG */}
        <div className="w-full h-16 relative overflow-hidden hidden sm:block">
          <svg className="w-full h-full" viewBox="0 0 800 64" fill="none">
            <path 
              d="M 400,0 L 400,64" 
              stroke={isTelegramActive ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.05)'} 
              strokeWidth="2" 
              strokeDasharray={isTelegramActive ? '5 5' : '0'} 
              className={isTelegramActive ? 'animate-[dash_2s_linear_infinite]' : ''} 
            />
          </svg>
        </div>

        {/* Small connector for mobile */}
        <div className={`block sm:hidden h-8 w-0.5 animate-pulse ${
          isTelegramActive ? 'bg-gradient-to-b from-cyan-500 to-white' : 'bg-neutral-850'
        }`} />

        {/* Tier 3: Final Conversion Drop */}
        <div className={`relative w-[90%] max-w-md bg-gradient-to-r border rounded-2xl p-5 flex items-center transition-all duration-300 group ${
          isTelegramActive
            ? 'from-emerald-500/10 via-emerald-500/20 to-emerald-500/10 border-emerald-500/40 opacity-100 scale-[1.01] shadow-[0_0_30px_rgba(16,185,129,0.15)]'
            : 'from-neutral-900/5 via-neutral-900/10 to-neutral-900/5 border-white/5 opacity-30'
        }`}>
          {isTelegramActive && (
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500 rounded-l-2xl shadow-[0_0_10px_#10b981]" />
          )}
          <div className="flex items-center gap-4 pl-2 text-left w-full">
            <div className={`h-10 w-10 rounded-xl flex items-center justify-center border transition-colors ${
              isTelegramActive ? 'bg-emerald-500/10 border-emerald-500/35 text-emerald-400' : 'bg-white/5 border-white/5 text-neutral-500'
            }`}>
              <Check className="h-5 w-5" />
            </div>
            <div>
              <div className={`font-syne font-semibold text-base flex items-center gap-1.5 ${isTelegramActive ? 'text-white' : 'text-neutral-450'}`}>
                3. OnlyFans
                {isTelegramActive && (
                  <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_6px_#10b981]" />
                )}
              </div>
              <div className="font-manrope text-xs text-neutral-400">
                Abschluss
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default function App() {
  // Navigation active states
  const [activeSection, setActiveSection] = useState('konzept');

  // ROI / Calculator States
  const [monthlyDMs, setMonthlyDMs] = useState<number | string>(300);
  const [selectedChannels, setSelectedChannels] = useState<string[]>(['tg', 'ig']);
  const [voiceCloningModel, setVoiceCloningModel] = useState<'none' | 'simple' | 'professional'>('none');
  const [messagesPerCustomer, setMessagesPerCustomer] = useState(5);
  const [voiceMessagesPerLead, setVoiceMessagesPerLead] = useState(1);

  // Calculations for Pricing & ROI Calculator
  const getCalculatedCosts = () => {
    const channelsCount = selectedChannels.length;

    let rawSetupCost = 0;
    selectedChannels.forEach(ch => {
      if (ch === 'tg') {
        rawSetupCost += 200;
      } else {
        rawSetupCost += 300;
      }
    });

    const discountPercentage = 0;
    const setupCost = rawSetupCost;

    let cloningCost = 0;
    if (voiceCloningModel === 'simple') cloningCost = 100;
    else if (voiceCloningModel === 'professional') cloningCost = 500;

    const initialInvestment = setupCost + cloningCost;

    // Monatliche Kunden/Leads
    const monthlyLeads = typeof monthlyDMs === 'number' ? monthlyDMs : 0;
    
    // Gesamtnachrichten = Kunden * Nachrichten pro Kunde
    const totalMessages = monthlyLeads * messagesPerCustomer;
    const messageCost = totalMessages * 0.05;
    
    // Voice-Messages pro Kunde (über Slider gesteuert)

    let voiceCost = 0;
    let voiceTotalMessages = 0;
    let voiceMinutesTotal = 0;
    if (voiceCloningModel !== 'none') {
      voiceTotalMessages = monthlyLeads * voiceMessagesPerLead;
      voiceCost = voiceTotalMessages * 0.20;  // 0,20 € pro Voice-Nachricht
      voiceMinutesTotal = voiceTotalMessages * (10 / 60);  // 10 Sekunden pro Voice = 1/6 Minute
    }

    const monthlyTotal = messageCost + voiceCost;

    // Asiat-Vergleich benchmark: 5 € / Std * 720 Std = 3.600 €
    const asianChatterCost = 3600;
    const savingsVsAsian = Math.max(0, asianChatterCost - monthlyTotal);

    // Deutscher Mitarbeiter benchmark: 24/7 Schicht = 6.000 €
    const germanChatterCost = 6000;
    const savingsVsGerman = Math.max(0, germanChatterCost - monthlyTotal);

    return {
      setupCost,
      rawSetupCost,
      discountPercentage,
      cloningCost,
      initialInvestment,
      totalMessages,
      messageCost,
      voiceCost,
      voiceMinutes: voiceMinutesTotal,
      voiceTotalMessages,
      monthlyTotal,
      monthlyLeads,
      asianChatterCost,
      savingsVsAsian,
      germanChatterCost,
      savingsVsGerman,
      channelsCount
    };
  };

  const costs = getCalculatedCosts();

  // Scroll function
  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <div className="min-h-screen bg-transparent selection:bg-white selection:text-black">
      
      {/* Background decoration elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[80vh] right-1/4 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[180vh] left-1/3 w-96 h-96 bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/5 py-2.5 px-4 md:px-8 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-3">
          <span className="font-syne font-semibold text-lg tracking-tight text-gradient">Multi-Channel Funnel</span>
        </div>
        
        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollTo('konzept')} className={`font-manrope text-xs font-medium transition-colors ${activeSection === 'konzept' ? 'text-white' : 'text-neutral-400 hover:text-white'}`}>Konzept</button>
          <button onClick={() => scrollTo('ablauf')} className={`font-manrope text-xs font-medium transition-colors ${activeSection === 'ablauf' ? 'text-white' : 'text-neutral-400 hover:text-white'}`}>Funnel-Ablauf</button>
          <button onClick={() => scrollTo('kalkulator')} className={`font-manrope text-xs font-medium transition-colors ${activeSection === 'kalkulator' ? 'text-white' : 'text-neutral-400 hover:text-white'}`}>Kalkulator</button>
        </nav>

        {/* Status indicator and CTA */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => scrollTo('kalkulator')} 
            className="glow-btn bg-white hover:bg-neutral-200 text-black text-xs font-semibold font-manrope py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-[1.02]"
          >
            Preise berechnen
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-36">

        {/* KONZEPT SECTION */}
        <section id="konzept" className="scroll-mt-24 pt-8 md:pt-16 space-y-16">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <h1 className="font-syne font-semibold tracking-tight leading-[1.05] animate-fade-in-up flex flex-col gap-2">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient">
                Vollautomatisierter KI-Chat
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl text-white/90">
                für Social Media.
              </span>
            </h1>
            
            <p className="font-manrope text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto animate-fade-in-up mt-6" style={{ animationDelay: '0.2s' }}>
              Verwandle Social Media Follower rund um die Uhr zu zahlenden Abonnenten mit Weiterleitung über Social Media.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button 
                onClick={() => scrollTo('kalkulator')} 
                className="glow-btn bg-white hover:bg-neutral-200 text-black text-sm font-semibold font-manrope py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer animate-pulse-subtle"
              >
                Kalkulator starten
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={() => scrollTo('ablauf')} 
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 text-sm font-semibold font-manrope py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Ablauf ansehen
              </button>
            </div>
          </div>

          {/* 3 Handys Side-by-Side mit Flow-Visualisierung */}
          <div className="relative max-w-6xl mx-auto pt-4 pb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            
            <div className="flex justify-center mb-10 relative z-20">
              <div className="bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 flex items-center gap-2 text-xs md:text-sm font-manrope text-neutral-400 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span><span className="text-white font-semibold">Dynamische Workflows:</span> Verbinde jeden Messenger beliebig (z.B. Instagram ↔ WhatsApp).</span>
              </div>
            </div>
            
            {/* Desktop Background Connection Flow (SVG Line) */}
            <div className="hidden md:block absolute top-1/2 left-[12%] right-[12%] h-full -translate-y-1/2 pointer-events-none z-0">
               <svg className="w-full h-full absolute top-1/2 -translate-y-1/2 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,50 L1000,50" stroke="url(#flowGrad)" strokeWidth="6" opacity="0.15" filter="blur(6px)" />
                  <path d="M0,50 L1000,50" stroke="url(#flowGrad)" strokeWidth="2" opacity="0.4" />
                  <path d="M0,50 L1000,50" stroke="url(#flowGrad)" strokeWidth="2.5" strokeDasharray="10 10" strokeLinecap="round" opacity="0.8" style={{ animation: 'dash 1.5s linear infinite' }} />
                  <defs>
                     <linearGradient id="flowGrad" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="50%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="#10b981" />
                     </linearGradient>
                  </defs>
               </svg>
               
               <div className="absolute top-1/2 left-[33%] -translate-x-1/2 -translate-y-1/2 bg-neutral-950 border border-pink-500/30 rounded-full p-2 flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.4)] text-pink-400 z-10">
                  <ArrowRight className="h-4 w-4" />
               </div>

               <div className="absolute top-1/2 left-[66%] -translate-x-1/2 -translate-y-1/2 bg-neutral-950 border border-sky-500/30 rounded-full p-2 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.4)] text-sky-400 z-10">
                  <ArrowRight className="h-4 w-4" />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative z-10">
            
            {/* Handy 1: Instagram DM */}
            <div className="glass-panel rounded-[32px] border border-white/10 p-4 relative bg-neutral-950/40 shadow-2xl h-[480px] flex flex-col justify-between overflow-hidden group hover:border-white/20 transition-all duration-300">
              {/* Notch / Phone Top */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-850 ml-auto mr-4" />
              </div>
              
              {/* Phone Header */}
              <div className="pt-4 pb-2 border-b border-white/5 flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 p-[1.5px] flex items-center justify-center">
                  <div className="h-full w-full rounded-full bg-neutral-900 flex items-center justify-center text-[10px] text-pink-400 font-bold">
                    <InstagramIcon className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div>
                  <div className="font-syne font-semibold text-xs text-white flex items-center gap-1">
                    Julia Summer <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full" />
                  </div>
                  <div className="font-manrope text-[9px] text-neutral-505 flex items-center gap-1">Instagram Direct Message</div>
                </div>
              </div>

              {/* Message Feed */}
              <div className="flex-1 py-4 overflow-y-auto space-y-3.5 text-xs text-left font-manrope">
                <div className="text-center text-[9px] text-neutral-600">Heute</div>
                
                {/* Lead Message */}
                <div className="flex flex-col items-start space-y-1 max-w-[80%]">
                  <span className="text-[8px] text-neutral-500 pl-2">Lead</span>
                  <div className="bg-neutral-800/80 text-neutral-200 rounded-2xl rounded-tl-none px-3.5 py-2">
                    Kann ich mehr von dir sehen?
                  </div>
                  <span className="text-[8px] text-neutral-600 pl-2">14:02</span>
                </div>

                {/* Bot Message */}
                <div className="flex flex-col items-end space-y-1 max-w-[80%] ml-auto">
                  <span className="text-[8px] text-pink-400 pr-2">KI-Agent (IG-Trigger)</span>
                  <div className="bg-gradient-to-r from-pink-600/90 to-purple-600/90 text-white rounded-2xl rounded-tr-none px-3.5 py-2">
                    Ja, sicher, gerne. Folg mir auf Telegram: <span className="underline cursor-pointer">t.me/julia_vip_bot</span> 🤫
                  </div>
                  <span className="text-[8px] text-neutral-600 pr-2">14:02</span>
                </div>
              </div>

              {/* Phone Footer Input */}
              <div className="border-t border-white/5 pt-2 flex items-center justify-between text-neutral-550 text-[10px] font-manrope">
                <div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-full px-3 py-1.5 w-full">
                  <span className="flex-1 text-left text-neutral-400">Nachricht schreiben...</span>
                  <Send className="h-3 w-3 text-neutral-400" />
                </div>
              </div>
            </div>

            {/* Handy 2: Telegram Chat */}
            <div className="glass-panel rounded-[32px] border border-white/10 p-4 relative bg-neutral-950/40 shadow-2xl h-[480px] flex flex-col justify-between overflow-hidden group hover:border-white/20 transition-all duration-300">
              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-850 ml-auto mr-4" />
              </div>
              
              {/* Phone Header */}
              <div className="pt-4 pb-2 border-b border-white/5 flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold border border-sky-500/30">
                  <TelegramIcon className="h-3.5 w-3.5" />
                </div>
                <div>
                  <div className="font-syne font-semibold text-xs text-white flex items-center gap-1">
                    Julia Exclusive VIP 🌟 <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  </div>
                  <div className="font-manrope text-[9px] text-neutral-500">Telegram Qualifizierung</div>
                </div>
              </div>

              {/* Message Feed (Telegram Conversation Flow) */}
              <div className="flex-1 py-4 overflow-y-auto space-y-2.5 text-[10px] text-left font-manrope">
                <div className="text-center text-[8px] text-neutral-600">Telegram Session gestartet</div>
                
                {/* Msg 1: Lead */}
                <div className="flex flex-col items-start space-y-0.5 max-w-[85%]">
                  <span className="text-[8px] text-neutral-500 pl-2">Lead</span>
                  <div className="bg-neutral-800 text-neutral-200 rounded-xl rounded-tl-none px-2.5 py-1">
                    Ja, hab dich hier gefunden. Kann ich denn hier mehr von dir sehen?
                  </div>
                </div>

                {/* Msg 2: Bot */}
                <div className="flex flex-col items-end space-y-0.5 max-w-[85%] ml-auto">
                  <span className="text-[8px] text-sky-400 pr-2">KI-Agent (Telegram-Hub)</span>
                  <div className="bg-gradient-to-r from-cyan-600/90 to-sky-600/90 text-white rounded-xl rounded-tr-none px-2.5 py-1">
                    Hey! Schön, dass du den Weg hierher gefunden hast. Ja, hier auf Telegram bin ich viel aktiver und kann dir auch Sprachnachrichten schicken. 😉
                  </div>
                </div>

                {/* Msg 3: Lead */}
                <div className="flex flex-col items-start space-y-0.5 max-w-[85%]">
                  <span className="text-[8px] text-neutral-500 pl-2">Lead</span>
                  <div className="bg-neutral-800 text-neutral-200 rounded-xl rounded-tl-none px-2.5 py-1">
                    Voll gut! Postest du hier auch exklusivere Fotos/Videos?
                  </div>
                </div>

                {/* Msg 4: Bot */}
                <div className="flex flex-col items-end space-y-0.5 max-w-[85%] ml-auto">
                  <span className="text-[8px] text-sky-400 pr-2">KI-Agent (Telegram-Hub)</span>
                  <div className="bg-gradient-to-r from-cyan-600/90 to-sky-600/90 text-white rounded-xl rounded-tr-none px-2.5 py-1">
                    Ja, auf jeden Fall! Ich liebe es, privateren Content zu teilen. Aber sag mal: Wie alt bist du eigentlich und woher kommst du? 😇
                  </div>
                </div>

                {/* Msg 5: Lead */}
                <div className="flex flex-col items-start space-y-0.5 max-w-[85%]">
                  <span className="text-[8px] text-neutral-500 pl-2">Lead</span>
                  <div className="bg-neutral-800 text-neutral-200 rounded-xl rounded-tl-none px-2.5 py-1">
                    Bin 24 und komme aus München! Und du?
                  </div>
                </div>

                {/* Msg 6: Bot */}
                <div className="flex flex-col items-end space-y-0.5 max-w-[85%] ml-auto">
                  <span className="text-[8px] text-sky-400 pr-2">KI-Agent (Telegram-Hub)</span>
                  <div className="bg-gradient-to-r from-cyan-600/90 to-sky-600/90 text-white rounded-xl rounded-tr-none px-2.5 py-1">
                    Ich bin auch oft in der Gegend! Hier ist mein exklusiver Einladungslink für dich: onlyfans.com/julia_vip 💋
                  </div>
                </div>
              </div>

              {/* Phone Footer Input */}
              <div className="border-t border-white/5 pt-2 flex items-center justify-between text-neutral-550 text-[10px] font-manrope">
                <div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-full px-3 py-1.5 w-full">
                  <span className="flex-1 text-left text-neutral-400">Schreibe eine Nachricht...</span>
                  <Send className="h-3 w-3 text-neutral-400" />
                </div>
              </div>
            </div>

            {/* Handy 3: OnlyFans Conversion */}
            <div className="glass-panel rounded-[32px] border border-white/10 p-4 relative bg-neutral-950/40 shadow-2xl h-[480px] flex flex-col justify-between overflow-hidden group hover:border-white/20 transition-all duration-300">
              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-850 ml-auto mr-4" />
              </div>
              
              {/* Phone Header */}
              <div className="pt-4 pb-2 border-b border-white/5 flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold border border-sky-500/30">
                  OF
                </div>
                <div>
                  <div className="font-syne font-semibold text-xs text-white flex items-center gap-1">
                    Julia Summer <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  </div>
                  <div className="font-manrope text-[9px] text-neutral-500">OnlyFans Chat</div>
                </div>
              </div>

              {/* Message Feed / OnlyFans Chat */}
              <div className="flex-1 py-4 overflow-y-auto space-y-3.5 text-xs text-left font-manrope">
                {/* Lead Message */}
                <div className="flex flex-col items-start space-y-1 max-w-[80%]">
                  <span className="text-[8px] text-neutral-500 pl-2">Lead</span>
                  <div className="bg-neutral-800/80 text-neutral-200 rounded-2xl rounded-tl-none px-3.5 py-2">
                    Hallo, ich habe gerade von Telegram gefolgt
                  </div>
                  <span className="text-[8px] text-neutral-600 pl-2">14:04</span>
                </div>

                {/* Bot Message */}
                <div className="flex flex-col items-end space-y-1 max-w-[80%] ml-auto">
                  <span className="text-[8px] text-sky-400 pr-2">KI-Agent (Julia)</span>
                  <div className="bg-gradient-to-r from-sky-600/90 to-blue-600/90 text-white rounded-2xl rounded-tr-none px-3.5 py-2">
                    Ja, ich kann mich voll an dich erinnern, danke, dass du mir jetzt hier folgst. Jetzt kann ich dir auch mal was Cooles zeigen oder so. 😘
                  </div>
                  <span className="text-[8px] text-neutral-600 pr-2">14:04</span>
                </div>

                {/* Conversion Event */}
                <div className="mx-auto max-w-[95%] bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-2.5 text-center text-[10px] text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
                  <Check className="h-3.5 w-3.5" />
                  <span>Lead konvertiert (+25,00 € Subscription)</span>
                </div>
              </div>

              {/* Phone Footer Input */}
              <div className="border-t border-white/5 pt-2 flex items-center justify-between text-neutral-550 text-[10px] font-manrope">
                <div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-full px-3 py-1.5 w-full">
                  <span className="flex-1 text-left text-neutral-400">Nachricht schreiben...</span>
                  <Send className="h-3 w-3 text-neutral-400" />
                </div>
              </div>
            </div>

            </div>
          </div>

          {/* Platform Matrix */}
          <div className="space-y-6 pt-8 border-t border-white/5 animate-fade-in-up text-left" style={{ animationDelay: '0.4s' }}>
            <div>
              <h3 className="font-syne font-semibold text-lg text-white">Unterstützte Plattformen & Integrationen</h3>
              <p className="font-manrope text-xs text-neutral-400 mt-2 max-w-4xl">
                Vollverwaltete Multi-Channel-Automatisierung auf allen Kanälen. Alle Nachrichten laufen nahtlos über unsere zentrale, hochgradig optimierte Schnittstelle zusammen. Klicken Sie auf eine Plattform, um das Setup im Kalkulator zu aktivieren.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { id: 'wa', name: 'WhatsApp', icon: WhatsAppIcon, activeColor: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)]', inactiveColor: 'border-white/5 bg-white/[0.02] text-neutral-500 opacity-60 hover:opacity-80 hover:border-white/10', desc: 'Vollautomatisierte DM-Antworten, Lead-Qualifizierung und Conversions.' },
                { id: 'fb', name: 'Facebook', icon: FacebookIcon, activeColor: 'border-blue-500/40 bg-blue-500/10 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.15)]', inactiveColor: 'border-white/5 bg-white/[0.02] text-neutral-500 opacity-60 hover:opacity-80 hover:border-white/10', desc: 'Vollautomatisierte DM-Antworten, Lead-Qualifizierung und Conversions.' },
                { id: 'ig', name: 'Instagram', icon: InstagramIcon, activeColor: 'border-pink-500/40 bg-pink-500/10 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.15)]', inactiveColor: 'border-white/5 bg-white/[0.02] text-neutral-500 opacity-60 hover:opacity-80 hover:border-white/10', desc: 'Vollautomatisierte DM-Antworten, Lead-Qualifizierung und Conversions.' },
                { id: 'tg', name: 'Telegram', icon: TelegramIcon, activeColor: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)]', inactiveColor: 'border-white/5 bg-white/[0.02] text-neutral-500 opacity-60 hover:opacity-80 hover:border-white/10', desc: 'Vollautomatisierte DM-Antworten, Lead-Qualifizierung und Conversions.' },
                { id: 'im', name: 'iMessage', icon: IMessageIcon, activeColor: 'border-blue-500/40 bg-blue-500/10 text-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.15)]', inactiveColor: 'border-white/5 bg-white/[0.02] text-neutral-500 opacity-60 hover:opacity-80 hover:border-white/10', desc: 'Vollautomatisierte DM-Antworten, Lead-Qualifizierung und Conversions.' },
                { id: 'si', name: 'Signal', icon: SignalIcon, activeColor: 'border-blue-400/40 bg-blue-400/10 text-blue-300 shadow-[0_0_20px_rgba(96,165,250,0.15)]', inactiveColor: 'border-white/5 bg-white/[0.02] text-neutral-500 opacity-60 hover:opacity-80 hover:border-white/10', desc: 'Vollautomatisierte DM-Antworten, Lead-Qualifizierung und Conversions.' },
                { id: 'tw', name: 'Twitter (X)', icon: TwitterIcon, activeColor: 'border-sky-500/40 bg-sky-500/10 text-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.15)]', inactiveColor: 'border-white/5 bg-white/[0.02] text-neutral-500 opacity-60 hover:opacity-80 hover:border-white/10', desc: 'Vollautomatisierte DM-Antworten, Lead-Qualifizierung und Conversions.' },
                { id: 'sl', name: 'Slack', icon: SlackIcon, activeColor: 'border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-400 shadow-[0_0_20px_rgba(232,121,249,0.15)]', inactiveColor: 'border-white/5 bg-white/[0.02] text-neutral-500 opacity-60 hover:opacity-80 hover:border-white/10', desc: 'Vollautomatisierte DM-Antworten, Lead-Qualifizierung und Conversions.' },
                { id: 'gc', name: 'Google Chat', icon: GoogleChatIcon, activeColor: 'border-green-500/40 bg-green-500/10 text-green-500 shadow-[0_0_20px_rgba(34,197,94,0.15)]', inactiveColor: 'border-white/5 bg-white/[0.02] text-neutral-500 opacity-60 hover:opacity-80 hover:border-white/10', desc: 'Nahtlose Integration in den Google Workspace von Firmenkunden.' },
                { id: 'li', name: 'LinkedIn', icon: LinkedInIcon, activeColor: 'border-sky-500/40 bg-sky-500/10 text-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.15)]', inactiveColor: 'border-white/5 bg-white/[0.02] text-neutral-500 opacity-60 hover:opacity-80 hover:border-white/10', desc: 'Vollautomatisierte DM-Antworten, Lead-Qualifizierung und Conversions.' },
                { id: 'dc', name: 'Discord', icon: DiscordIcon, activeColor: 'border-indigo-500/40 bg-indigo-500/10 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.15)]', inactiveColor: 'border-white/5 bg-white/[0.02] text-neutral-500 opacity-60 hover:opacity-80 hover:border-white/10', desc: 'Vollautomatisierte DM-Antworten, Lead-Qualifizierung und Conversions.' },
                { id: 'wc', name: 'WeChat', icon: WeChatIcon, activeColor: 'border-green-500/40 bg-green-500/10 text-green-400 shadow-[0_0_20px_rgba(74,222,128,0.15)]', inactiveColor: 'border-white/5 bg-white/[0.02] text-neutral-500 opacity-60 hover:opacity-80 hover:border-white/10', desc: 'Vollautomatisierte DM-Antworten, Lead-Qualifizierung und Conversions.' },
                { id: 'ln', name: 'Line', icon: LineIcon, activeColor: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.15)]', inactiveColor: 'border-white/5 bg-white/[0.02] text-neutral-500 opacity-60 hover:opacity-80 hover:border-white/10', desc: 'Vollautomatisierte DM-Antworten, Lead-Qualifizierung und Conversions.' },
                { id: 'qq', name: 'Tencent QQ', icon: QQIcon, activeColor: 'border-orange-500/40 bg-orange-500/10 text-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.15)]', inactiveColor: 'border-white/5 bg-white/[0.02] text-neutral-500 opacity-60 hover:opacity-80 hover:border-white/10', desc: 'Vollautomatisierte DM-Antworten, Lead-Qualifizierung und Conversions.' },
                { id: 'tt', name: 'TikTok', icon: TikTokIcon, activeColor: 'border-rose-500/40 bg-rose-500/10 text-rose-450 shadow-[0_0_20px_rgba(244,63,94,0.15)]', inactiveColor: 'border-white/5 bg-white/[0.02] text-neutral-500 opacity-60 hover:opacity-80 hover:border-white/10', desc: 'Vollautomatisierte DM-Antworten, Lead-Qualifizierung und Conversions.' }
              ].map((platform, idx) => {
                const IconComponent = platform.icon;
                const isSelected = selectedChannels.includes(platform.id);
                const setupPrice = platform.id === 'tg' ? '200 € Setup' : '300 € Setup';
                return (
                  <div 
                    key={idx} 
                    onClick={() => {
                      setSelectedChannels(prev => {
                        if (prev.includes(platform.id)) {
                          return prev.filter(x => x !== platform.id);
                        } else {
                          return [...prev, platform.id];
                        }
                      });
                    }}
                    className={`glass-panel border rounded-2xl p-4 space-y-2.5 hover:scale-[1.02] transition-all duration-300 cursor-pointer ${
                      isSelected ? platform.activeColor : platform.inactiveColor
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-5 w-5" />
                        <span className={`font-syne font-semibold text-sm ${isSelected ? 'text-white' : 'text-neutral-450'}`}>{platform.name}</span>
                      </div>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-white/10 text-white' : 'bg-white/5 text-neutral-500'
                      }`}>
                        {setupPrice}
                      </span>
                    </div>
                    <p className="font-manrope text-[10.5px] text-neutral-400 text-left leading-normal">
                      {platform.desc}
                    </p>
                    <div className="flex items-center justify-between pt-1 border-t border-white/5">
                      <span className={`text-[8px] font-bold uppercase tracking-wider ${
                        isSelected ? 'text-emerald-400' : 'text-neutral-550'
                      }`}>
                        {isSelected ? '● Aktiviert' : '○ Inaktiv'}
                      </span>
                      {isSelected && (
                        <Check className="h-3 w-3 text-emerald-400" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>



        {/* FUNNEL WORKFLOW VISUALIZATION */}
        <section id="ablauf" className="scroll-mt-24 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="font-syne font-semibold text-2xl md:text-4xl text-white">Der vollautomatisierte Funnel-Ablauf</h2>
            <p className="font-manrope text-neutral-400 max-w-xl mx-auto">
              Unser System übernimmt den kompletten Lead Weg von der ersten Interaktion auf Social Media bis hin zur finalen Conversion.
            </p>
          </div>

          <BigFunnelTrichter 
            selectedChannels={selectedChannels} 
            setSelectedChannels={setSelectedChannels} 
          />
        </section>

        {/* ROI SIMULATOR & PRICE CALCULATOR */}
        <section id="kalkulator" className="scroll-mt-24 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="font-syne font-semibold text-2xl md:text-4xl text-white">Preise & Kalkulator</h2>
            <p className="font-manrope text-neutral-400 max-w-xl mx-auto">
              Wähle deine Kanäle aus, simuliere die Nachrichtenkosten pro Lead und erhalte eine detaillierte Preisübersicht.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Input Controls Panel */}
            <div className="lg:col-span-7 glass-panel rounded-3xl border border-white/5 p-6 md:p-8 space-y-8 text-left">
              <h3 className="font-syne font-semibold text-lg md:text-xl text-white flex items-center gap-2">
                <Calculator className="h-5 w-5 text-white" /> DM-Bot-Kosten
              </h3>

              {/* Slider & Manual Input: Monatliche Kunden/Leads */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="font-manrope text-sm font-medium text-neutral-300">Monatliche Kunden/Leads</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="number" 
                      min="1" 
                      max="5000" 
                      value={monthlyDMs} 
                      onChange={(e) => {
                        const valStr = e.target.value;
                        if (valStr === '') {
                          setMonthlyDMs('');
                        } else {
                          const num = parseInt(valStr, 10);
                          setMonthlyDMs(isNaN(num) ? '' : num);
                        }
                      }}
                      onFocus={(e) => e.target.select()}
                      onBlur={() => {
                        if (monthlyDMs === '' || Number(monthlyDMs) <= 0) {
                          setMonthlyDMs(1);
                        }
                      }}
                      className="w-28 bg-white/5 border border-white/10 rounded px-2.5 py-1 text-right text-white font-syne font-semibold text-sm focus:outline-none focus:border-white/30"
                    />
                    <span className="text-xs text-neutral-500 font-semibold uppercase">Leads</span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="5000" 
                  step="10"
                  value={typeof monthlyDMs === 'number' ? monthlyDMs : 1} 
                  onChange={(e) => setMonthlyDMs(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white" 
                />
                <p className="text-[10px] font-manrope text-neutral-500">
                  Die Anzahl der individuellen Personen/Leads, die monatlich von deinem System betreut werden.
                </p>
              </div>

              {/* Slider: DMs pro Kunde */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label className="font-manrope text-sm font-medium text-neutral-300">Nachrichten pro Kunde</label>
                  <span className="font-syne font-semibold text-lg text-white">{messagesPerCustomer}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  step="1"
                  value={messagesPerCustomer} 
                  onChange={(e) => setMessagesPerCustomer(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white" 
                />
                <p className="text-[10px] font-manrope text-neutral-500">
                  Die durchschnittliche Anzahl der ausgetauschten Nachrichten pro Kunde (wählbar ab 1).
                </p>
              </div>

              {/* Selector: Channels (Checkboxes) */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label className="font-manrope text-sm font-medium text-neutral-300 block">Zu automatisierende Kanäle</label>
                  <span className="text-[10px] text-neutral-500 font-semibold uppercase">IG + TG standardmäßig aktiv</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {[
                    { id: 'wa', name: 'WhatsApp' },
                    { id: 'fb', name: 'Facebook' },
                    { id: 'ig', name: 'Instagram' },
                    { id: 'tg', name: 'Telegram Bot' },
                    { id: 'im', name: 'iMessage' },
                    { id: 'si', name: 'Signal' },
                    { id: 'tw', name: 'Twitter (X)' },
                    { id: 'sl', name: 'Slack' },
                    { id: 'gc', name: 'Google Chat' },
                    { id: 'li', name: 'LinkedIn' },
                    { id: 'dc', name: 'Discord' },
                    { id: 'wc', name: 'WeChat' },
                    { id: 'ln', name: 'Line' },
                    { id: 'qq', name: 'Tencent QQ' },
                    { id: 'tt', name: 'TikTok' }
                  ].map(ch => {
                    const isSelected = selectedChannels.includes(ch.id);
                    return (
                      <button
                        key={ch.id}
                        type="button"
                        onClick={() => {
                          if (isSelected) {
                            setSelectedChannels(prev => prev.filter(x => x !== ch.id));
                          } else {
                            setSelectedChannels(prev => [...prev, ch.id]);
                          }
                        }}
                        className={`p-3 rounded-xl border text-[11px] font-semibold font-manrope transition-all text-center flex flex-col justify-center items-center gap-1 cursor-pointer ${isSelected ? 'bg-white text-black border-white' : 'bg-white/5 text-neutral-400 border-white/5 hover:border-white/10'}`}
                      >
                        <span className="font-bold">{ch.name}</span>
                        <span className={`text-[8px] font-bold uppercase tracking-wider ${isSelected ? 'text-neutral-700' : 'text-neutral-550'}`}>
                          {ch.id === 'tg' ? '200 € Setup' : '300 € Setup'}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className="text-[10px] text-neutral-500 font-manrope leading-normal">
                  * Setup-Kosten: Telegram-Kanal <strong>200 €</strong>, jeder andere Kanal <strong>300 €</strong> Setup.
                </p>
              </div>

              {/* Selector: Voice Cloning Model */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label className="font-manrope text-sm font-medium text-neutral-300">Voice-Cloning Modell (Optionales Extra)</label>
                  {voiceCloningModel !== 'none' && <span className="text-[9px] bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded font-bold uppercase tracking-wider">Aktiv</span>}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <button 
                    type="button"
                    onClick={() => setVoiceCloningModel('none')}
                    className={`p-3 rounded-xl border text-xs font-semibold font-manrope transition-all text-center cursor-pointer ${voiceCloningModel === 'none' ? 'bg-white text-black border-white' : 'bg-white/5 text-neutral-400 border-white/5 hover:border-white/10'}`}
                  >
                    Keins
                  </button>
                  <button 
                    type="button"
                    onClick={() => setVoiceCloningModel('simple')}
                    className={`p-3 rounded-xl border text-xs font-semibold font-manrope transition-all text-center cursor-pointer ${voiceCloningModel === 'simple' ? 'bg-white text-black border-white' : 'bg-white/5 text-neutral-400 border-white/5 hover:border-white/10'}`}
                  >
                    Simple Voice (100 €)
                  </button>
                  <button 
                    type="button"
                    onClick={() => setVoiceCloningModel('professional')}
                    className={`p-3 rounded-xl border text-xs font-semibold font-manrope transition-all text-center cursor-pointer ${voiceCloningModel === 'professional' ? 'bg-white text-black border-white' : 'bg-white/5 text-neutral-400 border-white/5 hover:border-white/10'}`}
                  >
                    Pro Voice (500 €)
                  </button>
                </div>
              </div>

              {/* Info: voiceMessagesPerUser (Only show if voiceCloningModel !== 'none') */}
              {voiceCloningModel !== 'none' && (
                <div className="space-y-4 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 animate-fade-in text-left">
                  <div className="space-y-3">
                    <div className="flex justify-between items-baseline">
                      <label className="font-manrope text-sm font-medium text-purple-300">Voice-Nachrichten pro Kunde</label>
                      <span className="font-syne font-semibold text-lg text-purple-300">{voiceMessagesPerLead}</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      step="1"
                      value={voiceMessagesPerLead} 
                      onChange={(e) => setVoiceMessagesPerLead(Number(e.target.value))}
                      className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-400" 
                    />
                    <p className="text-[10px] font-manrope text-neutral-500">
                      Die Anzahl an personalisierten Sprachnachrichten, die per Voice-Cloning an jeden User gesendet werden (max. 10).
                    </p>
                  </div>

                  <div className="text-[11px] font-manrope text-neutral-400 space-y-1.5 pt-3 border-t border-purple-500/20">
                    <div className="flex justify-between">
                      <span>Empfänger (Monatlich):</span>
                      <span className="text-white font-semibold">{costs.monthlyLeads.toLocaleString('de-DE')} User</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dauer pro Voice-Nachricht:</span>
                      <span className="text-white font-semibold">10 Sekunden (1/6 Min.)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gesamtzahl Voice-Nachrichten:</span>
                      <span className="text-white font-semibold">{costs.voiceTotalMessages.toLocaleString('de-DE')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gesamtdauer Audio:</span>
                      <span className="text-purple-300 font-semibold">{costs.voiceMinutes.toLocaleString('de-DE', { maximumFractionDigits: 1 })} Min. / Monat</span>
                    </div>
                    <div className="flex justify-between text-xs pt-1.5 text-white font-semibold border-t border-white/5 mt-1.5">
                      <span>Laufende Voice-Kosten · 0,20 € / Msg:</span>
                      <span className="text-emerald-400">{costs.voiceCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Calculations & Results Panel */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-start">
              
              {/* Box 1: Text-DM Kosten */}
              <div className="glass-panel rounded-3xl border border-white/5 p-6 md:p-8 text-left space-y-6 bg-neutral-950/40">
                <div>
                  <h4 className="font-syne font-semibold text-base text-neutral-300 mb-4 border-b border-white/5 pb-2">
                    Text-DM Kosten
                  </h4>
                  
                  <div className="space-y-4 font-manrope text-xs">
                    {costs.discountPercentage > 0 ? (
                      <>
                        <div className="flex justify-between border-b border-white/5 pb-2.5">
                          <span className="text-neutral-400">Social Media Setup (Vor Rabatt)</span>
                          <span className="font-semibold text-white">{costs.rawSetupCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2.5 text-emerald-400 font-semibold">
                          <span>Setup-Rabatt ({(costs.discountPercentage * 100).toFixed(0)}% für {costs.channelsCount} Kanäle)</span>
                          <span>-{(costs.rawSetupCost * costs.discountPercentage).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2.5">
                          <span className="text-neutral-400 font-medium">Social Media Setup (Endpreis)</span>
                          <span className="font-semibold text-white">{costs.setupCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span>
                        </div>
                      </>
                    ) : (
                      <div className="flex justify-between border-b border-white/5 pb-2.5">
                        <span className="text-neutral-400 font-medium">Social Media Setup</span>
                        <span className="font-semibold text-white">{costs.setupCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center border-b border-white/5 pb-2.5 gap-4">
                      <div className="flex flex-col">
                        <span className="text-neutral-400 font-medium">Laufend: Bot-Textnachrichten</span>
                        <span className="text-neutral-500 font-normal text-[10px]">0,05 € / Msg × {costs.totalMessages.toLocaleString('de-DE')}</span>
                      </div>
                      <span className="font-semibold text-white shrink-0">{costs.messageCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-baseline border-t border-white/5">
                  <div>
                    <div className="text-[10px] text-neutral-500 font-manrope font-semibold uppercase tracking-wider">Einmaliges Setup (Text)</div>
                    <div className="text-lg font-syne font-semibold text-neutral-300 mt-0.5">
                      {costs.setupCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-neutral-500 font-manrope font-semibold uppercase tracking-wider">Laufend / Monat</div>
                    <div className="text-lg font-syne font-semibold text-white mt-0.5">
                      {costs.messageCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2: Voice Cloning Kosten */}
              {voiceCloningModel !== 'none' && (
                <div className="glass-panel rounded-3xl border border-white/5 p-6 md:p-8 text-left space-y-6 bg-purple-950/10 border-purple-500/10 animate-fade-in">
                  <div>
                    <h4 className="font-syne font-semibold text-base text-purple-300 mb-4 border-b border-white/5 pb-2">
                      Voice Cloning Kosten
                    </h4>
                    
                    <div className="space-y-4 font-manrope text-xs">
                      <div className="flex justify-between border-b border-white/5 pb-2.5">
                        <span className="text-neutral-400">Einrichtung: Voice-Modell Setup (Extra)</span>
                        <span className="font-semibold text-white">{costs.cloningCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/5 pb-2.5 gap-4">
                        <div className="flex flex-col">
                          <span className="text-neutral-400 font-medium">Laufend: Voice-Generierung</span>
                          <span className="text-neutral-500 font-normal text-[10px]">0,20 € / 10 Sek. × {costs.voiceTotalMessages.toLocaleString('de-DE')}</span>
                        </div>
                        <span className="font-semibold text-white shrink-0">{costs.voiceCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between items-baseline border-t border-white/5">
                    <div>
                      <div className="text-[10px] text-neutral-500 font-manrope font-semibold uppercase tracking-wider">Einmaliges Setup (Voice)</div>
                      <div className="text-lg font-syne font-semibold text-purple-300 mt-0.5">
                        {costs.cloningCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-neutral-500 font-manrope font-semibold uppercase tracking-wider">Laufend / Monat</div>
                      <div className="text-lg font-syne font-semibold text-white mt-0.5">
                        {costs.voiceCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Gesamt-Box */}
              <div className="glass-panel rounded-3xl border border-white/10 p-6 md:p-8 text-left space-y-6 bg-neutral-900/60 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                
                <div>
                  <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                    <h4 className="font-syne font-semibold text-base text-white">Gesamtkosten</h4>
                    <div className="text-right">
                      <span className="text-[9px] text-neutral-400 font-manrope font-semibold uppercase tracking-wider block">Summe 1. Monat (Gesamt)</span>
                      <span className="text-2xl font-syne font-bold text-emerald-400">
                        {(costs.initialInvestment + costs.monthlyTotal).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between items-baseline">
                    <div>
                      <div className="text-[10px] text-neutral-500 font-manrope font-semibold uppercase tracking-wider">Gesamtes Setup (Einmalig)</div>
                      <div className="text-xl font-syne font-semibold text-neutral-300 mt-1">
                        {costs.initialInvestment.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-neutral-500 font-manrope font-semibold uppercase tracking-wider">Monatliche Kosten (Gesamt)</div>
                      <div className="text-xl font-syne font-semibold text-white mt-1">
                        {costs.monthlyTotal.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 text-[10px] text-neutral-500 font-manrope leading-relaxed">
                  <span className="text-neutral-400 font-semibold block mb-1">Erklärung der Kostenstruktur:</span>
                  Das <strong>einmalige Setup</strong> deckt die schlüsselfertige Konfiguration Ihrer Social-Media-Kanäle und die Modell-Implementierung für Voice-Cloning. Die <strong>laufenden Gebühren</strong> basieren flexibel auf der tatsächlichen Bot-Aktivität (Text und Audio). Die <strong>Summe für den 1. Monat</strong> fasst Ihre initiale Investition (Setup und die erste monatliche Laufzeit-Nutzung) in einer transparenten Gesamtsumme zusammen.
                </div>
              </div>

            </div>
          </div>

          {/* Box 3: Human Chatter Comparison (Full Width) */}
          <div className="glass-panel rounded-3xl border border-white/5 p-6 md:p-8 text-left space-y-6 bg-red-950/10 mt-8 w-full">
            <h4 className="font-syne font-semibold text-base text-red-400 mb-2 flex items-center gap-2">
              <TrendingUp className="h-4.5 w-4.5 text-red-400" /> Human Personal-Vergleich
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-manrope text-xs">
              <div className="border-b md:border-b-0 md:border-r border-white/5 pb-4 md:pb-0 md:pr-6 space-y-2">
                <span className="text-neutral-400 block">24/7 Chatter (z. B. Asien à 5 €/Std.)</span>
                <span className="font-semibold text-lg text-red-400 block">{costs.asianChatterCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })} / Monat</span>
              </div>
              <div className="border-b md:border-b-0 md:border-r border-white/5 pb-4 md:pb-0 md:pr-6 space-y-2">
                <span className="text-neutral-400 block">24/7 dt. Mitarbeiter (im Schichtbetrieb)</span>
                <span className="font-semibold text-lg text-red-400 block">{costs.germanChatterCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })} / Monat</span>
              </div>
              <div className="space-y-2">
                <span className="text-neutral-400 block">Unser KI-Funnel (Laufend / Monat)</span>
                <span className="font-semibold text-lg text-white block">{costs.monthlyTotal.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5 text-xs font-semibold">
              <div className="text-emerald-450 flex justify-between">
                <span>Ersparnis vs. Asien-Chatter:</span>
                <span>~ {costs.savingsVsAsian.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })} / Monat</span>
              </div>
              <div className="text-emerald-450 flex justify-between">
                <span>Ersparnis vs. dt. Personal:</span>
                <span>~ {costs.savingsVsGerman.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })} / Monat</span>
              </div>
            </div>

            {/* Visual bar chart comparison */}
            {(() => {
              const maxCost = Math.max(100, costs.monthlyTotal, costs.asianChatterCost);
              const botWidthPct = (costs.monthlyTotal / maxCost) * 100;
              const humanWidthPct = (costs.asianChatterCost / maxCost) * 100;
              return (
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">Laufender Kostenvergleich (Monatlich)</div>
                  
                  {/* KI-Bot bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-manrope">
                      <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                        <span className="h-2 w-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#06b6d4] animate-pulse" />
                        Monatliche KI-Bot Kosten (Autopilot)
                      </span>
                      <span className="text-white font-bold">{costs.monthlyTotal.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span>
                    </div>
                    <div className="h-4.5 w-full bg-neutral-900/60 rounded-full overflow-hidden border border-white/10 p-[2px]">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(6,182,212,0.6)] flex items-center justify-end pr-2 text-[8px] font-bold text-white tracking-wider"
                        style={{ width: `${Math.max(10, botWidthPct)}%` }}
                      >
                        {botWidthPct > 20 && `${Math.round(botWidthPct)}%`}
                      </div>
                    </div>
                  </div>

                  {/* Human Chatter bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-manrope">
                      <span className="text-red-400 font-semibold flex items-center gap-1.5">
                        <span className="h-2 w-2 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse" />
                        Menschliche Chatter Kosten (24/7 Support)
                      </span>
                      <span className="text-neutral-350 font-bold">{costs.asianChatterCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}</span>
                    </div>
                    <div className="h-4.5 w-full bg-neutral-900/60 rounded-full overflow-hidden border border-white/10 p-[2px]">
                      <div 
                        className="h-full bg-neutral-600 rounded-full transition-all duration-500 flex items-center justify-end pr-2 text-[8px] font-bold text-white tracking-wider"
                        style={{ width: `${Math.max(10, humanWidthPct)}%` }}
                      >
                        {humanWidthPct > 20 && `100% (Referenz)`}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-4">
              <div className="text-[10px] text-red-400 uppercase tracking-widest font-bold mb-1">Volle 24/7 Erreichbarkeit</div>
              <p className="text-[10px] text-neutral-400 leading-relaxed">
                Um {costs.channelsCount} Kanäle 24/7 abzudecken, fallen 720 Stunden pro Monat an. Das kostet selbst mit sehr günstigen Kräften aus Übersee (5 €/Std.) mindestens {costs.asianChatterCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })} monatlich. Unser KI-Funnel antwortet autonom auf DMs, ohne Urlaubszeiten oder Ermüdung, wodurch du sofort Tausende Euro an Fixkosten einsparst, dank effizienter API-Strukturen und Server-Routings.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ & TRUST FACTORS */}
        <section id="faq" className="scroll-mt-24 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-syne font-semibold text-2xl md:text-4xl text-white">Häufige Fragen (FAQ)</h2>
            <p className="font-manrope text-neutral-400 max-w-xl mx-auto">
              Alles was du über Ban-Sicherheit, Voice-Cloning und den laufenden Betrieb wissen musst.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* FAQ 1 */}
            <div className="glass-panel border border-white/5 rounded-2xl p-6 space-y-3 hover:scale-[1.02] transition-transform duration-300">
              <h4 className="text-white font-syne font-semibold text-lg flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                Ist mein Instagram sicher vor Bans?
              </h4>
              <p className="text-neutral-400 font-manrope text-sm leading-relaxed">
                Absolut. Wir nutzen keine billigen Scraping-Bots. Unsere Systeme sind direkt an offizielle APIs angebunden oder verwenden hochkomplexe, menschlich agierende Interfaces (inkl. Tipp-Verzögerungen). So bleibt dein Account 100% sicher.
              </p>
            </div>
            
            {/* FAQ 2 */}
            <div className="glass-panel border border-white/5 rounded-2xl p-6 space-y-3 hover:scale-[1.02] transition-transform duration-300">
              <h4 className="text-white font-syne font-semibold text-lg flex items-center gap-2">
                <BrainCircuit className="h-5 w-5 text-purple-400" />
                Flirtet die KI wirklich wie ich?
              </h4>
              <p className="text-neutral-400 font-manrope text-sm leading-relaxed">
                Ja. Wir trainieren das KI-Modell individuell auf Basis deiner bisherigen Chat-Historie. Dein Slang, deine bevorzugten Emojis und dein "Vibe" werden komplett kopiert. Fans merken nicht, dass sie mit einer KI schreiben.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="glass-panel border border-white/5 rounded-2xl p-6 space-y-3 hover:scale-[1.02] transition-transform duration-300">
              <h4 className="text-white font-syne font-semibold text-lg flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-blue-400" />
                Können meine Chatter jederzeit übernehmen?
              </h4>
              <p className="text-neutral-400 font-manrope text-sm leading-relaxed">
                Ja! Das System verfügt über einen nahtlosen "Human Handoff". Sobald jemand z.B. nach Custom-Content fragt, kann ein Mensch den Chat im Dashboard sofort und unbemerkt übernehmen.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="glass-panel border border-white/5 rounded-2xl p-6 space-y-3 hover:scale-[1.02] transition-transform duration-300">
              <h4 className="text-white font-syne font-semibold text-lg flex items-center gap-2">
                <Globe2 className="h-5 w-5 text-cyan-400" />
                Welche Sprachen werden unterstützt?
              </h4>
              <p className="text-neutral-400 font-manrope text-sm leading-relaxed">
                Unsere Modelle sprechen über 30 Sprachen fließend (inkl. Englisch, Deutsch, Spanisch). Das Voice-Cloning kann deine Stimme sogar fehlerfrei ins Englische übersetzen. Perfekt für internationale Reichweite!
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6 md:px-12 text-center text-xs text-neutral-500 font-manrope space-y-4 mt-20">
        <div className="flex justify-center items-center gap-3">
          <span className="font-syne font-semibold text-neutral-400">Multi-Channel Funnel System</span>
          <span className="h-1 w-1 bg-neutral-700 rounded-full" />
          <span>KI-Marketing-Funnel & Voice-Cloning</span>
        </div>
        <p>© {new Date().getFullYear()}. Alle Rechte vorbehalten.</p>
        <p className="text-[10px] text-neutral-600">Keine Cookie-Tracker. 100% Performance-fokussiert.</p>
      </footer>
      
    </div>
  );
}
