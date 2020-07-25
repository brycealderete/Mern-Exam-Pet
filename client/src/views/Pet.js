import React,{useState,useEffect} from 'react'
import { navigate,Link } from '@reach/router'
import axios from 'axios';

const Pet=({id,deletePet,updatePet})=>{
    const[pet,setPet]=useState({})
    

    

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(response=>{
        console.log(response.data);
        setPet(response.data)
        })
        .catch(err=>{
        console.log(err.response);
        })
    },[]);
    
    
    const deleteHandler=()=>{
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(response => {
                console.log(response);
                deletePet(id);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
            })
            
    
    }
    
    
    
    return(
        <div>
            <div className="home">
                <Link to="/">Home</Link>
            </div>
            <div className="pet">
                
                <h3>Pet Name:</h3>
                <h2>{pet.name}</h2>
                <p>Pet Type:</p>
                <p>{pet.type}</p>
                <p>Pet Description:</p>
                <p>{pet.description}</p>
                <button onClick={deleteHandler}>Adopt {pet.name}</button>
            </div>
        </div>

    )
}



export default Pet;