import React from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


class FilterView extends React.Component {
    constructor(){
        super();
        this.state = {
            travellerType: "",
            difficultyLevel: "",
            activities: []
        }
    }

    setTravellerType(selectedType) {
        this.setState( {travellerType: selectedType});
    } 
    setDifficulty(selectedDifficulty) {
        this.setState( {difficultyLevel: selectedDifficulty});
    }
    setActivities(selectedActivity){
        if (this.state.activities.indexOf(selectedActivity) !== -1){
            var acts = this.state.activities;
            var index = acts.indexOf(selectedActivity);
            acts.splice(index, 1);
            this.setState({ activities: acts });
        }else{
            //activity is already in array
            var acts = this.state.activities;
            acts.push(selectedActivity);
            this.setState({ activities: acts });
        }
    }
    
    render() {
        return (
          <div>
            <div className="title">
                <h1>What are you looking for?</h1>
            </div>
            <div className="select-box">
                <h2>Traveller Type: {this.state.travellerType}</h2>
                <ToggleButtonGroup type="radio" name="TravellerType">
                    <ToggleButton value="hiker" onClick={() => this.setTravellerType("Hiker")}>Hiker</ToggleButton>
                    <ToggleButton value="family" onClick={() => this.setTravellerType("Family")}>Family</ToggleButton>
                    <ToggleButton value="biker" onClick={() => this.setTravellerType("Biker")}>Biker</ToggleButton>
                    <ToggleButton value="chum" onClick={() => this.setTravellerType("Elder")}>Elder</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="select-box">
        <h2>Difficulty: {this.state.difficultyLevel}</h2>
                <ToggleButtonGroup type="radio" name="Difficulty">
                    <ToggleButton value="easy" onClick={() => this.setDifficulty("Easy")}>Easy</ToggleButton>
                    <ToggleButton value="medium" onClick={() => this.setDifficulty("Medium")}>Medium</ToggleButton>
                    <ToggleButton value="hard" onClick={() => this.setDifficulty("Hard")}>Hard</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="select-box">
                <h2>Select activities:</h2>
                <div>
                    <ToggleButtonGroup type="checkbox" name="Activities">
                        <ToggleButton onChange={() => this.setActivities("Hiking")}>Hiking</ToggleButton>
                        <ToggleButton onChange={() => this.setActivities("Camping")}>Camping</ToggleButton>
                        <ToggleButton onChange={() => this.setActivities("Fishing")}>Fishing</ToggleButton>
                    </ToggleButtonGroup>
                    <ToggleButtonGroup type="checkbox" name="Activities">
                        <ToggleButton onChange={() => this.setActivities("Canoeing")}>Canoeing</ToggleButton>
                        <ToggleButton onChange={() => this.setActivities("Bird-watching")}>Bird-watching</ToggleButton>
                        <ToggleButton onChange={() => this.setActivities("Rock-climbing")}>Rock-climbing</ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
            <div className="navigation-buttons">
                <Button href="/">
                  <p>Back</p>
               </Button>
               <Button href="/journeyconfig">
                  <p>Next</p>
               </Button>
            </div>

        </div>
        )
    }
 }
 export default FilterView;