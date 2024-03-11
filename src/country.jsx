
import { useState } from "react";
import "./countryCard.css"

const Country = ({country,visitedCountry}) => {
    
    console.log(country)
    const {name,flags,cca3,region}=country

// visited clicked
const [visited,setVisited]=useState(false)



    return (
        <div className={`countryCard ${visited ? 'color' : ''}`}>
            <h3 style={{color: visited ? 'red' :''}}>Name:{name.common}</h3>
            <img style={{width:"150px" , height:"90px"}} src={flags.png} alt="" />
            <h3>Religion: {region}</h3>
            <h3>sort Name: {cca3}</h3>
            <button className="button" onClick={()=>{
                setVisited(!visited)
            }}>visited</button>

            <button className="button" onClick={()=>{visitedCountry(country)}}>Mark</button>

{!!visited && <h3>You have already visited this country</h3>}



        </div>
    );
};

export default Country;