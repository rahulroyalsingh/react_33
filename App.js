import React,{PureComponent} from 'react'
import './App.css';
class App extends PureComponent {

constructor() {
  super();
  this.state={
    count:0
  }
  }
  render() {
    console.warn('check-rendering')
    return(
      <div className='App'>
      <h1>Pure Component {this.state.count}</h1>
      <button onClick={()=>this.setState({count:this.state.count+1})}>Update Count</button>
      </div>
    
  );
}
}
export default App;
