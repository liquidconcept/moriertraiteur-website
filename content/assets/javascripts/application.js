// =require modernizr
// =require jquery
// =require jquery-ui
// =require jquery-h5validate

$(function() {

  /* French initialisation for the jQuery UI date picker plugin. */
  /* Written by Keith Wood (kbwood{at}iinet.com.au) and Stéphane Nahmani (sholby@sholby.net). */
  $.datepicker.regional['fr'] = {
    closeText: 'Fermer',
    prevText: '&#x3c;Préc',
    nextText: 'Suiv&#x3e;',
    currentText: 'Courant',
    monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    monthNamesShort: ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'],
    dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
    dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
    weekHeader: 'Sm',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['fr']);

  // date picker init
  $( "#datepicker" ).datepicker();

  // validation init
  $('form').h5Validate();

  // Agreement condition lightbox
  $('#ligthbox_agreement').hide();

  $('.agreement_link').on('click', function(event) {
    event.preventDefault();

    $('#ligthbox_agreement').fadeIn('slow');
  });

  $('#close').on('click', function(event) {
    event.preventDefault();

    $('#ligthbox_agreement').fadeOut('slow');
  });
// Service lightbox
  $('#ligthbox_service').hide();

  $('.service_link').on('click', function(event) {
    event.preventDefault();

    $('#ligthbox_service').fadeIn('slow');
  });

  $('#close2').on('click', function(event) {
    event.preventDefault();

    $('#ligthbox_service').fadeOut('slow');
  });
});

