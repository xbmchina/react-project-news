var React = require('react');
var ReactDOM = require('react-dom');

class Root extends React.Component {

  render() {
    return (
      <div>
        1234
      </div>
    );
  }
}


ReactDOM.render(<Root />, document.getElementById('app'));
