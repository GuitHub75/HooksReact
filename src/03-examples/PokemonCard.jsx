import React from 'react'

export const PokemonCard = ({id= 1, name="pokemon"}) => {
  return (
     <div className="card-container">
      <div className="card-header">
        {/* Usamos el id aquí, por ejemplo, como un identificador visible */}
        <span className="card-id">ID: {id}</span>
      </div>
      <div className="card-body">
        {/* Mostramos el nombre dentro del cuerpo de la carta */}
        <h3 className="card-name">{name}</h3>
        {/* Puedes añadir más contenido aquí si lo deseas */}
        <p className="card-description">
          Esta es una descripción para {name}.
        </p>
      </div>
      <div className="card-footer">
        {/* Puedes añadir acciones o más información aquí */}
        <button className="card-button">Ver Detalles</button>
      </div>
    </div>
  )
}
