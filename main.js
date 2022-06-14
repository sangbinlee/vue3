const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart(id) {
      console.log("id", id);

      this.cart.push(id);
      console.log("this.cart", this.cart);
    },
    // solution
    removeById(id) {
      const index = this.cart.indexOf(id);
      console.log("index", index);
      if (index > -1) {
        this.cart.splice(index, 1);
        console.log("this.cart", this.cart);
      }
    },
    // solution
  },
});
