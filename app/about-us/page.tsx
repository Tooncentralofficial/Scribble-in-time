'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Footer from '../../components/Footer';

export default function AboutUs() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[548px] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero3.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              About A Scribble In Time
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Over 500 customers across Africa have trusted us with their memories and life stories. Try us!
            </p>
          </div>
        </div>
      </section>

      {/* About A Scribble In Time Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
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
      {/* What is Written Never Dies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                What is Written<br />Never Dies
              </h2>
            </div>

            {/* First Story Paragraph */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-5xl mx-auto">
                My father was a man of many stories—and he told them as effortlessly as one breathes. He told us of the sagas of the cunning tortoise, of how spirits came to the market to trade with humans, and how spiriting used canine eye rheum to gain the ability to see spirits. But his stories transcended the fantastical. Daddy told us stories of the civil war, of the upheaval it brought to his calm pre-teenage life. Of how his mother, unsure of what to take before fleeing to the village for safety, had opted to take their biggest mortar because survival meant nothing without sustenance. He told us of how he, adolescent eyes blinded by the valor of war, had tried to join the army, only to be scolded and chased home by the soldiers. Of how his father returned many months after being sent to the battlefield, unable to speak, shuddering at unseen and unknown terrors. More than being a storyteller, my dad's life was a beautiful story I will always cherish.
              </p>
            </div>

            {/* Image and Text Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              {/* Left Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="oldman.jpg"
                  alt="Elderly man with traditional African clothing"
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Right Text */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  My father was a man of many stories and he told them as effortlessly as one breathes. He told us of the sagas of the cunning tortoise, of how spirits came to the market to trade with humans, and how spiriting used canine eye rheum to gain the ability to see spirits. But his stories transcended the fantastical. Daddy told us stories of the civil war, of the upheaval it brought to his calm pre-teenage life. Of how his mother, unsure of what to take before fleeing to the village for safety, had opted to take their biggest mortar because survival meant nothing without sustenance. He told us of how he, adolescent eyes blinded by the valor of war, had tried to join the army, only to be scolded and chased home by the soldiers. Of how his father returned many months after being sent to the battlefield, unable to speak, shuddering at unseen and unknown terrors. More than being a storyteller, my dad's life was a beautiful story I will always cherish.
                </p>
              </div>
            </div>

            {/* Additional Story Paragraphs */}
            <div className="space-y-8 max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Parent-child relationships can be complicated and fraught with tension. Yes, love lives there, but there are also unmet expectations, misunderstandings, and phantoms of arguments past that haunt the present. However, we all get to an age where we begin to understand our parents of the same gender and empathize with the person they have become. My father got to know his father in early adulthood. Daddy told me that he had the quintessential first talk he loved his father and was determined to learn everything he could about his father's past. They had many conversations to this effect, conversations that shaped and refined my father. My grandfather had a very eccentric personality. He made a living selling provisions and cooking utensils, trades that were often reserved for women back then. And in his eccentricity, he always left the important things for last. In his last days, he had so much to tell my father, but their conversation, Grandpa broke into a fit of nerve-wracking coughs. Unable to see his father in so much pain, Dad pleaded with him to rest for a while before continuing.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Grandpa refused, but Dad was adamant. In this battle between two stubborn men, the younger had won. "It's important," Grandpa insisted. "You need to hear it." "I know, but we have time. You're not going anywhere. Rest for a while. We'll continue." Dad left to bring him some water. When he returned, Grandpa was gone. I heard this story often as a child. It was Dad's biggest regret. Concern won, and the price was regret. "I wish I had stayed. I wish I had let him speak. I wish I had written what he had to say." It pained him that Grandpa died with the secret still weighing on his heart.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                With A Scribble in Time, I hope to prevent regrets like this. To create a reference that your children and their children after them can refer to when they want to hear the Great Stories.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Call to Action Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Ready to Share Your Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join hundreds of families who have trusted us to preserve their most precious memories and stories for future generations.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
