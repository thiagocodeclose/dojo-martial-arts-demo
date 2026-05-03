// @ts-nocheck
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Menu, X, Star, MapPin, Phone, Mail, Clock,
  Instagram, Facebook, Shield, Users, Trophy,
  Target, CheckCircle, ArrowRight, Award, ChevronDown
} from 'lucide-react';
import { studioInfo, stats, programs, instructors, beltPath, testimonials, pricing } from '@/lib/site-data';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = ['Programs', 'Instructors', 'Belt Path', 'Pricing', 'Contact'];
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#111111]/96 backdrop-blur border-b border-[#2E2E2E]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-dj-red flex items-center justify-center transform rotate-45">
            <span className="font-heading font-bold text-white text-xs -rotate-45">武</span>
          </div>
          <span className="font-heading font-bold text-xl tracking-wider text-white">BUSHIDO DOJO</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-dj-muted hover:text-white transition-colors tracking-wide uppercase font-heading">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-dj-red hover:bg-[#A50000] text-white font-heading font-semibold text-sm uppercase tracking-widest px-5 py-2.5 transition-colors">
          Free Trial
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-1">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-[#2E2E2E] px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`} onClick={() => setOpen(false)}
              className="text-sm font-heading font-semibold text-dj-muted uppercase tracking-wide">{l}</a>
          ))}
          <a href="#contact" className="bg-dj-red text-white font-heading font-semibold text-sm uppercase tracking-widest px-5 py-3 text-center">Start Free Trial</a>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero (Photo + split) ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG photo */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1600&q=85"
          alt="Martial arts dojo"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/70 to-[#111111]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">
          {/* Japanese accent */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-dj-red" />
            <span className="text-dj-gold font-heading text-sm uppercase tracking-[0.25em]">武士道 — Bushido</span>
          </div>

          <h1 data-cg-el="hero_headline_1" className="font-heading font-bold text-6xl sm:text-7xl lg:text-8xl text-white leading-none mb-6">
            DISCIPLINE.<br />
            <span className="text-dj-red">RESPECT.</span><br />
            STRENGTH.
          </h1>

          <p className="text-[#8A8A8A] text-lg mb-8 max-w-lg leading-relaxed">{studioInfo.subheadline}</p>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 bg-dj-red hover:bg-[#A50000] text-white font-heading font-semibold text-sm uppercase tracking-widest px-8 py-4 transition-colors">
              Start Free Trial <ArrowRight size={15} />
            </a>
            <a href="#programs" className="inline-flex items-center gap-2 border border-[#2E2E2E] hover:border-white text-white font-heading font-semibold text-sm uppercase tracking-widest px-8 py-4 transition-colors">
              Our Programs
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-[#2E2E2E]">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-dj-muted text-sm">30+ years serving Chicago · 500+ active students</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown size={20} className="text-white/30" />
      </div>
    </section>
  );
}

/* ─── Stats ─── */
function Stats() {
  return (
    <section className="bg-dj-red py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {stats.map(s => (
            <div key={s.label}>
              <div className="font-heading font-bold text-4xl">{s.value}</div>
              <div className="text-red-200 text-xs uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Programs ─── */
function Programs() {
  return (
    <section id="programs" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-dj-red" />
            <p className="text-dj-red font-heading font-semibold text-sm uppercase tracking-[0.3em]">Training Programs</p>
            <div className="h-px w-8 bg-dj-red" />
          </div>
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-white">CHOOSE YOUR PATH</h2>
          <p className="text-dj-muted mt-4 max-w-xl mx-auto">Five disciplines, one mission — to forge character through the martial arts.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((p, i) => (
            <div key={p.name}
              className="reveal bg-[#1A1A1A] border border-[#2E2E2E] hover:border-dj-red/50 p-6 transition-colors group"
              style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading font-bold text-2xl text-white">{p.name}</h3>
                <span className="text-xs font-semibold bg-[#0D0D0D] border border-[#2E2E2E] text-dj-muted px-2 py-1 uppercase tracking-wide">{p.ages}</span>
              </div>
              {p.belt_system && (
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2 h-2 rounded-full bg-dj-gold" />
                  <span className="text-dj-gold text-xs uppercase tracking-wide">Belt System</span>
                </div>
              )}
              <p className="text-dj-muted text-sm leading-relaxed">{p.description}</p>
              <div className="mt-4 pt-4 border-t border-[#2E2E2E]">
                <a href="#contact" className="text-dj-red text-sm font-heading font-semibold uppercase tracking-wide hover:text-red-400 transition-colors flex items-center gap-1.5">
                  Learn More <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Belt Path ─── */
function BeltPath() {
  return (
    <section id="belt-path" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-dj-red" />
            <p className="text-dj-red font-heading font-semibold text-sm uppercase tracking-[0.3em]">The Journey</p>
            <div className="h-px w-8 bg-dj-red" />
          </div>
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-white">THE BELT SYSTEM</h2>
          <p className="text-dj-muted mt-4 max-w-lg mx-auto">Each belt represents a milestone — not just in technique, but in character.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {beltPath.map((b, i) => (
            <div key={b.belt}
              className="reveal flex items-center gap-6 py-5 border-b border-[#1A1A1A] last:border-0 group"
              style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="flex-shrink-0 w-10 h-4 rounded-sm shadow-lg" style={{ backgroundColor: b.color, border: b.belt === 'White' ? '1px solid #2E2E2E' : 'none' }} />
              <div className="flex-1">
                <span className="font-heading font-semibold text-lg text-white uppercase tracking-wide">{b.belt} Belt</span>
                <p className="text-dj-muted text-sm mt-0.5">{b.description}</p>
              </div>
              <div className="text-[#2E2E2E] font-heading font-bold text-xl">
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Instructors ─── */
function Instructors() {
  return (
    <section id="instructors" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-dj-red" />
            <p className="text-dj-red font-heading font-semibold text-sm uppercase tracking-[0.3em]">The Masters</p>
            <div className="h-px w-8 bg-dj-red" />
          </div>
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-white">LEARN FROM MASTERS</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((inst, i) => (
            <div key={inst.name} className="reveal group" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="relative overflow-hidden aspect-[3/4] mb-5">
                <Image src={inst.image} alt={inst.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="h-0.5 w-8 bg-dj-red mb-3" />
                  <h3 className="font-heading font-bold text-xl text-white">{inst.name}</h3>
                  <p className="text-dj-gold font-heading text-xs uppercase tracking-wide mt-1">{inst.rank}</p>
                </div>
              </div>
              <p className="text-dj-muted text-sm leading-relaxed">{inst.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-dj-red" />
            <p className="text-dj-red font-heading font-semibold text-sm uppercase tracking-[0.3em]">Student Stories</p>
            <div className="h-px w-8 bg-dj-red" />
          </div>
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-white">WHAT STUDENTS SAY</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={t.name} className="reveal bg-[#1A1A1A] border border-[#2E2E2E] p-8"
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={13} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-[#F0EDE8] text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-dj-red flex items-center justify-center font-heading font-bold text-white text-sm">{t.name[0]}</div>
                <span className="font-heading font-semibold text-white">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-dj-red" />
            <p className="text-dj-red font-heading font-semibold text-sm uppercase tracking-[0.3em]">Membership</p>
            <div className="h-px w-8 bg-dj-red" />
          </div>
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-white">INVEST IN YOURSELF</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricing.map((p, i) => (
            <div key={p.name}
              className={`reveal ${p.highlight ? 'bg-dj-red border-2 border-dj-red' : 'bg-[#0D0D0D] border border-[#2E2E2E]'} p-8 relative`}
              style={{ animationDelay: `${i * 0.1}s` }}>
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-dj-gold text-black font-heading font-bold text-xs uppercase tracking-wider px-4 py-1">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading font-bold text-2xl text-white uppercase mb-1">{p.name}</h3>
              <div className="mb-6">
                <span className="font-heading font-bold text-5xl text-white">{p.price}</span>
                <span className={`text-sm ml-1 ${p.highlight ? 'text-red-200' : 'text-dj-muted'}`}>{p.period}</span>
              </div>
              <ul className="space-y-2.5 mb-8">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckCircle size={13} className={p.highlight ? 'text-red-200' : 'text-dj-red'} />
                    <span className={`text-sm ${p.highlight ? 'text-red-100' : 'text-dj-muted'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`block text-center font-heading font-semibold text-sm uppercase tracking-widest py-3 transition-colors ${p.highlight ? 'bg-white text-dj-red hover:bg-red-50' : 'bg-dj-red text-white hover:bg-[#A50000]'}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-dj-red" />
              <p className="text-dj-red font-heading font-semibold text-sm uppercase tracking-[0.3em]">Begin Your Journey</p>
            </div>
            <h2 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">YOUR FREE TRIAL AWAITS</h2>
            <p className="text-dj-muted leading-relaxed mb-8 max-w-md">
              Come in, take a class, meet the instructors. No pressure, no commitment — just your first step on the path.
            </p>
            <div className="space-y-4 mb-8">
              {[{ icon: MapPin, label: studioInfo.address }, { icon: Phone, label: studioInfo.phone }, { icon: Mail, label: studioInfo.email }].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={15} className="text-dj-red flex-shrink-0" />
                  <span className="text-dj-muted text-sm">{label}</span>
                </div>
              ))}
            </div>
            {Object.entries(studioInfo.hours).map(([day, hrs]) => (
              <div key={day} className="flex items-center gap-3 mb-2">
                <Clock size={13} className="text-dj-muted flex-shrink-0" />
                <span className="text-dj-muted text-sm"><strong className="text-white">{day}:</strong> {hrs}</span>
              </div>
            ))}
          </div>
          <div className="reveal bg-[#1A1A1A] border border-[#2E2E2E] p-8">
            <h3 className="font-heading font-bold text-2xl text-white mb-6 uppercase">Request Free Trial Class</h3>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                {[['First Name', 'Hiroshi'], ['Last Name', 'Tanaka']].map(([label, ph]) => (
                  <div key={label}>
                    <label className="block text-dj-muted text-xs uppercase tracking-wide mb-1.5">{label}</label>
                    <input type="text" placeholder={ph} className="w-full bg-[#0D0D0D] border border-[#2E2E2E] focus:border-dj-red text-white text-sm px-4 py-3 outline-none transition-colors placeholder-[#444]" />
                  </div>
                ))}
              </div>
              {[['Email', 'email', 'hiroshi@email.com'], ['Phone', 'tel', '(312) 555-0000']].map(([label, type, ph]) => (
                <div key={label}>
                  <label className="block text-dj-muted text-xs uppercase tracking-wide mb-1.5">{label}</label>
                  <input type={type} placeholder={ph} className="w-full bg-[#0D0D0D] border border-[#2E2E2E] focus:border-dj-red text-white text-sm px-4 py-3 outline-none transition-colors placeholder-[#444]" />
                </div>
              ))}
              <div>
                <label className="block text-dj-muted text-xs uppercase tracking-wide mb-1.5">Interested In</label>
                <select className="w-full bg-[#0D0D0D] border border-[#2E2E2E] focus:border-dj-red text-white text-sm px-4 py-3 outline-none transition-colors">
                  <option value="">Select a program...</option>
                  {programs.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                </select>
              </div>
              <button type="submit" className="w-full bg-dj-red hover:bg-[#A50000] text-white font-heading font-semibold text-sm uppercase tracking-widest py-4 transition-colors flex items-center justify-center gap-2">
                Start My Free Trial <ArrowRight size={15} />
              </button>
              <p className="text-[#444] text-xs text-center">First class completely free. No credit card needed.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2E2E2E] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-dj-red flex items-center justify-center transform rotate-45">
            <span className="font-heading font-bold text-white text-xs -rotate-45">武</span>
          </div>
          <span className="font-heading font-bold text-white">BUSHIDO DOJO</span>
        </div>
        <p className="text-[#555] text-xs">© 2026 Bushido Dojo Chicago. All rights reserved.</p>
        <div className="flex gap-3">
          <a href={studioInfo.instagram} className="w-9 h-9 bg-[#1A1A1A] border border-[#2E2E2E] hover:border-dj-red flex items-center justify-center transition-colors">
            <Instagram size={14} className="text-dj-muted" />
          </a>
          <a href={studioInfo.facebook} className="w-9 h-9 bg-[#1A1A1A] border border-[#2E2E2E] hover:border-dj-red flex items-center justify-center transition-colors">
            <Facebook size={14} className="text-dj-muted" />
          </a>
        </div>
        <p className="text-[#555] text-xs">Powered by <span className="text-dj-red">Koriva Sites</span></p>
      </div>
    </footer>
  );
}

export default function Page() {
  useReveal();
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Programs />
      <BeltPath />
      <Instructors />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
