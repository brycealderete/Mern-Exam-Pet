import React,{useState,useEffect} from 'react'
import { navigate,Link } from '@reach/router'
import axios from 'axios';

const UpdatePet=({id,updatePet})=>{
    const [name,setName]=useState("");
    const [type,setType]=useState("");
    const [description,setDescription]=useState("");
    const[skill1,setSkill1]=useState("")
    const[skill2,setSkill2]=useState("")
    const[skill3,setSkill3]=useState("")
    

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(response=>{
        console.log(response.data);
        setName(response.data.name)
        setType(response.data.type)
        setDescription(response.data.description)
        setSkill1(response.data.skill1)
        setSkill2(response.data.skill2)
        setSkill3(response.data.skill3)
        })
        .catch(err=>{
        console.log(err.response);
        })
    },[]);


    const clickHandler =(e)=>{
        e.preventDefault()
        let updatedPet={
            name:name,
            type:type,
            description:description,
            skill1:skill1,
            skill2:skill2,
            skill3:skill3

        }

        axios.put(`http://localhost:8000/api/pets/${id}`,updatedPet)
        .then(response => {
            console.log(response);
            updatePet(id,updatedPet);
            navigate("/");
            
    
            // updateColor(id, {name: name, hex: hex});
            
        })
        .catch(err => {
    
            // const errorsArray = [];
            // for(const key of Object.keys(err.response.data.errors)){
            //     errorsArray.push(err.response.data.errors[key].properties.message);
            // };
    
            // setErrors(errorsArray);
        })
        
    }
    console.log("type",type)
    


    return (
        <div>
            <div className="home">
                <Link to="/">Home</Link>
            </div>
            <div className="pet">
                <h1>Edit Pet</h1>
                <form  onSubmit={clickHandler} >
                <label >Pet Name:</label>
                <input  type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <br/>
                <label >Type:</label>
                <input  type="text" value={type} onChange={(e) => setType(e.target.value)} />
                <br/>
                <label >Description:</label>
                <input  type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <br/>
                <label >Skill 1:</label>
                <input  type="text" value={skill1} onChange={(e) => setSkill1(e.target.value)} />
                <br/>
                <label >Skill 2:</label>
                <input  type="text" value={skill2} onChange={(e) => setSkill2(e.target.value)} />
                <br/>
                <label >Skill 3:</label>
                <input  type="text" value={skill3} onChange={(e) => setSkill3(e.target.value)} />
                <br/>
                <input type="submit"/>
                </form>
            </div>


        </div>
    )
}
export default UpdatePet;