var React = require('react'),
    Autocomplete = require('./autocomplete');

var Widgets = React.createClass({
  names: ["Asher", "Jeff", "Ned", "Kush",
          "Max", "Alex", "Charles", "Anthony",
          "Brooke", "Jade"],

  render: function(){
    return(
      <Autocomplete names={this.names}/>

      // </Automcomplete>
    );
  }
});


module.exports = Widgets;
