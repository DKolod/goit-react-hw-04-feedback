import css from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";


 const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
        <div className={css.btnWrap}>{options.map(name => (
            <button
                key={name}
                type="button"
                name={name}
                onClick={onLeaveFeedback}
                className={css.btn}
            
            >{name}
            </button>))}
        </div>
    );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,  
}

export default FeedbackOptions;