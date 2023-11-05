const attkbtn = document.querySelector('#btn');
const restartbtn = document.querySelector(".Restartbtn");
const retreatbutton = document.querySelector(".Retreatbtn");

class battleShip{

    constructor( name, hull, firepower, accuracy){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    getName(){
        return this.name;
    }
    getHull(){
        return this.hull;
    }
    getfirepower(){
        return this.firepower;
    }
    getAccuracy(){
        return this.accuracy;
    }
    attack(alien){
        alert(`${this.name} is attacking ${alien.getName()}`)
        console.log(`${this.name} is attacking ${alien.getName()}`)

        if(Math.random() < this.accuracy){
            alert("Attacked Successfull");
            alien.injure(this.firepower);
        } else{
            alert('Missed the attack')
        }
    }
    injure(damage){
        this.hull -= damage;
        console.log(`${this.name} took ${damage}.Now the Hull Strength is ${this.hull}`)  
        alert(`${this.name} took ${damage}.Now the Hull Strength is ${this.hull}`)
        document.getElementById("alienHull").textContent = this.hull;
        document.getElementById("alienFirePow").textContent = this.firepower;
        document.getElementById("alienAccuracy").textContent = this.accuracy;
    }
    Destroy(){
        return this.hull <=0;
    }
}

// To Start the game ,creating function
let count = 0;
function startGame(){
    // alert("HI the game starts")
    // count++;
    const USSAShip = new battleShip("USS assembly", 20, 5, 0.7)
    const alienShips =[];
    //Generating 6 Alien ships with random hull, firepower, accuracy values
    for (let i=1;i<=6;i++){
        const hull = Math.floor(Math.random() * 3) + 3 ; // 3-6
        const firepower = Math.floor(Math.random() * 2) + 2 ; //2-4
        const accuracy = (Math.floor(Math.random() * 0.2 ) + 0.6); //0.6 - 0.8

        const nextAlienShip = new battleShip(`Alien Ship ${i}`, hull, firepower, accuracy)
        alienShips.push(nextAlienShip);
    }
    console.log(`AlienShip number ${count+1}`);
    //console.log(alienShips);

// Game logic
    if(alienShips.length > 0 && !USSAShip.Destroy() && count <= 6){

        let alien = alienShips[count];
        USSAShip.attack(alien);

        if(alien.Destroy()){
            alert('The Alien Ship is Destroyed');
            // alienShips.shift();
           let question =  prompt('Would you like to Continue? Type yes to Continue..')
                if(question === 'yes'){

                            // alien = alienShips[1];
                            alien = alienShips[count];
                            count++;
                }
                else{
                     return;
                }
            
        }else if (USSAShip.Destroy()){
            alert(`${USSAShip.getName()} has been destroyed`);

        }
        else{
            alien.attack(USSAShip);
         }
    }
    
    if(alienShips.length === 0){
        alert("You won! you have detroyed all the Alien Ships");
    }
    else if(count === 6){
        alert('Game Over')
        reload();
    }
   
}

function retreat() {
    if (confirm("Wanna RETREAT?..")) {
        reload();
    }
    else{
        return;
    }
}

function reload() {
    window.location.reload();
}
