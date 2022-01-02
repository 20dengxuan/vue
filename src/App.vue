<template>
  <div class="h">this is app<div class="j">jjj</div></div>
</template>

<script>
import img from './assets/images/test.png'
import './assets/styles/test.css'
export default {
  name:"App",
  mounted(){
    console.log(img)
  }
}
</script>

<style lang="less" scoped>
 .h{
   font-size:50px;
   transform: translate(100px,100px);
   .j {
     color:green;
   }
 }
</style>

