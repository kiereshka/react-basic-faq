import { useState } from "react";

export default function FaqsItem({ title, text, number }) {
  const [isOpen, setIsOpen] = useState(false);

  function faqsItemClickHandler() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={faqsItemClickHandler}
    >
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
