'use client';

import React, { useState } from 'react';
import Footer from '../../components/Footer';

interface StepProps {
  stepNumber: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  isReversed?: boolean;
  showSeparator?: boolean;
}

const StepSection: React.FC<StepProps> = ({
  stepNumber,
  title,
  description,
  imageUrl,
  imageAlt,
  isReversed = false,
  showSeparator = true
}) => {
  const VerticalDottedSeparator = () => (
    <div className="flex flex-col items-center space-y-2 mx-8">
      {Array.from({ length: 15 }, (_, i) => (
        <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-white py-12 sm:py-20">
      {/* Step Header - Centered */}
      <div className="text-center mb-8 sm:mb-16">
        <p className="text-gray-500 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 sm:mb-4">
          STEP
        </p>
        <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-black leading-none">
          {stepNumber}
        </h2>
      </div>

      {/* Step Content - Responsive Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Mobile Layout - Stack vertically */}
          <div className="lg:hidden">
            {/* Image */}
            <div className="mb-6 sm:mb-8">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="text-center px-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6">
                {title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                {description}
              </p>
            </div>
          </div>

          {/* Desktop Layout - Three columns */}
          <div className="hidden lg:grid lg:col-span-12 lg:grid-cols-12 lg:gap-8">
            {!isReversed ? (
              <>
                {/* Text Content - Left Side */}
                <div className="col-span-5">
                  <h3 className="text-3xl font-bold text-black mb-6">
                    {title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {description}
                  </p>

                  {/* Horizontal dotted line */}
                  <div className="flex items-center space-x-2">
                    {Array.from({ length: 20 }, (_, i) => (
                      <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    ))}
                  </div>
                </div>

                {/* Vertical Separator */}
                <div className="col-span-1 flex justify-center">
                  <VerticalDottedSeparator />
                </div>

                {/* Image - Right Side */}
                <div className="col-span-6">
                  <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
              </>
            ) : (
              <>
                {/* Image - Left Side */}
                <div className="col-span-6">
                  <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>

                {/* Vertical Separator */}
                <div className="col-span-1 flex justify-center">
                  <VerticalDottedSeparator />
                </div>

                {/* Text Content - Right Side */}
                <div className="col-span-5">
                  <h3 className="text-3xl font-bold text-black mb-6">
                    {title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {description}
                  </p>

                  {/* Horizontal dotted line */}
                  <div className="flex items-center space-x-2">
                    {Array.from({ length: 20 }, (_, i) => (
                      <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dotted Separator */}
      {showSeparator && (
        <div className="lg:hidden flex justify-center py-6 sm:py-8">
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function HowItWorks() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
     

      {/* Hero Section */}
      <section
        className="relative text-white flex items-center justify-center w-full"
        style={{
          minHeight: '400px',
          height: '60vh',
          backgroundImage: "url('/hero2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Content */}
        <div className="text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Here&apos;s How Your Story Comes To Life
          </h1>
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto">
            Over 500+ customers across different states in Nigeria understand the
            need to scribble experience and trust us. Try us!
          </p>
        </div>
      </section>

      {/* Steps Content */}
      <div className="bg-white w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Step 01 */}
        <StepSection
          stepNumber="01"
          title="Meet and Greet"
          description="This stage will begin with a (virtual or in-person) meeting with our interviewers. The aim of this meeting is to get to know the subject, the story you hope to tell and your vision for the book."
          imageUrl="/threepersons.jpg"
          imageAlt="Professional meeting with three people shaking hands in an office setting"
          isReversed={false}
        />

        {/* Step 02 */}
        <StepSection
          stepNumber="02"
          title="Writer Match"
          description="At this stage, we introduce you to our writers and suggest the ones that can bring your story to vivid life. Alternatively, you can also select writers from our writer's catalog."
          imageUrl="/black.jpg"
          imageAlt="Two people working together on a laptop in a home office setting"
          isReversed={true}
        />

        {/* Step 03 */}
        <StepSection
          stepNumber="03"
          title="Hit the Ground Running"
          description="This is where the major work begins. Depending on the package selected, you will have a set of meetings with our seasoned interviewers. The meetings will be guided by a selected list of questions and follow-up questions as determined by the interviewer. These questions will be transcribed and edited. The redacted version will be sent to you for approval. You can let us know what you want removed or expanded on at this stage."
          imageUrl="/therapy.jpg"
          imageAlt="Professional man in suit sitting at desk in modern office"
          isReversed={false}
        />

        {/* Step 04 */}
        <StepSection
          stepNumber="04"
          title="Write Away"
          description="After the approval of the redacted interviews, your writers get to work. After three chapters (or 5000 words), the writer will forward the work to you for feedback."
          imageUrl="/laptop.jpg"
          imageAlt="Person writing at desk with laptop and papers"
          isReversed={true}
        />

        {/* Step 05 */}
        <StepSection
          stepNumber="05"
          title="Edits and Formats"
          description="When the writing is done, our editors take over. They review the book and catch typos, loose sentences and grammatical errors. After the editing, the manuscript is formatted according to publishing standard."
          imageUrl="/writing.jpg"
          imageAlt="Person editing document with keyboard and notebook"
          isReversed={false}
        />

        {/* Step 06 */}
        <StepSection
          stepNumber="06"
          title="Cover Art and Pictures"
          description="Here, you get to choose or suggest the specific type of cover you want for the book and the pictures you want to appear in the chapters."
          imageUrl="/design.jpg"
          imageAlt="Laptop showing design work with coffee and plants"
          isReversed={true}
        />

        {/* Step 07 */}
        <StepSection
          stepNumber="07"
          title="To infinity and Beyond"
          description="Your book goes to print! At this stage, we can walk you through marketing options for the book if that is the route you want to pursue."
          imageUrl="/reading.jpg"
          imageAlt="Smiling man with glasses in casual setting"
          isReversed={false}
          showSeparator={false}
        />
      </div>

      <Footer />
    </div>
  );
}
