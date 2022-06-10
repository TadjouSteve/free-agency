import React from 'react';
import ReactDOM from 'react-dom/client';
import { Switch } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Error from './components/Error';
import Header from './components/Header';
import Freelances from './pages/Freelances';
import Home from './pages/home';
import Results from './pages/Resultats';
import Survey from './pages/survey';
import Footer from './components/Footer';
import { ThemeProvider, SurveyProvider } from './utils/contex';

import GlobalStyle from './utils/style/GlobalStyle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SurveyProvider>
        <BrowserRouter>

          <GlobalStyle />
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/survey/:questionNumber" >
              <Survey />
            </Route>

            <Route path="/results">
              <Results />
            </Route>
            <Route path="/freelances">
              <Freelances />
            </Route>
            <Route>
              <Error />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </SurveyProvider>
    </ThemeProvider>
  </React.StrictMode>


);
