import PropTypes from 'prop-types';

export const Counter2App = ({value2})=> {
  return (
    <>
        <h1>Counter2App</h1>
        <h2>{value2}</h2>
    </>
  )
}

Counter2App.propTypes={
    value2:PropTypes.string
}