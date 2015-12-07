var React = require('react');

var Weather = React.createClass({

  getInitialState: function () {
    return {city: "Loading", temp: "Loading"};

  },

  componentDidMount: function (){
    navigator.geolocation.getCurrentPosition(this.requestWeather);
  },

  requestWeather: function (geoLocation){
    var lat = geoLocation.coords.latitude,
        long = geoLocation.coords.longitude,
        xmlhttp = new XMLHttpRequest(),
        key = "&APPID=645c5d39c7603f17e23fcaffcea1a3c1";

    xmlhttp.onreadystatechange = function(){
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
        this.parseWeather(xmlhttp.responseText);
      }
    }.bind(this);

    var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
              lat + '&lon=' + long + key + '&units=imperial';

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

  },

  parseWeather: function (response) {
    var weather = JSON.parse(response);
    this.setState({city: weather.name, temp: weather.main.temp });
  },


  render: function (){
    return <div>City: {this.state.city} Temperature: {this.state.temp}</div>;
  }


});

module.exports = Weather;
