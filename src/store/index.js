import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        blog: []
    },
    mutations: {
        addpost(state, blog) {
            state.blog.push(blog);
        }
    },
    actions: {
        addpost({ commit }, [description, title]) {
            commit('addpost', { description, title });
        }
    }
});