import css from "./Notification.module.css";
import PropTypes from "prop-types";

const Notification = ({ messege }) => <p className={css.messege}>{messege}</p>;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;