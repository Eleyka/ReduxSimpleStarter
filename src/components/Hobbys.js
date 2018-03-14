import React from 'react';
import Hobbysitem from './Hobbysitem';
const Hobbys = ({hobbys}) =>(
  <ul className="listHobby">
    <Hobbysitem 
      key ={hobbys.name}
    />
   
  </ul>
)
export default Hobbys