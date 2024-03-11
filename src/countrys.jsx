import { useEffect } from "react";
import { useState } from "react";
import Country from "./country";

import './countryContainer.css'
const CountryS = () => {

// country state 
const [country,setCountry]=useState([]);

useEffect(function(){

    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountry(data))


},[])

const [visitedCountry,setVisitedCountry]=useState([])

const handleVisitedCountry=(C)=>{
const newVisitedCountry=[...visitedCountry,C]
setVisitedCountry(newVisitedCountry)


}



    return (
        <div>
            <h2>Country: {country.length}</h2>
            <div>
<h2>visited country: {visitedCountry.length}</h2>
<ol>
    {
        visitedCountry.map((VC,index)=><li key={index} style={{listStyle:'none'}}>{VC.name.common}</li>)
    }
</ol>

            </div>

<div className="countryContainer">
{
country.map((C,index)=> <Country key={index} country={C} visitedCountry={handleVisitedCountry}></Country>)

}
</div>

        </div>
    );
};

export default CountryS;