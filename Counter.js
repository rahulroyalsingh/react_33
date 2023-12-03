import React,{PureComponent} from 'react'
import './App.css';
class Counter extends React.Component
 {
  render() {
    console.warn('Counter component check-rendering')
    return(
      <div className='App'>
      <h1>Counter Component{this.props.count}</h1>
      </div>

  );
}
}
export default Counter;
