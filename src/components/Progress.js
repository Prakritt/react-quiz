function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <div>
      <header className="progress">
        <progress max={numQuestions} value={index + Number(answer !== null)} />
        <p>
          Question <strong>{index + 1}</strong> of{" "}
          <strong>{numQuestions}</strong> questions..
        </p>
        <p>
          <strong>{points}</strong>/{maxPossiblePoints}
        </p>
      </header>
    </div>
  );
}

export default Progress;
