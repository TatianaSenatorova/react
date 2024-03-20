import { PropTypes } from "prop-types";

export default function Message({ text, time, author }) {
return (
<>
<h4>Author №{author}</h4>
<p>{text}</p>
<p>Post time: {time}</p>
</>
);
}

Message.propTypes = {
text: PropTypes.string.isRequired,
time: PropTypes.string.isRequired,
author: PropTypes.number.isRequired,
};