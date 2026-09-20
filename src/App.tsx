import { ArrowUpRight, Github, Instagram, Mail, Menu, Play, Terminal, X, Youtube } from 'lucide-react';
import { useState } from 'react';

const projects = [
  { name: 'After Action', description: 'A local-first operational learning workspace that turns retrospectives into accountable follow-through.', stack: 'React · TypeScript · Local-first', href: 'https://github.com/NomadicZack/after-action-review', label: 'SHIPPED PROJECT' },
  { name: 'NomadicZack Site', description: 'A creator and builder platform for projects, field notes, and practical technology content.', stack: 'React · TypeScript · Vite', href: 'https://github.com/NomadicZack/nomadiczack-site', label: 'LIVE PLATFORM' },
  { name: 'Creator OS', description: 'A practical system for turning research, experiments, and builds into useful content across platforms.', stack: 'Automation · AI · Content systems', href: '#content', label: 'IN DEVELOPMENT' },
];

const pillars = [
  ['01', 'Build in public', 'Practical AI agents, automations, applications, and honest lessons from shipping them.'],
  ['02', 'Make technology useful', 'Clear explanations of tools and systems without unnecessary complexity.'],
  ['03', 'Lead through ambiguity', 'Systems thinking shaped by nearly two decades in the Army and special operations.'],
  ['04', 'Create the next chapter', 'The real process of moving into technology and content creation.'],
];

export default function App() {
  const [open, setOpen] = useState(false);
  return <div>
    <header><a className="logo" href="#top"><b>NZ</b> NOMADICZACK</a><nav className={open ? 'open' : ''}><a href="#work">Work</a><a href="#content">Content</a><a href="#about">About</a><a href="#contact">Contact</a></nav><button className="menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></header>
    <main id="top">
      <section className="hero wrap"><div><p className="eyebrow">BUILDER · CREATOR · SYSTEMS THINKER</p><h1>Building useful systems.<br/><em>Sharing the process.</em></h1><p className="lead">I’m Zack, a U.S. Army Senior NCO, technologist, and content creator. I build AI agents, automation systems, and software tools, then share what I learn along the way.</p><div className="actions"><a className="primary" href="#work">Explore my work <ArrowUpRight/></a><a href="#content"><Play/> Follow the journey</a></div></div><aside><img src="/profile_photo.jpg" alt="Zack Nomad"/><p className="status">● CURRENTLY BUILDING</p><strong>AI systems and creator tools</strong><small>North Carolina · Working globally</small></aside></section>
      <div className="signal"><span>Nearly 20 years of leadership</span><span>Special operations experience</span><span>Complex problems made practical</span><span>Building in public</span></div>
      <section id="work" className="wrap"><div className="heading"><div><p className="eyebrow">SELECTED WORK</p><h2>Systems built to be used.</h2></div><a href="https://github.com/NomadicZack">View GitHub <ArrowUpRight/></a></div><div className="grid">{projects.map((project,i)=><a className="card" href={project.href} key={project.name}><span>0{i+1}</span><p>{project.label}</p><h3>{project.name}</h3><div>{project.description}</div><small>{project.stack}</small><ArrowUpRight/></a>)}</div></section>
      <section id="content" className="wrap split"><div><p className="eyebrow">CONTENT AND FIELD NOTES</p><h2>I share the work,<br/>not just the result.</h2><p className="copy">Expect practical breakdowns, honest experiments, project walkthroughs, and lessons from applying operational thinking to technology.</p><div className="socials"><a href="https://youtube.com/@NomadicZack"><Youtube/>YouTube</a><a href="https://tiktok.com/@NomadicZack"><Play/>TikTok</a><a href="https://instagram.com/TheNomadicZack"><Instagram/>Instagram</a></div></div><article className="feature"><Terminal/><p>COMING NEXT</p><h3>Building an AI-assisted personal operating system</h3><div>A practical look at connecting automation, local knowledge, and multiple AI models into one useful workflow.</div><a href="mailto:zack@nomadiczack.com?subject=New content">Get notified <ArrowUpRight/></a></article></section>
      <section className="wrap"><p className="eyebrow">WHAT GUIDES THE WORK</p><h2>Better way. Clear outcome.</h2><div className="pillars">{pillars.map(p=><article key={p[0]}><span>{p[0]}</span><h3>{p[1]}</h3><p>{p[2]}</p></article>)}</div></section>
      <section id="about" className="wrap about"><div><p className="eyebrow">ABOUT ME</p><h2>Built for complex environments.</h2></div><div className="copy"><p>After nearly two decades of Army service, including experience in special operations, I know how to work autonomously, make decisions with incomplete information, and turn difficult problems into executable plans.</p><p>I am preparing to retire from active-duty military service in 2027 and move into a civilian career in AI, automation, software, and content creation. The uniform is part of my story. Building what comes next is the mission.</p><div className="chips"><span>Applied AI</span><span>Automation</span><span>TypeScript</span><span>React</span><span>Python</span><span>Leadership</span></div></div></section>
      <section id="contact" className="wrap contact"><p className="eyebrow">LET’S BUILD SOMETHING USEFUL</p><h2>Projects, collaborations,<br/>and good problems welcome.</h2><p className="copy">Open to conversations about AI, automation, software, content partnerships, and fully remote civilian opportunities.</p><a className="primary" href="mailto:zack@nomadiczack.com">Start a conversation <Mail/></a></section>
    </main>
    <footer><a className="logo" href="#top"><b>NZ</b> NOMADICZACK</a><p>© {new Date().getFullYear()} Zack Nomad. Built with intent.</p><div><a href="https://github.com/NomadicZack"><Github/></a><a href="https://youtube.com/@NomadicZack"><Youtube/></a></div></footer>
  </div>
}
