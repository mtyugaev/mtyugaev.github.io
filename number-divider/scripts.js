$(function(){
    $( ".slider_1" ).slider({
	    range: "max",
	    min: 500,
	    max: 100000,
	    step: 500,
	    slide: function( event, ui ) {
	        $( ".example_1" ).val( ui.value );
	    }
    });
    $( ".example_1" ).val( $( ".slider_1" ).slider( "value" ) );
});
$(function(){
    $( ".slider_2" ).slider({
	    range: "max",
	    min: 500,
	    max: 100000,
	    step: 500,
	    slide: function( event, ui ) {
	        $( ".example_2" ).val( ui.value );
	    }
    });
    $( ".example_2" ).val( $( ".slider_2" ).slider( "value" ) );
});

$('.example_1').divide({
    delimiter:' ',
    divideThousand:false
});

$('.example_2').divide({
    delimiter:' ',
    divideThousand:true
});