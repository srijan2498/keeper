import React from "react"
import "./showkeeper.css"
import axios from "axios"

const ShowKeeper = ({ keeperList, setKeeperList}) => {

    const deleteKeeper = (id) => {
        axios.post("http://localhost:3001/api/delete", { id })
            .then(res => setKeeperList(res.data))
    }

    const updateKeeper = (id) => {
        window.open(`http://localhost:3000/update/${id}`, "_self")
    }


    return (
        <div className="showKeeper row">
            {
                keeperList.map(keeper => (
                    <div className="keeperCard col-md-3" key={keeper._id}>
                        <h1 className="title">
                            {keeper.title}
                            <i className="deleteIcon fa fa-trash" aria-hidden="true" onClick={() => deleteKeeper(keeper._id)} ></i>
                            <i className="editIcon fa fa-pen-square" aria-hidden="true" onClick={() => updateKeeper(keeper._id)} ></i>
                        </h1>
                        <textarea
                            className="descriptionBox"
                            value={keeper.description}
                            readOnly />
                    </div>
                ))
            }
        </div>
    )
}

export default ShowKeeper