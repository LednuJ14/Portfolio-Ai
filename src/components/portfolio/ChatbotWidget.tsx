import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  sources?: string[];
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hi there! 👋 I'm JD. How can I help you today?",
    sender: 'bot',
    timestamp: new Date(),
  },
];

export const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const FLOWISE_RUN_URL = import.meta.env?.VITE_FLOWISE_RUN_URL || '';
  const FLOWISE_API_KEY = import.meta.env?.VITE_FLOWISE_API_KEY || '';
  const isDev = import.meta.env?.DEV;
  const USE_DIRECT_FLOWISE = Boolean(isDev && FLOWISE_RUN_URL);
  const CHAT_API_URL = USE_DIRECT_FLOWISE ? FLOWISE_RUN_URL : '/api/chat';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);
  useEffect(() => {
    const onOpen = (_e: Event) => setIsOpen(true);
    window.addEventListener('open-chat', onOpen);
    return () => window.removeEventListener('open-chat', onOpen);
  }, []);

  const ensureSession = async () => {
    if (sessionId) return sessionId;
    try {
      const existing = localStorage.getItem('chat_session_id');
      const sid = existing || (crypto?.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`);
      localStorage.setItem('chat_session_id', sid);
      setSessionId(sid);
      return sid;
    } catch {
      const sid = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      setSessionId(sid);
      return sid;
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    setIsLoading(true);
    setError(null);

    try {
      const sid = await ensureSession();
      const headers: Record<string, string> = {
        'Content-Type': 'application/json'
      };
      if (USE_DIRECT_FLOWISE && FLOWISE_API_KEY) {
        headers['Authorization'] = `Bearer ${FLOWISE_API_KEY}`;
      }
      const res = await fetch(CHAT_API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          question: userMessage.text,
          sessionId: sid
        })
      });
      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || 'Chat service error');
      }
      const data = await res.json();
      const answer =
        (data && (data.answer ?? data.text ?? data.message)) ||
        "Sorry, I couldn't process that.";
      const sourcesRaw =
        (data && (data.sources ?? data.sourceDocuments)) || undefined;
      const sources: string[] | undefined = Array.isArray(sourcesRaw)
        ? sourcesRaw.map((s: unknown) => {
            if (typeof s === 'string') return s;
            if (s && typeof s === 'object') {
              const obj = s as Record<string, unknown>;
              const candidates = [
                'source_name',
                'sourceName',
                'source',
                'name',
                'metadata',
              ];
              for (const key of candidates) {
                const val = obj[key];
                if (typeof val === 'string') return val;
                if (key === 'metadata' && val && typeof val === 'object') {
                  const meta = val as Record<string, unknown>;
                  const m = meta['source'] ?? meta['fileName'] ?? meta['id'];
                  if (typeof m === 'string') return m;
                }
              }
              return JSON.stringify(obj);
            }
            return JSON.stringify(s);
          })
        : undefined;
      const botMessage: Message = {
        id: userMessage.id + 1,
        text: answer,
        sender: 'bot',
        timestamp: new Date(),
        sources
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err: unknown) {
      let message = 'Chat service temporarily unavailable. Please try again.';
      if (err && typeof err === 'object' && 'message' in err && typeof (err as { message?: unknown }).message === 'string') {
        message = (err as { message: string }).message || message;
      }
      setError(message);
      const botMessage: Message = {
        id: userMessage.id + 1,
        text: message,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="premium-card rounded-3xl overflow-hidden shadow-premium-lg flex flex-col h-[500px] max-h-[70vh]">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-primary to-accent flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-primary-foreground">JD</h3>
                <p className="text-xs text-primary-foreground/80">{isLoading ? 'Thinking...' : 'Usually replies instantly'}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5 text-primary-foreground" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end gap-2 ${
                  message.sender === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user'
                      ? 'bg-primary'
                      : 'bg-muted'
                  }`}
                >
                  {message.sender === 'user' ? (
                    <User className="h-4 w-4 text-primary-foreground" />
                  ) : (
                    <Bot className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
                <div
                  className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-md'
                      : 'bg-muted text-foreground rounded-bl-md'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'user'
                        ? 'text-primary-foreground/70'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
            {error && (
              <div className="text-xs text-destructive mt-2">{error}</div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-border bg-background">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 h-11 rounded-xl border-border bg-muted/50 focus:border-primary"
              />
              <Button
                type="submit"
                size="icon"
                className="h-11 w-11 rounded-xl premium-button border-0"
                disabled={!inputValue.trim() || isLoading}
              >
                <Send className="h-5 w-5 text-primary-foreground" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full premium-button flex items-center justify-center shadow-glow-lg transition-all duration-300 ${
          isOpen ? 'rotate-0' : 'animate-pulse-glow'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-primary-foreground" />
        ) : (
          <MessageCircle className="h-6 w-6 text-primary-foreground" />
        )}
      </button>
    </>
  );
};
