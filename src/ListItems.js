import React from 'react';

function ListItems(props){
  const items=props.items;
  console.log(items)
  const listItems=items.map(item=>{
    return <div key='item.key'>
    <p>  {item.text} </p>
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
