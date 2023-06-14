 

function begin (){
let start= confirm('Ready to go on an adventure?');
if(start ==true){

let forest=confirm('You need to get to the library to meet up with your friend and ask them a question about the physics homework. Do you want to go through the nearby forest? If not, press cancel to go through the park instead.');

if(forest == true) {
    let path=confirm('You enter the forest, but suddenly you find yourself lost at a fork in the path! Do you want to go left (OK) or right (cancel)?');
    if(path == true) {
        let house=confirm('You are still lost and are looking for help. You find an old cottage on the way. Would you like to go inside and explore?');

        if(house == true) { 
          alert('The cottage is empty, but suddenly the door slams shut and locks behind you.You frantically try to open the door, but realize it is locked from the outside. Unfortunately, there are no windows and no other way to escape from the cottage. You have been trapped forever. Compared to this, physics homework does not seem like such a big problem after all... THE END.')
          let replay = confirm('Do you want to play again?');
            if (replay == true) {
        begin ();
            }

        }
        else{
            alert('You continue walking, but by now it has gotten dark and you cannot see anything. You realize that the deadline for submitting the homework has probably already passed, and even the library is most likely closed by now. You run back and somehow make it home before your parents notice. However, although you might have survived, your physics grade did not. THE END.')
            let replay = confirm('Do you want to play again?');
             if (replay == true) {
        begin ();
            }

        }
    }
    else{
        let bear=confirm('You find yourself face-to-face with a bear? Do you make a lot of noise (OK) or run away (cancel)?')
        if(bear == true) {
            alert('The bear went away, and you were able to make your way out of the forest to the library. You met up with your friend and both of you ended up getting a 100% on your physics homework! Congratulations!');
            let replay = confirm('Do you want to play again?');
             if (replay == true) {
        begin ();
    }

        }
        else{
            alert('When faced with a bear, you should not run away. Unfortunately, you did not know this at the time and ended up getting eaten by the bear. At least you do not have to worry about doing your physics homework anymore? THE END.');
            let replay = confirm('Do you want to play again?');
                if (replay == true) {
        begin ();
    }

        }
    }
}

else{
    alert('You enter the park, but strangely, there are no other people there.');
    let forest2=confirm('Do you want to continue walking in the park?');
    if(forest2 == true){
        alert('Suddenly you find yourself floating in the air! You are being captured by aliens. Oh well, maybe you can ask them to help you with your physics homework! THE END.')
        let replay = confirm('Do you want to play again?');
            if (replay == true) {
        begin ();
    }

    }
    else{
        alert('You sprint out of the park until you reach the safety of your home. You might not be able to meet up with your friend in person, but maybe you can arrange a Zoom meeting instead? Either way, at least nothing bad happened to you! THE END.');
        let replay = confirm('Do you want to play again?');
            if (replay == true) {
        begin ();
    }

    };
}

}

}

