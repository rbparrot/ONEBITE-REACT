const Button = ({ text, color }) => {
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    // 합성 이벤트 : 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태
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
