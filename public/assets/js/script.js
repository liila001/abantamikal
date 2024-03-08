jQuery(function($){
    $('#three').payment('formatCardCVC');
    $('#two').payment('formatCardExpiry');
    $('#one').payment('formatCardNumber');
    //$('#four').payment('restrictNumeric');
})