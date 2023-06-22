const generateRandomNum = (min, max) => {
    let rando = Math.floor(Math.random() * (max - min) + min);
    return rando;
  };
  ​
  let player1 = {
    name: "P1",
    hull: 20,
    firepower: 5,
    accuracy: 7,
  };
  ​
  let a1 = {
    name: "Denver",
    hull: generateRandomNum(3, 6),
    firepower: generateRandomNum(2, 4),
    accuracy: generateRandomNum(6, 8),
    image:
      "https://media0.giphy.com/media/3ohze3hIchu9ekjmDe/giphy.gif?cid=6c09b952rmqgc5t0wc36tyxkawwoknrodqdwhjqv4nvm75fo&rid=giphy.gif&ct=s",
  };
  ​
  let a2 = {
    name: "Tokyo",
    hull: generateRandomNum(3, 6),
    firepower: generateRandomNum(2, 4),
    accuracy: generateRandomNum(6, 8),
    image:
      "https://media1.giphy.com/media/BcuLq7kvQWuftTzBh4/giphy.gif?cid=6c09b952vrbn5n247x0rvnmr3qgfhg1wcdso0fvo3e047meu&rid=giphy.gif&ct=s",
  };
  ​
  // ++
  let a3 = {
    name: "Berlin",
    hull: generateRandomNum(13, 16),
    firepower: generateRandomNum(2, 4),
    accuracy: generateRandomNum(6, 8),
    image: "https://media3.giphy.com/media/C3ByEpHvHupHi/giphy.gif",
  };
  ​
  let a4 = {
    name: "Nairobi",
    hull: generateRandomNum(3, 6),
    firepower: generateRandomNum(2, 4),
    accuracy: generateRandomNum(6, 8),
    image:
      "https://media0.giphy.com/avatars/sanghyoundominichan/nFrbk5Jp1COV.gif",
  };
  let a5 = {
    name: "Moscow",
    hull: generateRandomNum(3, 6),
    firepower: generateRandomNum(2, 4),
    accuracy: generateRandomNum(6, 8),
    image:
      "https://media0.giphy.com/avatars/sanghyoundominichan/nFrbk5Jp1COV.gif",
  };
  let a6 = {
    name: "Helsenki",
    hull: generateRandomNum(3, 6),
    firepower: generateRandomNum(2, 4),
    accuracy: generateRandomNum(6, 8),
    image:
      "https://media0.giphy.com/avatars/sanghyoundominichan/nFrbk5Jp1COV.gif",
  };
  ​
  let allAliens = [a1, a2, a3, a4, a5, a6];
  let currentAlien = a1;
  let counter = 0
  console.log(counter,":Counter")
  ​
  console.log("Current Opponent:", currentAlien)
  ​
  ​
  // RoundLogic
  ​
  //2. If the ship survives, it attacks you
  const determineLifeHero = () => {
    console.log(player1.hull);
    if (player1.hull <= 0) {
     alert("Game Over")
    } else {
      startRound(currentAlien)
    }
  };
  ​
  const determineLifeAlien = () => {
      console.log(currentAlien.hull);
      if (currentAlien.hull <= 0) {
        switchAlien();
        counter++
        currentAlien = allAliens[counter]
        console.log("Current Opponent:", currentAlien)
    
      } else {
        alienAttack()
        determineLifeHero()
      }
    };
  ​
  ​
  // 1.  You attack the first alien ship
  const startRound = () => {
    console.log(currentAlien);
    let power = player1.firepower;
    let opponentLife = currentAlien.hull;
    let shot = (opponentLife -= power);
    currentAlien.hull = shot;
    console.log(`${player1.name} shot ${currentAlien.name} with power of ${power}`);
    console.log(`${currentAlien.name}'s life is now ${shot}`);
    // --------------------------------------
    determineLifeAlien();
  };
  ​
  //.... If you destroy the ship, you have the option to attack the next ship or to retreat
  // let ask = prompt("Would you like to Keep Fighting or Retreat?")
  // if(ask === "y"){
  //     switchAlien()
  // }else{
  //     alert("Game Over, you are a coward")
  //     // If you retreat, the game is over, perhaps leaving the game open for further developments or options
  // }
  ​
  // You win the game if you destroy all of the aliens
   
  ​
  const switchAlien = () => {
      console.log("ALIEN SWITCHED");
      let elian = document.querySelector(".playerTwo");
      let aliYun = document.createElement("img");
      aliYun.setAttribute("src", allAliens[counter]);
      aliYun.setAttribute("class", "playerTwo");
      elian.replaceWith(aliYun);
    };
  ​
  ​
  const alienAttack = () => {
      console.log("ALIEN IS NOW ATTACKING")
    let strength = currentAlien.firepower;
    let ufoAttack = (player1.hull-=currentAlien.firepower);
    player1.hull = ufoAttack;
    console.log(
      `${player1.name} got shot  by ${currentAlien.name} with power of ${strength}`
    );
    console.log(`${player1.name}'s life is now ${ufoAttack}`);
  };

  object.onclick = function(){functionToExecute};
  object.addEventListener("Attack", functionToExecute);
