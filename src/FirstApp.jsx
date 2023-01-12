const mensaje = "Esto es un mensaje";

const funcion = (a,b) => {
  return (a+b)
}

export  const FirstApp = ()=> {
  return (
    <>
      <h1>mi primer componednte</h1>
      <p>Esto es un parrafo</p>
      <p> {mensaje} </p>
      <p> {funcion(1,3)} </p>
    </>
  )
}



