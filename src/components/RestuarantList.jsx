import React from "react";
import RestaurantCard from "./RestaurantCards"
import { useState } from "react"
import { useEffect } from "react";

const [RestaurantList, setRestaurantList] = useState()

export default function RestaurantList() {
    
    useEffect(()=> {
        fetch("http://localhost:4050/getrestaurants")
        .then(results => results.json())
        .then(Restaurants => setRestaurants(Restaurants))
        .catch(console.error)
    }, [setRestaurantList])
    if (!RestaurantList){
        return<h2>No restaurants to display</h2>
    }
    return (
        <ul>
            {}
        </ul>
    )
    
}
