
"use strict";
setBackground()


jQuery(function () {
    $("#chanty").html(getRandomChanty())
});

function  setBackground(){

    var imagePool = new Array()

    $.ajax({
        url : "/idp/images/background",
        success: function (data) {
         $(data).find("a:contains(.jpg)").each(function(){
            imagePool.push($(this).attr("href"))  
         });

         var c = Math.floor((Math.random() * imagePool.length));
         document.body.style.backgroundImage = "url("+imagePool[c]+")";     

        }
    });
}

function getRandomChanty(){

    let chanties = [

        "And it's all for me grog, me jolly, jolly grog\nAll for me beer and tobacco\n\Well I spent all me tin on the lassies drinking gin\nAcross the western ocean I must wander ",
        "I'm sick in the head and I haven't gone to bed\nSince I first came ashore from me slumber\nFor I spent all me dough on the lassies don't you know\nFar across the western ocean I must wander "
        
        ]
    
    return chanties[ Math.floor((Math.random() * chanties.length))].replace(/\n/g, "<br/>");;

}

/* 


In the Black Ball Line I serv'd my time 
Hurrah for the Black Ball Line! 
In the Black Ball Line I serv'd my time 
Hurrah for the Black Ball Line!  

Oh, blow the man down, bullies, blow the man down!
To me way-aye, blow the man down.
Oh, Blow the man down, bullies, blow him right down!
Give me some time to blow the man down!

“Oh, I am not a man-o’-war nor privateer,” said he,
Blow high, blow low, and so sailed we;
“But I’m a salt-sea pirate a-looking for my fee,
“Cruising down the coast of the High Barbaree.”

“Oh, quarter, Oh, quarter,” those pirates then did cry,
Blow high, blow low, and so sailed we;
But the quarter that we gave them – we sunk them in the sea,
Coming down along the coast of the High Barbaree.

The Diamond is a ship, my lads, for the Davis Strait she’s bound,
And the quay it is all garnished with bonny lasses ’round;
Captain Thompson gives the order to sail the ocean wide,
Where the sun it never sets, my lads, no darkness dims the sky,

Here’s a health to the Resolution, likewise the Eliza Swan,
Here’s a health to the Battler of Montrose and the Diamond, ship of fame;
We wear the trouser o’ the white and the jackets o’ the blue,
When we return to Peterhead, we’ll hae sweethearts anoo,
So it’s cheer up my lads, let your hearts never fail,
While the bonny ship, the Diamond, goes a-fishing for the whale.

She came to me all in my sleep,
Lowlands, Lowlands, away, my John,
I dreamed I saw my own true love,
My Lowlands, away!

Wrap me up in me oil-skin and jumper
No more on the docks I’ll be seen
Just tell me old shipmates, I’m taking a trip mates
And I’ll see you some day in Fiddler’s Green






*/