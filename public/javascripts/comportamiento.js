$(document).ready(function(){
    $("#haberes").hide();
    $("#CUIL").hide();

    // Si el user manda tarjeta CUIL al slot negativo
    $("#CUIL").draggable();
    $("#haberes").draggable();
    $("#trash-can").droppable({
        greedy: true,
        tolerance: 'touch',
        drop: function (event, ui) {
            ui.draggable.draggable('option','revert',true);
            $("#CUIL").css({
                'left': 0,
                'top': 0
            });
            $("#CUIL").fadeOut(2000);
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
    $("#haberes").draggable();
    $("#SlotSave").droppable({
        greedy: true,
        tolerance: 'touch',
        drop: function (event, ui) {
            ui.draggable.draggable('option','revert',true);
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