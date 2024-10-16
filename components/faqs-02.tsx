import Accordion from "@/components/accordion";

export default function Faqs() {

  const faqs02 = [
    {
      question: "test",
      answer:
        "test",
    },
    {
      question: "test",
      answer:
        "test",
    },
    {
      question: "test",
      answer:
        "test",
    },
    {
      question: "test",
      answer:
        "test",
    },
    {
      question: "test",
      answer:
        "test",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl space-y-12">
            <div>
              <h2 className="mb-5 text-xl font-bold">Profile & plans</h2>
              <div className="space-y-2">
                {faqs02.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.question}
                    id={`faqs-${index}`}
                  >
                    {faq.answer}
                  </Accordion>
                ))}
              </div>
            </div>
            {/* Accounts */}
          </div>
        </div>
      </div>
    </section>
  );
}
