var React = require('react');

var Autocomplete = React.createClass({
  render: function(){
    return(
      <div>
        <input type="text" value=""></input>
        <ul>
          {this.props.names.map(function(name){
            return <li>{name}</li>;
          })}
        </ul>
      </div>
    );
  }
});


module.exports = Autocomplete;
