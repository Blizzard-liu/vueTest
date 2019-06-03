<template>
  <div>
    <h2>{{msg}}</h2>
    <hr>

    <h3>{{count}}</h3>

    <div>
      <!-- <button @click="$store.commit('add',10)">+</button>
      <button @click="$store.commit('reduce')">-</button> -->

      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </div>
  </div>
</template>

<script>
import store from "@/vuex/store";
import { mapState,mapMutations } from "vuex";
export default {
  data() {
    return {
      msg: "hello vuex"
    };
  },
  //     computed:{
  //     count(){
  //         return this.$store.state.count;
  //     }
  // },


//   computed: mapState({
//     count: state => state.count
//   }),
   computed:mapState(["count"]),
    methods:mapMutations([
        'add','reduce'
]),
  store
};
</script>

