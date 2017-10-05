Vue.component('story',{
    template: '#template-story-raw',
    props: ['story'],
    computed:{
        id:function() {
            return this.story.id;
        },
        plot:function() {
            return this.story.plot;
        },
        upVotes:function() {
            return this.story.upvotes;
            },
        writer:function() {
            return this.story.writer;
        },
    },
    methods: {
        upVoteStory: function(story){
            story.upvotes++;
            axios.patch('http://localhost:3000/api/stories/'+story.id,story);
        },
        deleteStory: function(story){
            var index = vm.stories.indexOf(story);
            Vue.delete(vm.stories,index);
            axios.delete('http://localhost:3000/api/stories/'+story.id);
        },
        editStory: function(story){
            story.editing=true;
        },
        updateStory: function(story){
            axios.patch('http://localhost:3000/api/stories/'+story.id,story);
            story.editing=false;
        },
        saveStory: function(story){
            axios.post('http://localhost:3000/api/stories',story).then(function(response){
                Vue.set(story,'id',response.data.id);
                story.editing=false;
            })
        }
    }
})

var vm = new Vue({
    el:'#app',
    data: {
        stories: []
    },
    mounted:function() {
        this.fetchStories();
    },
    methods: {
        createStory: function(){
            var newStory = {
                "plot": "",
                "upvotes": 0,
                "editing": true
            };
            this.stories.push(newStory)
        },
        fetchStories: function(){
            axios.get('http://localhost:3000/api/stories').then(function(response){
                var storiesReady = response.data.map(function(story){
                    story.editing=false;
                    return story
                })
                Vue.set(vm,'stories',storiesReady);
            })
        }
    }
})  