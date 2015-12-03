var React = require('react');
var notesStore = require('../../stores/notesStore');
var notesActions = require('../../actions/noteActions');

var AddNote = require('./AddNote');
var NotesList = require('./NotesList');

var Notes = React.createClass({
	getInitialState: function() {
		return {
			notes: notesStore.getState().notes
		}
	},

	componentDidMount: function() {
		notesActions.changeUser(this.props.username);
		notesStore.addChangeListener(this._onChange);
	},

	componentWillReceiveProps: function(obj) {
		notesActions.changeUser(obj.username);
	},

	componentWillUnmount: function() {
		notesStore.removeChangeListener(this._onChange);
	},

	render: function() {
		return (
			<div>
				<h3> Notes for {this.props.username} </h3>
				<AddNote username={this.props.username} />
				<NotesList notes={this.state.notes} />
			</div>
		)
	},

	_onChange: function() {
		this.setState({
			notes: notesStore.getState().notes
		});
	}
})

module.exports = Notes;
