import React, { useState, useEffect } from 'react';
import { getAnimalById, deleteAnimal } from '../../modules/AnimalManager';
import './AnimalDetail.css';
import { useParams, useHistory } from "react-router-dom"

export const AnimalDetail = () => {

    const [animal, setAnimal] = useState({ name: "", breed: "", customer: "", location: "", image: ""});
    const [isLoading, setIsLoading] = useState(true);
    const { animalId } = useParams();
    const history = useHistory();

    const handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        setIsLoading(true);
        deleteAnimal(animalId).then(() =>
            history.push("/animals")
        );
    };

    const handleBack = () => {
        history.push("/animals");
    }

    useEffect(() => {
        //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
        getAnimalById(animalId)
            .then(animal => {
                setAnimal({
                    name: animal.name,
                    breed: animal.breed,
                    customer: animal.customer.name,
                    location: animal.location.name,
                    image: animal.image
                });
                setIsLoading(false);
            });
    }, [animalId]);

    return (

        <div className="animal__details__">

            <div className="animal__details__header">
                {/* <picture>
                    {animal.image !== "" ?

                        <img src={require(`../../images${animal.image}`).default} alt={animal.name} className="animal__details__photo" />

                        : <p>There isn't an image.</p>}
                </picture> */}
            </div>



            <section className="animal">

                <h3 className="animal__name"> <strong> Name: </strong> {animal.name}</h3>

                <div className="animal__details"> <strong> Breed: </strong> {animal.breed}</div>

                <div className="animal__details"> <strong> Customer: </strong> {animal.customer}</div>

                <div className="animal__details"> <strong> Location: </strong> {animal.location}</div>

                <button className="animal__" type="button" disabled={isLoading} onClick={handleDelete}> Discharge </button>

                <button type="button" onClick={handleBack}> Go Back </button>

            </section>

        </div>
    );
}