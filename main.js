(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(function () {
  var ul = $(".slider ul");
  var slide_count = ul.children().length;
  var slide_width_pc = 100.0 / slide_count;
  var slide_index = 0;
  ul.find("li").each(function (indx) {
    var left_percent = "".concat(slide_width_pc * indx, "%");
    $(this).css({
      "left": left_percent
    });
    $(this).css({
      width: "".concat(100 / slide_count, "%")
    });
  });
  $(".slider .prev").click(function () {
    slide(slide_index - 1);
  });
  $(".slider .next").click(function () {
    slide(slide_index + 1);
  });

  function slide(new_slide_index) {
    if (new_slide_index < 0 || new_slide_index >= slide_count) return;
    var margin_left_pc = "".concat(new_slide_index * -100, "%");
    ul.animate({
      "margin-left": margin_left_pc
    }, 400, function () {
      slide_index = new_slide_index;
    });
  }
});

},{}]},{},[1]);
