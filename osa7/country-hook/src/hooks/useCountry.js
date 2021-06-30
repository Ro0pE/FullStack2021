import { useState, useEffect } from "react";
import axios from "axios";


export const useCountry = (countryName) => {
    const [country, setCountry] = useState(null)


    const database = `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`
    console.log(countryName)

  useEffect(() => {
    const fetchData  = async () => {


       try {
             if (countryName) {
                 const result = await axios(database);

             if (result) {
                 const data = result.data[0];
                 const found = true;
                   setCountry({ data, found });
                  }
           }
      }catch(error){
                console.log(error)
                const data = null
                const founded = false
                setCountry({data, founded})
            }
 
        }
        fetchData ()
    },[countryName,database])

    return {country}

}