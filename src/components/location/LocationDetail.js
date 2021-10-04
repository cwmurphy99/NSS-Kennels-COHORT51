import { useState, useEffect } from "react"
import { deleteLocation, getLocationById } from "../../modules/LocationManager";
import './LocationDetail.css';
import { useParams, useHistory } from "react-router-dom";

export const LocationDetail = () => {
    const [location, setLocation] = useState({ name: "", address: "" });
    const [isLoading, setIsLoading] = useState(true);
    const { locationId } = useParams();
    const history = useHistory();

    const handleDelete = () => {
        setIsLoading(true);
        deleteLocation(locationId).then(() =>
            history.push("/locations")
        );
    };

    const handleBack = () => {
        history.push("/locations");
    }

    useEffect(() => {
        getLocationById(locationId)
            .then(location => {
                setLocation({
                    name: location.name,
                    address: location.address,
                    animal: location.animal.name,
                    owner: location.customer.name
                });
                setIsLoading(false);
            });
    }, [locationId]);

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
            <div className="location__animal">{location.animal}</div>
            <div className="location__owner">{location.customer}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Discharge
            </button>
            <button type="button" onClick={handleBack}>
                Go Back
            </button>
        </section>
    );
}