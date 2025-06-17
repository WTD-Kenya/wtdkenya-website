import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion.tsx";

export default function FAQSection() {
  const faqs = [
    {
      question: "What are the COVID-19 protocols?",
      answer: "We will follow all local health guidelines. More details will be provided closer to the event date.",
    },
    {
      question: "Can I get a refund if I cancel my registration?",
      answer: "Refund policies vary by ticket type and cancellation date. Please refer to the registration terms and conditions for specifics.",
    },
    {
      question: "Is food provided at the conference?",
      answer: "Yes, meals and refreshments will be provided during the scheduled breaks.",
    },
    {
      question: "What is the dress code?",
      answer: "The dress code is business casual. We encourage you to wear comfortable attire.",
    },
    {
      question: "Will recordings of the sessions be available?",
      answer: "Session recordings will be made available to registered attendees after the conference.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-orange-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-kenya-red mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full text-left">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base py-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
} 