var app = new Vue({
    el: '#app',
    data: {
        currentSlide: 0,
        isPreviousSlide: false,
        isFirstLoad: true,
        slides: [
            {
                headlineFirstLine: "Electrifying",
                headlineSecondLine: "our nation",
                sublineFirstLine: "Know where your tax",
                sublineSecondLine: "Goes",
                bgImg: "assets/img/slider/5a.jpg",
                rectImg: "https://i.postimg.cc/3JFLGMRF/slide-rect2.jpg",
                test: "Building a stronger nation"
            },
            {
                headlineFirstLine: "Providing Healthcare",
                headlineSecondLine: "To Every Soul",
                sublineFirstLine: "Know where your tax",
                sublineSecondLine: "Goes",
                bgImg: "assets/img/slider/8a.jpg",
                rectImg: "https://i.postimg.cc/vTW0XkvM/slide-rect0.jpg",
                test: "Aids to calamities"
            },
            {
                headlineFirstLine: "Preserving our",
                headlineSecondLine: "Wildlife Reserves",
                sublineFirstLine: "Know where your tax",
                sublineSecondLine: "Goes",
                bgImg: "assets/img/slider/7a.jpg",
                rectImg: "https://i.postimg.cc/ryWZ8R2b/slide-rect1.jpg",
                test: "Care for our Elderly"
            },
            {
                headlineFirstLine: "Providing",
                headlineSecondLine: "Mid-day meals",
                sublineFirstLine: "Know where your tax",
                sublineSecondLine: "Goes",
                bgImg: "assets/img/slider/6a.jpg",
                rectImg: "https://i.postimg.cc/3JFLGMRF/slide-rect2.jpg",
                test: "For a brighter tomorrow"
            },
            {
                headlineFirstLine: "Providing",
                headlineSecondLine: "Mid-day meals",
                sublineFirstLine: "Know where your tax",
                sublineSecondLine: "Goes",
                bgImg: "assets/img/slider/6a.jpg",
                rectImg: "https://i.postimg.cc/3JFLGMRF/slide-rect2.jpg",
                test: "For a brighter tomorrow"
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