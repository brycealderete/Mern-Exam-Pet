import React, {useEffect, useState} from 'react';
import { Router,navigate } from '@reach/router';
import axios from 'axios';
import './App.css';
import Pets from './views/Pets';
import Pet from './views/Pet';
import CreatePet from './views/CreatePet';
import UpdatePet from './views/UpdatePet';

function App() {
  const [pets,setPets]=useState([])

  useEffect(()=>{
    getPetAPI();
  },[]);
  
  const sorted=(givenPets)=>{

    return givenPets.sort((a, b) => a.type.localeCompare(b.type))
  

  }
  const getPetAPI=()=>{
    axios.get("http://localhost:8000/api/pets")
    .then(response=>{
      console.log(response.data);
      setPets(sorted(response.data));
    })
    .catch(err=>{
      console.log(err.response);
    })
  }

  const deletePet =(id)=>{
    setPets(sorted(pets.filter(pet => pet._id !== id)));
  }
  const updatePet=(id,pet)=>{
    let index=0;
    for (let i=0;i<pets.length;i++){
      if (pets[i]._id==id){
        index=i;
      }
    }
    let newPets=[...pets];
    newPets[index].name=pet.name;
    setPets(sorted(newPets));
  }

  const addPet=(pet)=>{
    let newPets=[...pets,pet]
    setPets(sorted(newPets));

  }








  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <div>

      </div>
      <div>
        <Router>
          <Pets path="/" pets={pets}></Pets>
          <Pet path="/pets/:id"  deletePet={deletePet} ></Pet>
          <CreatePet path="/pets/create" addPet={addPet}></CreatePet>
          <UpdatePet path="/pets/edit/:id"  updatePet={updatePet}></UpdatePet>
          
        </Router>
      </div>
    </div>
  );
}

export default App;
