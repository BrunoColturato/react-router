import React from 'react'
import { useParams } from 'react-router-dom'

export default function Home() {
    const { name } = useParams()

    return(
        <div>
            <h1>Page with parameters</h1>
            <p>Name: {name}</p>
        </div>
    )
}