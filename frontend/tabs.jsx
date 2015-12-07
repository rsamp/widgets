var React = require('react');

var Tabs = React.createClass({
  getInitialState: function(){
    return {currentTab: 0};
  },
  changeTab: function(event){
    this.setState({currentTab: parseInt(event.target.id)});
  },
  render: function(){
    var tabs = this.props.tabs;

    return (
      <ul>
        {tabs.map(function(tab, index){
          return <li onClick={this.changeTab}
                     id={index}
                     key={index}
                     style={{
                       fontWeight: (index === this.state.currentTab ? "bold" : "")
                     }}
                     >{tab.title}</li>;
        }.bind(this))}
        <article>
          {tabs[this.state.currentTab].content}
        </article>
      </ul>
    );
  }
});

module.exports = Tabs;
