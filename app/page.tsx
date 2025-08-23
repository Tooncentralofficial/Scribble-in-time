'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { sendMessage } from '../lib/api';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi there! I'm Uche, your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    // Add user message to chat
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const data = await sendMessage(inputValue);
      
      const botMessage: Message = {
        id: Date.now().toString(),
        content: data.response || "I'm sorry, I couldn't process your request at the moment.",
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Show error message to user
      const errorMessage: Message = {
        id: Date.now().toString(),
        content: "Sorry, I'm having trouble connecting to the server. Please try again later.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = async (action: string) => {
    setInputValue(action);
    // Simulate form submission
    const event = { preventDefault: () => {} } as React.FormEvent;
    await handleSendMessage(event);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-[1024px] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />



        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl">
                Preserve your story in a
                <br />
                way the world will never
                <br />
                forget
              </h1>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Chat Icon - Positioned at the right border of hero section */}
        <div className="fixed right-6 bottom-24 z-50">
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-l-2xl shadow-lg transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>

        {/* Floating Chatbot Widget - Hidden by default */}
        <div className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-50 max-w-sm w-80 ${isChatOpen ? 'block' : 'hidden'}`}>
          {/* Chatbot Window */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">AI</span>
                </div>
                <div>
                  <h3 className="font-semibold">Uche</h3>
                  <p className="text-xs text-blue-100">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Messages */}
            <div className="p-4 space-y-4 h-80 overflow-y-auto bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-3 ${
                    message.isUser ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {!message.isUser && (
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                  )}
                  <div
                    className={`rounded-lg p-3 shadow-sm max-w-xs ${
                      message.isUser
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  {message.isUser && (
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-600 text-xs font-bold">You</span>
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Action Buttons - Only show when no user messages yet */}
              {messages.length <= 1 && (
                <div className="space-y-2 mt-4">
                  <button 
                    onClick={() => handleQuickAction('Help me organize my family photos')}
                    className="w-full bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors text-left"
                  >
                    Help me organize my family photos
                  </button>
                  <button 
                    onClick={() => handleQuickAction('What is Scribble in Time?')}
                    className="w-full bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors text-left"
                  >
                    What is Scribble in Time?
                  </button>
                  <button 
                    onClick={() => handleQuickAction('How should I organize a family story?')}
                    className="w-full bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors text-left"
                  >
                    How should I organize a family story?
                  </button>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 border-t bg-white">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isLoading}
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From story telling to translation, our services are designed to honor your voice and vision.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Top Row - 3 Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
              {/* Service 1 - Audio Storytelling (Featured) */}
              <div className="bg-blue-600 text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16  bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3Z"/>
                    <path d="M19 10v1a7 7 0 0 1-14 0v-1a1 1 0 0 1 2 0v1a5 5 0 0 0 10 0v-1a1 1 0 1 1 2 0Z"/>
                    <path d="M12 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Audio Storytelling</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  We help you share your story your way, capturing your voice in rich audio that brings memories to life while protecting your privacy.
                </p>
              </div>

              {/* Service 2 - Personalized Story Writing */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <img src="/pencil-line.svg" alt="Pencil icon" className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Personalized Story Writing</h3>
                <p className="text-gray-600 text-sm">
                  Our writers craft your experiences into heartfelt narratives that sound like you, blending empathy with literary finesse.
                </p>
              </div>

              {/* Service 3 - Translation Service */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="m5 8 6 6"/>
                    <path d="m4 14 6-6 2-3"/>
                    <path d="M2 5h12"/>
                    <path d="M7 2h1"/>
                    <path d="m22 22-5-10-5 10"/>
                    <path d="M14 18h6"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Translation Service</h3>
                <p className="text-gray-600 text-sm">
                  We translate your story with care, preserving the emotions, meaning, and rhythm across languages, so it connects everywhere.
                </p>
              </div>
            </div>

            {/* Bottom Row - 2 Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {/* Service 4 - Story Mixing */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <img src="/file-search.svg" alt="File search icon" className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Story Mixing</h3>
                <p className="text-gray-600 text-sm">
                  Already written something? We refine, restructure, and elevate your story, shaping your thoughts into a cohesive masterpiece.
                </p>
              </div>

              {/* Service 5 - Meticulous Editing */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Meticulous Editing</h3>
                <p className="text-gray-600 text-sm">
                  Our editors comb through every sentence for clarity, tone, accuracy, and flow while preserving your unique voice and cultural context.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Here&apos;s How Your Story Comes To Life
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Over 500 customers across different states in nigeria understand the need to scribble experience and trust us. Try us!
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="max-w-6xl mx-auto relative">
            {/* Vertical dotted line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px border-l-2 border-dotted border-gray-300 hidden lg:block"></div>

            {/* Step 1 */}
            <div className="mb-16 lg:mb-32 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="space-y-6 lg:text-right lg:pr-16">
                  <div className="text-sm text-gray-500 font-medium tracking-wider uppercase">
                    STEP
                  </div>
                  <div className="text-6xl font-bold text-gray-800">
                    01
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Meet and Greet
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      This stage will begin with a (virtual or in-person ) meeting with our interviewers. The aim of this meeting is to get to know the subject, the story you hope to tell and your vision for the book.
                    </p>
                  </div>
                </div>
                <div className="lg:pl-16">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/threepersons.jpg"
                      alt="Meeting and greeting with clients"
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-16 lg:mb-32 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="lg:pr-16 order-2 lg:order-1">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/black.jpg"
                      alt="Writer working on story"
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-6 lg:pl-16 order-1 lg:order-2">
                  <div className="text-sm text-gray-500 font-medium tracking-wider uppercase">
                    STEP
                  </div>
                  <div className="text-6xl font-bold text-gray-800">
                    02
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Writer Match
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      At this stage, we introduce you to our writers and suggest the ones that can bring your story to vivid life. Alternatively, you can also select writers from our writer&apos;s catalog.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
              Start Your Story
            </button>
          </div>
        </div>
      </section>

      {/* About A Scribble In Time Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="space-y-6 lg:pr-8">
              <h2 className="text-4xl font-bold text-gray-800">
                About A Scribble In Time
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our goal at A Scribble in Time is to curate the life stories of Africans, thus creating a cultural repository for the families of our customers and the community at large. Many beautiful personal stories, histories, and anecdotes die uncelebrated as important witnesses and custodians never get to share them with a global audience.
              </p>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                Discover our Story
              </button>

              {/* Bottom Image - Discussion */}
              <div className="mt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/disscussion.jpg"
                    alt="Conversation between storyteller and client"
                    className="w-full h-80 object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Large Right Image */}
            <div className="lg:pl-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/meeting.jpg"
                  alt="Professional writer working on stories"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose A Plan Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Choose a Plan That Tells Your Story
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every story is unique, and so is our process. Let&apos;s understand your needs and create something unforgettable together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
            {/* Silver Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-3"></div>
                <h3 className="text-2xl font-bold text-gray-800">Silver</h3>
              </div>

              <div className="mb-6">
                <p className="text-gray-600 font-medium mb-4">Package includes:</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">3 full color paperback books and a digital copy of your book</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">55-60 pages (10,000 words)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">6 month production schedule</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">10 hours of interviews and translation service (if required)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Dedicated editorial sessions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Design and type setting with a choice of dozens of interior and cover combinations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Reviews</span>
                </li>
              </ul>

              <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                Start With A Free Discovery Call
              </button>
            </div>

            {/* Gold Plan */}
            <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                <h3 className="text-2xl font-bold">Gold</h3>
              </div>

              <div className="mb-6">
                <p className="text-blue-100 font-medium mb-4">Package includes:</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-blue-100">3 full color paperback books, one hardback book and a digital copy of your book</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-blue-100">90-105 pages (15,000 words)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-blue-100">6 month production schedule</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-blue-100">15 hours of interviews and translation service (if required)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-blue-100">Dedicated editorial sessions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-blue-100">Design and type setting with a choice of dozens of interior and cover combinations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-blue-100">Reviews</span>
                </li>
              </ul>

              <button className="w-full bg-white text-blue-600 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Start With A Free Discovery Call
              </button>
            </div>
          </div>

          {/* See More Packages Button */}
          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
              See More Packages
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about capturing your story, the writing process, and how we help preserve your legacy.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ Item 1 - Expanded */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button className="w-full text-left p-6 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  What is A Scribble in Time
                </h3>
                <svg className="w-5 h-5 text-gray-500 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="px-6 pb-6">
                <p className="text-gray-600 leading-relaxed">
                  Our goal at A Scribble in Time is to curate the life stories of Africans, thus creating a cultural repository for the
                  families of our customers and the community at large. Many beautiful personal stories, histories, and anecdotes
                  die uncelebrated as important witnesses and custodians never get to share them with a global audience.
                </p>
              </div>
            </div>

            {/* FAQ Item 2 - Collapsed */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button className="w-full text-left p-6 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  Why should I choose A Scribble in Time?
                </h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* FAQ Item 3 - Collapsed */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button className="w-full text-left p-6 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  How does the process work?
                </h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* FAQ Item 4 - Collapsed */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button className="w-full text-left p-6 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  How long does it take to complete the process?
                </h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* FAQ Item 5 - Collapsed */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button className="w-full text-left p-6 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  Who writes my work?
                </h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* FAQ Item 6 - Collapsed */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button className="w-full text-left p-6 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  Can I have a chat directly with the writers?
                </h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* See All Questions Button */}
          <div className="text-center mt-12">
            <button className="text-black-600 font-semibold text-lg hover:text-blue-700 transition-colors underline">
              See All Questions
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
