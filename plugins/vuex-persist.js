import VuexPersistence from 'vuex-persist';
import persistStores from '~/utils/vuex-persist';

export default ({ store }) => {
  new VuexPersistence({
    modules: persistStores,
    storage: window.sessionStorage,
  }).plugin(store);
};
