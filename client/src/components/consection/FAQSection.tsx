import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion.tsx";
import { faqItems } from "@/data/faq";

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-green-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-kenya-red mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full text-left">
          {faqItems.map((faq) => (
            <AccordionItem key={faq.id} value={`item-${faq.id}`}>
              <AccordionTrigger className="text-lg font-semibold text-kenya-black hover:no-underline">
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
