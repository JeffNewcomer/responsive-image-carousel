import $ from 'jquery'

$(document).ready(() => {
  let currentPic = 1;
  const picCount = $('.img-box').length;
  $('#next').click(() => {
    if (currentPic >= picCount) {
      return null
    }
    else {
      currentPic++
      $('.img-box').addClass('hidden')
      $(`div[data-link=${currentPic}]`).removeClass('hidden')
    }
  })
  $('#prev').click(() => {
    if (currentPic <= 1) {
      return null
    }
    else {
      currentPic--
      $('.img-box').addClass('hidden')
      $(`div[data-link=${currentPic}]`).removeClass('hidden')
    }
  })
})
