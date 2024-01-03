var app = new Vue({
  el: "#app",
  data: {
    message: "Hello World",
    name: "Werner",
    price: "1000",
    path: "https://swimandsweat.com/cdn/shop/files/Tile-1_646451f2-e7e7-4fa8-a275-51e762891bd0.jpg?v=1685627923&width=750",
    link: "https://www.google.com",
  },
  methods: {
    discount: function (d) {
      cost = this.price - d;
      return cost;
    },
  },
});
