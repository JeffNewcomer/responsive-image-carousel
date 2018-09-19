import $ from 'jquery'

$(document).ready(() => {
  let currentPic = 1;
  console.log(currentPic)
  const picCount = $('.img-box').length;
  autoPlay()
  let intervalID = setInterval(autoPlay, 4000);

  function autoPlay() {
    $('.img-box').addClass('hidden')
    $(`div[data-link=` + currentPic + `]`).removeClass('hidden')
    $('.dotstyle li').removeClass('current')
    $(`li[data-num=${currentPic}]`).addClass('current')
    if (currentPic >= picCount) {
      currentPic = 0
    }
    currentPic++
  }

  $('.dotstyle span').on('click', function () {
    clearInterval(intervalID)
    $('.dotstyle li').removeClass('current')
    $(this).parent('li').addClass('current')
    const picNum = ($(this).parent('li').attr('data-num'));
    currentPic = parseInt(picNum, 10)
    $('.img-box').addClass('hidden')
    $(`div[data-link=${currentPic}]`).removeClass('hidden')
    intervalID = setInterval(autoPlay, 4000)
  })

  $('#rightArrow').click(() => {
    clearInterval(intervalID)
    if (currentPic >= 6) {
      currentPic = 2
      $('.img-box').addClass('hidden')
      $(`div[data-link=${currentPic - 1}]`).removeClass('hidden')
      $('.dotstyle li').removeClass('current')
      $(`li[data-num=${currentPic - 1}]`).addClass('current')
    }
    else {
      currentPic++
      $('.img-box').addClass('hidden')
      $(`div[data-link=${currentPic - 1}]`).removeClass('hidden')
      $('.dotstyle li').removeClass('current')
      $(`li[data-num=${currentPic - 1}]`).addClass('current')
    }
    intervalID = setInterval(autoPlay, 4000)
  })

  $('#leftArrow').click(() => {
    clearInterval(intervalID)
    if (currentPic <= 2) {
      currentPic = 6
      $('.img-box').addClass('hidden')
      $(`div[data-link=${currentPic - 1}]`).removeClass('hidden')
      $('.dotstyle li').removeClass('current')
      $(`li[data-num=${currentPic - 1}]`).addClass('current')
    }
    else {
      currentPic--
      $('.img-box').addClass('hidden')
      $(`div[data-link=${currentPic - 1}]`).removeClass('hidden')
      $('.dotstyle li').removeClass('current')
      $(`li[data-num=${currentPic - 1}]`).addClass('current')
    }
    intervalID = setInterval(autoPlay, 4000)

  })
})
