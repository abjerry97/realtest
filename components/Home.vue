<!-- Please remove this file from your project -->
<template>
  <div class="vh-100 bg-gray-100 home-page">
    <div class="container">
      <div>
        <h1 class="pt-3" >Filters</h1>
        <div class="mb-2">
          <h4 class="mb-1 blue-title mt-2">Shapes</h4>

          <ul class="d-flex shape-list gap-1">
            <ShapeBox :key="shape._id" v-for="shape in shapes" :shape="shape"  v-on:click.native="  setShapeFilters(shape)"  />
          </ul>
        </div>

        <div class="mb-3">
          <h4 class="mb-1 blue-title">Colors</h4>

          <ul class="d-flex gap-1">
            <ColorBox :key="color._id" v-for="color in colors" :color="color" v-on:click.native="  setColorFilters(color)"/>
          </ul>
        </div>

        <div class="">
          <div class="title mb-1">All Oval Items: <span>(6)</span></div>

          <div class="card-wrapper">

            <div class="card " :key="color._id" v-for="color in objectState[shapes[1]]" >

              <div class=" triangle " :class = "color" >

              </div>
              </div>

          </div>





        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      shapes: [],
      colors: [],
      objectState: {},
     selectedFilters : {
        shapesFilter: [],
        colorsFilter:[]
    }
    };
  },
    mounted () {
     this.getObject()
     console.log(this.objectState)
    },
  methods: {
    ...mapGetters(["getObjects"]),
    setShapeFilters (e) {
       !this.selectedFilters.shapesFilter.includes(e) && this.selectedFilters.shapesFilter.push(e)
    },
    setColorFilters (e) {
       !this.selectedFilters.colorsFilter.includes(e) && this.selectedFilters.colorsFilter.push(e)
       console.log(this.selectedFilters)
    },
 getObject() {
      const shapes = []
      const colors = []
      this.getObjects().objects.forEach(({shape,color}) => {
      !this.shapes.includes(shape)&& this.shapes.push(shape)
     !this.colors.includes(color)&& this.colors.push(color)

      !!!this.objectState[shape] ? this.objectState[shape]  = [color] :  this.objectState[shape].push(color)

});
    }
  },
};
</script>
<style lang="scss">
.blue-title {
  color: #0000ff80;
}
</style>
