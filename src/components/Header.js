import questionMark from "../assets/question-mark.png";

export default function Header() {
  return (
    <div className="header">
      <h1>Basic FAQ</h1>
      <img src={questionMark} alt="question mark" icon />
    </div>
  );
}
