export class Player {
    constructor(name, level){
      this.name = name;
      this.level = level;

      this.info = function() {
        return this.name + " is at level " + this.level;
      };
    }
    
  }

  const Player1 = new Player("Tara", 6);

  console.log(Player1.name + " has reached level " + Player1.level);