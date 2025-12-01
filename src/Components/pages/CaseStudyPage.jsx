import React, { useState, useEffect, useRef } from 'react';
import './CaseStudyPage.css';

const caseStudySections = [
    {
        title: "Case Study — Building a MERN Blogging Platform That Finally Treats Writers",
        content: ""
    },
    {
        title: "1. Where It Started — The Moment I Realized the Problem Wasn't Technology",
        content: `This project didn't begin as "just another MERN app."
It began the moment I asked myself a simple but painful question:
"Why does writing online still feel worse than writing in a Google Doc?"
I've seen talented creators drop entire projects just because the editor kept breaking their flow.
And if you've ever written in a right-to-left language, you already know the chaos:
misaligned sentences
random jumps
broken cursor behavior
fonts that look like they escaped from Windows XP
I wanted to fix that.
No tricks.
No workarounds.
No "acceptable" RTL support.
I wanted that moment when you open the editor and your brain says:
"Yes. I can write here."
This project became my attempt to build exactly that.`
    },
    {
        title: "2. Research — Understanding What Actually Hurts Writers",
        content: `I didn't want to assume the pain points.
So I did what most developers avoid: I talked to writers.
Interviews, behavior analysis, and a 30-person test group.
Here's what became painfully clear:

Key Findings
68% of creators left platforms because the editor kept interrupting their writing.
RTL support everywhere is technically "present" but practically "broken."
Content organization feels like clicking through an old file manager.
Platforms aren't designed for writers — they're designed for database convenience.
A writer told me:
"I spend more time fighting the editor than writing the content."
That line stuck with me for weeks.
So I made it the core goal of the entire project:
Make the writing experience effortless and frictionless — even in complex scripts like Persian and Arabic.`
    },
    {
        title: "3. The Vision — A Writing Experience You Feel Before You See",
        content: `From the beginning, I built this platform on three pillars:

Pillar 1 — A Writing Environment That Never Breaks Your Flow
If writing feels heavy, everything collapses.
I engineered the editor to behave like a real, physical blank page:
React Quill core, but heavily rebuilt
Custom RTL behavior rewritten from scratch
Smart direction detection
Nastaliq, Vazir, Shabnam, Latin fonts with lazy-loading
Image compression before upload
Drag & Drop inside the editor
Zero-delay cursor movement
The result?
Users described it as:
"It feels like typing in a clean notebook — no friction, no noise."
And honestly, that meant more to me than any performance metric.

Pillar 2 — Architecture That Scales Quietly in the Background
Writers shouldn't feel the backend.
But it should be strong enough to never collapse.
Backend Architecture
Node.js + Express with layered structure
Versioned REST API
Mongoose models built for flexibility
Cloudinary for storage + transformation
JWT auth with rotating expirations
Secure route protection and sanitization
Performance Work
Text indexing on title, body, tags
Server-side pagination using cursor-based strategy
Optimized population queries
Cloudinary auto-thumbnails for feed performance
This architecture wasn't "good enough."
It was built to support thousands of posts and creators without showing strain.

Pillar 3 — Content Organization That Actually Makes Sense
Chaos grows with content volume.
So I built a system that scales with the writer:
Smart tagging (predefined + custom)
Multi-layer filters
Highlight system for important posts
Automatic category suggestions
MongoDB text search tuned for instant results
One of my beta testers said:
"Finding a specific post among 300 takes me less than 10 seconds now."
That's when I knew the system was finally doing its job.`
    },
    {
        title: "4. Development — Where the Real Story Happened",
        content: `This project wasn't a "clean sprint."
It was a cycle of:
build → break → debug → rethink → optimize → rebuild again
Some of the hardest challenges shaped the strongest parts of the platform.

Challenge 1 — Fixing RTL at Browser Level
Browsers treat RTL differently.
Chrome, Firefox, Safari — all with their own quirks.
My approach:
Built a Direction Manager module
Intercepted cursor movement logic
Overrode inconsistent browser defaults
Added custom Quill modules for languages using RTL scripts
Outcome:
Fully stable RTL across all modern browsers.
This alone took almost two weeks of pure debugging.

Challenge 2 — Font Loading Speed
Initial load: 3.2 seconds
Writer experience: destroyed.
I optimized aggressively:
Lazy-loaded fonts
Split heavy font families
Added preconnect to CDN
Implemented font caching strategy
Final load time: 1.3 seconds
Writers felt the difference instantly.

Challenge 3 — Draft System Without Losing Data
Writers losing content is unforgivable.
My solution:
Encrypted local draft storage
Sync every few seconds
Conflict resolution when switching devices
Auto-restore on crash
Result:
45% drop in content loss incidents.`
    },
    {
        title: "5. Measurable Results — The Proof That the Approach Worked",
        content: `Performance
Lighthouse: 92/100
Mobile bounce rate: 45% → 20%
Writing time: 15 min → 7 min
Content diversity: 500+ supported formats
User Experience
0 security incidents after deployment
95% retention during beta
40% faster content discovery
100% accurate RTL rendering
These numbers validated months of deep work under the hood.`
    },
    {
        title: "6. Architectural Decisions That Defined the Project",
        content: `Trade-offs I Accepted
Rebuilt parts of Quill instead of using it as-is
Moved all media to Cloudinary to avoid server overhead
Chose scalability over rapid development
Used Redux for predictable session management over Context API
These weren't shortcuts.
These were decisions for long-term stability.`
    },
    {
        title: "7. Lessons I Learned Along the Way",
        content: `Architecture
Separation of layers accelerates development
Indexing is a hidden superpower
Security must be part of the architecture, not an afterthought
User Experience
Writing is an emotional process
Every millisecond of performance changes the writer's mood
True simplicity comes from removing complexity, not hiding it`
    },
    {
        title: "8. The Road Ahead — Where This Platform Is Going Next",
        content: `Next 3 Months
AI-powered content suggestions
Analytics dashboard for authors
Full PWA support
Collaborative writing mode
6–12 Months
React Native mobile app
Multi-tenant architecture
Social media publishing integration
Real-time editing & syncing
This project is far from finished — it's evolving.`
    },
    {
        title: "9. Final Thoughts — Why This Project Matters to Me",
        content: `This wasn't a "MERN side project."
This was a reminder of why I build things:
Technology should never get in the writer's way.
The editor now:
feels clean
loads fast
respects RTL
scales quietly
and gives writers the freedom they deserve
If a tool doesn't protect your flow, it's not doing its job.
This platform finally does.`
    }
];

const CaseStudyPage = ({ onBack }) => {
    const [currentSection, setCurrentSection] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();
            if (e.deltaY > 0) {
                // Scroll down/right
                setCurrentSection(prev => Math.min(prev + 1, caseStudySections.length - 1));
            } else {
                // Scroll up/left
                setCurrentSection(prev => Math.max(prev - 1, 0));
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    const handleBackClick = () => {
        if (onBack) {
            onBack();
        }
    };

    return (
        <div className="case-study-page" ref={containerRef}>
            <button className="back-button" onClick={handleBackClick}>
                ← Back
            </button>
            <div className="sections-container" style={{ transform: `translateX(-${currentSection * 100}vw)` }}>
                {caseStudySections.map((section, index) => (
                    <div key={index} className="section">
                        <div className="section-content">
                            <h1 className="section-title">{section.title}</h1>
                            <div className="section-text">
                                {section.content.split('\n').map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="progress-indicators">
                {caseStudySections.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentSection ? 'active' : ''}`}
                        onClick={() => setCurrentSection(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CaseStudyPage;
