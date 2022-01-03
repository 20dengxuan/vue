<template>
 <div>
    <div class="h">this is app<div class="j">jjjhhkk</div></div>
  <div>{{ list }}jj</div>hhh
  <button @click="pushList">push</button>
 </div>
</template>

<script>
import img from './assets/images/test.png'
import './assets/styles/test.css'
export default {
  name:"App",
  data(){
    return{
      list:['aa']
    }
  },
  mounted(){
    let a = 1;
    let b = 2;
    [a,b] = [b,a];
    console.log(a,b)
  },
  methods:{
    pushList(){
      this.list.push('aa'+this.list.length)
    }
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

