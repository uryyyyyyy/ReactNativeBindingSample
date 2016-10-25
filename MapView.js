import React from 'react';
import { requireNativeComponent } from 'react-native';

class MapView extends React.Component {
    render() {
        console.log(this.props);
        return <RCTMapp {...this.props} />;
    }
}

MapView.propTypes = {
    /**
     * When this property is set to `true` and a valid camera is associated
     * with the map, the camera’s pitch angle is used to tilt the plane
     * of the map. When this property is set to `false`, the camera’s pitch
     * angle is ignored and the map is always displayed as if the user
     * is looking straight down onto it.
     */
    titleLabel: React.PropTypes.string,
};

var RCTMapp = requireNativeComponent('RCTMapp', MapView);
console.log(RCTMapp);

module.exports = MapView;