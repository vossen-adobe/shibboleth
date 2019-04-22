console.log("hello")


setBackground()

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
         console.log(imagePool[c])

        }
    });
}



//document.body.style.backgroundImage = "url('https://s3.us-east-2.amazonaws.com/adobe-ust-installer/intellij_wallpaper.png')";