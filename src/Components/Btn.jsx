import "./Btn.css";

const Btn = ({ Text, fontSize, onClick, background }) => {
  return (
    <button
      className="button"
      style={{ fontSize: `${fontSize}px`, background: background }}
      onClick={onClick}
    >
      {Text}
    </button>
  );
};

export default Btn;
