Vue.component('planet', {
    template: "#planet-template",
    props:['planet'],
    methods: {
        visitPlanet: function (){
            this.planet.numberOfVisits ++;
        }
    },
    computed: {
        hasBeenVisitedOnce: function(){
            return this.planet.numberOfVisits > 0;
        },
        canStillBeVisited : function(){
            return this.planet.numberOfVisits < 3;
        }
    } 
})

new Vue({
    el:'#app',
    data: {
        planets : [ 
            { 
                name: 'Mercury',
                numberOfVisits: 0
            },
            { 
                name: 'Venus',
                numberOfVisits: 0
            },
            { 
                name: 'Mars',
                numberOfVisits: 0
            },
            { 
                name: 'Jupiter',
                numberOfVisits: 0
            }
        ],
        favorite : {}
    },
})  