import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "./asset/sass/bootstrap.css";
import "./asset/sass/style.css";
import "./asset/sass/antd.css";

import _header from "./inc/_footer"
import _footer from './inc/_header';

import _user_profile from './user_profile/user_profile';
import _soc_profile from './soc_profile/soc_profile';




function App() {
  return (
    <div className="App">
      <Router>
      <_footer/>
        <Route path="/" exact component={_user_profile} />
        <Route path="/soc" component={_soc_profile} />
        
        <_header/>
        </Router>      
    </div>
  );
}

export default App;
