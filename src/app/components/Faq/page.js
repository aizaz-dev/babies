// FAQComponent.js
'use client'
import React, { useState } from 'react';
import './faq.scss'; // Import your CSS file for styling
import { FaChevronDown } from "react-icons/fa";
const FAQComponent = () => {
  const faqData = [
    {
      question: 'When is the best time to schedule a cake smash photo session?',
      answer: 'It’s ideal to schedule the cake smash session a few weeks before your child’s first birthday. This ensures that you’ll have the photos ready in time if you want to use them for birthday invitations or displays at their party.',
    },
    {
      question: 'Do I need to bring a cake or outfits for the session?',
      answer: 'You’re welcome to bring a cake and outfits that match your desired theme. However, we can also provide a list of recommended bakeries and suggestions for outfits if you need. Our studio has a collection of props and accessories to complement the shoot, but personal touches always make the photos more special.',
    },
    {
        question: 'What should parents wear to the photo session?',
        answer: 'You’re welcome to bring a cake and outfits that match your desired theme. However, we can also provide a list of recommended bakeries and suggestions for outfits if you need. Our studio has a collection of props and accessories to complement the shoot, but personal touches always make the photos more special.',
      },
      {
        question: 'How long after the session will I receive my images?',
        answer: 'Typically, you will receive a sneak peek within 48 hours of the session. The complete gallery will be ready for viewing and selection within 2-3 weeks. We understand the excitement of reliving those moments and ensure timely delivery while maintaining the highest quality.',
      },
    // Add more FAQ items as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => handleToggle(index)}>
          <div className="question">{item.question}</div>
          <div className="arrow">
            {/* {activeIndex === index ? '▼' : '►'} */}
            <FaChevronDown />
          </div>
          {activeIndex === index && <div className="answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
