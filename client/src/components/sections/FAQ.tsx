import { useState } from 'react';
import { FAQItem as FAQItemType } from '@/lib/types';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const faqItems: FAQItemType[] = [
  {
    id: '1',
    question: "Who can join Write the Docs Kenya?",
    answer: "Anyone interested in documentation is welcome! Whether you're a technical writer, developer, designer, project manager, or just curious about docs, you'll find value in our community. We welcome all experience levels, from beginners to experts."
  },
  {
    id: '2',
    question: "How often do you organize events?",
    answer: "We typically host 1-2 events per month, including workshops, talks, networking sessions, and panel discussions. Events are held both in-person (mainly in Nairobi) and virtually to accommodate members across Kenya and beyond."
  },
  {
    id: '3',
    question: "Is there a cost to participate?",
    answer: "Most of our events are free! We believe in making documentation knowledge accessible to everyone. For special workshops or conferences, there might be a small fee to cover venue and materials, but we always try to keep costs minimal and offer scholarships when needed."
  },
  {
    id: '4',
    question: "How can I contribute to the community?",
    answer: "There are many ways to contribute! You can speak at events, write blog posts, volunteer at events, mentor newcomers, suggest event topics, or help with organizing. We value all forms of contribution and provide support to help you get involved."
  },
  {
    id: '5',
    question: "Do I need to be in Nairobi to participate?",
    answer: "Not at all! While many in-person events happen in Nairobi, we regularly host virtual events that anyone can join. We also have members from other Kenyan cities and even other East African countries. Our online community spaces are active year-round."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-wtd-dark mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know about joining our community</p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <Collapsible key={item.id} open={openItems.includes(item.id)}>
              <div className="border border-gray-200 rounded-lg">
                <CollapsibleTrigger 
                  className="w-full text-left p-6 focus:outline-none"
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-wtd-dark">
                      {item.question}
                    </h3>
                    <i className={`fas fa-chevron-down text-gray-400 transition-transform ${
                      openItems.includes(item.id) ? 'rotate-180' : ''
                    }`}></i>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      {item.answer}
                    </p>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
}
