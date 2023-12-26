import "./styles.css";
import Header from "./components/Header";
import FaqsList from "./components/FaqsList.js";

const faqsArray = [
  {
    faqsTitle: "What's your name?",
    faqsText: "My name is Edward John Higgins.",
  },
  {
    faqsTitle: "Where're you from?",
    faqsText:
      "I'm from Ukraine, currently living in Kyiv, the capital of Ukraine.",
  },
  {
    faqsTitle: "What're your hobbies?",
    faqsText: "Guitar, music, judo, volleyball",
  },
  {
    faqsTitle: "What do you love in programming the most?",
    faqsText:
      "Lifestyle, diversity of options, challenges. It is also one of the most beneficial skills of our time.",
  },
];

export default function App() {
  return (
    <>
      <Header />
      <FaqsList data={faqsArray} />
    </>
  );
}
