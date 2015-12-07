var React = require('react'),
    ReactDOM = require('react-dom'),
    Widgets = require('./widgets');

// var MyComponent = React.createClass({
//   render: function () {
//     return(
//       <div>Hello World</div>
//     );
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets/>, document.getElementById('main'));
});
