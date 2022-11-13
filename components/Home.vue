<!-- Please remove this file from your project -->
<template>
  <div class="vh-100 bg-gray-100 home-page">
    <div class="container">
      <div>
        <h1 class="pt-3">Filters</h1>
        <div class="mb-2">
          <h4 class="mb-1 blue-title mt-2">Shapes</h4>

          <ul class="d-flex shape-list gap-1">
            <ShapeBox
              :key="shape._id"
              v-for="shape in shapes"
              :shape="shape"
              v-on:click.native="setShapeFilters(shape)"
              :class="setShapeClass(shape)"
            />
          </ul>
        </div>

        <div class="mb-3">
          <h4 class="mb-1 blue-title">Colors</h4>

          <ul class="d-flex gap-1">
            <ColorBox
              :key="color._id"
              v-for="color in colors"
              :color="color"
              v-on:click.native="setColorFilters(color)"
              :class="setColorClass(color)"
            />
          </ul>
        </div>

        <div class="">
          <div class="title mb-1">{{textToDisplay}}: <span class="gray-text">({{items.length}}) </span></div>

          <div class="card-wrapper">
            <div class="card" :key="items._id" v-for="items in items">
              <div :class="setClass(items.color, items.shape)"></div>
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
      items: [],
      textToDisplay: "",
      objectState: {},
      selectedFilters: {
        shapesFilter: [],
        colorsFilter: [],
      },
    };
  },
  mounted() {
    this.getObject();
    this.getItems();
        this.getText()
    // console.log(this.objectState);
    // console.log(this.selectedFilters);
  },
  methods: {
    ...mapGetters(["getObjects"]),
    setShapeFilters(e) {
      // console.log(this.selectedFilters.shapesFilter)
      // console.log(this.shapes )
      if(this.selectedFilters.shapesFilter.length >= this.shapes.length) {
        this.selectedFilters.shapesFilter = []
      }

      !this.selectedFilters.shapesFilter.includes(e) ?
        this.selectedFilters.shapesFilter.push(e): this.selectedFilters.shapesFilter   = this.selectedFilters.shapesFilter.filter(function(value, index, arr){
        return value !== e;
    });

      this.getItems();
    },
    setClass: function (value1, value2) {
      const obj = {};
      obj[value1] = value1;
      obj[value2] = value2;
      return obj;
    },
    setShapeClass: function (value) {


      const obj = {};

      if(this.selectedFilters.shapesFilter.includes(value)){

      obj["selected"] = true;
      }
      return obj;
    },
    setColorClass: function (value) {


      const obj = {};

      if(this.selectedFilters.colorsFilter.includes(value)){

      obj["selected"] = true;
      }
      return obj;
    },
    setColorFilters(e) {
      // !this.selectedFilters.colorsFilter.includes(e) &&
      //   this.selectedFilters.colorsFilter.push(e);
      // console.log(this.selectedFilters);
 if(this.selectedFilters.colorsFilter.length >= this.colors.length) {
        this.selectedFilters.colorsFilter = []
      }

      !this.selectedFilters.colorsFilter.includes(e) ?
        this.selectedFilters.colorsFilter.push(e): this.selectedFilters.colorsFilter   = this.selectedFilters.colorsFilter.filter(function(value, index, arr){
        return value !== e;
    });

      this.getItems();






    },
  getText(){
      if( this.selectedFilters.colorsFilter.length == this.colors.length &&this.selectedFilters.shapesFilter.length == this.shapes.length){
         this.textToDisplay="All Items"
      }
  },


    getObject() {
      this.getObjects().objects.forEach(({ shape, color }) => {
        !this.shapes.includes(shape) && this.shapes.push(shape);
        !this.colors.includes(color) && this.colors.push(color);

        !!!this.objectState[shape]
          ? (this.objectState[shape] = [color])
          : this.objectState[shape].push(color);
      });
    },
    getItems() {
      if (
        !!this.selectedFilters.shapesFilter &&
        this.selectedFilters.shapesFilter.length == 0
      ) {
        this.selectedFilters.shapesFilter = [...this.shapes];
      }
      if (
        !!this.selectedFilters.colorsFilter &&
        this.selectedFilters.colorsFilter.length == 0
      ) {
        this.selectedFilters.colorsFilter = [...this.colors];
      }

      this.items = [];
      this.selectedFilters.shapesFilter.forEach((currentShape) => {
        // console.log(this.objectState[currentShape])
        !!this.objectState[currentShape] &&
          Array.isArray(this.objectState[currentShape]) &&
          this.objectState[currentShape].length > 0 &&
          this.objectState[currentShape].forEach((currentColor) =>{


if( this.selectedFilters.colorsFilter.includes(currentColor)){

            this.items.push({
              shape: currentShape,
              color: currentColor,
            })

            }
          });
      });

      // console.log(this.items);
    },
  },
};
</script>
<style lang="scss">
.blue-title {
  color: #0000ff80;
}
</style>
