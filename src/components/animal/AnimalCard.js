import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"
import { firstLetterCase } from "../../modules/helpers"
import { useHistory } from "react-router-dom"


export const AnimalCard = ({ animal, handleDeleteAnimal }) => {

    const history = useHistory();

return (
    <section className="animal">

        <div className="animal__content">

            {/* <picture>
              ${animal.image !== '' ? <img src={require(`../../images${animal.image}`).default} alt={animal.name} className="animal__card__photo" /> : <p>No Image to Display</p>}
            </picture> */}

            <h3 className="animal__name">{firstLetterCase(animal.name)}</h3>

            <div className="animal__breed">Breed: {animal.breed}</div>

            <button type="button" onClick={() => handleDeleteAnimal(animal.id)}> <strong> Discharge </strong> </button>

            <Link to={`/animals/${animal.id}`}><button> <strong> Details </strong> </button> </Link>

            <button type="button"
                onClick={() => history.push(`/animals/${animal.id}/edit`)}> Edit </button>
        </div>

    </section>
)}