$(document).ready(function(){
    $("#haberes").hide();
    $("#CUIL").hide();

    // Si el user manda tarjeta CUIL al slot negativo
    $("#CUIL").draggable();
    $("#trash-can").droppable({
        drop: function (event, ui) {
            $("#info").html("dropped the element!!!");
            $("#CUIL").fadeOut(500);
        },
        over: function (event, ui) {
            $("#info").html("moving in the element!!!");
        },
        out: function (event, ui) {
            $("#info").html("moving out from the element!!!");
        }
    });

    // Si el user manda tarjeta CUIL al slot positivo
    $("#CUIL").draggable();
    $("#SlotSave").droppable({
        drop: function (event, ui) {
            $("#info").html("dropped the element!!!");
            window.location.assign("http://www.anses.gob.ar/prestacion/cuil-97");
        },
        over: function (event, ui) {
            $("#info").html("moving in the element!!!");
        },
        out: function (event, ui) {
            $("#info").html("moving out from the element!!!");
        }
    });


    // Si el user manda tarjeta CUIL al slot negativo
    $("#haberes").draggable();
    $("#trash-can").droppable({
        drop: function (event, ui) {
            $("#info").html("dropped the element!!!");
            $("#haberes").fadeOut(500);
        },
        over: function (event, ui) {
            $("#info").html("moving in the element!!!");
        },
        out: function (event, ui) {
            $("#info").html("moving out from the element!!!");
        }
    });

    // Si el user manda tarjeta CUIL al slot positivo
    $("#haberes").draggable();
    $("#SlotSave").droppable({
        drop: function (event, ui) {
            $("#info").html("dropped the element!!!");
            window.location.assign("http://www.anses.gob.ar/prestacion/haberes-impagos-110");
        },
        over: function (event, ui) {
            $("#info").html("moving in the element!!!");
        },
        out: function (event, ui) {
            $("#info").html("moving out from the element!!!");
        }
    });



});