import css from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return (
        <ul className={css.statisticList}>
            <li className={css.statisticItem}>
                Good: {good}
            </li>
            <li className={css.statisticItem}>
                Neutral: {neutral}
            </li>
            <li className={css.statisticItem}>
                Bad: {bad}
            </li>
            <li className={css.statisticItem}>
                Total: {total}
            </li>
            <li className={css.statisticItem}>
                Positiv revievs: {percentage}%
            </li>
        </ul>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default Statistics;