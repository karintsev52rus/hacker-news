import React from 'react';
import '../assets/styles/App.css';
import { Main } from '../pages/Main';
import { SinglePost } from '../pages/SinglePost';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import { Nav } from './Nav';
import { Provider } from 'react-redux';
import { store } from '../store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
      <div style={{padding: "20px"}}>
        <Nav/>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/posts/:postId">
            <SinglePost />
          </Route>
      </div>
    </Router>
    </Provider>
    
  );
}

export default App;
