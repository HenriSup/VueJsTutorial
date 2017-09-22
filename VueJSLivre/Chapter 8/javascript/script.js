Vue.component('food',{
    template: '#food',
    props: ['name'],
    methods: {
        vote: function(){
            this.$emit('voted')
        }
    },
})


new Vue({
    el:'#app',
    data: {
        votes:0
    },
    methods: { 
        countVote: function () {
             this.votes++ 
        }, 
    } 
})  