<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 自定义组件 -->
    <HelloWorld propMessage1="abcdefg" v-model="modelData" @change="helloworldChange" @test="helloworldTest"></HelloWorld>
    <button @click="mytest">App组件自己的按钮</button>
    <!-- <router-view/> -->
  </div>
</template>

<script lang="ts">
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Vue,
  Watch
} from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
// export default {
//   name: "app",
//   created(){

//   }
// }
@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  @Provide() modelData = false;

  @Emit()
  helloworldChange(val) {
    console.log("modelData值改变为：" + val);
  }

  @Emit()
  helloworldTest(val) {
    console.log("test事件的参数值：" + val); 
  }

  created() {
    this.$on("change", val => {
      console.log("app组件的值：" + val);
    });
  }

  @Emit()
  mytest() {
    this.$emit("change", "App"); // 无效，只是注册在组件上的事件
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
