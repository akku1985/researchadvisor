import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "./asset/sass/bootstrap.css";
import "./asset/sass/style.css";
import "./asset/sass/antd.css";


import _user_profile from './user_profile/user_profile';
import _soc_profile from './soc_profile/soc_profile';
import NormalLoginForm from './login/login';
import RegistrationForm from './login/register';
import question_and_discussion from './activity/question_and_discussion';
import _article_main from './article/article_main'; 
import _stats from './article/stats';
import _comments from './article/comments';
import _references from './article/references';
import _citations from './article/citations';



function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/profile" exact component={_user_profile} />
        <Route path="/soc" component={_soc_profile} />
        <Route path="/login" component={NormalLoginForm} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/topics" component={question_and_discussion} />
        <Route path="/article" component={_article_main} />
        <Route path="/stats" component={_stats} />
        <Route path="/comments" component={_comments} />
        <Route path="/citations" component={_citations} />
        <Route path="/references" component={_references} />

        
        </Router>      
    </div>
  );
}

export default App;
