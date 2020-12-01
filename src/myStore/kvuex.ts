let _Vue: any

class Store {
  private _vm: Vue
  $options: any
  $actions: any
  $mutations: any
  $getters: any = {}
  constructor(options: any){
    // this.$options = options
    this.$actions = options.actions
    this.$mutations = options.mutations

    // 实现getters start
    let getters = options.getters || {}
    Object.keys(getters).forEach(key => 
      Object.defineProperty(this.$getters, key, {
        get: function () {
          return getters[key](options.state)
        },
        set: function (v) {
          console.error('Can not set getter')
        },
        enumerable: true
      })
    )
    this._vm = new _Vue({
      data: {
        $$state: options.state,
        $$getters: this.$getters
      }
    })
    //-- end --//
    this.dispatch = this.dispatch.bind(this)
    this.commit = this.commit.bind(this)
  }

  get getters() {
    return this._vm.$data.$$getters
  }

  set getters(v) {
    console.error('Can not set state')
  }

  get state() {
    return this._vm.$data.$$state
  }

  set state(v) {
    console.error('Can not set state')
  }

  

  dispatch(type: any, payload: any) {
    const action = this.$actions[type]
    if(!action){
      console.error('unknown function')
      return
    }
    action(this, payload)
  }
  
  commit(type: any, payload: any) {
    const mutation = this.$mutations[type]
    if(!mutation){
      console.error('unknown params')
      return
    }
    mutation(this.state, payload)
  }
}

function install(_vue: any) {
  _Vue = _vue

  console.log(_vue)
  _Vue.mixin({
    beforeCreate() {
      let options = this.$options
      // if(this.$options.store){
      // // console.log(this.$options)
      //   this.$store = this.$options.store
      //   console.log(this)
      // }
      if (options.store) {
        this.$store = typeof options.store === 'function'
          ? options.store()
          : options.store;
      } else if (options.parent && options.parent.$store) {
        this.$store = options.parent.$store;
      }
    }
  })
}

export default {Store, install}