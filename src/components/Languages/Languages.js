import React, {useContext} from 'react';
import { MyContext } from '../../App.js'
import s from './Languages.module.css'

function Languages({ language }) {
   const { handleTogle } = useContext(MyContext)

      return (
         <li className={s.list}>
            <a href="#"  className={s.link} name="lastChild" onClick ={ handleTogle} >{language} </a>
            </li>

      )

}

export default Languages