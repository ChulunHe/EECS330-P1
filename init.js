(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

 $(document).ready(function() {
                   $('select').material_select();
                   });
 
 $('.datepicker').pickadate({
                            selectMonths: true, // Creates a dropdown to control month
                            selectYears: 15, // Creates a dropdown of 15 years to control year,
                            today: 'Today',
                            clear: 'Clear',
                            close: 'Ok',
                            closeOnSelect: false // Close upon selecting a date,
                            });


$("#datepicker").datepicker({changeMonth: true, maxDate: '0',changeYear: true, yearRange: '1960:2017', dateFormat: 'dd-mm-yy',});

$('.timepicker').pickatime({
                            default: 'now', // Set default time: 'now', '1:30AM', '16:30'
                            fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
                            twelvehour: false, // Use AM/PM or 24-hour format
                            donetext: 'OK', // text for done-button
                            cleartext: 'Clear', // text for clear-button
                            canceltext: 'Cancel', // Text for cancel-button
                            autoclose: false, // automatic close timepicker
                            ampmclickable: true, // make AM PM clickable
                            aftershow: function(){} //Function for after opening timepicker
                            });

 
 // Pause slider
 $('.slider').slider('pause');
 // Start slider
 $('.slider').slider('start');
 // Next slide
 $('.slider').slider('next');
 // Previous slide
 $('.slider').slider('prev');
 
 $(document).ready(function(){
                   $('.slider').slider();
                   });
 
 
 
 function btnSubmit(){
    alert("Submitted successfully!!");
}
