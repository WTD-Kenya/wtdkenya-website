import { useState } from 'react';
import { faqItems } from '@/data/faq';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

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
          <h2 className="text-3xl md:text-4xl font-bold text-kenya-black mb-6">Frequently Asked Questions</h2>
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
                    <h3 className="text-lg font-semibold text-kenya-black">
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
