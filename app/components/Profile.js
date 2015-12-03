var React = require('react');
var Router = require('react-router');
var notesStore = require('../stores/notesStore');
var Left = require('./Github/Left');
var Middle = require('./Github/Middle');
var Notes = require('./Notes/Notes');

var Profile = React.createClass({
  mixins: [ Router.State ],
  render: function(){

    var username = this.getParams().username;
    return (
      <div className="row">
        <div className="col-md-4">
          <Left username={username}/>
        </div>
        <div className="col-md-4">
          <Middle username={username}/>
        </div>
        <div className="col-md-4">
          <Notes username={username}/>
        </div>
      </div>
    )

  }
});

module.exports = Profile;
