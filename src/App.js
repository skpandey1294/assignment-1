import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/navbar';
import Posts from './components/Posts/posts';
import Users from './components/Users/users';
import UserInfo from './components/Users/userInfo';
import UserPost from './components/Posts/userPost';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
      <Route path="/" exact component={Posts}/>
      <Route path="/users" exact component={Users}/>
      <Route path="/user/:id" exact component={UserInfo} />
      <Route path="/:postId" exact component={UserPost} />
      </Switch>  
    </div>
    </BrowserRouter>
  );
}

export default App;
