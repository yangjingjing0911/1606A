import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import app from './moudles/app';


//生成store实例
export default new Vuex.Store({
    modules:{
        app
    }
})