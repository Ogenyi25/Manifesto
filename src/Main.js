import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




const Nav = () => (
  <div>
    
      
      <button style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}} ><Link to="/JoinUs">JoinUs</Link></button>
      <br></br>
      <button style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}><Link to="/Manifesto">Manifesto</Link></button>
    
  </div>
);

const Manifesto = () => <h1>Manifesto</h1>;
const JoinUs = () => <h1>Join Us</h1>;

class Main extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  
      


  render() {
    return (
      <Router>

        {/* Router component can have only 1 child. We'll use a simple
          div element for this example. */}
        <div>
          <Nav />
          
          <Route path="/manifesto" component={Manifesto} />
          <Route path="/join_us" component={JoinUs} />
        </div>
      </Router>
      
    );
  }
}

render(<Main />, document.getElementById('root'));

export default Main;
