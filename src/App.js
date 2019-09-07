import React from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">
//           ba
//         </label>
//         <input type="text" onChange={() => {console.log("I am clicked")}}/>
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return (
    <div>
      <Cat /> 
      <Cat /> 
      <Cat /> 
    </div>
  )
}

const Cat = () => {
  return <div>mew</div>
}

export default App;
