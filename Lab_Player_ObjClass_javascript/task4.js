export class Player {
    constructor(name, level){
      this.name = name ;
      this.level = level ;

      this.info = function () {
      
        return this.name + " is at level " + this.level;
      };

    }
    
  }
const readline =require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  const Player1 = new Player("Tara", 6+1);
  const Player2 = new Player(readline.question("Enter the name of the player: "), parseInt(readline.question("Enter the level of the player: ")));
readline.close();
  console.log(Player1.name + " has reached level " + Player1.level);
  console.log(Player2.info());
