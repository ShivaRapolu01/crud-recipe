import React from 'react'

export default function Ingredient({name,quantity}) {
    return (
        <div className='Ingredient__grid' >
            <span className='Ingredient__label'>{name}</span>
            <span className='Ingredient__value'>{quantity}</span>
        </div>
    )
}
