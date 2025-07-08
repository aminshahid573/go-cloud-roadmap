import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RoadmapItem } from '../types';
import { GoogleGenAI, Chat } from '@google/genai';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { SparklesIcon } from '../constants';

// --- ICONS ---
const XIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const SendIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
    </svg>
);

const UserIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);

const CopyIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);
const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);


// --- TYPES ---
interface Message {
    role: 'user' | 'model';
    content: string;
}

interface AITutorModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: RoadmapItem | null;
}


const AITutorModal: React.FC<AITutorModalProps> = ({ isOpen, onClose, item }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [chat, setChat] = useState<Chat | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [userInput, setUserInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // --- EFFECT TO SCROLL TO BOTTOM ---
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);
    
    // --- EFFECT TO CONFIGURE MARKED AND HIGHLIGHT.JS ---
    useEffect(() => {
        const renderer = new marked.Renderer();
        
        renderer.code = function({ text: code, lang }: { text: string; lang?: string }): string {
            const language = hljs.getLanguage(lang || '') ? lang || '' : 'plaintext';
            const highlightedCode = hljs.highlight(code, { language, ignoreIllegals: true }).value;
            const stringifiedCode = JSON.stringify(code);
            
            return `
                <div class="code-block-wrapper not-prose">
                    <div class="code-header">
                        <span class="language-name">${language}</span>
                        <button class="copy-button">
                            <span class="copy-text">Copy</span>
                        </button>
                    </div>
                    <pre><code class="hljs language-${language}">${highlightedCode}</code></pre>
                    <textarea class="code-to-copy" style="display: none;">${stringifiedCode}</textarea>
                </div>
            `;
        };

        marked.setOptions({
            renderer,
            gfm: true,
            breaks: true,
        });
    }, []);

    const handleCopyClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        const button = target.closest('.copy-button');
        if (button) {
            const wrapper = button.closest('.code-block-wrapper');
            const textarea = wrapper?.querySelector('.code-to-copy') as HTMLTextAreaElement | null;
            if (textarea) {
                const codeToCopy = JSON.parse(textarea.value);
                navigator.clipboard.writeText(codeToCopy);
                const copyTextSpan = button.querySelector('.copy-text');
                if(copyTextSpan) copyTextSpan.textContent = 'Copied!';
                button.classList.add('copied');
                setTimeout(() => {
                    if(copyTextSpan) copyTextSpan.textContent = 'Copy';
                    button.classList.remove('copied');
                }, 2000);
            }
        }
    }, []);


    // --- EFFECT TO INITIALIZE/RESET CHAT ---
    useEffect(() => {
        if (isOpen && item) {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const newChat = ai.chats.create({
                model: 'gemini-2.5-flash-preview-04-17',
                config: {
                  systemInstruction: `You are an expert Go and Cloud engineering tutor. Your tone is helpful, encouraging, and knowledgeable. You are helping a student learn about the topic: "${item.title}". The student has this initial context: "${item.description}". Format your responses using Markdown. For code examples, always use Go unless asked otherwise. Keep answers concise but thorough.`,
                }
            });
            setChat(newChat);
            setMessages([
                { role: 'model', content: `Hi there! I'm your AI Tutor for **${item.title}**. What would you like to explore? Ask me anything, or try one of the suggestions below.` }
            ]);
        } else {
            setMessages([]);
            setChat(null);
            setError('');
            setIsLoading(false);
            setUserInput('');
        }
    }, [isOpen, item]);

    // --- SEND MESSAGE HANDLER ---
    const handleSendMessage = useCallback(async (prompt?: string) => {
        const messageToSend = prompt || userInput;
        if (!messageToSend || isLoading || !chat) return;

        setIsLoading(true);
        setError('');
        setUserInput('');
        
        setMessages(prev => [...prev, { role: 'user', content: messageToSend }, { role: 'model', content: '' }]);
        
        try {
            const result = await chat.sendMessageStream({ message: messageToSend });
            for await (const chunk of result) {
                setMessages(prev => {
                    const lastMessage = prev[prev.length - 1];
                    if (lastMessage && lastMessage.role === 'model') {
                        // Create a new message object with the updated content (immutable)
                        const updatedMessage = {
                            ...lastMessage,
                            content: (lastMessage.content ?? '') + (chunk.text ?? '')
                        };
                        // Return a new array with the last message replaced
                        return [...prev.slice(0, -1), updatedMessage];
                    }
                    return prev;
                });
            }
        } catch (e) {
            console.error(e);
            const errorMsg = 'Sorry, I encountered a problem. Please check your connection or API key and try again.';
            setMessages(prev => {
                const lastMessage = prev[prev.length - 1];
                if (lastMessage && lastMessage.role === 'model') {
                     // Create a new message object with the error content (immutable)
                    const updatedMessage = { ...lastMessage, content: errorMsg };
                    return [...prev.slice(0, -1), updatedMessage];
                } else {
                    return [...prev, { role: 'model', content: errorMsg }];
                }
            });
            setError(errorMsg);
        } finally {
            setIsLoading(false);
        }
    }, [userInput, isLoading, chat]);

    // --- JSX FOR MESSAGE BUBBLE ---
    const ChatMessage: React.FC<{ message: Message; isLast: boolean }> = ({ message, isLast }) => {
        // This is the key fix: Ensure content is a string before parsing.
        // The error "e.replace is not a function" from marked.js happens when
        // it receives a non-string input, like null or undefined, which can
        // occur during rapid state updates in a streaming response.
        const contentToRender = message.content || '';

        return (
            <div className={`flex items-start gap-4 my-4 ${message.role === 'user' ? 'justify-end' : ''}`}>
                {message.role === 'model' && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                        <SparklesIcon className="w-5 h-5 text-cyan-400" />
                    </div>
                )}
                <div className={`max-w-xl p-4 rounded-2xl ${message.role === 'user' ? 'bg-slate-700/80 rounded-br-lg' : 'bg-slate-800/60 rounded-bl-lg'}`}>
                    <div
                        className="prose prose-sm max-w-none text-slate-300 prose-p:my-2 prose-headings:text-slate-100 prose-strong:text-slate-100 prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-code:bg-slate-700/50 prose-code:text-cyan-300 prose-code:p-1 prose-code:rounded-md prose-pre:bg-transparent prose-pre:p-0 prose-ul:list-disc prose-ul:pl-5"
                        dangerouslySetInnerHTML={{ __html: marked.parse(contentToRender) }}
                    />
                     {isLoading && isLast && message.role === 'model' && (
                        <div className="inline-block w-1 h-4 bg-cyan-400 ml-1 animate-pulse" />
                    )}
                </div>
                 {message.role === 'user' && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center border border-slate-600">
                        <UserIcon />
                    </div>
                )}
            </div>
        );
    };

    const suggestionPrompts = [
        "Explain this to me simply",
        "Give me a real-world Go code example",
        "What are common pitfalls?",
        "How does this relate to other cloud concepts?"
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/60 backdrop-blur-lg flex items-center justify-center p-4 z-50"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.9, y: 20, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                        className="relative w-full max-w-3xl h-[85vh] flex flex-col bg-slate-900/80 border border-slate-700/50 rounded-2xl shadow-2xl shadow-cyan-900/20"
                    >
                         {/* Header */}
                        <div className="flex-shrink-0 p-4 border-b border-slate-700/50 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-cyan-400"><SparklesIcon className="w-6 h-6" /></span>
                                <div>
                                    <h2 className="text-lg font-bold text-white">AI Tutor</h2>
                                    <p className="text-slate-400 text-xs">Topic: <span className="font-semibold text-slate-300">{item?.title}</span></p>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-2 rounded-full text-slate-500 hover:bg-slate-700 hover:text-white transition-colors">
                                <XIcon />
                            </button>
                        </div>
                        
                        {/* Chat History */}
                        <div className="flex-grow p-4 overflow-y-auto" onClick={handleCopyClick}>
                            {messages.map((msg, index) => (
                                <ChatMessage key={index} message={msg} isLast={index === messages.length - 1} />
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="flex-shrink-0 p-4 border-t border-slate-700/50">
                             {messages.length <= 2 && !isLoading && (
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {suggestionPrompts.map(prompt => (
                                        <button key={prompt} onClick={() => handleSendMessage(prompt)} className="px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700/80 text-slate-300 rounded-full transition-colors">
                                            {prompt}
                                        </button>
                                    ))}
                                </div>
                             )}
                            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="relative">
                                <textarea
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(); } }}
                                    placeholder="Ask a follow-up question..."
                                    rows={1}
                                    className="w-full bg-slate-800/80 border border-slate-700 rounded-lg py-2 pr-12 pl-4 text-sm text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none resize-none"
                                    disabled={isLoading}
                                />
                                <button type="submit" disabled={isLoading || !userInput} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-cyan-500 text-white disabled:bg-slate-600 disabled:cursor-not-allowed hover:bg-cyan-600 transition-all">
                                    <SendIcon />
                                </button>
                            </form>
                        </div>
                         <style>{`
                            .code-block-wrapper { position: relative; background-color: #0c1021; border-radius: 8px; margin: 1em 0; border: 1px solid #2a3b4f; }
                            .code-block-wrapper .code-header { display: flex; justify-content: space-between; align-items: center; padding: 4px 12px; border-bottom: 1px solid #2a3b4f; }
                            .code-block-wrapper .language-name { font-size: 0.75rem; color: #9ca3af; font-family: monospace; }
                            .code-block-wrapper .copy-button { background-color: #334155; border: none; color: #cbd5e1; padding: 4px 8px; border-radius: 4px; cursor: pointer; display: flex; align-items: center; gap: 4px; font-size: 0.75rem; transition: background-color 0.2s; }
                            .code-block-wrapper .copy-button:hover { background-color: #475569; }
                            .code-block-wrapper .copy-button.copied { background-color: #059669; color: white; }
                            .code-block-wrapper pre { margin: 0; padding: 1em; }
                            .copy-button .copy-text::before { content: 'Copy'; }
                            .copy-button.copied .copy-text::before { content: 'Copied!'; }
                         `}</style>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AITutorModal;
