import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import FilterView from './Components/FilterView';
import JourneyConfigView from './Components/JourneyConfigView';
import LandingPage from './Components/LandingPage';
import NoticeView from './Components/NoticeView';
import QuizView from './Components/QuizView';
import CheatMenu from './Components/CheatMenu';
import NavigationView from './Components/NavigationView';
import MapView from './Components/MapView/MapView';
import createBrowserHistory from 'history';
import styles from './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      noticeTitle: "Weeboob",
      noticeText: "woob woob"
    }
  }

   render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route path="/filtering" component={FilterView}/>
              <Route path="/cheat" component={CheatMenu}/>
              <Route path="/journeyconfig" component={JourneyConfigView}/>
              <Route path="/navigation" component={NavigationView}/>
              <Route path="/notice" render={(props) => <NoticeView text={props.text} title={props.title}/> }/>
              <Route path="/quizkid" render={() => <QuizView 
                            question="What is Finland called?"
                            answerA="The land of million trees."
                            answerB="The paradise of blueberries."
                            answerC="The land of a thousand lakes."
                            correctAnswer="c"
                            description="There are around 187 888 lakes in Finland larger than 500 m2"
                            />}/>
              <Route path="/quizadult" render={() => <QuizView
                            question="What is the greatest lake of Finland?"
                            answerA="Saimaa"
                            answerB="Päijänne"
                            answerC="Inari"
                            correctAnswer="a"
                            description="Saimaa in Eastern Finland is the country’s greatest lake, and a home to the Saimaa ringed seal, one of the most endangered species in the world, and nestles several cities on its shores."/>}/>
              <Route path="/map" component={MapView}/>
            </Switch>
          </div>
        </BrowserRouter>
      )
   }
}
export default App;

