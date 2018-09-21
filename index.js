$(() => {

const ul = $(".slider ul");
const slide_count = ul.children().length;
const slide_width_pc = 100.0 / slide_count;
let slide_index = 0;

ul.find("li").each(function(indx) {
  const left_percent = `${slide_width_pc * indx}%`;
  $(this).css({"left":left_percent});
  $(this).css({width:`${100 / slide_count}%`});
});

$(".slider .prev").click(() => {
  slide(slide_index - 1);
});

$(".slider .next").click(() => {
  slide(slide_index + 1);
});

function slide(new_slide_index) {
  if(new_slide_index < 0 || new_slide_index >= slide_count) return;
  const margin_left_pc = `${new_slide_index * (-100)}%`;
  ul.animate({"margin-left": margin_left_pc}, 400, () => {
  slide_index = new_slide_index
});
}
});
