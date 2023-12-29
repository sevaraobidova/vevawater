const STORAGE_KEY = 'savedLocations';
const getSavedLocations = () => {
    const savedLocationsJSON = localStorage.getItem(STORAGE_KEY);
    return savedLocationsJSON ? JSON.parse(savedLocationsJSON) : [];
};

const saveLocation = (location) => {
    const savedLocations = getSavedLocations();
    savedLocations.push(location);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedLocations));
};

export { getSavedLocations, saveLocation };