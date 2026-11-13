import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  X,
  Send,
  User,
  ArrowRight,
  RefreshCw,
  Minus,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  action?: {
    label: string;
    target: string;
  };
}

interface AIChatbotProps {
  onNavigatePage?: (page: string) => void;
}

const QUICK_PROMPTS = [
  'What AI & automation services do you build?',
  'How do you modernize legacy software?',
  'What is your tech stack and delivery model?',
  'How fast can we start a project?',
  'Can I get an engineering estimate?',
];

// Contextual Knowledge Base for NeoMinds TechHub
function getAIResponse(userInput: string): { text: string; action?: { label: string; target: string } } {
  const query = userInput.toLowerCase();

  if (query.includes('ai') || query.includes('agent') || query.includes('llm') || query.includes('automation') || query.includes('machine learning')) {
    return {
      text: "At NeoMinds TechHub, we engineer production-grade AI systems, including:\n\n• **Autonomous Multi-Agent Pipelines**: Task orchestration, tool-calling agents, and autonomous workflows.\n• **Enterprise RAG & Knowledge Bases**: High-precision vector retrieval over your private data with zero hallucination.\n• **Fine-Tuned LLMs & Embeddings**: Custom domain models optimized for latency, cost, and high throughput.\n• **AI-Native Web & Mobile Apps**: Fluid interactive interfaces powered by real-time streaming intelligence.\n\nWould you like to schedule a technical AI discovery call with our architects?",
      action: { label: 'Explore AI Services', target: 'ai-services' },
    };
  }

  if (query.includes('legacy') || query.includes('moderniz') || query.includes('refactor') || query.includes('migrate') || query.includes('monolith')) {
    return {
      text: "Our **Legacy App Modernization** methodology eliminates technical debt without halting ongoing business operations:\n\n• **Zero-Downtime Incremental Refactoring**: Strangler-fig architectural pattern for gradual microservice migration.\n• **Cloud Migration**: Transitioning on-prem or fragile VMs to containerized, auto-scaling Kubernetes/AWS/GCP infrastructure.\n• **Database Optimization**: Query plan tuning, read/write replicas, and schema normalization to handle 10x traffic surges.\n• **Full Code Ownership**: Clean, maintainable TypeScript/Python code with full CI/CD test coverage.",
      action: { label: 'Discuss Modernization', target: '#contact' },
    };
  }

  if (query.includes('stack') || query.includes('technolog') || query.includes('framework') || query.includes('language') || query.includes('react') || query.includes('python')) {
    return {
      text: "Our core engineering tech stack includes:\n\n• **Frontend & Mobile**: React 19, TypeScript, Next.js, React Native, Tailwind CSS, GSAP for high-performance motion.\n• **Backend & APIs**: Node.js, Python (FastAPI/Django), Go, REST & GraphQL, Redis caching.\n• **Data & AI**: PostgreSQL, MongoDB, Pinecone, LangChain, LlamaIndex, PyTorch, Hugging Face.\n• **Cloud & DevOps**: AWS, Google Cloud, Docker, Kubernetes, Terraform, zero-downtime GitHub Actions CI/CD.\n\nEvery project is delivered with 100% clean architecture and comprehensive test harnesses.",
      action: { label: 'View Case Studies', target: 'portfolio' },
    };
  }

  if (query.includes('time') || query.includes('fast') || query.includes('start') || query.includes('sprint') || query.includes('schedule') || query.includes('week')) {
    return {
      text: "We prioritize velocity and architectural precision:\n\n• **Kickoff**: We ramp up a dedicated engineering pod within **1 to 2 weeks** following technical scoping.\n• **Weekly Sprints**: Working, demonstrable software increments delivered every single Friday — zero consulting fluff.\n• **Direct Access**: You communicate directly with lead engineers and architects via dedicated Slack channels and sprint reviews.\n• **Code Ownership**: You retain 100% intellectual property and git repository ownership from Day 1.",
      action: { label: 'Start a Conversation', target: '#contact' },
    };
  }

  if (query.includes('price') || query.includes('cost') || query.includes('estimate') || query.includes('rate') || query.includes('budget') || query.includes('quote')) {
    return {
      text: "We offer flexible, outcome-driven engagement models:\n\n• **Dedicated Engineering Pods**: Senior full-stack, cloud, and AI engineers working exclusively on your product backlog.\n• **Fixed-Milestone Builds**: Clear architectural deliverables with guaranteed deadlines and predictable budgets.\n• **Technical Discovery**: Rapid 2-week architectural blueprints and clickable prototypes before full-scale build.\n\nSend us a brief overview of your technical requirements and our solutions leads will deliver an estimate within 24 hours.",
      action: { label: 'Request an Estimate', target: '#contact' },
    };
  }

  if (query.includes('team') || query.includes('founder') || query.includes('who') || query.includes('location') || query.includes('about')) {
    return {
      text: "NeoMinds TechHub is an enterprise B2B engineering partner led by experienced technology architects:\n\n• **Ali Asgar** — Founder & CEO\n• **Abdul Khadar** — Co-founder & Engineering Lead\n• **Syeda Sidrah Fatima** — Operations Manager\n• Supported by specialist pods across Backend, DevOps, Product, Frontend, and AI Automation.\n\nWe partner with high-growth startups and global enterprises across EdTech, HealthTech, Logistics, and E-Commerce.",
      action: { label: 'Meet the Team', target: 'about-us' },
    };
  }

  if (query.includes('client') || query.includes('case') || query.includes('project') || query.includes('review') || query.includes('work')) {
    return {
      text: "We partner with visionary companies to deliver mission-critical digital products, including:\n\n• **ByteXL**: Scalable learning management & coding exam platform supporting 100,000+ active learners with 99.99% uptime.\n• **Fero**: Autonomous freight intelligence & AI supply chain automation.\n• **Interzoon**: High-throughput enterprise web architectures and API engines.\n• **Expiroo & AiGuroo**: Real-time smart notification workflows and predictive decisioning engines.\n\nWould you like to review our full case study portfolio?",
      action: { label: 'Explore Portfolio', target: 'portfolio' },
    };
  }

  if (query.includes('contact') || query.includes('email') || query.includes('phone') || query.includes('call') || query.includes('reach') || query.includes('number')) {
    return {
      text: "You can reach the NeoMinds TechHub team directly via:\n\n• **Email**: [letstalk@neomindstechhub.com](mailto:letstalk@neomindstechhub.com)\n• **Direct Line (UK)**: [+44 7780 395866](tel:+447780395866)\n• **Headquarters Line (India)**: [+91 95156 54804](tel:+919515654804)\n\nWe typically respond to technical scopes and RFQ inquiries within 1 business day.",
      action: { label: 'Go to Contact Page', target: 'contacts' },
    };
  }

  if (query.includes('hello') || query.includes('hi') || query.includes('hey') || query.includes('good morning') || query.includes('good afternoon')) {
    return {
      text: "Hello! Welcome to NeoMinds TechHub. I can help answer questions about our software development capabilities, AI agent integrations, cloud modernization, or connect you with our lead architects for a project scope estimate. What are you building today?",
      action: { label: 'Talk With Our Team', target: '#contact' },
    };
  }

  return {
    text: "Thanks for reaching out! NeoMinds TechHub specializes in custom software engineering, autonomous AI systems, legacy modernization, and scalable cloud architectures. Our engineering pods partner with founders and technical leaders to deliver production-ready software every sprint.\n\nWould you like to discuss your project scope directly with our solutions team?",
    action: { label: 'Contact Engineering Leads', target: '#contact' },
  };
}

export const AIChatbot: React.FC<AIChatbotProps> = ({ onNavigatePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPoppedBubble, setHasPoppedBubble] = useState(false);
  const [isBubbleDismissed, setIsBubbleDismissed] = useState(false);
  const [isLauncherHovered, setIsLauncherHovered] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'ai',
      text: "Hello! 👋 I'm **NeoMinds AI**. Whether you're planning an AI agent pipeline, modernizing legacy systems, or seeking an engineering estimate, I'm here to help.",
      timestamp: 'Just now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-pop the chat teaser bubble after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasPoppedBubble(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll message list
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 250);
    }
  }, [isOpen]);

  const handleSendMessage = useCallback((textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Realistic typing delay
    setTimeout(() => {
      const response = getAIResponse(text);
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.text,
        timestamp: 'Just now',
        action: response.action,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  }, [inputMessage]);

  const handleActionClick = (target: string) => {
    if (target.startsWith('#')) {
      const el = document.getElementById(target.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (onNavigatePage) {
        onNavigatePage('contacts');
      }
    } else if (onNavigatePage) {
      onNavigatePage(target);
    }
    setIsOpen(false);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'ai',
        text: "Chat refreshed. How can NeoMinds TechHub assist your engineering goals today?",
        timestamp: 'Just now',
      },
    ]);
  };

  return (
    <>
      {/* ========================================================
          1. CHAT BUBBLE POPPER (Teaser Bubble Above Launcher)
          ======================================================== */}
      {!isOpen && hasPoppedBubble && !isBubbleDismissed && (
        <div
          role="region"
          aria-label="AI Chat Assistant Notification"
          className="nm-ai-chat-bubble-pop"
          style={{
            position: 'fixed',
            bottom: '96px',
            right: '24px',
            maxWidth: '310px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '14px 16px',
            boxShadow: '0 16px 36px -10px rgba(0, 0, 0, 0.22), 0 0 0 1px rgba(0, 0, 0, 0.08)',
            zIndex: 9998,
            cursor: 'pointer',
            animation: 'nmBubblePop 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
          }}
          onClick={() => {
            setIsOpen(true);
            setIsBubbleDismissed(true);
          }}
        >
          {/* Bot Avatar Icon */}
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: '#000000',
              border: '1px solid rgba(254, 98, 0, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <img
              src="/images/neominds-logo.png"
              alt="NeoMinds AI"
              style={{
                width: '22px',
                height: '22px',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#fe6200',
                }}
              >
                NeoMinds AI Assistant
              </span>
              <button
                type="button"
                aria-label="Dismiss message"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsBubbleDismissed(true);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '2px',
                  cursor: 'pointer',
                  color: '#9ca3af',
                  lineHeight: 1,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <X size={14} />
              </button>
            </div>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                color: '#111111',
                margin: '4px 0 0 0',
                lineHeight: 1.4,
                fontWeight: 500,
              }}
            >
              Have a question about our AI services or custom software? Ask me anytime!
            </p>
          </div>

          {/* Small Speech Bubble Triangle Arrow */}
          <div
            style={{
              position: 'absolute',
              bottom: '-8px',
              right: '28px',
              width: 0,
              height: 0,
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderTop: '8px solid #ffffff',
            }}
          />
        </div>
      )}

      {/* ========================================================
          2. FLOATING TRIGGER BUTTON (Bottom-Right Action Button)
          ======================================================== */}
      <button
        type="button"
        onClick={() => {
          setIsOpen((prev) => !prev);
          setIsBubbleDismissed(true);
        }}
        onMouseEnter={() => setIsLauncherHovered(true)}
        onMouseLeave={() => setIsLauncherHovered(false)}
        aria-label={isOpen ? 'Close AI Chat' : 'Open AI Chat with NeoMinds'}
        className="nm-ai-chat-launcher"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          backgroundColor: (isOpen || isLauncherHovered) ? '#f0ece2' : '#000000',
          border: '2px solid #fe6200',
          boxShadow: (isOpen || isLauncherHovered)
            ? '0 8px 28px -4px rgba(254, 98, 0, 0.45), 0 4px 14px rgba(240, 236, 226, 0.4)'
            : '0 8px 28px -4px rgba(254, 98, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: (isOpen || isLauncherHovered) ? '#111111' : '#ffffff',
          cursor: 'pointer',
          zIndex: 9999,
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.22s ease, box-shadow 0.22s ease',
        }}
      >
        {isOpen ? (
          <X size={24} color="#111111" strokeWidth={2.4} />
        ) : (
          <>
            <img
              src="/images/neominds-logo.png"
              alt="NeoMinds AI"
              style={{
                width: '32px',
                height: '32px',
                objectFit: 'contain',
                display: 'block',
              }}
            />
            {/* Pulsing online status dot */}
            <span
              style={{
                position: 'absolute',
                top: '2px',
                right: '2px',
                width: '13px',
                height: '13px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                border: (isOpen || isLauncherHovered) ? '2px solid #f0ece2' : '2px solid #000000',
              }}
            />
          </>
        )}
      </button>

      {/* ========================================================
          3. INTERACTIVE CHAT WINDOW (Floating AI Consultation Dialog)
          ======================================================== */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="NeoMinds AI Assistant"
          className="nm-ai-chat-window"
          style={{
            position: 'fixed',
            bottom: '96px',
            right: '24px',
            width: 'min(410px, calc(100vw - 32px))',
            height: 'min(620px, calc(100vh - 120px))',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            boxShadow: '0 24px 60px -15px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 9999,
            animation: 'nmWindowSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              backgroundColor: '#0a0a0a',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: '#000000',
                  border: '1px solid rgba(254, 98, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <img
                  src="/images/neominds-logo.png"
                  alt="NeoMinds AI"
                  style={{
                    width: '24px',
                    height: '24px',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h3
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '15px',
                      fontWeight: 700,
                      margin: 0,
                      color: '#ffffff',
                      lineHeight: 1.2,
                    }}
                  >
                    NeoMinds AI
                  </h3>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '10.5px',
                      fontWeight: 600,
                      color: '#10b981',
                      backgroundColor: 'rgba(16, 185, 129, 0.15)',
                      padding: '2px 6px',
                      borderRadius: '10px',
                    }}
                  >
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                    Online
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '11.5px',
                    color: '#9ca3af',
                    margin: '3px 0 0 0',
                    lineHeight: 1,
                  }}
                >
                  Engineering &amp; Solutions Assistant
                </p>
              </div>
            </div>

            {/* Header controls: Reset / Minimize */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                type="button"
                onClick={handleResetChat}
                title="Restart conversation"
                aria-label="Restart chat"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '6px',
                  color: '#9ca3af',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <RefreshCw size={15} />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '6px',
                  color: '#9ca3af',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Minus size={18} />
              </button>
            </div>
          </div>

          {/* Conversation Feed */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '18px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              backgroundColor: '#fbf9f5',
            }}
          >
            {messages.map((msg) => {
              const isAi = msg.sender === 'ai';
              return (
                <div
                  key={msg.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isAi ? 'flex-start' : 'flex-end',
                    maxWidth: '100%',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      maxWidth: '88%',
                      flexDirection: isAi ? 'row' : 'row-reverse',
                    }}
                  >
                    {/* Small avatar */}
                    <div
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        backgroundColor: isAi ? '#000000' : '#000000',
                        border: isAi ? '1px solid rgba(254, 98, 0, 0.4)' : 'none',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                        overflow: 'hidden',
                      }}
                    >
                      {isAi ? (
                        <img
                          src="/images/neominds-logo.png"
                          alt="NeoMinds AI"
                          style={{
                            width: '18px',
                            height: '18px',
                            objectFit: 'contain',
                            display: 'block',
                          }}
                        />
                      ) : (
                        <User size={14} />
                      )}
                    </div>

                    {/* Bubble Content */}
                    <div
                      style={{
                        padding: '12px 14px',
                        borderRadius: isAi ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
                        backgroundColor: isAi ? '#ffffff' : '#000000',
                        color: isAi ? '#1f2937' : '#ffffff',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                        border: isAi ? '1px solid rgba(0, 0, 0, 0.06)' : 'none',
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '13.5px',
                        lineHeight: 1.5,
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {msg.text}

                      {/* Interactive Action CTA Pill */}
                      {msg.action && (
                        <div style={{ marginTop: '10px' }}>
                          <button
                            type="button"
                            onClick={() => handleActionClick(msg.action!.target)}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              backgroundColor: '#fe6200',
                              color: '#ffffff',
                              border: 'none',
                              borderRadius: '20px',
                              padding: '6px 12px',
                              fontSize: '12px',
                              fontWeight: 600,
                              cursor: 'pointer',
                              fontFamily: "'DM Sans', sans-serif",
                              transition: 'background-color 0.2s ease',
                            }}
                          >
                            <span>{msg.action.label}</span>
                            <ArrowRight size={13} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '10.5px',
                      color: '#9ca3af',
                      marginTop: '4px',
                      padding: isAi ? '0 0 0 34px' : '0 34px 0 0',
                    }}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    backgroundColor: '#000000',
                    border: '1px solid rgba(254, 98, 0, 0.4)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src="/images/neominds-logo.png"
                    alt="NeoMinds AI"
                    style={{
                      width: '16px',
                      height: '16px',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: '8px 14px',
                    borderRadius: '4px 16px 16px 16px',
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span className="nm-typing-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#fe6200' }} />
                  <span className="nm-typing-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#fe6200', animationDelay: '0.2s' }} />
                  <span className="nm-typing-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#fe6200', animationDelay: '0.4s' }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Prompt Chips */}
          <div
            style={{
              padding: '8px 14px',
              backgroundColor: '#ffffff',
              borderTop: '1px solid rgba(0, 0, 0, 0.06)',
              display: 'flex',
              gap: '6px',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleSendMessage(prompt)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11.5px',
                  fontWeight: 500,
                  color: '#4b5563',
                  backgroundColor: '#f3f4f6',
                  border: '1px solid #e5e7eb',
                  borderRadius: '16px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#faf8f5';
                  e.currentTarget.style.borderColor = '#fe6200';
                  e.currentTarget.style.color = '#fe6200';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.color = '#4b5563';
                }}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            style={{
              padding: '12px 14px',
              backgroundColor: '#ffffff',
              borderTop: '1px solid rgba(0, 0, 0, 0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask anything about our tech..."
              aria-label="Message NeoMinds AI"
              style={{
                flex: 1,
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '10px 14px',
                fontSize: '13.5px',
                fontFamily: "'DM Sans', sans-serif",
                color: '#000000',
                outline: 'none',
                backgroundColor: '#fafafa',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#fe6200';
                e.currentTarget.style.backgroundColor = '#ffffff';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.backgroundColor = '#fafafa';
              }}
            />

            <button
              type="submit"
              disabled={!inputMessage.trim()}
              aria-label="Send message"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: inputMessage.trim() ? '#fe6200' : '#e5e7eb',
                color: '#ffffff',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: inputMessage.trim() ? 'pointer' : 'not-allowed',
                transition: 'background-color 0.2s ease, transform 0.15s ease',
                flexShrink: 0,
              }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Global Embedded Styles for Animations */}
      <style>{`
        @keyframes nmBubblePop {
          0% {
            opacity: 0;
            transform: scale(0.6) translateY(14px);
          }
          70% {
            transform: scale(1.04) translateY(-2px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes nmWindowSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes nmTypingBounce {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-4px);
          }
        }

        .nm-typing-dot {
          display: inline-block;
          animation: nmTypingBounce 1.2s infinite ease-in-out;
        }

        .nm-ai-chat-launcher:hover {
          transform: scale(1.08);
          background-color: #f0ece2 !important;
        }
      `}</style>
    </>
  );
};
