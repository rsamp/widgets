var React = require('react'),
    ReactDOM = require('react-dom'),
    Autocomplete = require('./autocomplete'),
    WeatherClock = require('./weatherclock'),
    Tabs = require('./tabs');

var Widgets = React.createClass({
  names: ["Asher", "Jeff", "Ned", "Kush",
          "Max", "Alex", "Charles", "Anthony",
          "Brooke", "Jade"],

  tabs: [{title: "Title1", content: "Content1"},
         {title: "Title2", content: "Content2"},
         {title: "Title3", content: "Content3"},
         {title: "Title4", content: "Content4"}],

  render: function () {
    return(
      <div>
        <Autocomplete names={this.names}/>
        <WeatherClock/>
        <Tabs tabs={this.tabs}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets/>, document.getElementById('main'));
});
