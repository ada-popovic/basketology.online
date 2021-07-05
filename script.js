var getSiblings = function (elem) {

    // Setup siblings array and get the first sibling
    var siblings = [];
    var sibling = elem.parentNode.firstChild;

    // Loop through each sibling and push to the array
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling
    }

    return siblings;

};

$(document).ready(function() {

  // ANIMATE FLOATING STORIES
  for (var i = 1; i <= 4; i++) {
    var story = '.story-' + i;

    var pos = makeNewPosition( story );
    $(story).css({
      'top': pos[0] + 'px',
      'left': pos[1] + 'px'
    });

    animateDiv(story);
  }

  function closeStories() {
    $('#stories-container').css('opacity', '0');
    $('#stories-container > div').css({
      'opacity': '0',
      'pointer-events': 'none'
    });

    $( '.story' ).removeClass( 'opened' );
    $( '.story-text').css('opacity', 0);
  }

  // fixing the touch event
  var eventname = 'click';
  if (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0))
    eventname = 'touchstart';




  // CLICK HOMEPAGE

  $('#home-button').on(eventname, function(event) {

    $('#about-button').css('-webkit-filter', 'blur(0px)');
    $('.about-section').css({
      'opacity': 0,
      'pointer-events': 'none'
    });
    $('.about-section .description' ).css( 'display', 'none' );

    $('#podcast-button').css('-webkit-filter', 'blur(0px)');
    $('.podcast-section').css('display', 'none');
    // $('.accordion-content').css('display', 'none');
    $('.accordion-content').css('max-height', 0);
    $('#background-video').css('-webkit-filter', 'blur(0px)');

    closeStories();


    window.scroll( 0, 0 );
  });

  // CLICK BACKGROUND

  $('#background-video').on(eventname, function(event) {
    $('#background-video').css('-webkit-filter', 'blur(0px)');

    $('#about-button').css('-webkit-filter', 'blur(0px)');
    $('.about-section').css({
      'opacity': 0,
      'pointer-events': 'none'
    });

    closeStories();

    $('#podcast-button').css('-webkit-filter', 'blur(0px)');
    $('.podcast-section').css('display', 'none');
    // $('.accordion-content').css('display', 'none');
    $('.accordion-content').css('max-height', 0 );
  });

  // CLICK ABOUT
  $('#about-button').on(eventname, function(event) {

    if ($('#background-video').css('-webkit-filter') == 'blur(15px)') {
      $('#background-video').css('-webkit-filter', 'blur(0px)');
    } else if ($('#background-video').css('-webkit-filter') == 'blur(14px)') {
      $('#background-video').css('-webkit-filter', 'blur(15px)');
    } else {
      $('#background-video').css('-webkit-filter', 'blur(15px)');
    }

    if ($('#podcast-button').css('-webkit-filter') == 'blur(6px)') {
      $('#podcast-button').css('-webkit-filter', 'blur(0px)');
    }
    else {
      $('#podcast-button').css('-webkit-filter', 'blur(6px)');
    }

    $('#dropdown-podcast').css('display', 'none');



    $('.about-section .description' ).css( 'display', 'block' );
    if ($('.about-section').css('opacity') == 1) {
      $('.about-section').css({
        'opacity': 0,
        'pointer-events': 'none'
      });
      closeStories();
    } else {
      $('.about-section').css({
        'opacity': 1,
        'pointer-events': 'all'
      });
    }

    window.scroll( 0, 0 );

  });


  // CLICK STORIES

  $('#stories-trigger').on(eventname, function(event) {
    if ($('.story').css('opacity') == 0) {
      $('.story').css('opacity', 1);
    } else {
      $('.story').css('opacity', 0);
    }

    $('#stories-container').css('opacity', '1');
    $('#stories-container > div').css({
      'opacity': '1',
      'pointer-events': 'all'
    });
  });


  // CLICK FLOATING STORIES

  function makeNewPosition( myclass ) {
    var story = $( myclass + ' .story-background');
    var storytitle = $( myclass + ' .story-title');

    var storytop = storytitle.position( ).top;
    var storywidth = Math.max( storytitle.width( ), story.width( ) );

    var h = $('#stories-container').height( ) + Math.min( storytop, -1 * story.height( ) );
    var w = $('#stories-container').width( ) - storywidth;

    var nh = -1 * storytop + Math.floor(Math.random() * h);
    var nw = storywidth / 2 + Math.floor(Math.random() * w);

    return [nh, nw];
  }

  function animateDiv( myclass ) {
    var newq = makeNewPosition(myclass);
    var oldq = $(myclass).offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $( myclass ).animate( {
      top: newq[0],
      left: newq[1]
    }, speed, function() {
      animateDiv( myclass );
    } );
  };

  function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.04;

    var speed = Math.ceil(greatest / speedModifier);

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


  const stories = document.querySelectorAll('.story');
  stories.forEach(story => {
    story.addEventListener('click', () => {
      getSiblings( story ).forEach(story => {
        story.classList.remove( 'opened' );

        var storyText = story.querySelector('.story-text');

        setTimeout(function() {
          storyText.style.opacity = 0;
        }, 100);
      })

      story.classList.add( 'opened' );

      var storyClass = story.className;
      storyClass = storyClass.split( 'story ' ).pop( );
      storyClass = storyClass.split( ' opened' ).shift( );

      $( '.' + storyClass ).stop( );
      //console.log( storyClass );


      var storyText = story.querySelector('.story-text');


      setTimeout(function() {
        storyText.style.opacity = 1;

        animateDiv( '.' + storyClass );
      }, 500);
    })
  })


  // ---------------------------


  // CLICK PODCAST

  $('#podcast-button').on(eventname, function(event) {

    $('.about-section .description' ).css( 'display', 'none' );

    if ($('#about-button').css('-webkit-filter') == 'blur(0px)') {
      $('#about-button').css('-webkit-filter', 'blur(6px)');
    }

    if ($('#about-button').css('-webkit-filter') == 'blur(6px)') {
      $('#about-button').css('-webkit-filter', 'blur(0px)');
    }

    if ($('#podcast-button').css('-webkit-filter') == 'blur(0px)') {
      $('#podcast-button').css('-webkit-filter', 'blur(0px)');

    }

    if ($('#podcast-button').css('-webkit-filter') == 'blur(6px)') {
      $('#podcast-button').css('-webkit-filter', 'blur(0px)');

    }

    $('.about-section').css({
      'opacity': 0,
      'pointer-events': 'none'
    });
    //    $( '#stories-container' ).css( 'pointer-events', 'none' );

    closeStories();

    // $('#about-button').css('-webkit-filter', 'blur(3px)');

    if ($('#background-video').css('-webkit-filter') == 'blur(14px)') {
      $('#background-video').css('-webkit-filter', 'blur(0px)');
    } else if ($('#background-video').css('-webkit-filter') == 'blur(15px)') {
      $('#background-video').css('-webkit-filter', 'blur(14px)');
    } else {
      $('#background-video').css('-webkit-filter', 'blur(14px)');
    }

    if ($('#dropdown-podcast').css('display') === 'inline-block') {
      $('#dropdown-podcast').css('display', 'none');
    } else {
      $('#dropdown-podcast').css('display', 'inline-block');
    }

    window.scroll( 0, 0 );
  });




  // ACCORDION

  playPodcasts();


});

function playPodcasts() {
  const podcasts = document.querySelectorAll('.accordion');

  podcasts.forEach(podcast => {
    const title = podcast.getElementsByClassName('more')[0];
    const audio = podcast.getElementsByClassName('audio')[0];
    const playButton = podcast.getElementsByClassName('play-button')[0];
    const pauseButton = podcast.getElementsByClassName('pause-button')[0];
    const playhead = podcast.getElementsByClassName('playhead')[0];
    const elapsedTime = podcast.getElementsByClassName('elapsed-time')[0];


    title.addEventListener( 'click', ( ) => {
        const accordionContent = podcast.querySelector('.accordion-content');
        // let contentVisible = ( accordionContent.style.display == 'inline-block' );
        let contentVisible = ( accordionContent.style.maxHeight != '0px' && accordionContent.style.maxHeight != ''  );
console.log( accordionContent.style.maxHeight );
        // stop all other players if active
        podcasts.forEach( podcast => {
          const accordionContent = podcast.querySelector('.accordion-content');
          // accordionContent.style.display = 'none';
          accordionContent.style.maxHeight = '0';

          podcast.style.backgroundColor = 'transparent';
          // podcast.style.border = '3px solid var(--lime)';
        } );

        if ( contentVisible ) {
//          accordionContent.style.display = 'none';
          accordionContent.style.maxHeight = '0';

          podcast.style.backgroundColor = 'transparent';
          // podcast.style.border = '3px solid var(--lime)';
        } else {
          // accordionContent.style.display = 'inline-block';
          accordionContent.style.maxHeight = '1000px';

          podcast.style.backgroundColor = 'var(--brown)';
          podcast.style.border = '3px solid var(--brown)';
        }
    } );

    // write logic for when the sound is playing inside this function
    playButton.addEventListener('click', () => {
      // stop all other players if active
      podcasts.forEach(podcast => {
        const playBtn = podcast.querySelector('.play-button');
        const pauseBtn = podcast.querySelector('.pause-button');

        // accordionContent.style.display = 'none';
        // podcast.style.backgroundColor = 'transparent';
        // podcast.style.border = '3px solid var(--lime)';
        playBtn.classList.add('active');
        pauseBtn.classList.remove('active');

        const audio = podcast.getElementsByClassName('audio')[0];
        audio.pause();
      })

      // const accordionContent = podcast.querySelector('.accordion-content');
      // accordionContent.style.display = 'inline-block';
      // podcast.style.backgroundColor = 'var(--brown)';
      // podcast.style.border = '3px solid var(--brown)';
      audio.play();
      playButton.classList.toggle('active');
      pauseButton.classList.toggle('active');
    });

    // write logic for when the sound has stopped inside this function
    pauseButton.addEventListener('click', () => {
      // const accordionContent = podcast.querySelector('.accordion-content');
      // accordionContent.style.display = 'none';
      // podcast.style.backgroundColor = 'transparent';
      // podcast.style.border = '3px solid var(--lime)';

      audio.pause();
      playButton.classList.toggle('active');
      pauseButton.classList.toggle('active');
    });

    audio.addEventListener("playing", () => {
      setInterval(() => {
        let currentPos = audio.currentTime / audio.duration * 100;
        playhead.style.width = `${currentPos}%`;
        elapsedTime.innerText = millisToMinutesAndSeconds(audio.currentTime * 1000);
      }, 20 )
    });


    audio.addEventListener("pause", ( event ) => {
      playButton.classList.add('active');
      pauseButton.classList.remove('active');
    }, false );

    audio.addEventListener("ended", ( event ) => {
          audio.currentTime = 0;
    }, false );

    const timeline = podcast.querySelector( '.playhead-container' );
    timeline.addEventListener ( 'click', ( event ) => {
      let percentage = event.offsetX  /  event.target.offsetWidth;
      let duration = audio.duration;

      audio.currentTime = percentage * duration;
    } );
  });

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
}

$.fn.extend({
  disableSelection: function() {
    this.each(function() {
      this.onselectstart = function() {
        return false;
      };
      this.unselectable = "on";
      $(this).css('-moz-user-select', 'none');
      $(this).css('-webkit-user-select', 'none');
    });
  }
});

$(function() {
  $(this).disableSelection();
});
