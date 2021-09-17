import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import './App.css'
import { client, LIST_CONTINENTS} from './api-service/Api-service.js'

import Continents from './components/Continents'

 export const MyContext = React.createContext();

export function App() {

  const [count, setCount] = useState(false);
  const [location, setLocation] = useState({continent:'', country:''});
   
  const handleTogle = (e) => {
    e.preventDefault()
     const { name, innerText } = e.target;
    console.log(name);
    setCount(count => !count)
    if (name === "lastChild") {
      console.log("Hello!");
      return setLocation({continent:'', country:''})
      
    }
    setLocation(prevState => ({ ...location, [name]: innerText }))
   }
 
  const { data, loading, error } = useQuery(LIST_CONTINENTS, { client });
 


  

  return (
  
    <MyContext.Provider value={{ count, handleTogle, location }}>
      <div className="main-container">
        <div className="container">
          <h1>The best guide all around the world!</h1>
          {loading || error ? (<p className="loader">{error ? error.message : 'Loading...'}</p>) :
            (<nav className="nav-container" >
        <ul>
          {data.continents.map(continent => <Continents key={continent.code} continent={continent} /> )}
        </ul>
      </nav>)
          }
      </div>
      </div>
      
      
      </MyContext.Provider >
   
   
     
  );
}
export default App;


//  {/* <select value={country} onChange={event => setCountry(event.target.value)}>
//       {data.countries.map(country => (
//         <option key={country.code} value={country.code}>
//           {country.name} - {country.capital} - {country.currency}
//         </option>
//       ))}
//     </select>
//     <ol>
//         {data.countries.map(country => {
//           return (<li key={country.code}>
//           {country.name} - {country.capital} - {country.currency}
//         </li>)
//       })}
//       </ol> */}
//       {/* <ol>
//         {data.continents.map(continent => {
//           console.log(continent.name);
//           return (<select key={continent.code} >
//             <option >{continent.name} </option>
//             {continent.countries.map(country => (
//               <option key={country.code} >
//           {country.name} 
//         </option>)
//           )}
//         </select>)
//       })}
//       </ol> */}
     