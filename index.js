// Tabs
var namevalue;
var sendvalue;
var name;
var email;
var message;
var opennow = "not public"
$(".searchy").hide();
$(".text--center").hide();
$(".search__container").hide();
$(".hidden").hide();
$(".hiding").hide();
function openLink(evt, linkName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("myLink");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(linkName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}
// Click on the first tablink on load
document.getElementsByClassName("tablink")[0].click();
$( ".death" ).click(function() {
  location.reload();
});

function search() {
    namevalue = $("#search").val();
    if (namevalue == "") {alert("gotta say something");location.reload();}
    else {

    $("input[type=text], textarea").val("");
    $( "#myList" ).append( "<script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDnL5nE47s53swUZbpNBai7oY-CsBehrAw&libraries=places&callback=initMap' async defer></script>" );
    $(".normal").hide("slow");
    $(".searchy").show("fast");
    $(".text--center").show();
    $(".search__container").show();
}
}
function back() {
    $(".normal").show();
    $(".searchy").hide();
    $(".text--center").hide();
    $(".search__container").hide();

}
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:


var url;
url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=30.267153,-97.743061&radius=500&type=restaurant&keyword=%22vegan%20%22&key=AIzaSyDnL5nE47s53swUZbpNBai7oY-CsBehrAw";
var map;
var infowindow;


function initMap() {
var pyrmont = {lat: 30.2672, lng: -97.7431};
  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: pyrmont,
    radius: 1000,
    type: ["restaurant"],
    keyword: [namevalue]
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < 11; i++) {
      createMarker(results[i]);
 var imageUrl = createPhotoMarker(results[i]);
       //   f = 30+i;
       //   if (i=0) {f=100;}
       //   else {console.log("all good")}
       // $("." + f).css('background-image', 'url("' + imageUrl + '")');

      try {
    var opennow = results[i].opening_hours.open_now;
    var placename = results[i].name;
    // t = 30 + i;
    // $myDiv = $('.' + t);
    // var image = $myDiv.css('background-image', results[i].icon);
    var price = results[i].price_level;
    var rating = results[i].rating;
    var address = results[i].vicinity;
    $("." + i).text(placename);
    j = i+10;
    $("." + j).text(address);

    var elthings = "open now: " + opennow + ", " + "cost-" + price + ".";
    k = j+10;
    $("." + k).text(elthings);

    rating = Math.round(rating);
    for (var a = 0; a < rating; a++) {
    $("." + k).append('<i class="fa fa-star"></i>');
    }
}
catch(err) {
    console.warn("one or more of these places are incomplete if you are or know the owner please finish your online presence");
}



    }
  }
}

function createMarker(place) {
    try {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}
catch(err) {
    console.warn("one or mor eof these places doesnt have a name");
}
}

function createPhotoMarker(place) {
    try {
  var photos = place.photos;
  if (!photos) {
    return;
  }
 return photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100}) }
 catch(err) {
     console.warn("one or more of these places doesnt have a photos");
 }
  }
function send() {
    sendvalue = $("#send").val();
    $("input[type=text], textarea").val("");
    $(".showen").hide();
    $(".hidden").show();
}

function respond() {
    name = $(".name").val();
    message = $(".message").val();
    $("input[type=text], textarea").val("");
    $(".showing").hide();
    $(".hiding").show();

}
(function(console) {
    "use strict";

    //Bootlegged of imgur.com/memegen
    var memes = {
        "10 Guy": "http://i.imgur.com/LaENqOV.jpg",
        "3rd World Success Kid": "http://i.imgur.com/WA5duA1.jpg",
        "90's Problems": "http://i.imgur.com/tL47qtp.jpg",
        "Aaand It's Gone": "http://i.imgur.com/yf12saq.jpg",
        "Actual Advice Mallard": "http://i.imgur.com/WymFmVy.jpg",
        "Advice Dog": "http://i.imgur.com/Qk0VO6D.jpg",
        "Advice God": "http://i.imgur.com/xH2fSFg.jpg",
        "Almost Politically Correct Redneck": "http://i.imgur.com/YqLgINf.jpg",
        "Am I The Only One": "http://i.imgur.com/gS9YL5U.jpg",
        "Ancient Aliens": "http://i.imgur.com/NfCknz0.jpg",
        "Annoyed Picard": "http://i.imgur.com/s9GmfSS.jpg",
        "Annoying Childhood Friend": "http://i.imgur.com/27VCyQw.jpg",
        "Annoying Facebook Girl": "http://i.imgur.com/ccczyGt.jpg",
        "Anti-Joke Chicken (Rooster)": "http://i.imgur.com/KOsW0jh.jpg",
        "Awkward Penguin": "http://i.imgur.com/ez1tQrq.jpg",
        "Back In My Day Grandpa": "http://i.imgur.com/zuJSZp8.jpg",
        "Bad Advice Mallard": "http://i.imgur.com/QEPvL2B.jpg",
        "Bad Luck Brian": "http://i.imgur.com/sRW8BiO.jpg",
        "Bear Grylls": "http://i.imgur.com/6Spqy1D.jpg",
        "Brace Yourself": "http://i.imgur.com/NhIq0LY.jpg",
        "Captain Obvious": "http://i.imgur.com/DmUcxBu.jpg",
        "Chemistry Cat": "http://i.imgur.com/8agP4Xe.jpg",
        "College Freshman": "http://i.imgur.com/2Ynyv9t.jpg",
        "College Liberal": "http://i.imgur.com/OWfvSFE.jpg",
        "Condescending Wonka": "http://i.imgur.com/D0e5fgL.jpg",
        "Confession Bear": "http://i.imgur.com/kH1SKhp.jpg",
        "Confession Kid": "http://i.imgur.com/jhOxR12.jpg",
        "Confused Gandalf": "http://i.imgur.com/iIb5SEo.jpg",
        "Conspiracy Keanu": "http://i.imgur.com/pFyk3J7.jpg",
        "Courage Wolf": "http://i.imgur.com/H5qoXFb.jpg",
        "Dating Site Murderer": "http://i.imgur.com/jffNNql.jpg",
        "Depression Dog": "http://i.imgur.com/wgad6P8.jpg",
        "Drunk Baby": "http://i.imgur.com/QvZdbRE.jpg",
        "English Motherfucker": "http://i.imgur.com/sJThEC0.jpg",
        "Evil Plotting Raccoon": "http://i.imgur.com/xMslWFf.jpg",
        "First Day On The Internet Kid": "http://i.imgur.com/TWfdmVu.jpg",
        "First World Cat Problems": "http://i.imgur.com/0vR5Slq.jpg",
        "First World Problem": "http://i.imgur.com/ATcIl08.jpg",
        "Forever Alone": "http://i.imgur.com/pcfXSUU.jpg",
        "Forever Resentful Mother": "http://i.imgur.com/pIrdwo2.jpg",
        "Foul Bachelor Frog": "http://i.imgur.com/JUFmusm.jpg",
        "Foul Bachelorette Frog": "http://i.imgur.com/dYf971U.jpg",
        "Friendzone Fiona": "http://i.imgur.com/Qu1eedL.jpg",
        "Frustrated Farnsworth": "http://i.imgur.com/U3SElKP.jpg",
        "Fuck Me, Right?": "http://i.imgur.com/J9gfxsx.jpg",
        "Gangster Baby": "http://i.imgur.com/C3XhI56.jpg",
        "Good Girl Gina": "http://i.imgur.com/qK6lYr2.jpg",
        "Good Guy Greg": "http://i.imgur.com/UXMPoKN.jpg",
        "Grandma Finds The Internet": "http://i.imgur.com/xPfGYqu.jpg",
        "Grinds My Gears": "http://i.imgur.com/t4JqU1j.jpg",
        "Grumpy Cat (Tard)": "http://i.imgur.com/dU5CDxN.jpg",
        "High Expectations Asian Father": "http://i.imgur.com/7QeB9LI.jpg",
        "Hipster Barista": "http://i.imgur.com/AbWxdy2.jpg",
        "Horrifying House Guest": "http://i.imgur.com/DxmoFp1.jpg",
        "I Dare You Samuel Jackson": "http://i.imgur.com/UQtpdqj.jpg",
        "I Should Buy A Boat": "http://i.imgur.com/XqlqPxn.jpg",
        "I Too Like To Live Dangerously": "http://i.imgur.com/qF70EL9.jpg",
        "Idiot Nerd Girl": "http://i.imgur.com/8hYPYwd.jpg",
        "Insanity Wolf": "http://i.imgur.com/GOOdg3k.jpg",
        "Joker Mind Loss": "http://i.imgur.com/qQIRaOD.jpg",
        "Joseph Ducreux": "http://i.imgur.com/QL7TyR9.jpg",
        "Lame Joke Eel": "http://i.imgur.com/oQXw3jF.jpg",
        "Lame Pun Raccoon": "http://i.imgur.com/nvALRK3.jpg",
        "Lazy College Senior": "http://i.imgur.com/PpkVfzz.jpg",
        "Mad Karma": "http://i.imgur.com/G0QMPum.jpg",
        "Masturbating Spidey": "http://i.imgur.com/dZ7AB4c.jpg",
        "Matrix Morpheus": "http://i.imgur.com/8Yrw6cZ.jpg",
        "Mayonnaise Patrick": "http://i.imgur.com/5jE0Y7f.jpg",
        "Musically Oblivious 8th Grader": "http://i.imgur.com/l5YHN5D.jpg",
        "Not Sure Fry": "http://i.imgur.com/7rFgBB1.jpg",
        "Oblivious Suburban Mom": "http://i.imgur.com/Y7o7UJs.jpg",
        "One Does Not Simply": "http://i.imgur.com/7LrwR1Y.jpg",
        "Overly Attached Girlfriend": "http://i.imgur.com/5blLJLR.jpg",
        "Overly Manly Man": "http://i.imgur.com/dOSn9Na.jpg",
        "Paranoid Parrot": "http://i.imgur.com/KooYHdg.jpg",
        "Pedobear": "http://i.imgur.com/c6JZKRW.jpg",
        "Pepperidge Farm Remembers": "http://i.imgur.com/uFde4v5.jpg",
        "Philosoraptor": "http://i.imgur.com/eERhI5h.jpg",
        "Priority Peter": "http://i.imgur.com/BBEFk0e.jpg",
        "Rasta Science Teacher": "http://i.imgur.com/Js6Ai5T.jpg",
        "Redditor's Wife": "http://i.imgur.com/d1XfJeD.jpg",
        "Revenge Band Kid": "http://i.imgur.com/dlvmaRI.jpg",
        "Schrute Facts": "http://i.imgur.com/UxcvPwT.jpg",
        "Scumbag Brain": "http://i.imgur.com/OZhhZdS.jpg",
        "Scumbag Stacy": "http://i.imgur.com/Qqz1axp.jpg",
        "Scumbag Steve": "http://i.imgur.com/Rfvoc0Y.jpg",
        "Sexually Oblivious Rhino": "http://i.imgur.com/RoaNuEC.jpg",
        "Sheltering Suburban Mom": "http://i.imgur.com/vMkSofv.jpg",
        "Shut Up And Take My Money": "http://i.imgur.com/uWe0rtQ.jpg",
        "Skeptical Third World Kid": "http://i.imgur.com/uwAusxV.jpg",
        "Smug Spongebob": "http://i.imgur.com/OTTRjrv.jpg",
        "Socially Awesome Penguin": "http://i.imgur.com/S6WgQW7.jpg",
        "Success Kid": "http://i.imgur.com/ZibijBz.jpg",
        "Successful Black Man": "http://i.imgur.com/ogIm0cy.jpg",
        "Sudden Clarity Clarence": "http://i.imgur.com/N3Xmfbe.jpg",
        "Tech Impaired Duck": "http://i.imgur.com/riz28ci.jpg",
        "The Most Interesting Man In The World": "http://i.imgur.com/MGv15MH.jpg",
        "The Rent Is Too High": "http://i.imgur.com/r5WLktQ.jpg",
        "Tough Spongebob": "http://i.imgur.com/2w0F1HX.jpg",
        "Unhelpful Highschool Teacher": "http://i.imgur.com/ohbGhuD.jpg",
        "Vengeance Dad": "http://i.imgur.com/0nUStsa.jpg",
        "What Year Is It?": "http://i.imgur.com/fj79hQS.jpg",
        "X, X Everywhere": "http://i.imgur.com/GGy94Gt.jpg",
        "Yeah That'd Be Great": "http://i.imgur.com/nz9M2pl.jpg",
        "Yo Dawg Xzibit": "http://i.imgur.com/XOyGqF2.jpg",
        "You're Bad And You Should Feel Bad": "http://i.imgur.com/YsabGnQ.jpg",
        "You're Gonna Have A Bad Time": "http://i.imgur.com/2tNR7P7.jpg"
    };

    /**
	 * Since the console.log doesn't respond to the `display` style,
	 * setting a width and height has no effect. In fact, the only styles
	 * I've found it responds to is font-size, background-image and color.
	 * To combat the image repeating, we have to get a create a font bounding
	 * box so to speak with the unicode box characters. EDIT: See Readme.md
	 *
	 * @param  {int} width  The height of the box
	 * @param  {int} height The width of the box
	 * @return {object}     {string, css}
	 */
    function getBox(width, height) {
        return {
            string: "+",
            style: "font-size: 1px; padding: " + Math.floor(height / 2) + "px " + Math.floor(width / 2) + "px; line-height: " + height + "px;"
        }
    }

    /**
	 * Draw's meme text on a context.
	 *
	 * @param  {CanvasRenderingContext2D} ctx   The canvas context
	 * @param  {string} type  "upper"|"lower"
	 * @param  {string} text  The text to draw
	 * @param  {int} width The width of the image
	 * @param  {int} y     The y value to draw at
	 * @return {null}
	 */
    function drawMemeText(ctx, type, text, width, y) {
        text = text.toUpperCase();
        //Determine the font size
        if (text.length < 24) {
            var val = Math.max(0, text.length - 12)
              , size = 70 + (val * -3);

            drawText(ctx, size, text, width / 2, y);
        } else if (text.length < 29) {
            drawText(ctx, 40, text, width / 2, y);
        } else {
            var strs = wrap(text, 27);
            strs.forEach(function(str, i) {
                drawText(ctx, 40, str, width / 2, (type == "lower") ? (y - ((strs.length - 1) * 40)) + (i * 40) : y + (i * 40));
            });
        }
    }

    /**
	 * Draws text in impact font with stroke on context
	 *
	 * @param  {CanvasRenderingContext2D} ctx  The canvas context
	 * @param  {int} size Font size
	 * @param  {string} text The string to write
	 * @param  {int} x    X Position
	 * @param  {int} y    Y position
	 * @return {null}
	 */
    function drawText(ctx, size, text, x, y) {
        //Set the text styles
        ctx.font = "bold " + size + "px Impact";
        ctx.fillStyle = "#fff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineWidth = 7;
        ctx.strokeStyle = "#000";
        ctx.strokeText(text, x, y);
        ctx.fillText(text, x, y);
    }

    /**
	 * Wrap a line of text at an index
	 *
	 * @param  {string} text The text
	 * @param  {int} num  The index to wrap at
	 * @return {array}      Array of text
	 */
    function wrap(text, num) {
        var output = []
          , split = text.split(" ");

        var str = [];
        for (var i = 0, cache = split.length; i < cache; i++) {
            if ((str + split[i]).length < num)
                str.push(split[i])
            else {
                output.push(str.join(" "));
                str.length = 0;
                str.push(split[i]);
            }
        }

        //Push the final line
        output.push(str.join(" "));

        return output;
    }

    /**
	 * Add a meme to the console!
	 *
	 * @param  {string} upper  The upper text
	 * @param  {string} lower  The lower text
	 * @param  {string} image  The meme type (see `console.meme` for all supported) or image url (Make sure it's CORS enabled)
	 * @param  {int} width  The width of the meme
	 * @param  {int} height The height of the meme
	 * @return {null}
	 */
    console.meme = function(upper, lower, image, width, height) {
        if (!upper)
            console.error("Yo, you forgot the text for the upper part of the meme. The bit at the top. Yeah, that bit.");
        if (!lower)
            console.error("You forgot the text for the bottom of the meme, stupid.");
        if (!image)
            console.error("Dude, you forgot the meme type or url for the background image (CORS enabled, *hint* imgur *hint*). To see a list of supported memes, hit `console.meme()`");
        if (!upper && !lower && !image)
            return console.log("> " + Object.keys(memes).join("\n> "));

        var canvas = document.createElement("canvas")
          , ctx = canvas.getContext("2d")
          , width = width || 500
          , height = width || 500
          , //I tweaked it at these dimensions,
        //So everything scales from here
        _w = 500
          , _h = 500;

        var img = new Image();
        img.setAttribute('crossOrigin', 'anonymous');
        img.onload = function() {
            canvas.width = width;
            canvas.height = height;

            var text = upper.toUpperCase();

            ctx.scale(width / 500, height / 500);

            //Draw the background
            ctx.drawImage(this, 0, 0, _w, _h);

            drawMemeText(ctx, "upper", upper, _w, 50);
            //upper
            drawMemeText(ctx, "lower", lower, _w, _h - 50);
            //upper

            console.image(canvas.toDataURL());
        }
        ;

        if (memes[image])
            var url = memes[image];
        else
            var url = image;

        img.src = url;
        //"http://www.corsproxy.com/" + url.replace(/https?:\/\//, "");
    }
    ;

    /**
	 * Display an image in the console.
	 * @param  {string} url The url of the image.
	 * @param  {int} scale Scale factor on the image
	 * @return {null}
	 */
    console.image = function(url, scale) {
        scale = scale || 1;
        var img = new Image();

        img.onload = function() {
            var dim = getBox(this.width * scale, this.height * scale);
            console.log("%c" + dim.string, dim.style + "background: url(" + url + "); background-size: " + (this.width * scale) + "px " + (this.height * scale) + "px; color: transparent;");
        }
        ;

        img.src = url;
    }
    ;
}
)(console);


console.log("Since your here you obviously wanna have some fun");
console.warn("this is about to get addicting");
console.error("seriously be careful");
console.log("use console.meme('top text', 'bottom text', 'image url/meme name', 'height', 'width') to print memes to console (use console.meme() to see list of supported memes)");
console.log("or if your boring use console.image() for textless images and urls");
console.log('%c  have some fun     ', 'font-size: 100px; background: url(http://cdn.nyanit.com/nyan2.gif) no-repeat;');
