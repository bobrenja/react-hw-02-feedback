import css from "./buttons.module.css"

const ButtonVoote = ({onGood, onNeutra, onBad}) => {
	return (
		<div className={css.button_group}>
		<button className={css.good}   onClick={onGood}> good</button>
		<button className={css.neutral} onClick={onNeutra}>neutral</button>
		<button className={css.bad} onClick={onBad}>bad</button>
	</div>
	);
};

export default ButtonVoote;
