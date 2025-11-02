'use client';
import { useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark';

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  if (mode === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

export default function Navigasi() {
  const [theme, setTheme] = useState<ThemeMode | null>(null);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as ThemeMode | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
    applyTheme(initialTheme);
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) setActive(id);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (!theme) return;
    const next = theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
    setTheme(next);
  };

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md border border-[#EAD8C8] dark:border-[#3A2E28] bg-white/80 dark:bg-[#2C2420]/80 rounded-full shadow-md flex items-center gap-4 px-6 py-2 text-sm transition-all duration-300">
      {['about', 'projects', 'contact'].map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`font-medium transition-colors ${
            active === id
              ? 'text-[#A47551] dark:text-[#CDAA7D]'
              : 'text-[#6B4F3B] hover:text-[#A47551] dark:text-[#EAD8C8] dark:hover:text-[#CDAA7D]'
          }`}
        >
          {id === 'about' && 'Tentang'}
          {id === 'projects' && 'Portofolio'}
          {id === 'contact' && 'Kontak'}
        </a>
      ))}

      <button
        onClick={toggleTheme}
        aria-label="Ganti tema"
        className="ml-3 text-[#A47551] dark:text-[#CDAA7D] hover:opacity-80 transition"
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>
    </nav>
  );
}
