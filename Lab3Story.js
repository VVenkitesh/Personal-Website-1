
function begin (){
    let start= confirm('Ready to go on an adventure?');
    if(start ==true){
    
    let forest=confirm('You need to get to the library to meet up with your friend and ask them a question about the physics homework. Do you want to go through the nearby forest? If not, press cancel to go through the park instead.');
    
    if(forest == true) {
        let path=confirm('You enter the forest, but suddenly you find yourself lost at a fork in the path! Do you want to go left (OK) or right (cancel)?');
        if(path == true) {
            let house=confirm('You are still lost and are looking for help. You find an old cottage on the way. Would you like to go inside and explore?');
    
            if(house == true) { 
              let lab = confirm('You see a physics lab set up inside the cottage, and some noises are coming from farther inside that sound like a person is inside with you. Do you stay in the cottage to meet the person?')
              if(lab == true) {
                alert('The person you meet is none other than your friend! After not seeing you at the library, they decided to go out and search for you in the forest. Together, both of you finish the homework and make it out of the forest afterwards. Nice work! THE END.')
                let replay = confirm('Do you want to play again?');
                if (replay == true) {
            begin ();
                }
              }
              else{
                let fork = confirm('You run out of the cottage and go further in what you think is the right direction.Suddenly, you reach yet another fork in the road. Do you want to go left (OK) or right (cancel)?')
                if(fork == true){
                    let store = confirm('You make it out of the forest...but you find yourself at the grocery store instead! You know that the library is quite far from here. You think about taking the bus, but then realize that when you ran, your money accidentally fell out of your pocket. Would you like to try walking to the library from here (OK) or go back home (cancel)?')
                    if(store == true){
                        alert('You reach the library, but by the time you get there, you realize you got there just a minute too late- the library has just closed for the day. You are forced to go back home, and now you will have to try and complete this homework by yourself. Maybe you can see if there are any tutorials online about this specific physics topic, or try and Zoom with your friend? THE END.')
                        let replay = confirm('Do you want to play again?');
                if (replay == true) {
            begin ();
                }
                    }
                else{
                    let money = confirm('As you are dejectedly walking home, you realize you have some spare money in your other pocket! It is getting late now and you know the library closes soon, but would you like to try to take a bus to the library?') 
                    if(money == true){
                        alert('You catch a bus and manage to make it to the library just before it is about to close! You meet up with your friend and the two of you sit at a bench just outside the library and finish your physics homework. Both of you get good grades on the assignment! Nice job! THE END.')
                        let replay = confirm('Do you want to play again?');
                if (replay == true) {
            begin ();
                }
                    }
                    else{
                        alert('You walk back home, but it takes you longer than expected because of construction on your usual walking route. By the time you get home, it is very late and you are forced to attempt to complete the assignment on your own. You make a note to yourself to start from home earlier next time so that you can get to the library before it closes. Oh, well, maybe you will have better luck meeting up with your friend next time! THE END.')
                        let replay = confirm('Do you want to play again?');
                if (replay == true) {
            begin ();
                }
                    }
                }
              }
                else{
                    alert('On your way, you met a weirdly aggressive raccoon that ATE your physics homework! You manage to outrun the raccoon and make it out of the forest, although now you are unable to turn in your homework. Maybe you can tell your teacher the excuse that "A raccoon ate my homework"? Hopefully they believe you, although, honestly, they probably will not. THE END.')
                    let replay = confirm('Do you want to play again?');
                if (replay == true) {
            begin ();
                }
                }
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
           let home = confirm('Do you want to go back home (OK) or try a different route (cancel)?')
            if(home == true){
                alert('You sprint out of the park until you reach the safety of your home. You might not be able to meet up with your friend in person, but maybe you can arrange a Zoom meeting instead? Either way, at least nothing bad happened to you! THE END.');
                let replay = confirm('Do you want to play again?');
                if (replay == true) {
            begin ();
            }
           else{
            let road = confirm('You decide to walk around the streets to see if you can figure out a way to get to the library. Along the way, you see a lady walking up ahead. Do you want to ask her how to get to the library?')
            if(road == true){
                let lady = confirm('The lady agrees to help you and says that she will lead the way to the library. However, as you both keep walking, the environment around you begins to look very unfamiliar and unnerving. It is also getting quite late, but the lady insists the library is close by. Do you continue following her?')
                if(lady == true) {
                    alert('The lady suddenly places her hand over your eyes and continues to lead you somewhere. Then, all at once, she takes her hand away and you hear a clicking noise behind you. Although it is dark, you can make out that you are in an empty roomm with no windows and the door is locked from the outside behind you. You cannot escape. Hopefully by tomorrow someone is able to find you. THE END.')
                    let replay = confirm('Do you want to play again?');
                if (replay == true) {
            begin ();
            }
                else{
                    alert('You take off running in the opposite direction and suddenly run into none other than your physics teacher! You explain your situation to them, and they tell you that although the library is closed now, they can walk you home. Along the way, you ask your teacher questions about the homework, and they are able to explain everything to you. When you get home, you thank your teacher and then call your friend to help them with the homework. Both of you end up getting good scores! Nice job! This time you got lucky and found someone you knew to help you get back home, but next time maybe stick to routes you are more familiar with! THE END.')
                    let replay = confirm('Do you want to play again?');
                if (replay == true) {
            begin ();
            }
                }
                }
            }
            else{
                let bus = confirm('You continue searching on your own, but you are unable to find the library. All the street names look unfamiliar, and you realize this is a part of town you have never been to before. It is getting late and the library is probably closed by now. Even though you cannot go to the library anymore, you do need to get back home. Do you want to take the bus?')
                if(bus == true){
                    alert('Luckily, you have just enough money to pay the bus fare. You make it back home late, though, and miss the deadline to submit the physics homework. At least, however, you got home safely and did not put yourself in any dangerous situations. Maybe if you turn it in tomorrow, you can still get half credit? THE END.')
                    let replay = confirm('Do you want to play again?');
                if (replay == true) {
            begin ();
            }
                }
                else{
                    alert('You decide to walk home in the dark. Unfortunately, because it is so dark, you fall into a pond on the way. You eventually manage to get back home and are subsequently punished severely for staying out so late. You are unable to submit the physics homework. Next time, make sure to get home before it gets dark. Better luck next time! THE END.')
                    let replay = confirm('Do you want to play again?');
                if (replay == true) {
            begin ();
            }
                }
            }
           }
        }
        else{
            let direction = confirm('The park has two exits closest to you. Would you like to go out from Exit #1 (OK) or Exit #2 (cancel)?')
            if(direction == true){
                alert('While trying to get out, you get attacked by a flock of angry geese! In the process, your physics homework falls into the nearby river and gets lost. You are forced to go back home and cannot submit the physics homework because you lost it. Maybe you should try to get your physics teacher to sympathize with you and give you both an extra copy of the homework and an extension? THE END.')
                let replay = confirm('Do you want to play again?');
                if (replay == true) {
            begin ();
                }
            }
            else{
               alert('You make it out of the park, and after walking around for sometime, not only do you meet your physics teacher, but it turns out they are also going to the library! The two of you meet your friend and your physics teacher is able to explain the homework to both of you. You both end up getting a 100% on the homework! Great work! THE END.') 
               let replay = confirm('Do you want to play again?');
                if (replay == true) {
            begin ();
                }
            }
        }
        };
    }
    
    }
    
    }

