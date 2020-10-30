import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const almacen = new Vuex.Store({
  state : {
    products : [],
    customers: [
      {id : 10203, name : "Sam"}
    ],
    userLanguage : "en",
    i18n : {
      en : {
        products : {
          addError : "Product already exists"
        }
      },
      es : {
        products : {
          addError : "Producto existente"
        }
      }
    }
  },
  getters : {
    getProducts(state){
      return state.products;
    }
  },
  mutations : { //aqui se altera el almacen
    addProduct(state, data){ 
      state.products.push(data);
    }
  },
  actions : { //aqui va la logica de negocio para modificar el almacen
    addProduct(context, product){
      return new Promise((resolve, reject)=>{
        //revisamos si el producto existe
        let existe = context.state.products.some( prod => {
          return prod.name == product.name
        })
        //revisar mediante api si el prod ya existe
        if( !existe ){
          context.commit("addProduct", product);
          resolve();
        }else{
          let lang = "en";
          reject(context.state.i18n[context.state.userLanguage].products.addError)
        }
      })
      
    }
  }
});

export default almacen;