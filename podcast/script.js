$(document).ready(function(){

  $('#podcast-topic-1').on('click', function() {
      if ($('#podcast-audio-1').css('opacity') == 0) $('#form').css('opacity', 1);
      else $('#podcast-audio-1').css('opacity', 0);
  });

});
