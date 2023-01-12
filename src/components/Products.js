import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

export const Products = () => {
    const [starship, setStarship] = useState({})
    const { productId } = useParams();//call Hook
    const navigate = useNavigate();//call Hook

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${productId}/`)
            .then(res => res.json())
            .then(data => {
                setStarship(data)
            });

    }, [productId])

    const nextProductHandler = (e) => {
        // TODO: redirect to next prodict
        navigate(`/products/${Number(productId) + 1}`,{replace:false})//parse to number, because from URL we have string
    };

  
    return (
        <>
            <h2>Products Page</h2>
            <h3>Product {productId}  specification</h3>
            <ul>
                <li>Name: {starship.name}</li>
                <li>Model: {starship.model}</li>
                <li>Manufacturer: {starship.manufacturer}</li>

            </ul>
            <button onClick={nextProductHandler}>Next</button>
        </>

    )

}