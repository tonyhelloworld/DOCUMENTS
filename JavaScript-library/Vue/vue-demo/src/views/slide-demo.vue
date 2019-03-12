<template>
  <div>
    <slide :slides="slides" :inv="inv" :style="styleObject" :name="transitionName1" :target="target"></slide>
    <slide :slides="slides" :inv="inv" :style="styleObject" :name="transitionName2" :target="target"></slide>

  </div>
</template>

<script>
import Slide from "@/components/slide.vue";
export default {
  data() {
    return {
      slides: [
        //   此处为图片网址
        {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542868686603&di=b4f48fd39d750ec4c519bcf3f8c33e47&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F83025aafa40f4bfb0786420f0e4f78f0f7361813.jpg'},
        {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542868686602&di=7a50aceab10ccce448946dc396493ea1&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fd439b6003af33a8724e4b645cb5c10385243b5e0.jpg'},
        {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542868717668&di=8df5f6984068550bbf6e21c210fcb113&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fcdbf6c81800a19d87dcb6f5f3efa828ba71e46a4.jpg'},

      ],
      inv: 3000,
      styleObject: {
        //   width:'1200px',
        height: "400px"
      },
      transitionName1: "move",
      transitionName2: "fade",
      target: "_blank"
    };
  },

  components: { 'slide':Slide},
};
</script>
<style lang='' scoped>
</style>