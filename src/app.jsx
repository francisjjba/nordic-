import React, { Component} from 'react';
export function counter() {
  return hello;
}
class App extends Component {

  constructor(props){
    super(props);
    this.props=props

  }
  render(){
    // console.log(props)
  return (
      <Fragment>
          <h1>{props.name}</h1>
          <input type="text" />
          <h2>{props.designation}</h2>
      </Fragment>
  )
}
  }

  

export default App;