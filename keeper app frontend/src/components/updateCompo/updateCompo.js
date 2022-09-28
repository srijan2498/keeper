import React, { useState } from "react"
import './updateCompo.css';

import axios from "axios"
import { useParams } from "react-router-dom";


const UpdateCompo = ({setKeeperList}) => {

    const {id} = useParams();
    const [keeperObj, setKeeperObj] = useState({
        title: "",
        description:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setKeeperObj({
            ...keeperObj,
            [name]: value
        })
    }

    const update = () => {
        const postUrl = `http://localhost:3001/api/update/${id}`
        if(keeperObj.title) {
            axios.post(postUrl, keeperObj)
            .then(res => setKeeperList(res.data))
            setKeeperObj({
                title: "",
                description:""
            })
        }
        alert("Notes updated successfully!")
        window.open(`http://localhost:3000/`, "_self")
    }

    return (
        <div className="addKeeper">
           <input
                className="inputBox titleInput"
                type="text"
                name="title"
                autoComplete="off"
                placeholder="Add Title"
                onChange={handleChange}
                value={keeperObj.title}
            />
            <textarea 
                className="inputBox description"
                name="description"
                placeholder="Add Description Here"
                onChange={handleChange}
                value={keeperObj.description}
            />
            <div className="updateButton" onClick={update}>Update</div>
        </div>
    )
}

export default UpdateCompo
