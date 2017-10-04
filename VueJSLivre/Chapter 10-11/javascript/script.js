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
            $.ajax({
                url: 'http://localhost:3000/api/stories/'+story.id,
                type: 'PATCH',
                data: story,
            });
        },
        deleteStory: function(story){
            $.ajax({
                url: 'http://localhost:3000/api/stories/'+story.id,
                type: 'DELETE',
                success : function(){
                    var index = vm.stories.indexOf(story);
                    Vue.delete(vm.stories,index);
                }
            });
        }
    }
    
})

var vm = new Vue({
    el:'#app',
    data: {
        stories: []
    },
    mounted:function() {
        $.get('http://localhost:3000/api/stories',function(data){
            vm.stories=data;
        })
    }
})  