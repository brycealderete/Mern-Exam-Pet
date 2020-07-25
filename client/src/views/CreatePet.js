import React,{useState,useEffect} from 'react'
import { navigate,Link } from '@reach/router'
import axios from 'axios';

const CreatePet=({addPet})=>{
    const [name,setName]=useState("");
    const [type,setType]=useState("");
    const [description,setDescription]=useState("");
    const[skill1,setSkill1]=useState("")
    const[skill2,setSkill2]=useState("")
    const[skill3,setSkill3]=useState("")
    const [nameerror,setNameError]=useState("");
    const [typeerror,setTypeError]=useState("");
    const [descriptionerror,setDescriptionError]=useState("");

    const formHandler=(e)=>{
        e.preventDefault();
        let pet={
            name:name,
            type:type,
            description:description,
            skill1:skill1,
            skill2:skill2,
            skill3:skill3

        }
        axios.post("http://localhost:8000/api/pets",pet)
        .then(response=>{
            console.log(response);
            addPet(response.data);
            setNameError('');
            setTypeError('');
            setDescriptionError('');
            navigate("/");

        })
        .catch(err=>{
            console.log(err.response.data.errors)
            console.log(err.response)
            let nameError='';
            nameError=err.response.data.errors.name.properties.message;
            let typeError='';
            typeError=err.response.data.errors.type.properties.message;
            let descriptionError='';
            descriptionError=err.response.data.errors.description.properties.message;
            setNameError(nameError);
            setDescriptionError(descriptionError);
            setTypeError(typeError);
        })

    }
    console.log(descriptionerror)

    return(
        <div>
            <div className="home">
                <Link to="/">Home</Link>
            </div>
            <div className="pet">
            <h1>Add A Pet!</h1>
            <form onSubmit={formHandler}>
                <label>Name:</label>
                {nameerror!="" &&
                <p style={{color:'red'}}>{nameerror}</p>
                }
                <input type="text" onChange={(e)=>{setName(e.target.value)}}></input>
                <br/>
                <label>Pet Type:</label>
                {typeerror!="" &&
                <p style={{color:'red'}}>{typeerror}</p>
                }
                <input type="text" onChange={(e)=>{setType(e.target.value)}}></input>
                <br/>
                <label>Pet Description:</label>
                {descriptionerror!="" &&
                <p style={{color:'red'}}>{descriptionerror}</p>
                }
                <input type="text" onChange={(e)=>{setDescription(e.target.value)}}></input>
                <br/>
                <label>Pet Skill 1:</label>
                <input type="text" onChange={(e)=>{setSkill1(e.target.value)}}></input>
                <br/>
                <label>Pet Skill 2:</label>
                <input type="text" onChange={(e)=>{setSkill2(e.target.value)}}></input>
                <br/>
                <label>Pet Skill 3:</label>
                <input type="text" onChange={(e)=>{setSkill3(e.target.value)}}></input>
                <br/>
                <input type="submit"/>
            </form>
            </div>
            
        </div>

    )

}
export default CreatePet;