function Mail(subj, msg) {
    this.subject = subj;
    this.message = msg;
  }

  // Type your code below this line!
 console.log("Listo para enviar un nuevo correo");
  let  newMail = new Mail(prompt("Ingrese el asunto: "), prompt("Ingrese el mensaje: ") )
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)