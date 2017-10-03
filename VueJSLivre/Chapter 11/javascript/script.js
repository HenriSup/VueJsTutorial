Vue.component('story',{
    template: '#story',
    props:['story'],
    data:function() {
        return {
           id:this.story.id,
           plot:this.story.plot,
           upvotes:this.story.upvotes,
           writer:this.story.writer
        };
    },
    methods: {
        upVoteStory: function(story){
            story.upvotes++;
            alert(story.upvotes);
            $.ajax({
                url: 'http://localhost:3000/api/stories/'+story.id,
                type: 'patch',
                data : story,
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