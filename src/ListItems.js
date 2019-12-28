import React from 'react';
import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItems(props){
  const items=props.items;
  const listItems=items.map(item=>
    {
    return <div className="list" key={item.key}>
    <p>  {item.text}
    <span>
      <FontAwesomeIcon className="faicons" icon="trash" onClick={()=>{
        props.deleteItem(item.key)
      }} icon="trash"/>
      </span>
    </p>
    </div>

  })
    return(
      <div>
        <h1>ListItems</h1>
        <div>{listItems}</div>
      </div>
    )
  }

export default ListItems;
