import css from "./Feedback.module.css"
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.button_block}>

{options.map(e => (
    <button className={css.button} key={e} type="button" onClick={() => onLeaveFeedback(e)}>
      {e}
    </button>
  ))}

        </div>
    )
}

export default FeedbackOptions;
