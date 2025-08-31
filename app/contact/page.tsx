'use client';
import React, { useState } from 'react'
import contactImg from '@/public/images/contactus.jpg'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface MemoirFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  gender: string;
  theme: string;
  subject: string;
  main_themes: string;
  key_life_events: string;
  audience: string;
}

function ContactPage() {
  const [formData, setFormData] = useState<MemoirFormData>({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    gender: '',
    theme: '',
    subject: '',
    main_themes: '',
    key_life_events: '',
    audience: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleInputChange = (field: keyof MemoirFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('https://scribble-in-time-backend-production.up.railway.app/api/memoir/submit/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmittedEmail(formData.email);
        setShowSuccessModal(true);
        // Reset form on success
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone_number: '',
          gender: '',
          theme: '',
          subject: '',
          main_themes: '',
          key_life_events: '',
          audience: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Failed to submit form. Please try again.'
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="pt-[7rem] px-[1rem] md:px-[2.5rem] lg:px-[4.3rem] pb-[2rem] ">
      <div className="flex gap-[2rem] flex-col md:flex-row">
        <div className="w-full h-[24rem]  md:w-[35%] md:h-[47rem] ">
          <Image src={contactImg} alt="contact us" width={500} height={900} style={{ objectFit: "cover", objectPosition: "right",width:"100%",height:"100%" }} />
        </div>
        <div className="flex flex-col flex-1 gap-5">
          <h3 className=" text-2xl font-bold">Send a Message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[1rem] ">
            {/* Error Toast */}
            {submitStatus.type === 'error' && (
              <div className="bg-red-100 text-red-800 border border-red-200 p-3 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{submitStatus.message}</span>
                </div>
                <button 
                  onClick={() => setSubmitStatus({ type: null, message: '' })}
                  className="text-red-600 hover:text-red-800"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}

            <aside className="flex gap-3 flex-col">
              <label htmlFor="first_name" className="font-bold">Name:</label>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <Input
                    type="text"
                    placeholder="Enter First Name"
                    id="first_name"
                    value={formData.first_name}
                    onChange={(e) => handleInputChange('first_name', e.target.value)}
                    required
                    className="border-[1px] border-[#817F82]"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Enter Last Name"
                    id="last_name"
                    value={formData.last_name}
                    onChange={(e) => handleInputChange('last_name', e.target.value)}
                    required
                    className="border-[1px] border-[#817F82]"
                  />
                </div>
              </div>
            </aside>
            <div className="flex flex-col gap-3">
              <label htmlFor="email">Email Address:</label>
              <Input
                type="email"
                placeholder="example@gmail.com"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="border-[1px] border-[#817F82]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="phone_number">Phone Number:</label>
              <Input
                type="tel"
                placeholder="Enter Phone Number"
                id="phone_number"
                value={formData.phone_number}
                onChange={(e) => handleInputChange('phone_number', e.target.value)}
                required
                minLength={10}
                className="border-[1px] border-[#817F82]"
              />
            </div>
            <aside className="flex gap-3 flex-col">
              <label htmlFor="gender">Gender</label>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                    <SelectTrigger className="w-full border-[1px] border-[#817F82]">
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer_not_to_say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Theme of your memoir"
                    id="theme"
                    value={formData.theme}
                    onChange={(e) => handleInputChange('theme', e.target.value)}
                    required
                    className="border-[1px] border-[#817F82]"
                  />
                </div>
              </div>
            </aside>
            <div className="flex flex-col gap-3">
              <label htmlFor="subject">Subject of the Memoir</label>
              <Input
                type="text"
                placeholder="e.g yourself, your mom, your dad"
                id="subject"
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                required
                className="border-[1px] border-[#817F82]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="main_themes">Main Themes to cover</label>
              <Input
                type="text"
                placeholder="e.g Overcoming adversity, adventure, Love story"
                id="main_themes"
                value={formData.main_themes}
                onChange={(e) => handleInputChange('main_themes', e.target.value)}
                required
                className="border-[1px] border-[#817F82]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="key_life_events">Key Life Events to Include</label>
              <Input
                type="text"
                placeholder="e.g childhood, education, significant relationships"
                id="key_life_events"
                value={formData.key_life_events}
                onChange={(e) => handleInputChange('key_life_events', e.target.value)}
                required
                className="border-[1px] border-[#817F82]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Target Audience</label>
              <RadioGroup 
                value={formData.audience} 
                onValueChange={(value) => handleInputChange('audience', value)}
                className='flex gap-[3.5rem]'
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="family_friends"
                    id="family_friends"
                    className="bg-[#1D4ED7]"
                  />
                  <label htmlFor="family_friends">Family and Friends</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="public"
                    id="public"
                    className="bg-[#1D4ED7]"
                  />
                  <label htmlFor="public">Public</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="specific_group"
                    id="specific_group"
                    className="bg-[#1D4ED7]"
                  />
                  <label htmlFor="specific_group">Specific Group</label>
                </div>
              </RadioGroup>
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className='bg-[#1D4ED7] text-white p-3 rounded-[12.5px] hover:bg-[#1D4ED7]/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full mx-4 overflow-hidden shadow-2xl">
            {/* Header with gradient background */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">We&apos;re Excited!</h3>
              <p className="text-blue-100">Your story journey begins now</p>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  Thank you for sharing your story with us!
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We&apos;ve received your memoir submission and our team is excited to help bring your story to life. 
                  We&apos;ll review your details and reach out to you via email within 24-48 hours.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-blue-800 font-medium">
                    📧 We&apos;ll contact you at: <span className="font-bold">{submittedEmail}</span>
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  Please check your email (and spam folder) for our response with next steps.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Continue Exploring
                </button>
                <button
                  onClick={() => {
                    setShowSuccessModal(false);
                    // Scroll to top of page
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Submit Another Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactPage