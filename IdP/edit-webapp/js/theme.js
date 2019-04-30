
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
        "I'm sick in the head and I haven't gone to bed\nSince I first came ashore from me slumber\nFor I spent all me dough on the lassies don't you know\nFar across the western ocean I must wander ",
        "In the Black Ball Line I serv'd my time\nHurrah for the Black Ball Line!\nIn the Black Ball Line I serv'd my time\nHurrah for the Black Ball Line!",
        "Oh, blow the man down, bullies, blow the man down!\nTo me way-aye, blow the man down.\nOh, Blow the man down, bullies, blow him right down!\nGive me some time to blow the man down!",
        "Oh, I am not a man-o’-war nor privateer, said he,\nBlow high, blow low, and so sailed we;\nBut I’m a salt-sea pirate a-looking for my fee,\nCruising down the coast of the High Barbaree.",
        "Oh, quarter, Oh, quarter, those pirates then did cry,\nBlow high, blow low, and so sailed we;\nBut the quarter that we gave them – we sunk them in the sea,\nComing down along the coast of the High Barbaree.",
        "The Diamond is a ship, my lads, for the Davis Strait she’s bound,\nAnd the quay it is all garnished with bonny lasses ’round;\nCaptain Thompson gives the order to sail the ocean wide,\nWhere the sun it never sets, my lads, no darkness dims the sky!",
        "She came to me all in my sleep,\nLowlands, Lowlands, away, my John,\nI dreamed I saw my own true love,\nMy Lowlands, away",
        "Wrap me up in me oil-skin and jumper\nNo more on the docks I’ll be seen\nJust tell me old shipmates, I’m taking a trip mates\nAnd I’ll see you some day in Fiddler’s Green",
        "Here’s a health to the Resolution, likewise the Eliza Swan,\nHere’s a health to the Battler of Montrose and the Diamond, ship of fame;\nWe wear the trouser o’ the white and the jackets o’ the blue,\
            \nWhen we return to Peterhead, we’ll hae sweethearts anoo,\nSo it’s cheer up my lads, let your hearts never fail,\nWhile the bonny ship, the Diamond, goes a-fishing for the whale."   
        
        ]
    
    return chanties[ Math.floor((Math.random() * chanties.length))].replace(/\n/g, "<br/>");;

}

