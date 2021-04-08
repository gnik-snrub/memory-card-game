import PropTypes from 'prop-types'
import './Card.css'

const Card = (props) => {
    const { click, file } = props

    return(
        <div className = 'gamecard' onClick = {() => {click(file)}}>
            <img
                className = 'flag'
                src = { require(`./assets/${file}.png`).default }
                alt = {file}
                title = {file}
            />
        </div>
    )
}

Card.propTypes = {
    file: PropTypes.string
}

export default Card