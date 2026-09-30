// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from "./task1.js";

export async function addUser(id, first_name, last_name, email){
    const response = await fetch(getServerURL()+"users");
//"id" = id ;

response.json ((id, first_name, last_name, email));

}

const alicia =  addUser (6,"Alicia", "Miranda", "alicia@example.com");