var React = require('react');

var Clock = React.createClass({



  render: function(){
    return <div>{this.props.time.toString()}</div>;
  }

});


module.exports = Clock;
