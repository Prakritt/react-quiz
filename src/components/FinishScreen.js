function FinishScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} points.(
        {percentage}%)
      </p>
      <p className="highscore">(High Score : {highScore} Points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
