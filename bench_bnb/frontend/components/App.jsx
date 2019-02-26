import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/sign_up_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <>
    <header>
      <h1>Bench Bnb</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </>
)

export default App;