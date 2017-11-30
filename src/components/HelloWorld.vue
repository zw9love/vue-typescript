<template>
  <div class="hello">
    <h1>{{ msg1 | lowercase}}</h1>
    <h1>{{ msg2 | uppercase}}</h1>
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
    <button @click="myTest(111)">点击我测试下</button>
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

@Component({
  name: "helloworld",
  components: {},
  created() {
    // this.$delete(this.obj,'name')
    // console.log(this.obj) // {age: 20}
    // console.log(this.$set);
    // console.log(this.$delete); 
    // console.log(this.$filter) // undefined
    // console.log(this.$use) // undefined
    // console.log(this.version) // undefined
    // console.log(this.$compile) // undefined
    // console.log(this.$mixin) // undefined
  },
  data() {
    return {
      msg1: "AAABBBCCCDDD",
      msg2: "eeefffggghhh",
      obj: { name: "daxiong", age: 20 }
    };
  },
  methods: {
    myTest(msg?: string, obj?: obj): void {
      console.log(msg);
    }
  }
})


export default class HelloWorld extends Vue {}
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
