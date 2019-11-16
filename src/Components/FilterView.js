import React from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

class FilterView extends React.Component {


//TODO: categories, set states, props, all that fun stuff....
    render() {
        return (
          <div>
            <div className="title">
                <h1>What are you looking for?</h1>
            </div>
            <div className="select-box">
                <h2>Traveller Type:</h2>
                <ToggleButtonGroup type="radio" name="TravellerType">
                    <ToggleButton value="hiker">Hiker</ToggleButton>
                    <ToggleButton value="family">Family</ToggleButton>
                    <ToggleButton value="biker">Biker</ToggleButton>
                    <ToggleButton value="chum">Just a chum.</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="select-box">
                <h2>Difficulty:</h2>
                <ToggleButtonGroup type="radio" name="Difficulty">
                    <ToggleButton value="easy">Let's just chill.</ToggleButton>
                    <ToggleButton value="medium">Maybe some challenge.</ToggleButton>
                    <ToggleButton value="hard">Bring it!</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="select-box">
                <h2>Select activities:</h2>
                <div>
                    <ToggleButtonGroup type="checkbox" name="Activities">
                        <ToggleButton value="activity 1">Act1</ToggleButton>
                        <ToggleButton value="activity 2">Act2</ToggleButton>
                        <ToggleButton value="activity 3">Act3</ToggleButton>
                    </ToggleButtonGroup>
                    <ToggleButtonGroup type="checkbox" name="Activities">
                        <ToggleButton value="activity 4">Act4</ToggleButton>
                        <ToggleButton value="activity 5">Act5</ToggleButton>
                        <ToggleButton value="activity 6">Act6</ToggleButton>
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