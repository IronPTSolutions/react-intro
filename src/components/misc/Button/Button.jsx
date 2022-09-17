import React from 'react'
import './Button.css'

//Size tiene valor por defecto igual que en las funciones de siempre

const Button = ({ children, size = "S", action }) => {

  return (
    <button onClick={action} className={`Button size-${size}`}>
      {children} {/* Children es una prop que pone react, lo que hayamos incluido en <Button> CHILDREN </Button> */}
    </button>
  )
}

// Button.defaultProps = { {/* Props por defecto del componente */}
//   size: "S"
// }

export default Button