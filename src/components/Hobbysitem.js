import React from 'react';
const Hobbysitem = ({name,url}) => (
  <li  className="list-hobbys">
    <div className="list">
      <div>
        <img className="img"
          src= {url}
          alt ={name}
        />
      </div>
     <div className="name">
      <p>{name}</p>
     </div>
    </div>

  </li>
)
export default Hobbysitem