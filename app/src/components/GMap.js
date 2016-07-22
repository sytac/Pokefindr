import React from 'react';

const mapStyles = [
  {
    "featureType": "water",
    "stylers": [
      { "visibility": "on" },
      { "color": "#1A87D6" }
    ]
  },{
    "featureType": "landscape",
    "stylers": [
      { "color": "#AFFFA0" }
    ]
  },{
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      { "color": "#59A499" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "color": "#EAFFE5" }
    ]
  },{
  },{
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#F0FF8D" },
      { "weight": 2.2 }
    ]
  },{
    "featureType": "poi.business",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.government",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative.locality",
    "stylers": [
      { "visibility": "off" }
    ]
  },{},{}
];

class GMap extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };

    this.markers = [];

    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: { lat: 52.3873880, lng: 4.6462190 },
      zoom: 15,
      styles: mapStyles,
    });
    window.addEventListener('resize', this.handleWindowResize);
    this.setMarkers();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  }

  setMarkers() {
    const { pokemon } = this.props;
    this.clearMarkers();
    this.markers = pokemon.map(p => {
      // const icon = {
      //   url: require(`../../images/${p.id}.png`),
      //   size: new google.maps.Size(32, 32),
      //   origin: new google.maps.Point(0, 0),
      //   anchor: new google.maps.Point(0, 16)
      // };

      return new google.maps.Marker({
        map: this.map,
        position: p.location,
        icon: require(`../../images/${p.id}.png`),
        title: p.name
      });
    });
  }

  clearMarkers() {
    this.markers.forEach(m => {
      markers[i].setMap(null);
    });
  }

  render() {
    const { windowHeight, windowWidth } = this.state;
    const { offsetTop } = this.props;
    const mapStyles = {
      height: `${windowHeight}px`,
      width: `${windowWidth}px`,
      top: `${offsetTop}px`,
    };
    return (
      <div
        ref="map"
        className="map"
        style={mapStyles}
      />
    );
  }
}

export default GMap;
