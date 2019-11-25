/*
 * @Author: xuesongLi 
 * @Date: 2019-11-25 17:29:05 
 * @Last Modified by: 
 * @Last Modified time: 2019-11-25 17:29:49
 */

<style scoped>
.mask {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  opacity: 0;
  will-change: opacity;
  transition: all 0.5s;
  visibility: hidden;
}
.content {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  background: #fff;
  transform: translateY(100%);
  transition: 0.3s;
  padding: 0 10px;
}
.trans {
  transform: translateY(0);
}
.maskpop {
  pointer-events: auto;
  opacity: 1;
  visibility: visible;
  /*background-color: rgba(0,0,0,.5);*/
}
</style>
<template>
  <div>
    <div class="mask" :class="{'maskpop':isShow}" @click="pophide"></div>
    <div class="content" :class="{'trans':isShow}" :style="{height:height}" >
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
 props:{
    isShow:{
      type: Boolean,
      default: false
    },
    height:{
      type: String,
      default: '40%'
    }
  },
  methods: {
    pophide() {
       this.$emit("pophide",false);  
    },
  }
};
</script>

