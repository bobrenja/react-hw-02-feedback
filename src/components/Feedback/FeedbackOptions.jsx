const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(e => (
    <button key={e} type="button" onClick={() => onLeaveFeedback(e)}>
      {e}
    </button>
  ));

export default FeedbackOptions;
