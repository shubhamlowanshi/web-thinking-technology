import React, { useState } from "react";

import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How to Contact Customer Service?",

      answer: "You can reach our customer service team 24/7 via live chat. Additionally, you can log in to your account to raise a support ticket or contact us via email at   thinkingweb.technology@gmail.com`.",
    },
    {
      question: "Can I customize my website or app design?",
      answer: "Yes, you can customize your website or app design!We offer flexible customization options to match your brand’s style and requirements. You can choose from pre-designed templates or request a fully custom design. If you need assistance, our team is always here to help."
    },
    {
      question: "What are the pricing factors for website and Android app development in India?",
      answer: "The cost of website and Android app development in India is ₹8999, which includes essential features, design, and development.",
    },
    {
      question:"what the payment gateways do you integrate?",
      answer:"We integrate popular payment gateways such as Razorpay, PayU, CCAvenue, Instamojo, Stripe, PayPal, Cashfree, and PhonePe. If you require a specific payment gateway, we can integrate it as per your needs."

    },

    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we provide ongoing support and maintenance to ensure your website or app runs smoothly. Our services include bug fixes, updates, security enhancements, and performance optimization as needed.",
    },
  ];

  return (
    
    <div className="faq-container">
        <br />
        <br />
      <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>
      <p className="faq-subtitle">Everything you need to know about our e-commerce <br />
        <span>website and app services.</span></p>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">{openIndex === index ? "▲" : "▼"}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
