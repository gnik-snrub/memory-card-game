import PropTypes from 'prop-types'
import './Card.css'

const Card = (props) => {
    const { label, click } = props

    return(
        <div className = 'gamecard' onClick = {() => {click(label)}}>
            {label}
        </div>
    )
}

Card.propTypes = {
    label: PropTypes.string
}

export default Card