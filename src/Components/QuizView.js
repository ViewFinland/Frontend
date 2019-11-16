import React from 'react';
import Button from 'react-bootstrap/Button';

class QuizView extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         question: props.question,
         answerA: props.answerA,
         answerB: props.answerB,
         answerC: props.answerC,
         answerD: props.answerD,
         correctAnswer: props.correctAnswer 
      }
   }

   render() {
    return (
        <div>
        <h2>{this.state.question}</h2>
            <div className="quiz-buttons">
                <Button>{this.state.answerA}</Button>
                <Button>{this.state.answerB}</Button>
                <Button>{this.state.answerC}</Button>
                <Button>{this.state.answerD}</Button>
            </div>
        </div>
      )
   }
}
export default QuizView;