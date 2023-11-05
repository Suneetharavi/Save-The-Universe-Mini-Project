1. create a class called Ship with the constructor with the properties of Hull, Firepower and Accuracy (like Factory)
2. write a method called attack which generates a random number(USS Assembly) and compares it with alien's accuracy
    - if random number is greater than Alien's accuracy, then USS Assembly win and reduce the alien's hull with the firepower

    - if random number is lesser than Alien's accuracy, then reduce the USS assembl'y hull by the Alien's firepower
On click of the attack Alien button, the attack function should be called.
attack() - 

        -Check the alien's hull also
        -if alien's hull is lesser than or equal to 0, we have to take the next ship
        else
        -continue with the same ship
        - Check the USS assembly hull 
        If it is greater than 0, then proceed
                -Generate a random number(USS'accuracy) for USS Assembly
                -Compare it with Alien's accuracy
                - if(random_num > alien's accuracy) - decrease the alien's hull by randomnum(USS Accuracy)
                - else - descrease the USS 's hull by the alien's accuracy.
        else
            - we have to end the game.

        

If we are clicking the attack button again, we have to check the alien's hull. If it is less than or equal to 0, then we have to continue with new alinen number
else
we have to take the same alien number

After the 6 alien iterations, we have to check the hull of USS Assembly. If it greater than 0, then diplay "YOU WON"