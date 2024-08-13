import React from "react";
import Container from "~/components/common/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { FAQ } from "~/lib/constant";

export default function Faq() {
  return (
    <>
      <Container className="px-16">
        <div className="my-16 flex w-full flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-semibold leading-relaxed">FAQ</h1>
            <p className="max-w-2xl text-neutral-500">
              Berikut merupakan pertanyaan yang sering diajukan seputar Bandar
              Udara Harun Thohir - Gresik.
            </p>
          </div>
          <div className="mt-10 flex w-full flex-col">
            <Accordion type="single" collapsible>
              {FAQ.map((faq) => (
                <>
                  <AccordionItem value={faq.item}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </>
  );
}
