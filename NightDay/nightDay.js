$(document).ready(function(){
    $('#orb').click(function(){
        if ($('#sky').hasClass('night')) {
            $('#sky').removeClass('night').addClass('day');
            $("#orb").removeClass('moon').addClass('sun');
        }
        else{
            $('#sky').removeClass('day').addClass('night');
            $('#orb').removeClass('sun').addClass('moon');
        }
        if ($('#moonspot1').hasClass('visible')) {
            $('#moonspot1').removeClass('visible');
        } else {
            $('#moonspot1').addClass('visible');
        }
        if ($('#moonspot2').hasClass('visible')) {
            $('#moonspot2').removeClass('visible');
        } else {
        $('#moonspot2').addClass('visible');
        }

        if ($('#moonspot3').hasClass('visible')) {
            $('#moonspot3').removeClass('visible');
        } else {
            $('#moonspot3').addClass('visible');
        }
    });
    
});

