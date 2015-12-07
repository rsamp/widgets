var React = require ('react'),
    Clock = require ('./clock'),
    Weather = require ('./weather');

  var WeatherClock = React.createClass({

    getInitialState: function(){
        return {time: new Date()};
    },

    componentDidMount: function () {
      this.interval = setInterval(this.tick, 1000);
    },

    componentWillUnmount: function () {
      clearInterval(this.interval);
    },

    tick: function () {
      var newTime = this.state.time;
      newTime.setSeconds(newTime.getSeconds()+1);
      this.setState({time: newTime});
    },

    render: function(){
      return (
        <div>
          <Clock time={this.state.time}/>
          <Weather/>
        </div>
    );
    }
  });


module.exports = WeatherClock;
