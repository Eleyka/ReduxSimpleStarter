import React from 'react';
const Hobbysitem = ({name}) => (
  <li  className="list-hobbys">
    <div className="list">
      <div>
        <img className="img"/>
      </div>
     <div className="name">
      <p>{name}</p>
     </div>
    </div>

  </li>
)
export default Hobbysitem