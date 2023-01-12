import PropTypes  from "prop-types";

export const SecondApp = ( {title,subtitle}) => {



  return (
    <>
      <h1>mi segundo componente con arrow funtion</h1>
      <p>{title}</p>
      <p>{subtitle}</p>
    </>
  )
}

SecondApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number
};

SecondApp.defaultProps = {
  title: 'No hay titulo',
  subtitle: 1234567
}
