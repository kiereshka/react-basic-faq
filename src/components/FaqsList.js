import FaqsItem from "./FaqsItem.js";

export default function FaqsList({ data }) {
  return (
    <div className="faq">
      {data.map((dataItem, i) => (
        <FaqsItem
          title={dataItem.faqsTitle}
          text={dataItem.faqsText}
          key={dataItem.faqsTitle}
          number={i}
        />
      ))}
    </div>
  );
}
