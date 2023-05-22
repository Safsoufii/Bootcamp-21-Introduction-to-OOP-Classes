// An Email Simulation
/*
create your email class here
*/
//define class
class Outlook {
    //construct parameters
    constructor (hasBeenRead, emailContents, isSpam, fromAddress) {
        //initialise parameters
    this.hasBeenRead = false;
    this.emailContents = emailContents;
    this.isSpam = false;
    this.fromAddress = fromAddress;
}
//Create method for instances of the class Outlook

//To reply to an email a new object 
//Retrieve the email contents and senders email address from the instance of the class Outlook
//Add email is the name of the method
    AddEmail(sendersEmailContents, fromAddress, emailContents) {
    this.sendersEmailContents = sendersEmailContents;
    this.fromAddress = fromAddress;
    this.emailContents = emailContents;
}
markAsRead() {
    this.hasBeenRead = true;
    return this.hasBeenRead;
};

markAsSpam() {
this.isSpam = true;
return this.isSpam;
};
getCount() {

};
getUnreadEmails() {

};
getSpamEmails() {

};
delete() {

};
};

//Initialise objects
AddEmail.prototype = Object.create(Outlook.prototype);
AddEmail.prototype.getSendersEmailContents = function() {
    return this.sendersEmailContents;
};
AddEmail.prototype.getFromAddress = function() {
    return this.fromAddress;
};
AddEmail.prototype.getEmailContents = function() {
    return this.emailContents;
};

const newEmail = new AddEmail (inbox.emailContents, inbox.fromAddress,"Thank you for your email");
//Instance of the class Outlook representing information of recieved email 
let recievedEmail = new Outlook ("Hi! Welcome to Outlook 2.0!", "safacodes@hotmail.com");
//inbox to store received emails
let inbox = [];
inbox.push(recievedEmail);

console.log(newEmail);

userChoice = "";
while(userChoice != "7"){
	userChoice = prompt("What would you like to do:\n 1. Read email\n 2. Mark spam\n3. Send email\n4. Delete email\n5. View spam emails\n6. View unread emails\n7. quit?");
	if(userChoice == "1"){
		//	Place your logic here
	}else if(userChoice == "2"){
		//	Place your logic here
	}else if(userChoice == "3"){
		//	Place your logic here
	}else if(userChoice == "4"){
		//	Place your logic here
	}else if(userChoice == "5"){
		//	Place your logic here
	}else if(userChoice == "6"){
		//	Place your logic here
	}else if(userChoice == "7"){
		console.log("Goodbye");
	}else{
		console.log("Oops - incorrect input");
		
	}
}