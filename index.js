import $ from 'jquery'

$(document).ready(() => {
  let currentPic = 1;
  const picCount = $('.img-box').length;

  $('.dotstyle a').on('click', function () {
    $('.dotstyle li').removeClass('current')
    $(this).parent('li').addClass('current')
    const picNum = ($(this).parent('li').attr('data-num'));
    currentPic = picNum
    $('.img-box').addClass('hidden')
    $(`div[data-link=${picNum}]`).removeClass('hidden')
  })

  $('#next').click(() => {
    if (currentPic >= picCount) {
      currentPic = 1
      $('.img-box').addClass('hidden')
      $(`div[data-link=${currentPic}]`).removeClass('hidden')
      $('.dotstyle li').removeClass('current')
      $(`li[data-num=${currentPic}]`).addClass('current')
    }
    else {
      currentPic++
      $('.img-box').addClass('hidden')
      $(`div[data-link=${currentPic}]`).removeClass('hidden')
      $('.dotstyle li').removeClass('current')
      $(`li[data-num=${currentPic}]`).addClass('current')
    }
  })
  $('#prev').click(() => {
    if (currentPic <= 1) {
      currentPic = picCount
      $('.img-box').addClass('hidden')
      $(`div[data-link=${currentPic}]`).removeClass('hidden')
      $('.dotstyle li').removeClass('current')
      $(`li[data-num=${currentPic}]`).addClass('current')
    }
    else {
      currentPic--
      $('.img-box').addClass('hidden')
      $(`div[data-link=${currentPic}]`).removeClass('hidden')
      $('.dotstyle li').removeClass('current')
      $(`li[data-num=${currentPic}]`).addClass('current')
    }
  })

})
