const remoteURL = "http://localhost:5002"

export const getLocationById = (locationId) => {
    return fetch(`${remoteURL}/locations/${locationId}?_expand=customer&_expand=animal&_expand=employee`)
    .then(res => res.json())
}

export const getAllLocations = () => {
    return fetch(`${remoteURL}/locations`)
    .then(res => res.json())
}