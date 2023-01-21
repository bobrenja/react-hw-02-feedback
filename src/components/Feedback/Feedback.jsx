import { Component } from "react";
import ButtonVoote from "./Buttons/Buttons";
import StatisticVote from "./Statistic/Statistic";
import css from "./feedback.module.css";

class Feedback extends Component {
	static defaultProps = {};

	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	addGood = () => {
		this.setState((prevState) => {
			return { good: prevState.good + 1 };
		});
	};
	addNeutral = () => {
		this.setState((prevState) => {
			return { neutral: prevState.neutral + 1 };
		});
	};

	addBad = () => {
		this.setState((prevState) => {
			return { bad: prevState.bad + 1 };
		});
	};

	render() {
		const { good, neutral, bad } = this.state;
		return (
			//  {good, neutral, bad} = this.state;
			<section className="feedback">
				<p className={css.title}>Feedback Expresso</p>
            
				<ButtonVoote  onGood ={this.addGood} onNeutra={this.addNeutral}  onBad={this.addBad}/>

				<p className={css.title}>Statistic</p>
				<StatisticVote good={good} bad={bad} neutral={neutral}/>
			</section>
		);
	}
}

export default Feedback;
