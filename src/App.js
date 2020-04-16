import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import getRoutes from 'utils/getRoutes';
import './App.less';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Router basename="/headache">
        {getRoutes('/')}
      </Router>
    )
  }
}

export default App;