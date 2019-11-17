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
         correctAnswer: props.correctAnswer,
         description: props.description,
         answeredCorrectly: false,
         answeredWrong: false
      }
   }

   submitAnswer(answer){
       if(answer == this.state.correctAnswer){
           console.log("ayyy");
           this.setState({ answeredCorrectly: true });
       }
       else {
           console.log("Booo");
           this.setState({ answeredWrong: true});
       }
   }

   getAnswerTitle(wasCorrect){
       if(wasCorrect){
            return  <h2>Correct!</h2>; 
       }
        else{ 
            return <h2>Wrong!</h2>;
        }
   }

   render() {
       const answered = this.state.answeredCorrectly || this.state.answeredWrong;
       const answeredRight = this.state.answeredCorrectly; // I'm just going to uglify this as much as I can. huehue #cleanestCode
    return (
        <div>
            <h1>{this.state.question}</h1>
            {!answered? (
                <div className="quiz-buttons">
                    <Button onClick={() => this.submitAnswer("a")}>{this.state.answerA}</Button>
                    <Button onClick={() => this.submitAnswer("b")}>{this.state.answerB}</Button>
                    <Button onClick={() => this.submitAnswer("c")}>{this.state.answerC}</Button>
                </div>
            ) : (
                <div className="post-quiz">
                    <div className="answer-description">
                        {this.getAnswerTitle(answeredRight)}
                        <h2>{this.state.description}</h2>
                    </div>
                    <div className="navigation-buttons">
                        <Button href="/navigation"> Back </Button>
                        <Button href="/quizkid"> Kid </Button>
                        <Button href="/quizadult"> Adult </Button>
                    </div>
                </div>
            )}
        </div>
      )
   }
}
export default QuizView;