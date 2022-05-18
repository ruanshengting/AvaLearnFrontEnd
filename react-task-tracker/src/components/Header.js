import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title }) => {
  const onClick = () => {
    console.log('hello from header')
  }
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onClick} color="green" text="hello" />
    </header>
  )
}
Header.defaultProps = {
  title: 'default title',
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
}
//Css in js
const headStyle = { color: 'red', backgroundColor: 'black' }
export default Header
