import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
    count:1
}

//要改变state的数值的方法，必须写在mutations里就可以了
const mutations={
    // add(state,n){
    //     state.count+=n;
    // },

    add(state){
        state.count++;
    },
    reduce(state){
        state.count--;
    }
}

export default new Vuex.Store({
    state,mutations
    
})