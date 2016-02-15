angular.module('app',[]); //setup an angular module

angular.module('app').factory('messages',function(){ //create a service called messages

	//create and return an empty message called 'messages'. This is the object that dependencies of this service will receive
	var messages = {}

	//create a property list on messages and set it to an empty array. This is where we will be storing our messages.
	messages.list = [];

	//create a function 'add' on 'messages' that will add provided messages to our list.

	messages.add = function(message){
		messages.list.push({id: messages.list.length,text: message});
	};

	return messages;
});

//Now that our service is ready. Let's create a couple controllers to make use of it.
//Create a controller ccalled 'ListCtrl' that injects our messages service, and exposes the list from our service to our view
angular.module('app').controller('ListCtrl',function(messages){
	var self = this;
	self.messages = messages.list;
});

//Create a  controller named 'PostCtrl' that injects our 'messages' service. This controller will also contain 'addMessage' function 
//that uses the 'add' function we have made in our service.
angular.module('app').controller('PostCtrl',function(messages){
	var self = this;

	//set 'newMessage' within 'PostCtrl' to get a default message, & set 'newMessage' to an empty string after calling message.add to
	//clear out input field after it has been submitted.
	self.newMessage = 'Sssup?';

	self.addMessage = function(message){
		messages.add(message);
		self.newMessage = '';
	};
});
