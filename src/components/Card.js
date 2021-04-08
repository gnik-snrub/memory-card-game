import PropTypes from 'prop-types'
import './Card.css'

const Card = (props) => {
    const { label } = props

    return(
        <div className = 'gamecard'>
            {label}
        </div>
    )
}

Card.propTypes = {
    label: PropTypes.string
}

export default Card