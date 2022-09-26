var cards = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", 
             "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png",
             "iorweth.png"];

//alert(cards[4]);

//console.log(cards);

var c0 = document.getElementById("c0");

c0.addEventListener("click", function() {revealCard(0);} );
c1.addEventListener("click", function() {revealCard(1);} );
c2.addEventListener("click", function() {revealCard(2);} );
c3.addEventListener("click", function() {revealCard(3);} );

c4.addEventListener("click", function() {revealCard(4);} );
c5.addEventListener("click", function() {revealCard(5);} );
c6.addEventListener("click", function() {revealCard(6);} );
c7.addEventListener("click", function() {revealCard(7);} );

c8.addEventListener("click", function() {revealCard(8);} );
c9.addEventListener("click", function() {revealCard(9);} );
c10.addEventListener("click", function() {revealCard(10);} );
c11.addEventListener("click", function() {revealCard(11);} );

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 6;

function revealCard(card_nr)
{
    var opacityValue = $('#c'+card_nr).css('opacity');

    if (opacityValue != 0 && lock == false)
    {
        lock = true;
        var obraz = "url(img/" + cards[card_nr] + ")";

        $('#c'+card_nr).css('background-image', obraz);
        $('#c'+card_nr).addClass('cardA');
        $('#c'+card_nr).removeClass('card');

        if (oneVisible == false)
        {
            //Pierwsza karta
            oneVisible = true;
            lock = false;
            visible_nr = card_nr;
        }
        else
        {
            //Druga karta
            if(cards[visible_nr] == cards[card_nr])
            {
                setTimeout(function() {hide2cards(card_nr, visible_nr) }, 750);
                
            }
            else
            {
                setTimeout(function() {restore2cards(card_nr, visible_nr) }, 1000);
            }
            turnCounter++;

            $('.score').html('Licznik tur: '+turnCounter);
            oneVisible = false;
        }
    }
    
}

function hide2cards(nr1, nr2)
{
    $('#c'+nr1).css('opacity', '0');
    $('#c'+nr2).css('opacity', '0');
    pairsLeft--;
    if(pairsLeft==0)
    {
        $('.board').html('<h1> Wygrałeś!<br>Ukończone w ' + turnCounter + ' tur.<h1/>');
    }
    lock = false;
}

function restore2cards(nr1, nr2)
{
    $('#c'+nr1).css('background-image', 'url(img/karta.png)');
    $('#c'+nr1).addClass('card');
    $('#c'+nr1).removeClass('cardA');

    $('#c'+nr2).css('background-image', 'url(img/karta.png)');
    $('#c'+nr2).addClass('card');
    $('#c'+nr2).removeClass('cardA');
    lock = false;
}