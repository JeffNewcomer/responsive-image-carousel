$(() => {

  const ul = $(".slider ul");
  const slide_count = ul.children().length;
  const slide_width_pc = 100.0 / slide_count;
  let slide_index = 0;

  const first_slide = ul.find("li:first-child");
  const last_slide = ul.find("li:last-child");

  // Clone the last slide and add as first li element
  last_slide.clone().prependTo(ul);

  // Clone the first slide and add as last li element
  first_slide.clone().appendTo(ul);

  ul.find("li").each(function(indx) {
    const left_percent = `${slide_width_pc * indx}%`;
    $(this).css({"left":left_percent});
    $(this).css({width:`${100 / slide_count}%`});
  });

  ul.css("margin-left", "-100%");

  // Listen for click of prev button
  $(".slider .prev").click(() => {
    console.log("prev button clicked");
    slide(slide_index - 1);
  });

  // Listen for click of next button
  $(".slider .next").click(() => {
    console.log("next button clicked");
    slide(slide_index + 1);
  });

  function slide(new_slide_index) {

    const margin_left_pc = `${new_slide_index * (-100) - 100}%`;

    ul.animate({"margin-left": margin_left_pc}, 400, () => {

      // If new slide is before first slide...
      if(new_slide_index < 0) {
        ul.css("margin-left", `${(slide_count) * (-100)}%`);
        new_slide_index = slide_count - 1;
      }
      // If new slide is after last slide...
      else if(new_slide_index >= slide_count) {
        ul.css("margin-left", "-100%");
        new_slide_index = 0;
      }

      slide_index = new_slide_index

    });

  }

});


// $(() => {
//
// const ul = $(".slider ul");
// const slide_count = ul.children().length;
// const slide_width_pc = 100.0 / slide_count;
// let slide_index = 0;
//
// ul.find("li").each(function(indx) {
//   const left_percent = `${slide_width_pc * indx}%`;
//   $(this).css({"left":left_percent});
//   $(this).css({width:`${100 / slide_count}%`});
// });
//
// $(".slider .prev").click(() => {
//   slide(slide_index - 1);
// });
//
// $(".slider .next").click(() => {
//   slide(slide_index + 1);
// });
//
// function slide(new_slide_index) {
//
//     const margin_left_pc = `${new_slide_index * (-100) - 100}%`;
//
//     ul.animate({"margin-left": margin_left_pc}, 400, () => {
//
//       // If new slide is before first slide...
//       if(new_slide_index < 0) {
//         ul.css("margin-left", `${(slide_count) * (-100)}%`);
//         new_slide_index = slide_count - 1;
//       }
//       // If new slide is after last slide...
//       else if(new_slide_index >= slide_count) {
//         ul.css("margin-left", "-100%");
//         new_slide_index = 0;
//       }
//
//       slide_index = new_slide_index
//
//     });
//
//   }
//
// // function slide(new_slide_index) {
// //   if(new_slide_index < 0 || new_slide_index >= slide_count) return;
// //   const margin_left_pc = `${new_slide_index * (-100)}%`;
// //   ul.animate({"margin-left": margin_left_pc}, 400, () => {
// //   slide_index = new_slide_index
// // });
// // }
// // });
//
// const first_slide = ul.find("li:first-child");
// const last_slide = ul.find("li:last-child");
//
//   last_slide.clone().prependTo(ul);
//
//   first_slide.clone().appendTo(ul);
//
// ul.css("margin-left", "-100%");
