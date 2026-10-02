import { useEffect, useRef, useState } from 'react'
import './App.css'

const questions = [
  ['What exactly is Cortex?', 'Cortex is an AI assistant you chat with in plain language. It can help you explore ideas, draft and edit text, understand code, and work through questions in one conversation.'],
  ['Is there a free plan?', 'Yes. The free plan is a great place to start, with everyday questions and a generous message allowance. You can upgrade when you need more.'],
  ['Can it help with coding?', 'Absolutely. Ask Cortex to explain an error, review a snippet, sketch an approach, or help you get unstuck. Always review generated code before using it.'],
  ['Are my conversations private?', 'This demo keeps conversations in your browser only. A production version should clearly explain its privacy and data-retention practices.'],
  ['Can I use it with my team?', 'The Team plan is designed for shared workspaces, collaboration, and administrative controls.'],
]

const useCases = [
  ['Students & learners', 'Break down hard topics, build study plans, and check your understanding with quick quizzes.', '✳'],
  ['Developers', 'Debug stubborn errors, generate a first draft, and review code before you push it.', '</>'],
  ['Writers', 'Find a sharper opening, shape an outline, or make a rough draft sound more like you.', 'Aa'],
  ['Curious minds', 'Explore a new idea, compare perspectives, and follow the questions that come next.', '↗'],
]

const plans = [
  { name: 'Free', description: 'For trying things out and everyday questions.', price: '$0', period: 'forever', features: ['Standard response speed', 'Up to 30 messages a day', 'Conversation history (7 days)', 'Web and mobile access'] },
  { name: 'Plus', description: 'For people who rely on Cortex every day.', price: '$20', period: 'per month', popular: true, features: ['Faster, priority responses', 'Unlimited messages', 'Full conversation history', 'Image understanding', 'Early access to new models'] },
  { name: 'Team', description: 'For teams that want shared context.', price: '$40', period: 'per member / month', features: ['Everything in Plus', 'Shared team workspace', 'Admin controls & SSO', 'Usage analytics', 'Priority support'] },
]

function Brand({ light = false }) {
  return <a className={`brand${light ? ' brand-light' : ''}`} href="/" aria-label="Cortex home"><span className="brand-mark" aria-hidden="true">✦</span><span>Cortex</span></a>
}

function Header() {
  return <header className="site-header"><Brand /><nav className="main-nav" aria-label="Main navigation">{[['Features', '#features'], ['How it works', '#how-it-works'], ['Use cases', '#use-cases'], ['Pricing', '#pricing'], ['FAQ', '#faq']].map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav><div className="header-actions"><a className="sign-in-link" href="/sign-in">Sign in</a><a className="button button-green button-small" href="/chat">Start chatting <span aria-hidden="true">→</span></a></div></header>
}

function Footer() {
  return <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><Brand light /><p>An AI assistant that thinks alongside you — for writing, code, research, and ideas.</p><div className="social-links"><a href="https://x.com" aria-label="Cortex on X">𝕏</a><a href="https://github.com" aria-label="Cortex on GitHub">⌘</a><a href="https://linkedin.com" aria-label="Cortex on LinkedIn">in</a></div></div><div className="footer-column"><h3>Product</h3><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#pricing">Pricing</a><a href="/chat">Open chat</a></div><div className="footer-column"><h3>Company</h3><a href="#use-cases">Use cases</a><a href="#faq">FAQ</a><a href="#top">About Cortex</a></div><div className="footer-column"><h3>Resources</h3><a href="#faq">Documentation</a><a href="#faq">Help center</a><a href="#top">Status</a></div></div><div className="footer-bottom"><span>© 2026 Cortex Labs. All rights reserved.</span><div><a href="#faq">Privacy</a><a href="#faq">Terms</a><a href="#faq">Cookies</a></div></div></footer>
}

function LandingPage() {
  const [openFaq, setOpenFaq] = useState(0)
  return <div className="landing-page"><Header /><main>
    <section className="hero-section" id="top"><div className="hero-copy"><span className="eyebrow-pill"><i /> Now with image understanding</span><h1>Your intelligent<br className="desktop-break" /> thinking partner</h1><p>Cortex helps you write, code, research, and brainstorm — instantly. Ask anything in plain language and get clear, considered answers that keep up with the conversation.</p><div className="hero-actions"><a href="/chat" className="button button-green">Start chatting free <span aria-hidden="true">→</span></a><a href="#how-it-works" className="button button-quiet"><span className="play-icon">▶</span> See how it works</a></div><ul className="hero-notes"><li>No credit card required</li><li>Free plan available</li><li>Works in your browser</li></ul></div><div className="hero-visual" role="img" aria-label="Cortex assistant workspace preview"><div className="hero-image-wash" /><div className="floating-prompt"><span className="prompt-avatar">✦</span><div><small>YOU ASKED</small><p>Can you help me make sense of this?</p></div></div><div className="floating-answer"><div className="answer-brand"><span>✦</span> Cortex <small>just now</small></div><p>Of course. Let's break it down together, one step at a time.</p><div className="answer-lines"><i /><i /><i /></div></div><span className="visual-caption">A little more clarity, right when you need it.</span></div><a className="scroll-cue" href="#proof" aria-label="Scroll to see more">↓</a></section>
    <section className="section capabilities-section" id="features"><div className="section-heading"><span className="eyebrow">Capabilities</span><h2>One assistant for the way<br className="desktop-break" /> you actually work</h2><p>Cortex is built to be genuinely useful, not just impressive in a demo. Every capability is designed to save you real time.</p></div><div className="capability-grid">{[['01', 'Write with a clearer voice', 'Draft, rewrite, summarize, and find just the right words for the moment.', 'Aa'], ['02', 'Make sense of the complex', 'Turn dense topics into clear explanations, useful outlines, and next steps.', '✳'], ['03', 'Get unstuck in your code', 'Talk through bugs, learn unfamiliar tools, and explore better approaches.', '</>']].map(([number, title, text, icon]) => <article className="capability-item" key={number}><span className="cap-icon">{icon}</span><span className="cap-number">{number}</span><h3>{title}</h3><p>{text}</p><a href="/chat">Try it in chat <span aria-hidden="true">→</span></a></article>)}</div></section>
    <section className="how-section section" id="how-it-works"><div className="how-intro"><span className="eyebrow">How it works</span><h2>From question to answer in three steps</h2><p>There is nothing to configure and nothing to install. If you can type a message, you can use Cortex.</p><div className="tip-box"><span className="tip-icon">✦</span><span>Tip: the more context you give, the better the answer.</span></div></div><div className="steps-list">{[['01', 'Ask in plain language', 'Type a question the way you would say it out loud. No commands, no syntax to learn.'], ['02', 'Get a considered answer', 'Cortex responds with a clear, organized answer and offers useful next steps.'], ['03', 'Refine it together', 'Follow up, ask for changes, or go deeper. The whole thread stays in context.']].map(([n, title, text]) => <article className="step-row" key={n}><strong>{n}</strong><div><h3>{title}</h3><p>{text}</p></div><span aria-hidden="true">↗</span></article>)}</div></section>
    <section className="section use-cases-section" id="use-cases"><div className="section-heading"><span className="eyebrow">Use cases</span><h2>Built for the work you do every day</h2><p>Whether you are studying, shipping, or selling — Cortex adapts to the task in front of you.</p></div><div className="use-case-grid">{useCases.map(([title, text, icon]) => <article className="use-case" key={title}><div className="use-case-art"><span>{icon}</span><i /><i /><i /></div><div className="use-case-copy"><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>
    <section className="section pricing-section" id="pricing"><div className="pricing-heading"><span className="eyebrow">Pricing</span><h2>Simple plans that grow with you</h2><p>Start free and upgrade only when Cortex has earned a place in your daily routine.</p></div><div className="pricing-grid">{plans.map(plan => <article className={`price-card${plan.popular ? ' popular' : ''}`} key={plan.name}>{plan.popular && <span className="popular-tag">Most popular</span>}<h3>{plan.name}</h3><p className="plan-description">{plan.description}</p><div className="price"><strong>{plan.price}</strong><span>{plan.period}</span></div><ul>{plan.features.map(feature => <li key={feature}><span>✓</span>{feature}</li>)}</ul><a href="/chat" className={`button ${plan.popular ? 'button-green' : 'button-outline'}`}>{plan.name === 'Team' ? 'Talk to sales' : plan.name === 'Free' ? 'Get started free' : 'Try Plus'} <span aria-hidden="true">→</span></a></article>)}</div></section>
    <section className="section faq-section" id="faq"><div className="faq-intro"><span className="eyebrow">FAQ</span><h2>Questions, answered</h2><p>Still curious about something? Open the chat and ask Cortex directly — it is happy to explain itself.</p><a className="text-link" href="/chat">Ask Cortex a question <span aria-hidden="true">→</span></a></div><div className="faq-list">{questions.map(([question, answer], index) => <article className={`faq-item${openFaq === index ? ' is-open' : ''}`} key={question}><button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><span className="faq-toggle">{openFaq === index ? '−' : '+'}</span></button>{openFaq === index && <p>{answer}</p>}</article>)}</div></section>
    <section className="closing-cta"><span className="eyebrow-pill"><span>✦</span> Start in seconds</span><h2>Your next great idea is<br className="desktop-break" /> one message away</h2><p>Open the chat and ask Cortex anything — a question, a draft, a bug, or a blank page that needs a plan.</p><div className="hero-actions"><a className="button button-white" href="/chat">Open Cortex chat <span aria-hidden="true">→</span></a><a className="button button-dark-outline" href="#pricing">Compare plans</a></div></section>
  </main><Footer /></div>
}

function makeReply(prompt) {
  const lower = prompt.toLowerCase()
  if (lower.includes('code') || lower.includes('bug') || lower.includes('error')) return `Let's work through this together.\n\nFirst, identify the exact behavior you expected and what happened instead. If you share the relevant code and the full error message, I can help narrow down the cause and suggest a focused fix.\n\nWhat have you tried so far?`
  if (lower.includes('write') || lower.includes('draft') || lower.includes('email')) return `Absolutely. A good first step is to pin down the audience and the one thing you want them to take away.\n\nShare a few details about the tone, length, and goal, and I can shape a draft that sounds like you. Or we can start with a simple outline.`
  if (lower.includes('explain') || lower.includes('learn') || lower.includes('what is')) return `Here's a useful way to approach it: start with the core idea, then connect it to a concrete example.\n\nI can tailor the explanation to your background and go deeper one step at a time. What part should we unpack first?`
  return `That's a thoughtful question. Let's make it manageable: we can clarify what matters most, look at a few possible approaches, and choose a useful next step.\n\nCould you share a little more context about what you're trying to accomplish?`
}

function ChatPage() {
  const [conversations, setConversations] = useState(() => { try { return JSON.parse(localStorage.getItem('cortex-conversations') || '[]') } catch { return [] } })
  const [activeId, setActiveId] = useState(() => new URLSearchParams(window.location.search).get('id'))
  const [draft, setDraft] = useState('')
  const [sending, setSending] = useState(false)
  const endRef = useRef(null)
  const messages = conversations.find(conversation => conversation.id === activeId)?.messages || []

  useEffect(() => { localStorage.setItem('cortex-conversations', JSON.stringify(conversations)) }, [conversations])
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages.length, sending])

  function newChat() { setActiveId(null); setDraft(''); window.history.replaceState({}, '', '/chat') }
  function sendMessage(text = draft) {
    const content = text.trim()
    if (!content || sending) return
    const id = activeId || crypto.randomUUID()
    const now = Date.now()
    const current = conversations.find(conversation => conversation.id === id)
    const userMessage = { role: 'user', content, time: now }
    const next = current ? conversations.map(conversation => conversation.id === id ? { ...conversation, updatedAt: now, messages: [...conversation.messages, userMessage] } : conversation) : [{ id, title: content.slice(0, 42), updatedAt: now, messages: [userMessage] }, ...conversations]
    setConversations(next)
    setActiveId(id)
    setDraft('')
    window.history.replaceState({}, '', `/chat?id=${id}`)
    setSending(true)
    window.setTimeout(() => {
      setConversations(currentConversations => currentConversations.map(conversation => conversation.id === id ? { ...conversation, updatedAt: Date.now(), messages: [...conversation.messages, { role: 'assistant', content: makeReply(content), time: Date.now() }] } : conversation))
      setSending(false)
    }, 700)
  }
  function deleteConversation(id) { setConversations(current => current.filter(conversation => conversation.id !== id)); if (id === activeId) newChat() }

  return <div className="chat-app"><aside className="chat-sidebar"><a href="/" className="sidebar-brand"><Brand /><span className="beta-tag">BETA</span></a><button className="new-chat-button" onClick={newChat}><span>＋</span> New chat <kbd>⌘ K</kbd></button><div className="history-label">RECENT</div><div className="conversation-list">{conversations.map(conversation => <div className={`conversation-link${conversation.id === activeId ? ' selected' : ''}`} key={conversation.id}><button onClick={() => { setActiveId(conversation.id); window.history.replaceState({}, '', `/chat?id=${conversation.id}`) }}>{conversation.title}</button><button className="delete-conversation" onClick={() => deleteConversation(conversation.id)} aria-label={`Delete ${conversation.title}`}>×</button></div>)}</div><div className="sidebar-bottom"><a href="/sign-in"><span className="profile-avatar">G</span><span><strong>Guest account</strong><small>Free plan</small></span><span className="sidebar-more">•••</span></a></div></aside><main className="chat-main"><header className="chat-topbar"><button className="mobile-brand" onClick={newChat}><Brand /></button><span className="model-picker">Cortex <span>⌄</span></span><a className="share-link" href="/sign-in">Sign in <span>↗</span></a></header><div className={`chat-content${messages.length ? ' has-messages' : ''}`}>
    {messages.length === 0 ? <div className="welcome-chat"><div className="chat-sparkle">✦</div><h1>Where should we begin?</h1><p>Ask a question, share an idea, or bring a problem to work through.</p><div className="suggestion-grid">{[['✍', 'Help me write', 'Draft a clear, friendly project update'], ['⌘', 'Untangle some code', 'Help me understand this error'], ['✳', 'Explore an idea', 'Give me a fresh perspective on…']].map(([icon, label, prompt]) => <button key={label} onClick={() => setDraft(prompt)}><span>{icon}</span><strong>{label}</strong><small>{prompt}</small></button>)}</div></div> : <div className="message-thread">{messages.map((message, index) => <article className={`message-row ${message.role}`} key={`${message.time}-${index}`}><span className={message.role === 'assistant' ? 'message-mark' : 'message-user-mark'}>{message.role === 'assistant' ? '✦' : 'G'}</span><div className="message-body"><strong>{message.role === 'assistant' ? 'Cortex' : 'You'}</strong><p>{message.content}</p>{message.role === 'assistant' && <div className="message-tools"><button aria-label="Copy response" title="Copy response" onClick={() => navigator.clipboard?.writeText(message.content)}>▢</button><button aria-label="Good response" title="Good response">♡</button><button aria-label="Bad response" title="Bad response">♧</button></div>}</div></article>)}{sending && <article className="message-row assistant"><span className="message-mark">✦</span><div className="typing-indicator"><i /><i /><i /></div></article>}<div ref={endRef} /></div>}
    <div className="composer-wrap"><form className="chat-composer" onSubmit={event => { event.preventDefault(); sendMessage() }}><textarea value={draft} onChange={event => setDraft(event.target.value)} onKeyDown={event => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); sendMessage() } }} placeholder="Message Cortex" rows="1" aria-label="Message Cortex" /><div className="composer-toolbar"><button type="button" className="composer-tool" title="Attach a file" aria-label="Attach a file" onClick={() => document.getElementById('file-input')?.click()}>＋</button><input id="file-input" type="file" hidden onChange={event => event.target.files?.[0] && setDraft(value => `${value}${value ? '\n' : ''}[Attached: ${event.target.files[0].name}]`)} /><span>⌁ Cortex 1.0</span><button className="send-button" type="submit" disabled={!draft.trim() || sending} aria-label="Send message">↑</button></div></form><p className="composer-disclaimer">Cortex can make mistakes. Check important information.</p></div>
  </div></main></div>
}

function SignInPage() {
  const [submitted, setSubmitted] = useState(false)
  return <main className="auth-page"><a className="auth-back" href="/">← <span>Back to Cortex</span></a><section className="auth-panel"><Brand /><span className="eyebrow">Your thinking partner</span><h1>Welcome back</h1><p>Sign in to pick up where you left off.</p>{submitted ? <div className="auth-success">Check your inbox for a sign-in link.</div> : <form onSubmit={event => { event.preventDefault(); setSubmitted(true) }}><label htmlFor="email">Email address</label><input id="email" type="email" placeholder="you@example.com" required /><button className="button button-green" type="submit">Continue with email <span aria-hidden="true">→</span></button><div className="auth-divider"><span>or</span></div><button className="button button-outline" type="button" onClick={() => setSubmitted(true)}>Continue with Google</button></form>}<small>New to Cortex? <a href="/chat">Try the free chat</a></small></section><span className="auth-footnote">Thoughtful answers. A little more clarity.</span></main>
}

function App() {
  const path = window.location.pathname
  if (path === '/chat' || path.startsWith('/chat/')) return <ChatPage />
  if (path === '/sign-in' || path === '/login') return <SignInPage />
  return <LandingPage />
}

export default App
