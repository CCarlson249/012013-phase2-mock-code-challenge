import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
const PlantAPI='http://localhost:6001/plants'



function PlantPage() {
const [plants, setPlants] = useState([]);
const [searchTerm, setSearchTerm] =useState('')

useEffect(() => {
  fetch(PlantAPI)
  .then(res => res.json())
  .then(setPlants);
}, [])

function addNewPlant(name, image, price) {
  const newPlant = {
    name,
    image,
    price,
  };
  fetch(PlantAPI, {
    method: 'POST',
    headers: {
      Accepts: 'application/json',
      'Content-type' : 'application/json',
    },
    body: JSON.stringify(newPlant),
  })
  .then(res => res.json())
  .then(plant => setPlants([...plants, plant]));
}

const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))


  return (
    <main>
      <NewPlantForm handleSubmit={addNewPlant} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
