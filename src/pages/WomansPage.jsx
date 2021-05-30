import React from 'react'
import Card from '../components/Card'
import { Characters } from '../models/Characters'

const WomansPage = () => {
    const womans = Characters.filter(character =>
        character.type === "m"
    )
    return (
        <div className="container mt-3">
            <h1>Personajes de Dragon Ball Femeninos</h1>
            <hr />
            <div className="row">
                {
                    womans.map(woman => (
                        <Card key={woman.id} {...woman} />))
                }
            </div>

        </div>
    )
}

export default WomansPage
