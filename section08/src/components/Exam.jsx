import { useReducer } from "react";

//reducer : 변환기
function reducer(count, action) {
  console.log(count, action);

  switch (action.type) {
    case "INCREASE":
      return count + action.data;
    default:
      return 0;
  }
}

const Exam = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  }; //액션 객체

  return (
    <>
      <h1>Counter : {count} </h1>
      <button onClick={onClickPlus}>+</button>
    </>
  );
};

export default Exam;
