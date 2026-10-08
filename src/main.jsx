import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Check, ChevronRight, Download, ExternalLink, Github, Instagram, Linkedin, Mail, MapPin, Menu, Moon, Phone, Send, Sparkles, Sun, X } from 'lucide-react'
import { profile, projects, skillGroups, experience } from './data'
import './index.css'

const nav = ['home','about','skills','projects','experience','resume','contact']
const filters = ['All','GenAI','ML','Web']

function useActiveSection() {
  const [active,setActive] = useState('home')
  useEffect(() => {
    const els = nav.map(id => document.getElementById(id)).filter(Boolean)
    const obs = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-35% 0px -55% 0px' })
    els.forEach(el => obs.observe(el)); return () => obs.disconnect()
  }, [])
  return active
}

function Reveal({ children, className='' }) { return <motion.div className={className} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.55,ease:'easeOut'}}>{children}</motion.div> }

function TiltCard({ children, className='' }) {
  const ref=useRef(null), [r,setR]=useState({x:0,y:0})
  const onMove=e=>{ if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; const b=ref.current?.getBoundingClientRect(); if(!b)return; setR({x:((e.clientY-b.top)/b.height-.5)*-5,y:((e.clientX-b.left)/b.width-.5)*5}) }
  return <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={()=>setR({x:0,y:0})} animate={{rotateX:r.x,rotateY:r.y}} transition={{type:'spring',stiffness:220,damping:18}} style={{transformPerspective:1000}} className={className}>{children}</motion.div>
}

function CursorGlow(){ const x=useMotionValue(-100), y=useMotionValue(-100), sx=useSpring(x,{stiffness:90,damping:25}), sy=useSpring(y,{stiffness:90,damping:25}); useEffect(()=>{const f=e=>{x.set(e.clientX);y.set(e.clientY)};window.addEventListener('pointermove',f);return()=>window.removeEventListener('pointermove',f)},[]); return <motion.div aria-hidden className="pointer-events-none fixed z-50 hidden h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl md:block" style={{left:sx,top:sy}}/> }

function Navbar({active,dark,setDark}){ const [open,setOpen]=useState(false); return <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl dark:bg-slate-950/70"><div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"><a href="#home" className="font-extrabold tracking-tight">Flux<span className="text-blue-400">.</span></a><nav className="hidden items-center gap-1 md:flex">{nav.map(id=><a key={id} href={'#'+id} className={`rounded-full px-3 py-2 text-xs font-medium transition ${active===id?'bg-white/10 text-white':'text-slate-400 hover:text-white'}`}>{id[0].toUpperCase()+id.slice(1)}</a>)}</nav><div className="flex items-center gap-2"><button aria-label="Toggle theme" onClick={()=>setDark(v=>!v)} className="rounded-full border border-white/10 p-2 text-slate-300 hover:bg-white/10">{dark?<Sun size={16}/>:<Moon size={16}/>}</button><a href="#contact" className="hidden rounded-full bg-blue-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-blue-500/20 sm:block">Hire Me</a><button aria-label="Open menu" onClick={()=>setOpen(v=>!v)} className="rounded-full border border-white/10 p-2 md:hidden">{open?<X size={16}/>:<Menu size={16}/>}</button></div></div>{open&&<nav className="border-t border-white/5 bg-slate-950 px-5 py-3 md:hidden">{nav.map(id=><a onClick={()=>setOpen(false)} key={id} href={'#'+id} className="block py-2 text-sm text-slate-300">{id[0].toUpperCase()+id.slice(1)}</a>)}</nav>}</header> }

function Hero(){
  const words=['AI/ML Engineer','GenAI Engineer','ML Deployment','Software Engineer','Backend Developer']
  const [i,setI]=useState(0)
  useEffect(()=>{
    const t=setInterval(()=>setI(v=>(v+1)%words.length),2400)
    return()=>clearInterval(t)
  },[])
  return <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
    <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"/>
    <div className="pointer-events-none absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[110px]" aria-hidden="true"/>
    <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.3fr_.7fr] md:items-center">
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs font-semibold text-emerald-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"/>
          Open to work · Hyderabad + India
        </div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Hello, I'm Jaganath
        </p>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-8xl">
          <span className="text-gradient">{words[i]}</span>
          <span className="ml-2 inline-block h-[0.75em] w-1 animate-pulse rounded-full bg-blue-400 align-baseline"/>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
          B.Tech CSE (AI &amp; ML) graduate building practical AI systems—from machine learning models to production-minded GenAI and RAG applications.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {/* View Projects */}
          <a
            href="#projects"
            className="btn-primary inline-flex items-center gap-2"
          >
            View Projects
            <ChevronRight size={17} />
          </a>

          {/* Download Resume */}
          <a
            href={profile.resume}
            download="Jaganath-AI-ML-Resume.pdf"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Download size={16} />
            Download Resume
          </a>

          {/* Hire Me */}
          <a
            href="#contact"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Hire Me
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-7 text-sm text-slate-500">
          <span><b className="text-white">8.18</b> CGPA</span>
          <span><b className="text-white">500+</b> coding problems</span>
          <span><b className="text-white">3</b> internships / simulations</span>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="relative mx-auto max-w-sm">
          <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-blue-500/10 blur-2xl" aria-hidden="true"/>
          <TiltCard className="glass relative rounded-[2rem] p-7 shadow-glow">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300"><Sparkles/></div>
              <span className="text-xs text-slate-500">01 / AI ENGINEERING</span>
            </div>
            <div className="mt-12 space-y-4">
              <div className="h-2 w-2/3 rounded-full bg-blue-400/70"/>
              <div className="h-2 w-full rounded-full bg-white/10"/>
              <div className="h-2 w-5/6 rounded-full bg-white/10"/>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/5 bg-white/[.03] p-4">
                <p className="text-2xl font-bold">8.18</p>
                <p className="mt-1 text-xs text-slate-500">CGPA</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[.03] p-4">
                <p className="text-2xl font-bold">API</p>
                <p className="mt-1 text-xs text-slate-500">deployment mindset</p>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </div>
  </section>
}

function SectionTitle({eyebrow,title,copy}){return <div className="mb-10 max-w-2xl"><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{copy&&<p className="mt-4 leading-7 text-slate-400">{copy}</p>}</div>}
function About(){return <section id="about" className="section"><div className="mx-auto max-w-6xl px-5"><SectionTitle eyebrow="01 / ABOUT" title="Engineer mindset, builder energy." copy="B.Tech CSE (AI & ML) gradute who enjoys turning ML ideas into usable applications. I’ve worked across prediction, NLP, computer vision, APIs and interpretability—and I also run an online jewelry business, bringing a practical customer-first mindset outside engineering."/><div className="grid gap-5 md:grid-cols-3"><TiltCard className="glass rounded-3xl p-6 md:col-span-2"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-sm font-semibold text-blue-300">B.Tech · Computer Science & Engineering (AI & ML)</p><h3 className="mt-2 text-xl font-bold">Institute of Aeronautical Engineering</h3><p className="mt-1 text-sm text-slate-400">Hyderabad · 2022 – 2026</p></div><div className="rounded-2xl bg-blue-500/10 px-4 py-3 text-right"><p className="text-2xl font-extrabold text-blue-300">8.18</p><p className="text-[11px] uppercase tracking-wider text-slate-500">CGPA</p></div></div></TiltCard><div className="glass rounded-3xl p-6"><div className="flex items-center gap-2 text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-400"/> <span className="text-sm font-bold">Open to work</span></div><p className="mt-4 text-sm leading-6 text-slate-400">Entry-level AI/ML Engineer roles</p><div className="mt-4 flex flex-wrap gap-2">{profile.locations.split(' · ').map(x=><span key={x} className="chip">{x}</span>)}</div></div></div></div></section>}

function Skills(){return <section id="skills" className="section border-y border-white/5 bg-white/[.015]"><div className="mx-auto max-w-6xl px-5"><SectionTitle eyebrow="02 / SKILLS" title="A practical AI/ML toolkit."/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{skillGroups.map(([group,items],idx)=><Reveal key={group}><TiltCard className="glass h-full rounded-3xl p-6"><div className="flex items-center justify-between"><h3 className="font-bold">{group}</h3><span className="text-xs text-slate-600">0{idx+1}</span></div><div className="mt-5 flex flex-wrap gap-2">{items.map(s=><span key={s} className="chip">{s}</span>)}</div></TiltCard></Reveal>)}</div></div></section>}

function ProjectCard({p}){return <Reveal><TiltCard className="glass group h-full rounded-[1.7rem] p-6 transition hover:border-blue-400/20 hover:shadow-glow"><div className="flex items-start justify-between gap-4"><div className="rounded-2xl bg-blue-500/10 p-3 text-blue-300"><Sparkles size={20}/></div><span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">{p.category}</span></div><h3 className="mt-7 text-xl font-bold">{p.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{p.description}</p><div className="mt-5 space-y-3 text-sm"><p><b className="text-slate-200">Problem</b> <span className="text-slate-500">— {p.problem}</span></p><p><b className="text-slate-200">Approach</b> <span className="text-slate-500">— {p.approach}</span></p><p><b className="text-slate-200">Result</b> <span className="text-slate-500">— {p.result}</span></p></div><div className="mt-5 flex flex-wrap gap-2">{p.tech.map(t=><span className="chip" key={t}>{t}</span>)}</div><div className="mt-7 flex gap-2"><a className="btn-small" href={p.demo==='#'?undefined:p.demo} onClick={e=>p.demo==='#'&&e.preventDefault()}><ExternalLink size={14}/> Live Demo</a><a className="btn-small" href={p.github} target="_blank" rel="noreferrer"><Github size={14}/> GitHub</a></div>{p.todo&&<p className="mt-3 text-[11px] text-amber-300/70">{p.todo}</p>}</TiltCard></Reveal>}
function Projects(){const [filter,setFilter]=useState('All'); const shown=useMemo(()=>filter==='All'?projects:projects.filter(p=>p.category===filter),[filter]); return <section id="projects" className="section"><div className="mx-auto max-w-6xl px-5"><SectionTitle eyebrow="03 / PROJECTS" title="Proof of work, not just keywords." copy="Selected projects from public repositories on GitHub. "/><div className="mb-7 flex flex-wrap gap-2">{filters.map(f=><button key={f} onClick={()=>setFilter(f)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${filter===f?'bg-blue-500 text-white':'border border-white/10 bg-white/[.03] text-slate-400 hover:text-white'}`}>{f}</button>)}</div><div className="grid gap-5 lg:grid-cols-2">{shown.map(p=><ProjectCard key={p.id} p={p}/>)}</div></div></section>}

function Experience(){return <section id="experience" className="section border-y border-white/5 bg-white/[.015]"><div className="mx-auto max-w-6xl px-5"><SectionTitle eyebrow="04 / EXPERIENCE" title="Applied AI + entrepreneurship."/><div className="grid gap-5 lg:grid-cols-[1.4fr_.6fr]"> <div className="space-y-4">{experience.map((e,i)=><Reveal key={e.company}><div className="glass rounded-3xl p-6"><div className="flex flex-wrap justify-between gap-3"><div><h3 className="font-bold">{e.role}</h3><p className="mt-1 text-sm text-blue-300">{e.company}</p></div><span className="text-xs text-slate-500">{e.date}</span></div><ul className="mt-5 space-y-2 text-sm leading-6 text-slate-400">{e.bullets.map(b=><li key={b} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"/>{b}</li>)}</ul></div></Reveal>)}</div><TiltCard className="glass rounded-3xl p-6"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-300"><BriefcaseBusiness/></div><h3 className="mt-6 text-xl font-bold">Pearls and Jewels</h3><p className="mt-1 text-sm text-slate-500">Online jewelry business · Entrepreneurship</p><ul className="mt-6 space-y-3 text-sm leading-6 text-slate-400"><li>• Managed marketing and customer interactions.</li><li>• Handled day-to-day operations and business coordination.</li></ul><a className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200" href={profile.instagram} target="_blank" rel="noreferrer"><Instagram size={15}/> Instagram <ArrowUpRight size={14}/></a><p className="mt-3 text-[11px] text-amber-300/70">TODO: replace the Instagram URL with your exact business profile.</p></TiltCard></div></div></section>}

function Resume(){return <section id="resume" className="section"><div className="mx-auto max-w-6xl px-5"><SectionTitle eyebrow="05 / RESUME" title="One-click recruiter handoff."/><div className="grid gap-5 lg:grid-cols-[1fr_.35fr]"><div className="glass overflow-hidden rounded-3xl"><iframe title="Jaganath resume preview" src={profile.resume} className="h-[620px] w-full bg-white"/></div><div className="glass flex flex-col justify-between rounded-3xl p-6"><div><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300"><Download/></div><h3 className="mt-6 text-xl font-bold">Download the latest resume</h3><p className="mt-3 text-sm leading-6 text-slate-400">The PDF included in this project is the resume supplied for this portfolio build.</p></div><a href={profile.resume} download className="btn-primary mt-8 justify-center">Download Resume <Download size={16}/></a></div></div></div></section>}

function Contact(){const [status,setStatus]=useState('idle'); const submit=e=>{e.preventDefault();setStatus('loading');setTimeout(()=>setStatus('success'),700)}; return <section id="contact" className="section border-t border-white/5 bg-white/[.015]"><div className="mx-auto max-w-6xl px-5"><SectionTitle eyebrow="06 / CONTACT" title="Let’s build something useful." copy="Best for entry-level AI/ML opportunities, internships, projects and technical conversations."/><div className="grid gap-5 lg:grid-cols-[1fr_.7fr]"><form onSubmit={submit} className="glass rounded-3xl p-6"><div className="grid gap-4 sm:grid-cols-2"><label className="text-sm text-slate-400">Name<input required className="field" name="name" placeholder="Your name"/></label><label className="text-sm text-slate-400">Email<input required type="email" className="field" name="email" placeholder="you@example.com"/></label></div><label className="mt-4 block text-sm text-slate-400">Message<textarea required className="field min-h-36 resize-y" name="message" placeholder="Tell me about the role or project..."/></label><button className="btn-primary mt-5" disabled={status==='loading'}>{status==='loading'?'Sending...':status==='success'?<><Check size={16}/> Sent</>:<><Send size={16}/> Send Message</>}</button></form><div className="glass rounded-3xl p-6"><div className="space-y-3"><a className="contact-link" href={'mailto:'+profile.email}><Mail size={17}/> {profile.email}</a><a className="contact-link" href={'tel:'+profile.phone.replace(/\D/g,'')}><Phone size={17}/> {profile.phone}</a><a className="contact-link" href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <span className="text-[10px] text-amber-300/70">TODO verify URL</span></a></div><div className="mt-8 rounded-2xl border border-white/5 bg-white/[.03] p-4"><div className="flex items-center gap-2 text-sm font-semibold"><MapPin size={15} className="text-blue-300"/> Hyderabad preferred</div><p className="mt-2 text-xs leading-5 text-slate-500">Open to Bengaluru, Chennai and Pune for entry-level AI/ML roles.</p></div></div></div></div></section>}

function NotFound(){return <div className="grid min-h-screen place-items-center px-5"><div className="text-center"><p className="eyebrow">404 / LOST IN LATENT SPACE</p><h1 className="mt-3 text-6xl font-black">404</h1><p className="mt-4 text-slate-400">This route does not exist.</p><a className="btn-primary mt-7 inline-flex" href="#home">Back home <ArrowUpRight size={16}/></a></div></div>}
function App(){const [dark,setDark]=useState(()=>localStorage.getItem('theme')!=='light');const active=useActiveSection();useEffect(()=>{document.documentElement.classList.toggle('dark',dark);document.documentElement.classList.toggle('light',!dark);document.documentElement.style.colorScheme=dark?'dark':'light';localStorage.setItem('theme',dark?'dark':'light')},[dark]); if(window.location.pathname!=='/'&&window.location.pathname!=='')return <NotFound/>;return <><CursorGlow/><Navbar active={active} dark={dark} setDark={setDark}/><main><Hero/><About/><Skills/><Projects/><Experience/><Resume/><Contact/></main><a href="#contact" className="fixed bottom-5 right-5 z-30 hidden rounded-full bg-blue-500 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-blue-500/20 sm:flex">Hire Me <ArrowUpRight size={16}/></a><footer className="border-t border-white/5 py-8"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 text-xs text-slate-600 sm:flex-row"><span>© {new Date().getFullYear()} Jaganath. Built with React + Vite.</span><span>AI/ML · GenAI · RAG · Python</span></div></footer></>}
createRoot(document.getElementById('root')).render(<App/>)