var app = new Vue({
    el: '#app',
    data: {
        currentSlide: 0,
        isPreviousSlide: false,
        isFirstLoad: true,
        slides: [
            {
                headlineFirstLine: "Super",
                headlineSecondLine: "Tax",
                sublineFirstLine: "Arcane Studios",
                sublineSecondLine: "cipher",
                bgImg: "1b.jpg",
                rectImg: "https://i.postimg.cc/vTW0XkvM/slide-rect0.jpg"
            },
            {
                headlineFirstLine: "Tax",
                headlineSecondLine: "Payee",
                sublineFirstLine: "Arcane Studios",
                sublineSecondLine: "cipher",
                bgImg: "https://i.postimg.cc/Qx34VNXM/slide1.jpg",
                rectImg: "https://i.postimg.cc/ryWZ8R2b/slide-rect1.jpg"
            },
            {
                headlineFirstLine: "#PKMKB",
                headlineSecondLine: "Tax",
                sublineFirstLine: "Arcane Studios",
                sublineSecondLine: "cipher",
                bgImg: "https://i.postimg.cc/t4RBtrnQ/slide2.jpg",
                rectImg: "https://i.postimg.cc/3JFLGMRF/slide-rect2.jpg"
            },
            {
                headlineFirstLine: "#PKMKB",
                headlineSecondLine: "Tax",
                sublineFirstLine: "Arcane Studios",
                sublineSecondLine: "cipher",
                bgImg: "https://i.postimg.cc/t4RBtrnQ/slide2.jpg",
                rectImg: "https://i.postimg.cc/3JFLGMRF/slide-rect2.jpg"
            }
        ]
    },
  mounted: function () {
    var productRotatorSlide = document.getElementById("app");
        var startX = 0;
        var endX = 0;

        productRotatorSlide.addEventListener("touchstart", (event) => startX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchmove", (event) => endX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchend", function(event) {
            var threshold = startX - endX;

            if (threshold < 150 && 0 < this.currentSlide) {
                this.currentSlide--;
            }
            if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
                this.currentSlide++;
            }
        }.bind(this));
  },
    methods: {
        updateSlide(index) {
            index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
            this.currentSlide = index;
            this.isFirstLoad = false;
        }
    }
})