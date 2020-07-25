import React,{useState,useEffect} from 'react'
import { navigate,Link } from '@reach/router'
import axios from 'axios';

const Pets=({pets,deletePet})=>{


    const deleteHandler=(id)=>{
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(response => {
                console.log(response);
                deletePet(id);
            })
            .catch(err => {
                console.log(err);
            })
            

    }
    
    const editHandler=(id)=>{
        navigate(`/pets/edit/${id}`)

    }
    const detailHandler=(id)=>{
        navigate(`/pets/${id}`)

    }


    return(
        <div>
            <div className="home">
                <Link to="/pets/create">Add A Pet!</Link>
            </div>
            <div className="pet">
            {pets.map((pet,index)=>{
                return(
                <div key={index}>
                    <table>
                        <tr>
                            <th>Pet Name:</th>
                            <th>Type:</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td>
                                <button onClick={()=>{detailHandler(pet._id)}}>Details</button>
                                <button onClick={()=>{editHandler(pet._id)}}>Edit</button>
                            </td>
                        </tr>
                    </table>

                </div>
                )
            })
            }
            </div>

        </div>
    )


}
export default Pets;