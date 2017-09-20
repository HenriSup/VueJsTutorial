new Vue({
    el:'#app',
    data:{
        styleClasses:{
            shape:'square',
       },
       employees: [
           {name: 'Abby', title: 'Accountant'},
           {name: 'Andy', title: 'Marketing Manager'},
           {name: 'Brandon', title: 'Vue.js Expert'},
           {name: 'Bob', title: 'Key Account Manager'}
       ],
       companyName: 'VueX Ltd.'
    },
    methods:{
        shapeShift: function(){
            if (this.styleClasses.shape=='square'){
                this.styleClasses.shape='round';
            } else {
                this.styleClasses.shape='square';
            }
        }
    }
})