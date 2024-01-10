import Options from "./Options";

function Question({ question, dispatch, answer, index, numQuestions }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
      {(answer !== null && index < numQuestions - 1 && (
        <button
          onClick={() => dispatch({ type: "nextQuestion" })}
          className="btn btn-ui"
        >
          Next
        </button>
      )) ||
        (answer !== null && index < numQuestions && (
          <button
            onClick={() => dispatch({ type: "finish" })}
            className="btn btn-ui"
          >
            Finish
          </button>
        ))}
    </div>
  );
}

export default Question;
