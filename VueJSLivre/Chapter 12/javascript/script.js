Vue.component('story',{
    template: '#story',
    props:['story'],

    computed:{
        id:function() {
            return this.story.id
        },
        plot:function() {
            return this.story.plot
        },
        upvotes:function() {
            return this.story.upvotes
            },
        writer:function() {
            return this.story.writer
        },
    },
    methods: {
        upVoteStory: function(story){
            story.upvotes++;
            axios.patch('http://localhost:3000/api/stories/'+story.id,story);
        },
        deleteStory: function(story){
            axios.delete('http://localhost:3000/api/stories/'+story.id).then(function(response){
                var index = vm.stories.indexOf(story);
                Vue.delete(vm.stories,index);
            });
        },
        
    }
})

var vm = new Vue({
    el:'#app',
    data: {
        stories: []
    },
    mounted:function() {
        axios.get('http://localhost:3000/api/stories').then(function(response){
            Vue.set(vm,'stories',response.data);
        })
    }
})  