<template>
  <div class="hello">
    <h1>{{ msg1 | lowercase}}</h1>
    <h1>{{ msg2 | uppercase}}</h1>
    <h1>{{ propMessage1 | uppercase}}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div>
      <h3>{{num}}</h3>
      <button @click="addToCount">点我增加(@emit)</button>
    </div>
    <div>
      <h3>{{num}}</h3>
      <button @click="resetCount">点我重置(@emit)</button>
    </div>
    <div>
      <h3>{{checked}}</h3>
      <button @click="checkedReverse(!checked)">点我取反(@model)</button>
    </div>
    <div style="margin:20px 0">
      <button @click="mytest">点击测试test事件</button>
    </div>
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

interface obj {
  name: string;
  age: number;
}

@Component
export default class HelloWorld extends Vue {
  @Prop() 
  propMessage1: string;
  propMessage2: string;

  @Provide() 
  num = 0;
  msg1 = "AAAAAA";
  msg2 = "bbbbbb";
  injectMessage1 = "cccccc";

  // @Inject()
  // injectMessage1 = string // tslint编译过不去

  @Emit()
  addToCount() {
    console.log(6666)
    // this.num++;
  }

  @Emit()
  resetCount() {
    this.num = 0;
  }

  @Emit()
  checkedReverse(val){
    this.$emit('change', val)
  }

  @Emit()
  mytest(){
    this.$emit('test', 999999)
  }

  created() {
    console.log('我是helloworld组件！！！')
    this.$emit('change', true)
  }

  @Model('change') checked: boolean

  @Watch("num")
  onNumChanged(val: string, oldVal: string) {
    console.log("num的新值为：" + val);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
