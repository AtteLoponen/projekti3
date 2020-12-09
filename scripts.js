//Efektoidaan sivun otsikko
$(document).ready(function () {
    $("h1").animate({
        "font-size": "40px",
    }, 700);
});
//Efektoidaan copyright
$(document).ready(function(){
    $('.copyrightTeksti').slideDown(1000);
});

//Listalle lisäämis-funktion aloitus
$(function () {
    //Funktio joka ajetaan kun klikataan lisää nappia
    $('#taskBtn').click(function () {
        //tallennetaan arvo
        var tallenna = $('#inputTeksti').val();
        //Jos teksti kenttä ei ole tyhjä 
        if (tallenna !== '') {
            //Pidetään muistia kuinka monta tehtävää on listalla
            var count = $("#tehtava").children().length;
            //Tässä lisätään tehtävä ja sen numero listaan
            $('#tehtava').append('<li class="listaKohta deletetask">' + count + '. ' + tallenna + '</li>');
            //clearaa tekstikentän
            $('#inputTeksti').val('');
            //Kutsuu deleteTasks funktiota
            deleteTasks();


        }
    });
});
//Määritellään funktio, joka poistaa tehtävän klikatessa
function deleteTasks() {
    $('.deletetask',).click(function () {
        $(this).remove();
    });
}
//Saadaan tehtävä lisättyä painamalla enter
$(document).ready(function () {
    $("#inputTeksti").keydown(function (e) {
        //Enter näppäin on JavaScriptin kolmastoista Keycode
        if (e.which === 13) {
            $("#taskBtn").click();
        }
    });
});
//Funktio, jotta saadaan poistettua esimerkit
$(document).ready(function () {
    $("#esim1").click(function () {
        $(this).remove();
    });
    $("#esim2").click(function () {
        $(this).remove();
    });
});
//Funktio kaikkien tehtävien poistoon
$(document).ready(function () {
    $("#btnRemove").click(function () {
        //Huomattavaa, ei poista ekaa
        $("li").not(":first").remove();
    });
});



