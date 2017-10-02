var bus = new Vue()

Vue.component('chariot',{
    template: '#chariot',
    props: ['chariot','currentChariot'],
    data: function() {
        return {
            name:this.chariot.name,
            numberOfHorses:this.chariot.numberOfHorses
        };
    },
    methods: {
        rideChariot: function(chariot){
            bus.$emit('setCurrentChariot', chariot);
        }
    },
    computed: {
        noChariot:function(){
            return this.currentChariot == null;
        },
        isCurrent:function(){
            return this.currentChariot == this.chariot;
        },
        hasMoreHorses:function(){
            return this.chariot.numberOfHorses > this.currentChariot.numberOfHorses;
        },
        action : function() {
            action = null;
            if(this.noChariot) {
                action="Pick chariot"
            } else if (this.isCurrent) {
                action="Riding !"
            } else if (this.hasMoreHorses) {
                action="Hire horses"
            } else {
                action="Dismiss horses"
            }
            return action;
        }
    }
})

new Vue({
    el:'#app',
    data: {
        currentChariot:null,
        chariots: [
            {name:"Hell",numberOfHorses:4},
            {name:"Dan's",numberOfHorses:3},
            {name:"Fire",numberOfHorses:2},
            {name:"Mugman",numberOfHorses:1},
        ]
    },
    methods: { 
        setCurrentChariot: function (chariot) {
             this.currentChariot=chariot;
        }, 
    },
    created(){
        bus.$on('setCurrentChariot', this.setCurrentChariot)
    }
})  