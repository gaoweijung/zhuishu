/* eslint-disable */
import Vuex from 'vuex'
import Vue from '../../node_modules/vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        currentChapter: {}
    },

    mutations: {
        addChapter(state,id){
            let currentChapter = state.currentChapter;
            if(currentChapter[id] === undefined){
                currentChapter[id] = 0;
            }
            currentChapter[id] ++;
            console.log(currentChapter[id])
            state.currentChapter = currentChapter;
        },
        substractChapter(state,id){
            let currentChapter = state.currentChapter;
            if(currentChapter[id] === undefined){
                currentChapter[id] = 0;
            }else{
                currentChapter[id] --;
            }
            state.currentChapter = currentChapter;        }
    }
})

export default store