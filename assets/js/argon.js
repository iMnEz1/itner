/*!

=========================================================
* Argon Design System - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2018 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


 
"use strict";
$(document).ready(function() {

//     var canvas = document.getElementById("canvas"),
//     ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var stars = [], // Array that contains the stars
//     FPS = 60, // Frames per second
//     x = 100, // Number of stars
//     mouse = {
//       x: 0,
//       y: 0
//     };  // mouse location

// // Push stars to array

// for (var i = 0; i < x; i++) {
//   stars.push({
//     x: Math.random() * canvas.width,
//     y: Math.random() * canvas.height,
//     radius: Math.random() * 1 + 1,
//     vx: Math.floor(Math.random() * 50) - 25,
//     vy: Math.floor(Math.random() * 50) - 25
//   });
// }

// // Draw the scene

// function draw() {
//   ctx.clearRect(0,0,canvas.width,canvas.height);
  
//   ctx.globalCompositeOperation = "lighter";
  
//   for (var i = 0, x = stars.length; i < x; i++) {
//     var s = stars[i];
  
//     ctx.fillStyle = "#fff";
//     ctx.beginPath();
//     ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
//     ctx.fill();
//     ctx.fillStyle = 'black';
//     ctx.stroke();
//   }
  
//   ctx.beginPath();
//   for (var i = 0, x = stars.length; i < x; i++) {
//     var starI = stars[i];
//     ctx.moveTo(starI.x,starI.y); 
//     if(distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
//     for (var j = 0, x = stars.length; j < x; j++) {
//       var starII = stars[j];
//       if(distance(starI, starII) < 150) {
//         //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
//         ctx.lineTo(starII.x,starII.y); 
//       }
//     }
//   }
//   ctx.lineWidth = 0.05;
//   ctx.strokeStyle = 'white';
//   ctx.stroke();
// }

// function distance( point1, point2 ){
//   var xs = 0;
//   var ys = 0;
 
//   xs = point2.x - point1.x;
//   xs = xs * xs;
 
//   ys = point2.y - point1.y;
//   ys = ys * ys;
 
//   return Math.sqrt( xs + ys );
// }

// // Update star locations

// function update() {
//   for (var i = 0, x = stars.length; i < x; i++) {
//     var s = stars[i];
  
//     s.x += s.vx / FPS;
//     s.y += s.vy / FPS;
    
//     if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
//     if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
//   }
// }

// canvas.addEventListener('mousemove', function(e){
//   mouse.x = e.clientX;
//   mouse.y = e.clientY;
// });

// // Update and draw

// function tick() {
//   draw();
//   update();
//   requestAnimationFrame(tick);
// }

// tick();

    // Collapse navigation
    $('.navbar-main .collapse').on('hide.bs.collapse', function () {
        var $this = $(this);
        $this.addClass('collapsing-out');
    });

    $('.navbar-main .collapse').on('hidden.bs.collapse', function () {
        var $this = $(this);
        $this.removeClass('collapsing-out');
    });

    $('.navbar-main .dropdown').on('hide.bs.dropdown', function () {
        var $this = $(this).find('.dropdown-menu');

        $this.addClass('close');

        setTimeout(function(){
            $this.removeClass('close');
        }, 200);

    });

    // Headroom - show/hide navbar on scroll
    if($('.headroom')[0]) {
        var headroom  = new Headroom(document.querySelector("#navbar-main"), {
            offset: 100,
            tolerance : {
                up : 30,
                down : 30
            },
        });
        headroom.init();
    }
    
    // Datepicker
    $('.datepicker')[0] && $('.datepicker').each(function() {
        $('.datepicker').datepicker({
            disableTouchKeyboard: true,
            autoclose: false
        });
    });

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Popover
    $('[data-toggle="popover"]').each(function() {
        var popoverClass = '';
        if($(this).data('color')) {
            popoverClass = 'popover-'+$(this).data('color');
        }
        $(this).popover({
            trigger: 'focus',
            template: '<div class="popover '+ popoverClass +'" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
    });
    
    // Additional .focus class on form-groups
    $('.form-control').on('focus blur', function(e) {
        $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');    
    
    // NoUI Slider
    if ($(".input-slider-container")[0]) {
        $('.input-slider-container').each(function() {

            var slider = $(this).find('.input-slider');
            var sliderId = slider.attr('id');
            var minValue = slider.data('range-value-min');
            var maxValue = slider.data('range-value-max');

            var sliderValue = $(this).find('.range-slider-value');
            var sliderValueId = sliderValue.attr('id');
            var startValue = sliderValue.data('range-value-low');

            var c = document.getElementById(sliderId),
                d = document.getElementById(sliderValueId);

            noUiSlider.create(c, {
                start: [parseInt(startValue)],
                connect: [true, false],
                //step: 1000,
                range: {
                    'min': [parseInt(minValue)],
                    'max': [parseInt(maxValue)]
                }
            });

            c.noUiSlider.on('update', function(a, b) {
                d.textContent = a[b];
            });
        })
    }

    if ($("#input-slider-range")[0]) {
        var c = document.getElementById("input-slider-range"),
            d = document.getElementById("input-slider-range-value-low"),
            e = document.getElementById("input-slider-range-value-high"),
            f = [d, e];

        noUiSlider.create(c, {
            start: [parseInt(d.getAttribute('data-range-value-low')), parseInt(e.getAttribute('data-range-value-high'))],
            connect: !0,
            range: {
                min: parseInt(c.getAttribute('data-range-value-min')),
                max: parseInt(c.getAttribute('data-range-value-max'))
            }
        }), c.noUiSlider.on("update", function(a, b) {
            f[b].textContent = a[b]
        })
    }


    // When in viewport
    $('[data-toggle="on-screen"]')[0] && $('[data-toggle="on-screen"]').onScreen({
        container: window,
        direction: 'vertical',
        doIn: function() {
            //alert();
        },
        doOut: function() {
            // Do something to the matched elements as they get off scren
        },
        tolerance: 200,
        throttle: 50,
        toggleClass: 'on-screen',
        debug: false
    });

    // Scroll to anchor with scroll animation
    $('[data-toggle="scroll"]').on('click', function(event) {
        var hash = $(this).attr('href');
        var offset = $(this).data('offset') ? $(this).data('offset') : 0;

        // Animate scroll to the selected section
        $('html, body').stop(true, true).animate({
            scrollTop: $(hash).offset().top - offset
        }, 600);

        event.preventDefault();
    });
 });   


