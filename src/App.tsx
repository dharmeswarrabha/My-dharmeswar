import React, { useState } from 'react';
import { Menu, Diamond, ChevronDown, HelpCircle, Wand2, Music, Home, Library, User, ListMusic } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('Lyrics');
  const [styleText, setStyleText] = useState('');
  const [lyricsText, setLyricsText] = useState('');
  const [isInstrumental, setIsInstrumental] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col pb-24">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/60">
        <button className="p-2 -ml-2 text-zinc-300">
          <Menu size={24} />
        </button>
        <div className="flex items-center gap-2">
          <div className="text-green-400 font-bold text-xl italic flex items-center">
             <span className="transform -skew-x-12">f</span>
          </div>
          <span className="text-xl font-semibold tracking-tight">Musicful</span>
        </div>
        <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
          <Diamond size={14} className="text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-medium">0</span>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        {/* Tabs & Version */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-zinc-800/60">
          <div className="flex gap-6">
            {['Lyrics', 'Description', 'Audio'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-base font-medium pb-1 relative ${
                  activeTab === tab ? 'text-white' : 'text-zinc-500'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute -bottom-[17px] left-0 right-0 h-[3px] bg-green-500 rounded-t-full" />
                )}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-1 text-xs font-medium text-green-400 border border-green-500/50 px-3 py-1.5 rounded-full">
            V1.0 <ChevronDown size={14} />
          </button>
        </div>

        <div className="p-4 space-y-8 mt-2">
          {/* Style of Music */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-[17px] font-bold">Style of Music</h2>
                <HelpCircle size={16} className="text-zinc-500" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-zinc-200">Instrumental</span>
                <button 
                  onClick={() => setIsInstrumental(!isInstrumental)}
                  className={`w-11 h-6 rounded-full transition-colors relative ${isInstrumental ? 'bg-green-500' : 'bg-zinc-700'}`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${isInstrumental ? 'translate-x-5.5' : 'translate-x-0.5'}`} />
                </button>
              </div>
            </div>

            <div className="bg-[#121212] border border-zinc-800/80 rounded-xl p-4 relative min-h-[150px] flex flex-col">
              <textarea
                value={styleText}
                onChange={(e) => setStyleText(e.target.value)}
                placeholder="Enter style of your music"
                className="w-full bg-transparent text-zinc-100 placeholder-zinc-500 resize-none outline-none flex-1 text-[15px]"
                maxLength={200}
              />
              
              <div className="flex items-end justify-between mt-4">
                <div className="flex flex-wrap gap-2">
                  {['Pop', 'Rap', 'Hip Hop'].map((tag) => (
                    <button key={tag} className="px-4 py-1.5 bg-[#222] hover:bg-zinc-700 text-[13px] font-medium rounded-full text-zinc-300 transition-colors">
                      {tag}
                    </button>
                  ))}
                  <button className="px-4 py-1.5 bg-[#222] hover:bg-zinc-700 text-[13px] font-medium rounded-full text-green-400 flex items-center gap-1 transition-colors">
                    More <span className="text-[10px] mt-0.5">&gt;</span>
                  </button>
                </div>
                <span className="text-xs text-zinc-500 font-medium">{styleText.length}/200</span>
              </div>
            </div>
          </section>

          {/* Lyrics */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-[17px] font-bold">Lyrics</h2>
              <HelpCircle size={16} className="text-zinc-500" />
            </div>

            <div className="bg-[#121212] border border-zinc-800/80 rounded-xl p-4 relative min-h-[220px] flex flex-col">
              <textarea
                value={lyricsText}
                onChange={(e) => setLyricsText(e.target.value)}
                placeholder="Enter lyrics of your music or try to get inspired"
                className="w-full bg-transparent text-zinc-100 placeholder-zinc-500 resize-none outline-none flex-1 text-[15px]"
                maxLength={3000}
              />
              
              <div className="flex items-end justify-between mt-4">
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#222] hover:bg-zinc-700 rounded-xl text-[13px] font-medium transition-colors">
                    <Wand2 size={16} className="text-green-400" />
                    Write Lyrics For Me
                  </button>
                  <button className="p-2 bg-[#222] hover:bg-zinc-700 rounded-xl transition-colors flex items-center justify-center">
                    <ListMusic size={18} className="text-zinc-300" />
                  </button>
                </div>
                <span className="text-xs text-zinc-500 font-medium">{lyricsText.length}/3000</span>
              </div>
            </div>
          </section>

          {/* Gender (Partial) */}
          <section className="space-y-4">
            <h2 className="text-[17px] font-bold">Gender</h2>
            <div className="flex gap-3">
              <div className="h-1 bg-[#222] rounded-full flex-1"></div>
              <div className="h-1 bg-[#222] rounded-full flex-1"></div>
              <div className="h-1 bg-green-500 rounded-full flex-1"></div>
            </div>
          </section>
        </div>
      </main>

      {/* Create Button */}
      <div className="px-4 py-4 bg-black">
        <button className="w-full bg-[#666] hover:bg-[#777] text-black font-bold text-lg py-3.5 rounded-full flex items-center justify-center gap-2 transition-colors">
          <Music size={20} className="text-black" />
          Create
        </button>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a] border-t border-zinc-800/60 flex justify-around items-center py-2 pb-safe">
        <button className="flex flex-col items-center gap-1 p-2 text-zinc-500 hover:text-zinc-300">
          <Home size={22} />
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-white">
          <div className="relative">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
               <span className="text-white font-bold text-2xl transform -skew-x-12">f</span>
            </div>
          </div>
          <span className="text-[10px] font-medium">Create</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-zinc-500 hover:text-zinc-300">
          <Library size={22} />
          <span className="text-[10px] font-medium">Library</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-zinc-500 hover:text-zinc-300">
          <User size={22} />
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </nav>
    </div>
  );
}
