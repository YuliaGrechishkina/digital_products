<template>
<div class="works">
         <div class="works__header">
        <svg
          width="40"
          height="60"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="780 2717 40 60"
        >
          <image
            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAYAAAAUufjgAAAEFUlEQVRoQ72a63XUQAyFpQ5IB6QD0gFbAaQCSAekAqAC0gFLBYQKSAekA9IBdCDO9RkZ7Xg0I9ne+E9Owu7689Xraham6hKRX0T0qv77M/z+yMxX9X24AfiHiF48A1B9iydmvowAvieir0T0l4iumPnpnLAi8puIXhLRDTMfh4B4gYj8JKLXRHTPzNfnAhQRFaOpHu67CHEBRA4iF3EdmPnhHJAj9VzAAvmFiD4Qkft0W6Aj6o0AUSjID/z8zMyftgA1irGbe/r6Zoj1H81T7lowUfW6ChrI3QsmknshBc9RMBn1QgpWBbNnGjb7XqgPNhIaBfJxT7po4XWLpKiHLo+eiGq+Zub7LaDZwosAfieit0T0wMyHLXBrCm/UZjDuUMW4MJcfdwJEVNAHcXWjMgLUZnrHzLd7wBkVNa9hRvDw6LWLywUUEf0AvPHS+4C10CKCnEZuQ013UnlmwRZGqB2sARUR5DZyHBdEWFg7D3D3wvAewFi7ZhG2HPVZCqMD2C2YFmCqMEouwXi+KSYXLPCPP5j5LhJ6k++LgjkBzBaGiMDYYj3wliy0JRjeZoVaeGMgTjrGDCgiqcIoyqFHAg4AaEM6ZZD8MLyo1BCkiDRTywKmCqMXljIireG9jYRbRBYME6BH38sfsz+7bcjM3ebOW39+K4oKqMt6eGKIiJQbXHg5VtIAezYx83DuF7FOB4SIYDFCvqQmhgKObhx9nVswplGG8sTMUm1H7rDPhth89jxh2CR7yk4Fi2Q4a1t5LiJoXeitRwCi2qY8ySzp5X26lqKVYOBPbabMWKQNWlfXrTiFolbsoEWixFkV0QPRC73DJuQ1GnXYRxr1JhYFtPOw6So6sxRwKLR3RTG8FKp9IyJ0heEUMbm3iKZt1P/jznwTmaGN8EytZ1TZnYfVFjNHsh51GvuUikaB1YBVTs8HVrVZ0FOEI69QcU3PMw83rwD2ILMGtAPbnRCdEK1SsFLvZHS2/KCqmD7RWqugmWaLo76eo06NvtL/1iroHsV5O4m+IaXiGgVHh0ke4HyQzswX0ZazElDFaHqB3l4cOgGtXEgqxNU5TXP37gEOT+C3Nmqzh+QWd9Ob9Eud0PKeCbFx8d1iHJ3NNJvnHn3Q+NBuIY4A7eIz/L4kqmC1A3UHwnBPyBjaBGB4pEYAw4Y2AliWff0Wa2hKhoBlQoQMbRAwZeuigCFDOwIse2/K0oUAKxVdKxYATKk3md/EGBuq2AOs1Bt2BOUKAxYVu9U3AAzlcS1YFrBraD1Az85HopcCrFRcTIAO4GIZisClctDMZ1VxMUNbgFvUWwVYVGwaWgcwNc835aBRsWloa8DeMnS2EBvIhaFtAKY95S4KljDrzSNihPxk64PSVVxZ/Mh/owod/3pP+Q+gYBTYvi79xQAAAABJRU5ErkJggg=="
            width="40"
            height="60"
            x="780"
            y="2717"
          />
        </svg>
        <h2 class="works__header-title">Recent works</h2>
      </div>
          <div class="works__slider">
    <VueSlickCarousel :arrows="true" :dots="true">
          <div class="works_slider-item">
            <img src="@/assets/work-slider1.jpg" alt="" />
          </div>
          <div class="works_slider-item">
            <img src="@/assets/work-slider2.jpg" alt="" />
          </div>
          <div class="works_slider-item">
            <img src="@/assets/work-slider1.jpg" alt="" />
          </div>
          <div class="works_slider-item">
            <img src="@/assets/work-slider2.jpg" alt="" />
          </div>
        </VueSlickCarousel>
          </div>
          <a href="#" class="works__btn">View Gallery</a>
      </div>
</template>

<script>

export default {
  name: "Works",
  props: {
    msg: String,
  }, components: {VueSlickCarousel},
};
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

</script>

<style scoped>
.works {
  background-image: url(../assets/works-bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1000px;
  width: 100%;
   flex-direction: column;
}

.works__header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 flex-direction: column;
  
}

.works__header-title {
  color: #fefcfd;
  text-transform: uppercase;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 70px;
}

.works__slider {
 width: 730px;
  height: 550px;
 
  }
    
.works__btn {
  text-decoration: none;
  width: 150px;
  height: 25px;
  text-align: center;
  font-style: italic;
  font-size: 20px;
  color: #ffffff;
  border: 1px solid #ffffff;
  padding: 7px;
  margin-bottom: 70px;
}

.works__btn:hover {
  text-decoration: none;
  background-color: #9f9acf;
  color: #ffffff;
}

.works__btn:focus {
  text-decoration: none;
  background-color: #585288;
  color: #ffffff;
}

</style>
