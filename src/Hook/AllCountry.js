import { useEffect, useState } from "react"

const AllCountry = user => {
    
    const [allCountry, setAllCountry] = useState([]);   
    
    useEffect(()=> {
      
          fetch(`https://restcountries.com/v3.1/all`)          
          .then(res => res.json())
          .then(data => {
            setAllCountry(data)                       
          })
               
     
    }, [user])

        return [allCountry];
    }

export default AllCountry;