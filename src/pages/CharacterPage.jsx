import React from 'react'
import { useParams } from 'react-router'
import { Characters } from '../models/Characters';

const CharacterPage = ({ history }) => {
    const { id } = useParams();
    const { name, description, type } = Characters.find(character => character.id === id)
    const path = `/assets/${type}-${id}.png`;
    const handleBack = () => {
        history.goBack();
    }
    return (
        <div className="container row mt-5">
            <div className="col-8">
                <img className="img-thumbnail " style={{ width: "70%", height: "400px" }} src={path} alt={id} />
            </div>
            <div className="col-4">
                <h2>Nombre : {name}</h2>
                <p>Descripcion: {description}</p>
                <button className="btn btn-outline-warning" onClick={handleBack}>
                    Atras
                </button>
            </div>
        </div>
    )
}

export default CharacterPage
