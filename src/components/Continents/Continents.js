import React, { useContext } from 'react';
import Countreis from '../Countries'
import { MyContext } from '../../App.js'
import s from './Continents.module.css'

function Continents({ continent }) {
   const { handleTogle, location } = useContext(MyContext)

      return (
     <li  className={s.list}>
            <a href="#" className={s.link}  name="continent" onClick={handleTogle} >
               {continent.name}
                </a>
            <ul>
              {continent.name===location.continent && continent.countries.map(country => <Countreis key={country.code} country={country}/>)}
             </ul>
         </li>
      )
         
     
   

}

export default Continents