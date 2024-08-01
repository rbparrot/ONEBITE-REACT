const Button = ({ text, color }) => {
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
