import React, {useContext } from 'react';
import Languages from '../Languages'
import { MyContext } from '../../App.js'
import s from './Countries.module.css'

function Countries({ country }) {
   const { handleTogle, location } = useContext(MyContext)

      return (
                <li  className={s.list}>
                  <a href="#" className={s.link} name="country" onClick ={ handleTogle} >{country.name}  </a>
                  <ul>
                    {country.name===location.country &&country.languages.map(language => (
                       <Languages key={language.code} language={language.name}/>
                    ))}
             </ul>
        </li>
          
      )
   

}

export default Countries