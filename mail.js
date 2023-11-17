const firebaseConfig = {
    apiKey: "AIzaSyCfgOzLXU5WffMb6ay2462Hq8U3bh3fQtU",
    authDomain: "herbs-website.firebaseapp.com",
    databaseURL: "https://herbs-website-default-rtdb.firebaseio.com",
    projectId: "herbs-website",
    storageBucket: "herbs-website.appspot.com",
    messagingSenderId: "1055977622788",
    appId: "1:1055977622788:web:0256d3632c29f7d66f9451",
    measurementId: "G-PEB203807F"
  };
// intialize firebase
  firebase.initializeApp(firebaseConfig);
  // reference your database
   var contactFormDb = firebase.database().ref("contactForm");
  document.getElementById("contactForm").addEventListener("submit",submitform);
   
  function submitform(e){
    e.preventDefault();

    var name= getelementVal("name");
    var email=getelementVal("email");
    var subject=getelementVal('subject');
    var message=getelementVal('message');
    saveMessages(name,email,subject,message);


    //enable alert
    document.querySelector('.alert').Style.display = "block";
    //remove the alert
    setTimeout(() => {
        document.querySelector('.alert').Style.display = "block";  
    },3000);
    //reset the form
    document.getElementById("contactForm").request();
  };
  const saveMessages = (name,email,subject,message)=>{
   var newcontactForm= contactFormDb.push();

     newcontactForm.set({
        name:name,
        email:email,
        subject:subject,
        message:message,

     });
    };

  const getelementVal= (id)=>{
    return document.getElementById(id).value;
  };