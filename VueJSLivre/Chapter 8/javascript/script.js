Vue.component('food',{
    template: '#food',
    props: ['name'],
    data: function() {
        return {
            votes:0
        };
    },
    methods: {
        vote: function(event){
            console.log(event)
            this.votes++;
            this.$emit('voted', event.srcElement.textContent);
        }
    }
})

new Vue({
    el:'#app',
    data: {
        votes:0,
        log: []
    },
    methods: { 
        countVote: function (food,test) {
             this.votes++;
             this.log.push(food + ' recieved a vote !')
        }, 
    } 
})  