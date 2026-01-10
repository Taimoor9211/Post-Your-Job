import React from "react";
import { Plus, Minus } from "lucide-react";

const FrequentlyAskQuestions = () => {
  const [openIndex, setOpenIndex] = React.useState(-1);

  const leftFaqs = [
    {
      question: "How long until we deliver your first blog post?",
      answer:
        "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
    },
    {
      question: "How long until we deliver your first blog post?",
      answer:
        "We offer unlimited revisions within 30 days of delivery. Our goal is to ensure you are completely satisfied with the final result.",
    },
  ];

  const rightFaqs = [
    {
      question: "How long until we deliver your first blog post?",
      answer:
        "We require a 50% deposit upfront and the remaining 50% upon project completion. We accept various payment methods including credit cards and bank transfers.",
    },
    {
      question: "How long until we deliver your first blog post?",
      answer:
        "We need your project brief, target audience, key messages, and any reference materials. The more details you provide, the better we can tailor the content to your needs.",
    },
    {
      question: "How long until we deliver your first blog post?",
      answer:
        "Yes, we provide comprehensive content strategy services including audience research, content planning, SEO optimization, and performance tracking.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full bg-white pb-20 px-4">
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-18">
          Frequently Ask Questions
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-4">
            {leftFaqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full flex justify-between items-center p-6 text-left bg-gray-50 hover:bg-gray-100"
                  onClick={() => toggleFAQ(`left-${index}`)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  {openIndex === `left-${index}` ? (
                    <Minus className="w-5 h-5 text-gray-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600" />
                  )}
                </button>

                {openIndex === `left-${index}` && (
                  <div className="p-6 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightFaqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full flex justify-between items-center p-6 text-left bg-gray-50 hover:bg-gray-100"
                  onClick={() => toggleFAQ(`right-${index}`)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  {openIndex === `right-${index}` ? (
                    <Minus className="w-5 h-5 text-gray-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600" />
                  )}
                </button>

                {openIndex === `right-${index}` && (
                  <div className="p-6 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskQuestions;
