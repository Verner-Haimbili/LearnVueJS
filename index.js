var app = new Vue({
    el: "#app",
    data: {
        message: "Hello World",
        name: 'Werner',
        price: '1000',
    },
    methods: {
        discount: function(d) {
            cost = this.price - d;
            return cost;
        }
    }


});