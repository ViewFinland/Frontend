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
                <ToggleButtonGroup name="TravellerType">
                    <ToggleButton type="radio" value="hiker">Hiker</ToggleButton>
                    <ToggleButton type="radio" value="family">Family</ToggleButton>
                    <ToggleButton type="radio" value="biker">Biker</ToggleButton>
                    <ToggleButton type="radio" value="chum">Just a chum.</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="select-box">
                <h2>Difficulty:</h2>
                <ToggleButtonGroup name="Difficulty">
                    <ToggleButton type="radio" value="easy">Let's just chill.</ToggleButton>
                    <ToggleButton type="radio" value="medium">Maybe some challenge.</ToggleButton>
                    <ToggleButton type="radio" value="hard">Bring it!</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="select-box">
                <h2>Select activities</h2>
                <ToggleButtonGroup name="Activities">
                    <ToggleButton type="checkbox" value="activity 1">Activity 1</ToggleButton>
                    <ToggleButton type="checkbox" value="activity 2">Activity 2</ToggleButton>
                    <ToggleButton type="checkbox" value="activity 3">Activity 3</ToggleButton>
                    <ToggleButton type="checkbox" value="activity 4">Activity 4</ToggleButton>
                    <ToggleButton type="checkbox" value="activity 5">Activity 5</ToggleButton>
                    <ToggleButton type="checkbox" value="activity 6">Activity 6</ToggleButton>
                </ToggleButtonGroup>
            </div>

        </div>
        )
    }
 }
 export default FilterView;