new Vue({
    el:'#app',
    data: {
        people : [ 
            { name: 'Stan', age: 70},
            { name: 'Kyle', age: 40},
            { name: 'Eric', age: 45},
            { name: 'Didier', age: 60},
            { name: 'Kenny', age: 20} 
        ] 
    },
    methods: {
        reorderKids: function(){

        }
    },
    computed: {
        oldPeople: function() {
            return this.people.filter(function(person){
                return person.age>50
            })
        }
    }
})  