$(document).ready(function () {

  // ANIMATE FLOATING STORIES
  for (var i = 1; i <= 4; i++) {
    var story = '.story-' + i;

    var pos = makeNewPosition(story);
    $(story).css({
      'top': pos[0] + 'px',
      'left': pos[1] + 'px'
    });

    animateDiv(story);
  }

  function closeStories() {
    $('#stories-container').css('opacity', '0');
    $('#stories-container > div').css({ 'opacity': '0', 'pointer-events': 'none' });

    $('#story-background').css({
      'width': 0, 'height': 0,
      'padding': '5vw',
      'border-radius': '50%'
    });

    $('#story-title').css('top', 'calc(-1.5em - 5vw)');
    $('#story-text').css('opacity', 0);
  }

  // fixing the touch event
  var eventname = 'click';
  if (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0))
    eventname = 'touchstart';




  // CLICK HOMEPAGE

  $('#home-button').on(eventname, function (event) {

    $('#about-button').css('-webkit-filter', 'blur(3px)');
    $('#podcast-button').css('-webkit-filter', 'blur(3px)');
    $('.about-section').css({ 'opacity': 0, 'pointer-events': 'none' });
    //('display', 'none');
    $('.podcast-section').css('display', 'none');
    $('.accordion-content').css('display', 'none');
    $('#background-video').css('-webkit-filter', 'blur(0px)');

    closeStories();
  });

  // CLICK BACKGROUND

  $('#background-video').on(eventname, function (event) {
    $('#background-video').css('-webkit-filter', 'blur(0px)');

    $('#about-button').css('-webkit-filter', 'blur(3px)');
    $('.about-section').css({ 'opacity': 0, 'pointer-events': 'none' });

    closeStories();

    $('#podcast-button').css('-webkit-filter', 'blur(3px)');
    $('.podcast-section').css('display', 'none');
    $('.accordion-content').css('display', 'none');
  });

  // CLICK ABOUT
  $('#about-button').on(eventname, function (event) {
    if ($('#background-video').css('-webkit-filter') == 'blur(15px)') {
      $('#background-video').css('-webkit-filter', 'blur(0px)');
    }
    else if ($('#background-video').css('-webkit-filter') == 'blur(14px)') {
      $('#background-video').css('-webkit-filter', 'blur(15px)');
    }
    else {
      $('#background-video').css('-webkit-filter', 'blur(15px)');
    }

    if ($('#about-button').css('-webkit-filter') == 'blur(3px)') {
      $('#about-button').css('-webkit-filter', 'blur(0px)');
    } else {
      $('#about-button').css('-webkit-filter', 'blur(3px)');
    }

    $('#dropdown-podcast').css('display', 'none');

    $('#podcast-button').css('-webkit-filter', 'blur(3px)');

    if ($('.about-section').css('opacity') == 1) {
      $('.about-section').css({ 'opacity': 0, 'pointer-events': 'none' });
      closeStories();
    } else {
      $('.about-section').css({ 'opacity': 1, 'pointer-events': 'all' });
    }

  });


  // CLICK STORIES

  $('#stories-trigger').on(eventname, function (event) {
    if ($('.story').css('opacity') == 0) {
      $('.story').css('opacity', 1);
    } else {
      $('.story').css('opacity', 0);
    }

    $('#stories-container').css('opacity', '1');
    $('#stories-container > div').css({ 'opacity': '1', 'pointer-events': 'all' });
  });


  // CLICK FLOATING STORIES

  function makeNewPosition(myclass) {
    var story = $(myclass + ' #story-background');

    var h = $('#stories-container').height() - story.height();
    var w = $('#stories-container').width() - story.width();

    var nh = story.height() / 2 + Math.floor(Math.random() * h);
    var nw = story.width() / 2 + Math.floor(Math.random() * w);

    return [nh, nw];

  }

  function animateDiv(myclass) {
    var newq = makeNewPosition(myclass);
    var oldq = $(myclass).offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $(myclass).animate({
      top: newq[0],
      left: newq[1]
    }, speed, function () {
      animateDiv(myclass);
    });

  };

  function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.03;

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
      stories.forEach(story => {
        story.style.zIndex = 0;
        var storyTitle = story.querySelector('.story-title');
        var storyText = story.querySelector('.story-text');
        var storyBackground = story.querySelector('.story-background');

        storyText.style.display = 'none';
        storyBackground.style.cssText = `
      width: 0;
      height: 0;
      padding: 5vw;

      box-shadow: 0px 0px 50px 6px var(--brown);
      border-radius: 50%;
      `
        storyTitle.style.top = `top: calc(-1.5em - 5vw)`;

        setTimeout(function () {
          storyText.style.opacity = 0;
        }, 100);
      })

      story.style.zIndex += 1;
      var storyTitle = story.querySelector('.story-title');
      var storyText = story.querySelector('.story-text');
      var textHeight = $(storyText).outerHeight();
      var storyBackground = story.querySelector('.story-background');

      storyText.style.display = 'inline-block';
      storyBackground.style.cssText = `
      width: 30vw;
      height: ${textHeight}px;
      padding: 0;
      border-radius: 0;`

      storyTitle.style.top = `calc(-1.5em - ${textHeight / 2}px)`;

      setTimeout(function () {
        storyText.style.opacity = 1;
      }, 500);
    })
  })

  // $('.story-1').on(eventname, function (event) {
  //   $(this).css('z-index', '+1');

  //   $('.story-text-1').css('display', 'inline-block');

  //   var boxtext = $('.story-text-1');
  //   var boxheight = boxtext.outerHeight();

  //   $('.story-background-1').css({
  //     'width': '30vw',
  //     'height': boxheight + 'px',
  //     'padding': '0',
  //     'border-radius': '0'
  //   });


  //   $('.story-title-1').css('top', 'calc(-1.5em - ' + (boxheight / 2) + 'px)');

  //   setTimeout(function () {
  //     $('.story-text-1').css('opacity', '1');
  //   }, 500);
  // });

  // ---------------------------

  // CLICK PODCAST

  $('#podcast-button').on(eventname, function (event) {

    if ($('#podcast-button').css('-webkit-filter') == 'blur(3px)') {
      $('#podcast-button').css('-webkit-filter', 'blur(0px)');
    } else {
      $('#podcast-button').css('-webkit-filter', 'blur(3px)');
    }

    $('.about-section').css({ 'opacity': 0, 'pointer-events': 'none' });
    //    $( '#stories-container' ).css( 'pointer-events', 'none' );

    closeStories();

    $('#about-button').css('-webkit-filter', 'blur(3px)');

    if ($('#background-video').css('-webkit-filter') == 'blur(14px)') {
      $('#background-video').css('-webkit-filter', 'blur(0px)');
    }
    else if ($('#background-video').css('-webkit-filter') == 'blur(15px)') {
      $('#background-video').css('-webkit-filter', 'blur(14px)');
    }
    else {
      $('#background-video').css('-webkit-filter', 'blur(14px)');
    }

    if ($('#dropdown-podcast').css('display') === 'inline-block') {
      $('#dropdown-podcast').css('display', 'none');
    } else {
      $('#dropdown-podcast').css('display', 'inline-block');
    }
  });



  // ACCORDION
  // =-=-=-=-=-=-=-=-=-=-
  // This is already implemented in playPodcasts()
  // =-=-=-=-=-=-=-=-=-=-
  // let acc = document.querySelectorAll(".accordion");

  // for (i = 0; i < acc.length; i++) {
  //   acc[i].addEventListener("click", function (e) {
  //     acc.forEach(accordion => {
  //       const accordionContent = accordion.querySelector('.accordion-content');
  //       const playBtn = accordion.querySelector('.play-button');
  //       const pauseBtn = accordion.querySelector('.pause-button');

  //       accordionContent.style.display = 'none';
  //       accordion.style.backgroundColor = 'transparent';
  //       accordion.style.border = '3px solid var(--brown)';
  //       playBtn.classList.add('active');
  //       pauseBtn.classList.remove('active');
  //     })

  //     const currentAccordion = e.currentTarget;
  //     const accordionContent = currentAccordion.querySelector('.accordion-content');
  //     const playBtn = currentAccordion.querySelector('.play-button');
  //     const pauseBtn = currentAccordion.querySelector('.pause-button');


  //     if (accordionContent.style.display === 'inline-block') {
  //       accordionContent.style.display = 'none';
  //       currentAccordion.style.backgroundColor = 'transparent';
  //       currentAccordion.style.border = '3px solid var(--brown)';
  //     } else {
  //       accordionContent.style.display = 'inline-block';
  //       currentAccordion.style.backgroundColor = 'var(--brown)';
  //       currentAccordion.style.border = '3px solid var(--brown)';
  //     }

  //     playBtn.classList.remove('active');
  //     pauseBtn.classList.add('active');
  //   });
  // }

  // $('.accordion').on(eventname, function (event) {
  //
  //
  //   if ($('.accordion-content').css('display') == 'none') {
  //     $('.accordion-content').css('display', 'inline-block');
  //     $('.accordion').css('background-color', 'var(--brown)');
  //     $('.accordion').css('border', '3px solid var(--brown)');
  //   } else {
  //     $('.accordion-content').css('display', 'none');
  //     $('.accordion').css('background-color', 'transparent');
  //     $('.accordion').css('border', '3px solid var(--brown)');
  //   }
  //
  // });

  playPodcasts();


});

function playPodcasts() {
  const podcasts = document.querySelectorAll('.accordion');

  podcasts.forEach(podcast => {
    const audio = podcast.getElementsByClassName('audio')[0];
    const playButton = podcast.getElementsByClassName('play-button')[0];
    const pauseButton = podcast.getElementsByClassName('pause-button')[0];
    const playhead = podcast.getElementsByClassName('playhead')[0];
    const elapsedTime = podcast.getElementsByClassName('elapsed-time')[0];

    // write logic for when the sound is playing inside this function
    playButton.addEventListener('click', () => {
      // stop all other players if active
      podcasts.forEach(podcast => {
        const accordionContent = podcast.querySelector('.accordion-content');
        const playBtn = podcast.querySelector('.play-button');
        const pauseBtn = podcast.querySelector('.pause-button');

        accordionContent.style.display = 'none';
        podcast.style.backgroundColor = 'transparent';
        podcast.style.border = '3px solid var(--brown)';
        playBtn.classList.add('active');
        pauseBtn.classList.remove('active');

        const audio = podcast.getElementsByClassName('audio')[0];
        audio.pause();
      })

      const accordionContent = podcast.querySelector('.accordion-content');
      accordionContent.style.display = 'inline-block';
      podcast.style.backgroundColor = 'var(--brown)';
      podcast.style.border = '3px solid var(--brown)';
      audio.play();
      playButton.classList.toggle('active');
      pauseButton.classList.toggle('active');
    });

    // write logic for when the sound has stopped inside this function
    pauseButton.addEventListener('click', () => {
      const accordionContent = podcast.querySelector('.accordion-content');
      accordionContent.style.display = 'none';
      podcast.style.backgroundColor = 'transparent';
      podcast.style.border = '3px solid var(--brown)';

      audio.pause();
      playButton.classList.toggle('active');
      pauseButton.classList.toggle('active');
    });

    audio.addEventListener("playing", () => {
      setInterval(() => {
        let currentPos = audio.currentTime / audio.duration * 100;
        playhead.style.width = `${currentPos}%`;
        elapsedTime.innerText = millisToMinutesAndSeconds(audio.currentTime * 1000);
      }, 20)
    });

  });

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
}

$.fn.extend({
  disableSelection: function () {
    this.each(function () {
      this.onselectstart = function () {
        return false;
      };
      this.unselectable = "on";
      $(this).css('-moz-user-select', 'none');
      $(this).css('-webkit-user-select', 'none');
    });
  }
});

function btnChrome_onclick() {
  document.documentElement.webkitRequestFullScreen();
}


$(function () {
  $(this).disableSelection();
});
