

import React,{Component} from "react";
class Form extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:"",
        key:'',
      }
  }
  this.addItem=this.addItem.bind(this);
  this.handleChange=this.handleChange.bind(this);
}

handleChange(e){
  this.setState({
    currentItem:{
      text:e.target.value,
      key:Date.now()
    }
  })
}
addItem(e){
  e.preventDefault();
  const newItem=this.state.currentItem;
  if(newItem.text!==""){
  const newItems=[...this.state.items, newItem];
    this.setState({
      items:newItems,

      currentItem:{
        task:"",
        key:""
      }
    })
  }

}

  render(){
  return (
    <div className="App">
      <h1>REACT TODO APP</h1>
      <form onSubmit={this.addItem}>
        <input type="text" placeholder="enter the form task" value={this.state.currentItem.text} onChange={this.handleChange} />
        <button type="submit">Add</button>
      </form>
      <p>{this.state.items.text}</p>
      <ListItems items={this.props.items}></ListItems>
    </div>
  );
}
}

export default Form;
