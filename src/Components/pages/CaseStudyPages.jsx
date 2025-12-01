import React from 'react';

export const Page1 = () => (
    <div className="page-1-custom">
        <h1 className="section-title">Case Study — Building a MERN Blogging Platform That Finally Treats Writers</h1>
        <div className="intro-content">
            <p className="intro-text">
                Welcome to the journey of creating a writing platform that puts writers first.
            </p>
            <div className="hero-stats">
                <div className="stat-item">
                    <span className="stat-number">68%</span>
                    <span className="stat-label">Writers Left Bad Platforms</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Beta Retention Rate</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">45%</span>
                    <span className="stat-label">Faster Content Discovery</span>
                </div>
            </div>
        </div>
    </div>
);

export const Page2 = () => (
    <div className="page-2-custom">
        <h1 className="section-title">1. Where It Started — The Moment I Realized the Problem Wasn't Technology</h1>
        <div className="story-layout">
            <div className="story-text">
                <p>This project didn't begin as "just another MERN app."</p>
                <p>It began the moment I asked myself a simple but painful question:</p>
                <blockquote className="story-quote">
                    "Why does writing online still feel worse than writing in a Google Doc?"
                </blockquote>
                <p>I've seen talented creators drop entire projects just because the editor kept breaking their flow.</p>
                <p>And if you've ever written in a right-to-left language, you already know the chaos:</p>
                <ul className="problem-list">
                    <li>misaligned sentences</li>
                    <li>random jumps</li>
                    <li>broken cursor behavior</li>
                    <li>fonts that look like they escaped from Windows XP</li>
                </ul>
            </div>
            <div className="story-visual">
                <div className="problem-illustration">
                    <div className="broken-editor-icon">💻❌</div>
                    <p>Broken RTL Support</p>
                </div>
            </div>
        </div>
    </div>
);

export const Page3 = () => (
    <div className="page-3-custom">
        <h1 className="section-title">2. Research — Understanding What Actually Hurts Writers</h1>
        <div className="research-grid">
            <div className="research-card">
                <h3>User Interviews</h3>
                <p>30-person test group revealed critical pain points</p>
                <div className="card-stat">68%</div>
            </div>
            <div className="research-card">
                <h3>Key Finding</h3>
                <p>Editors keep interrupting writing flow</p>
                <div className="card-quote">"I spend more time fighting the editor than writing"</div>
            </div>
            <div className="research-card">
                <h3>RTL Issues</h3>
                <p>Right-to-left languages practically broken</p>
                <div className="card-icon">🔄❌</div>
            </div>
            <div className="research-card">
                <h3>Organization</h3>
                <p>Content feels like old file manager</p>
                <div className="card-icon">📁😩</div>
            </div>
        </div>
        <div className="research-goal">
            <h3>The Core Goal</h3>
            <p>Make the writing experience effortless and frictionless — even in complex scripts like Persian and Arabic.</p>
        </div>
    </div>
);

export const Page4 = () => (
    <div className="page-4-custom">
        <h1 className="section-title">3. The Vision — A Writing Experience You Feel Before You See</h1>
        <div className="pillars-layout">
            <div className="pillar pillar-1">
                <div className="pillar-header">
                    <h3>Pillar 1</h3>
                    <div className="pillar-icon">✍️</div>
                </div>
                <h4>A Writing Environment That Never Breaks Your Flow</h4>
                <ul className="pillar-features">
                    <li>React Quill core, heavily rebuilt</li>
                    <li>Custom RTL behavior from scratch</li>
                    <li>Smart direction detection</li>
                    <li>Nastaliq, Vazir, Shabnam fonts</li>
                    <li>Image compression & Drag & Drop</li>
                    <li>Zero-delay cursor movement</li>
                </ul>
                <div className="user-feedback">
                    "It feels like typing in a clean notebook — no friction, no noise."
                </div>
            </div>

            <div className="pillar pillar-2">
                <div className="pillar-header">
                    <h3>Pillar 2</h3>
                    <div className="pillar-icon">🏗️</div>
                </div>
                <h4>Architecture That Scales Quietly in the Background</h4>
                <div className="tech-stack">
                    <div className="stack-item">Node.js + Express</div>
                    <div className="stack-item">Mongoose models</div>
                    <div className="stack-item">Cloudinary storage</div>
                    <div className="stack-item">JWT auth</div>
                    <div className="stack-item">MongoDB indexing</div>
                </div>
                <p className="pillar-desc">Built to support thousands of posts without showing strain.</p>
            </div>

            <div className="pillar pillar-3">
                <div className="pillar-header">
                    <h3>Pillar 3</h3>
                    <div className="pillar-icon">📚</div>
                </div>
                <h4>Content Organization That Actually Makes Sense</h4>
                <ul className="pillar-features">
                    <li>Smart tagging system</li>
                    <li>Multi-layer filters</li>
                    <li>Highlight system</li>
                    <li>MongoDB text search</li>
                </ul>
                <div className="user-feedback">
                    "Finding a specific post among 300 takes me less than 10 seconds now."
                </div>
            </div>
        </div>
    </div>
);

export const Page5 = () => (
    <div className="page-5-custom">
        <h1 className="section-title">4. Development — Where the Real Story Happened</h1>
        <div className="development-story">
            <div className="development-intro">
                <p>This project wasn't a "clean sprint."</p>
                <p>It was a cycle of: <strong>build → break → debug → rethink → optimize → rebuild again</strong></p>
            </div>

            <div className="challenges-grid">
                <div className="challenge-card">
                    <div className="challenge-header">
                        <h4>Challenge 1</h4>
                        <div className="challenge-icon">🌐</div>
                    </div>
                    <h5>Fixing RTL at Browser Level</h5>
                    <p>Browsers treat RTL differently across Chrome, Firefox, Safari.</p>
                    <div className="challenge-solution">
                        <strong>Solution:</strong>
                        <ul>
                            <li>Built Direction Manager module</li>
                            <li>Intercepted cursor movement logic</li>
                            <li>Overrode browser defaults</li>
                            <li>Added custom Quill modules</li>
                        </ul>
                    </div>
                    <div className="challenge-result">Fully stable RTL across all browsers</div>
                    <div className="challenge-time">2 weeks of debugging</div>
                </div>

                <div className="challenge-card">
                    <div className="challenge-header">
                        <h4>Challenge 2</h4>
                        <div className="challenge-icon">⚡</div>
                    </div>
                    <h5>Font Loading Speed</h5>
                    <p>Initial load: 3.2 seconds (destroyed UX)</p>
                    <div className="challenge-solution">
                        <strong>Optimizations:</strong>
                        <ul>
                            <li>Lazy-loaded fonts</li>
                            <li>Split font families</li>
                            <li>Preconnect to CDN</li>
                            <li>Font caching strategy</li>
                        </ul>
                    </div>
                    <div className="challenge-result">Final load: 1.3 seconds</div>
                    <div className="challenge-impact">Instant writer satisfaction</div>
                </div>

                <div className="challenge-card">
                    <div className="challenge-header">
                        <h4>Challenge 3</h4>
                        <div className="challenge-icon">💾</div>
                    </div>
                    <h5>Draft System Without Losing Data</h5>
                    <p>Writers losing content is unforgivable</p>
                    <div className="challenge-solution">
                        <strong>Solution:</strong>
                        <ul>
                            <li>Encrypted local storage</li>
                            <li>Sync every few seconds</li>
                            <li>Conflict resolution</li>
                            <li>Auto-restore on crash</li>
                        </ul>
                    </div>
                    <div className="challenge-result">45% drop in content loss</div>
                </div>
            </div>
        </div>
    </div>
);

export const Page6 = () => (
    <div className="page-6-custom">
        <h1 className="section-title">5. Measurable Results — The Proof That the Approach Worked</h1>
        <div className="results-dashboard">
            <div className="metrics-grid">
                <div className="metric-card performance">
                    <h3>Performance</h3>
                    <div className="metric-item">
                        <span className="metric-value">92/100</span>
                        <span className="metric-label">Lighthouse Score</span>
                    </div>
                    <div className="metric-item">
                        <span className="metric-value">45% → 20%</span>
                        <span className="metric-label">Mobile Bounce Rate</span>
                    </div>
                    <div className="metric-item">
                        <span className="metric-value">15min → 7min</span>
                        <span className="metric-label">Writing Time</span>
                    </div>
                    <div className="metric-item">
                        <span className="metric-value">500+</span>
                        <span className="metric-label">Supported Formats</span>
                    </div>
                </div>

                <div className="metric-card experience">
                    <h3>User Experience</h3>
                    <div className="metric-item">
                        <span className="metric-value">0</span>
                        <span className="metric-label">Security Incidents</span>
                    </div>
                    <div className="metric-item">
                        <span className="metric-value">95%</span>
                        <span className="metric-label">Beta Retention</span>
                    </div>
                    <div className="metric-item">
                        <span className="metric-value">40%</span>
                        <span className="metric-label">Faster Discovery</span>
                    </div>
                    <div className="metric-item">
                        <span className="metric-value">100%</span>
                        <span className="metric-label">RTL Accuracy</span>
                    </div>
                </div>
            </div>

            <div className="results-validation">
                <p>These numbers validated months of deep work under the hood.</p>
            </div>
        </div>
    </div>
);

export const Page7 = () => (
    <div className="page-7-custom">
        <h1 className="section-title">6. Architectural Decisions That Defined the Project</h1>
        <div className="decisions-layout">
            <div className="trade-offs-section">
                <h3>Trade-offs I Accepted</h3>
                <div className="trade-off-list">
                    <div className="trade-off-item">
                        <div className="trade-off-icon">🔧</div>
                        <div className="trade-off-content">
                            <strong>Rebuilt parts of Quill</strong>
                            <p>Instead of using it as-is</p>
                        </div>
                    </div>
                    <div className="trade-off-item">
                        <div className="trade-off-icon">☁️</div>
                        <div className="trade-off-content">
                            <strong>Moved all media to Cloudinary</strong>
                            <p>To avoid server overhead</p>
                        </div>
                    </div>
                    <div className="trade-off-item">
                        <div className="trade-off-icon">📈</div>
                        <div className="trade-off-content">
                            <strong>Chose scalability over rapid development</strong>
                            <p>For long-term stability</p>
                        </div>
                    </div>
                    <div className="trade-off-item">
                        <div className="trade-off-icon">🔄</div>
                        <div className="trade-off-content">
                            <strong>Used Redux for predictable sessions</strong>
                            <p>Over Context API</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="decisions-quote">
                <blockquote>
                    "These weren't shortcuts. These were decisions for long-term stability."
                </blockquote>
            </div>
        </div>
    </div>
);

export const Page8 = () => (
    <div className="page-8-custom">
        <h1 className="section-title">7. Lessons I Learned Along the Way</h1>
        <div className="lessons-grid">
            <div className="lesson-category architecture">
                <h3>🏗️ Architecture</h3>
                <ul className="lesson-list">
                    <li>Separation of layers accelerates development</li>
                    <li>Indexing is a hidden superpower</li>
                    <li>Security must be part of the architecture, not an afterthought</li>
                </ul>
            </div>

            <div className="lesson-category experience">
                <h3>👥 User Experience</h3>
                <ul className="lesson-list">
                    <li>Writing is an emotional process</li>
                    <li>Every millisecond of performance changes the writer's mood</li>
                    <li>True simplicity comes from removing complexity, not hiding it</li>
                </ul>
            </div>
        </div>
    </div>
);

export const Page9 = () => (
    <div className="page-9-custom">
        <h1 className="section-title">8. The Road Ahead — Where This Platform Is Going Next</h1>
        <div className="roadmap-timeline">
            <div className="timeline-phase">
                <h3>Next 3 Months</h3>
                <div className="phase-features">
                    <div className="feature-item">🤖 AI-powered content suggestions</div>
                    <div className="feature-item">📊 Analytics dashboard for authors</div>
                    <div className="feature-item">📱 Full PWA support</div>
                    <div className="feature-item">👥 Collaborative writing mode</div>
                </div>
            </div>

            <div className="timeline-phase">
                <h3>6–12 Months</h3>
                <div className="phase-features">
                    <div className="feature-item">📱 React Native mobile app</div>
                    <div className="feature-item">🏢 Multi-tenant architecture</div>
                    <div className="feature-item">📢 Social media publishing integration</div>
                    <div className="feature-item">⚡ Real-time editing & syncing</div>
                </div>
            </div>

            <div className="ongoing-note">
                <p>This project is far from finished — it's evolving.</p>
            </div>
        </div>
    </div>
);

export const Page10 = () => (
    <div className="page-10-custom">
        <h1 className="section-title">9. Final Thoughts — Why This Project Matters to Me</h1>
        <div className="final-thoughts">
            <div className="thought-content">
                <p>This wasn't a "MERN side project."</p>
                <p>This was a reminder of why I build things:</p>
                <blockquote className="final-quote">
                    "Technology should never get in the writer's way."
                </blockquote>
            </div>

            <div className="platform-achievements">
                <h3>The editor now:</h3>
                <div className="achievement-grid">
                    <div className="achievement-item">✨ feels clean</div>
                    <div className="achievement-item">⚡ loads fast</div>
                    <div className="achievement-item">🔄 respects RTL</div>
                    <div className="achievement-item">📈 scales quietly</div>
                    <div className="achievement-item">🎯 gives writers freedom</div>
                </div>
            </div>

            <div className="final-message">
                <p>If a tool doesn't protect your flow, it's not doing its job.</p>
                <p>This platform finally does.</p>
            </div>
        </div>
    </div>
);
