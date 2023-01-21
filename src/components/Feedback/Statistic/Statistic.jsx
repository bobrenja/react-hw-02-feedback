import css from "./statistic.module.css"

const StatisticVote =({good, neutral, bad})=>{
    const total = good+neutral+bad;
    const result = (good/total*100).toFixed(2)
return (

    <div >
					<span className={css.item} >good: {good}</span>
					<span className={css.item} >neutral: {neutral}</span>
					<span className={css.item} >bad: {bad}</span>
                    <span className={css.item}>Total: {total}</span><span>Positiv feedback: {result}%</span>
				</div>
)

}
export default StatisticVote;