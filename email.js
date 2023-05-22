class Email {
    // The Email class has four attributes: hasBeenRead, emailContents, isSpam, and fromAddress
    constructor(fromAddress, emailContents) {
      // When an Email object is created, the constructor initializes the object with the given
      // fromAddress and emailContents, and sets hasBeenRead and isSpam to false
      this.hasBeenRead = false;
      this.emailContents = emailContents;
      this.isSpam = false;
      this.fromAddress = fromAddress;
    }
  
    markAsRead() {
      // This function changes the hasBeenRead attribute of the Email object to true
      this.hasBeenRead = true;
    }
  
    markAsSpam() {
      // This function changes the isSpam attribute of the Email object to true
      this.isSpam = true;
    }
  }
  
  const inbox = [];
  
  function addEmail(fromAddress, emailContents) {
    // This function creates a new Email object using the given fromAddress and emailContents,
    // and adds it to the end of the inbox array
    const email = new Email(fromAddress, emailContents);
    inbox.push(email);
  }
  
  function getCount() {
    // This function returns the number of Email objects in the inbox array
    return inbox.length;
  }
  
  function getEmail(index) {
    // This function returns the Email object at the given index in the inbox array
    // It also marks the Email as read by calling the markAsRead function on it
    const email = inbox[index];
    email.markAsRead();
    return email;
  }
  
  function getUnreadEmails() {
    // This function returns an array of all the unread Email objects in the inbox array
    // It filters the inbox array to only include Email objects where the hasBeenRead attribute is false
    return inbox.filter(email => !email.hasBeenRead);
  }
  
  function getSpamEmails() {
    // This function returns an array of all the spam Email objects in the inbox array
    // It filters the inbox array to only include Email objects where the isSpam attribute is true
    return inbox.filter(email => email.isSpam);
  }
  
  function deleteEmail(index) {
    // This function removes the Email object at the given index in the inbox array
    inbox.splice(index, 1);
  }
  
  function getNumMessages() {
    // This function returns the number of messages in the inbox
    // It counts the number of Email objects in the inbox array that have the isSpam attribute set to false
    return inbox.filter(email => !email.isSpam).length;
  }
  
    // Create some emails
    addEmail("alice@example.com", "Hello, how are you?");
    addEmail("bob@example.com", "I'm doing well, thanks for asking.");
    addEmail("charlie@example.com", "Hello, this is a spam message.");
    addEmail("david@example.com", "Hey, what's up?");
    
    let userChoice = "";
while(userChoice != "8"){
  // This loop continues until the user enters "8"
  userChoice = prompt("What would you like to do:\n 1. Read email\n 2. Mark spam\n3. Send email\n4. Delete email\n5. View spam emails\n6. View unread emails\n7. Check number of emails\n8. Quit");
  if(userChoice == "1"){
    // If the user enters "1", they want to read an email
    const index = prompt("Enter the index of the email you want to read:");
    // The user is asked to enter the index of the email they want to read
    const email = getEmail(index); // get the email object
    console.log(`Reading email at index ${index}:`);
    console.log(email); // print the email to the console
  } else if(userChoice == "2"){
    // If the user enters "2", they want to mark an email as spam
    const index = prompt("Enter the index of the email you want to mark as spam:");
    // The user is asked to enter the index of the email they want to mark as spam
    getEmail(index).markAsSpam(); // mark the email as spam
    // The getEmail function is called with the given index and the markAsSpam function is called on the returned Email object
    console.log(`Marked email at index ${index} as spam.`);
  } else if(userChoice == "3"){
    // If the user enters "3", they want to send an email
    const fromAddress = prompt("Enter your email address:");
    // The user is asked to enter their email address
    const emailContents = prompt("Enter the contents of the email:");
    // The user is asked to enter the contents of the email
    addEmail(fromAddress, emailContents);
    // The addEmail function is called with the given fromAddress and emailContents
    console.log(`Sent email from ${fromAddress} with contents "${emailContents}".`);
  } else if(userChoice == "4"){
    // If the user enters "4", they want to delete an email
    const index = prompt("Enter the index of the email you want to delete:");
    // The user is asked to enter the index of the email they want to delete
    deleteEmail(index);
    // The deleteEmail function is called with the given index
    console.log(`Deleted email at index ${index}.`);
  } else if(userChoice == "5"){
    // If the user enters "5", they want to view spam emails
    console.log("Spam emails:");
    console.log(getSpamEmails());
    // The getSpamEmails function is called and the returned array of spam emails is logged to the console
  } else if(userChoice == "6"){
    // If the user enters "6", they want to view unread emails
    console.log("Unread emails:");
    console.log(getUnreadEmails());
    // The getUnreadEmails function is called and the returned array of unread emails is logged to the console
  } else if(userChoice == "7"){
    // If the user enters "7", they want to check the number of emails in the inbox
    console.log(`Number of emails in inbox: ${getCount()}`);
    // The getCount function is called and the returned number of emails is logged to the console
  } else if(userChoice == "8"){
    // If the user enters "8", they want to quit
    console.log("Quitting.");
  } else {
    // If the user enters anything else, the input is invalid
    console.log("Invalid input. Please enter a number from 1 to 8.");
  }
}

  
