import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import girl from'./girl8.png';
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? 'opened' : ''}`}>
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" onClick={handleToggle}>
         {title}
          <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} className="accordion-icon" />
        </button>
      </h2>
      <div className={`accordion-collapse ${isOpen ? 'show' : ''}`}>
        <div className="accordion-body">
          <strong>{content}</strong>
        </div>
      </div>
    </div>
  );
};

const Questions = () => {
  return (
    <div className="questions-container">
      <div className="accordion" id="accordionPanelsStayOpenExample" style={{margin: '-300px 50px 0' }}>
        <h1>Online Safety Tips</h1>
        <p>Here are some tips to help you stay safe online. Remember, your safety is important!</p>
        <AccordionItem
          title="Lock Down Your Accounts"
          content="Keep your social media private. Go into your settings and make sure only friends can see your stuff."
        />
        <AccordionItem
          title="Superhero Passwords"
          content="Imagine your password is a superhero. It needs to be strong and unique. Mix up letters, numbers, and symbols to make it tough to crack."
        />
        <AccordionItem
          title="Watch Out for Strangers"
          content="Online, not everyone is who they say they are. Be careful about sharing personal info with people you don't know."
        />
        <AccordionItem
          title="Don't Let Bullies Win"
          content="If someone's being mean online, don't let it slide. Report them, block them, and talk to someone you trust about it."
        />
        <AccordionItem
          title="Protect Your Devices"
          content="Keep your phone and computer updated. Think of it like giving your devices superhero armor to fight off bad stuff."
        />
        <AccordionItem
          title="Talk to Your Squad"
          content="Keep your friends and family in the loop about what you're up to online. They've got your back!"
        />
        <AccordionItem
          title="Know What's Real"
          content="The internet is like a giant game of 'truth or lie.' Learn to tell fact from fiction. Don't believe everything you see."
        />
        <AccordionItem
          title="Screen Time Check"
          content="Balance is key. Don't let screens take over your life. It's like having a healthy diet but for your digital life."
        />
        <AccordionItem
          title="Ask for Help"
          content="If something online is bothering you, talk to someone you trust. They'll help you figure it out."
        />
            
      </div>
      <img src={girl} alt="circle" />
      <style>
        {`
      
          .accordion h1{
            font-size: 2em;
          }
          .questions-container{
            display: flex;
            background-color: #fff;
            justify-content: space-between;
            margin-right:100px;
          }
          .questions-container img{
            margin-top:-200px;
            width:500px;
            height:500px;
            display:right;
          }
          p, h1 {
            text-align: left;
          }

          .accordion-item {
            position: relative;
            background-color:  #f1356d;
            margin-bottom: 5px;
            max-width: 500px;
            margin-left: 0;
            margin-right: auto;
            top: 50px;
          }

          .accordion-button {
            color: #000;
            background-color:pink;
            border: 1px solid pink;
            text-align: left;
            padding: 10px;
            width: 500px;
            cursor: pointer;
            display:flex;
            justify-content: space-between;
          }
          .accordion-icon {
            margin-right: 0; /* Adjust the margin as needed */
            order:2;
            margin-left:auto;
          }
          .accordion-collapse {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }

          .accordion-item.opened .accordion-collapse {
            max-height: 500px; /* Adjust the value based on your content height */
          }

          .accordion-body {
            padding: 10px;
            
          }
        `}
      </style>
    </div>
  );
};

export default Questions;