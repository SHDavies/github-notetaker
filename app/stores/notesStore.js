var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";

var _state = {
	notes: [],
	user: ''
};

function addNote(note) {
	_state.notes.push(note);
}

function changeUser(data) {
	_state = {
		notes: data.notes,
		user: data.user
	}
}

var notesStore = objectAssign({}, EventEmitter.prototype, {

	getState: function() {
		return _state;
	},

	addChangeListener: function(cb) {
		this.on(CHANGE_EVENT, cb);
	},

	removeChangeListener: function(cb) {
		this.removeListener(CHANGE_EVENT, cb);
	}
});

AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch (action.actionType) {
		case appConstants.ADD_NOTE:
			addNote(action.data);
			notesStore.emit(CHANGE_EVENT);
			break;
		case appConstants.CHANGE_USER:
			changeUser(action.data);
			notesStore.emit(CHANGE_EVENT);
			break;
		default:

	}
});

module.exports = notesStore;
