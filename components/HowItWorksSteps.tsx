import React from 'react';
import Image from "next/image"
interface StepProps {
  stepNumber: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  isReversed?: boolean;
}

const StepSection: React.FC<StepProps> = ({ 
  stepNumber, 
  title, 
  description, 
  imageUrl, 
  imageAlt, 
  isReversed = false 
}) => {
  const DottedSeparator = () => (
    <div className="flex items-center space-x-2 my-8">
      {Array.from({ length: 25 }, (_, i) => (
        <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-8 py-20">
      {/* Step Header - Centered */}
      <div className="text-center mb-20">
        <p className="text-gray-500 text-sm font-semibold tracking-wider uppercase mb-4">
          STEP
        </p>
        <h2 className="text-9xl font-bold text-black leading-none">
          {stepNumber}
        </h2>
      </div>

      {/* Step Content - Two Column Layout */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-start ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
        {/* Text Content */}
        <div className={`space-y-6 ${isReversed ? 'lg:col-start-2' : ''}`}>
          <h3 className="text-4xl font-bold text-black mb-8">
            {title}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {description}
          </p>
          <DottedSeparator />
        </div>

        {/* Image */}
        <div className={`${isReversed ? 'lg:col-start-1' : ''}`}>
          <Image 
            src={imageUrl}
            alt={imageAlt}
            width={800}
            height={400}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default function HowItWorksSteps() {
  return (
    <div 
      className="min-h-screen bg-gray-100"
      style={{
        width: '1440px',
        margin: '0 auto'
      }}
    >
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
        imageUrl="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
        imageAlt="Two people working together on a laptop in a home office setting"
        isReversed={true}
      />
    </div>
  );
}
