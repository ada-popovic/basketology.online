$(document).ready(function(){

  // ANIMATE FLOATING STORIES

  animateDiv('.story-1');
  animateDiv('.story-2');
  animateDiv('.story-3');
  animateDiv('.story-4');

  var eventname = 'click';
  if ( ( 'ontouchstart' in window ) ||
       ( navigator.maxTouchPoints > 0 ) ||
       ( navigator.msMaxTouchPoints > 0 ) )
        eventname = 'touchstart';


    $('#stories-button').on( eventname, function( event ) {
    // $('#stories-button').on( 'click touchstart', function( event ) {

      if ($('#stories-container').css('opacity') == 0) {
          $('#stories-container').css('opacity', 1);
      }
      else {
          $('#stories-container').css('opacity', 0);
      }
  });

});



function makeNewPosition(myclass){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $('#stories-container').height() - $(myclass).height();
    var w = $('#stories-container').width() - $(myclass).width();

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function animateDiv(myclass){
    var newq = makeNewPosition(myclass);
    var oldq = $(myclass).offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    $(myclass).animate({ top: newq[0], left: newq[1] }, speed,   function(){
      animateDiv(myclass);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}


// SHOW FLOATING STORIES

function showStories() {
  var x = document.getElementById('stories-container');
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
}
