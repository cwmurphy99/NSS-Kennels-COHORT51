import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const AnimalCard = ({ animal, handleDeleteAnimal }) => (
    <section className="animal">
      
            <div className="animal__content">

                {/* <picture>
              ${animal.image !== '' ? <img src={require(`../../images${animal.image}`).default} alt={animal.name} className="animal__card__photo" /> : <p>No Image to Display</p>}
            </picture> */}

                <h3 className="animal__name">{animal.name}</h3>

                <div className="animal__breed">Breed: {animal.breed}</div>

                <button type="button" onClick={() => handleDeleteAnimal(animal.id)}> <strong> Discharge </strong> </button>

                <Link to={`/animals/${animal.id}`}><button> <strong> Details </strong> </button> </Link>

            </div>
      
    </section>
)