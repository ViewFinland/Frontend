import React, {Component} from 'react';
import './MapView.css';
import InteractiveMap from '../InteractiveMap/InteractiveMap';

class MapView extends Component
{
    render()
    {
        return (
            <InteractiveMap />
        )
    }
}

export default MapView;