var React = require('react');

var Autocomplete = React.createClass({
  getInitialState: function(){
    return {searchString: ""};
  },
  searchInput: function(event){
    this.setState({searchString: event.currentTarget.value});
  },
  narrowDownNames: function(){
    var text = this.state.searchString;
    var namesArr = [];
    // filter
    for (var i = 0; i < this.props.names.length; i++){
      if (this.props.names[i].indexOf(text) !== -1){
        namesArr.push(this.props.names[i]);
      }
    }
    return namesArr.sort();
  },
  nameClicked: function(event){
    this.setState({searchString: event.target.innerHTML});
  },
  render: function(){
    var names = this.narrowDownNames();
    return(
      <div>
        <input type="text"
               value={this.state.searchString}
               onInput={this.searchInput}>
        </input>
        <ul>
          {names.map(function(name){
            return <li onClick={this.nameClicked} key={name}>{name}</li>;
          }.bind(this))}
        </ul>
      </div>
    );
  }
});


module.exports = Autocomplete;
