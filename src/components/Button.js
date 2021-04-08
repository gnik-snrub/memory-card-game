import PropTypes from 'prop-types'
import './Button.css'

const Button = (props) => {
    const { task, label } = props
    return (
        <button onClick={task}>{label}</button>
    )
}

Button.propTypes = {
    task: PropTypes.func,
    label: PropTypes.string
}

export default Button