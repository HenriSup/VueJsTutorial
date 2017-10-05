Vue.component('movie',{
    template: '#movie-template',
    props: ['movie'],
    computed:{
        id:function() {
            return this.movie.id;
        },
        title:function() {
            return this.movie.title;
        },
        director:function() {
            return this.movie.director;
        },
    },
    methods:{
        editMovie: function(movie){
            movie.editing=true;
        },
        updateMovie: function(movie){
            axios.patch('http://localhost:3000/api/movies/'+movie.id,movie);
            movie.editing=false;
        },
        deleteMovie: function(movie){
            var index= vm.movies.indexOf(movie);
            Vue.delete(vm.movies,index);
            axios.delete('http://localhost:3000/api/movies/'+movie.id);
        },
        saveMovie: function(movie){
            axios.post('http://localhost:3000/api/movies',movie).then(function(response){
                Vue.set(movie,'id',response.data.id);
                movie.editing=false;
            })
        }
    }
})

var vm = new Vue({
    el:'#app',
    data: {
        movies: []
    },
    mounted:function() {
        this.fetchMovies();
    },
    methods: {
        fetchMovies: function() {
            axios.get('http://localhost:3000/api/movies').then(function(response) {
                var editMovie = response.data.map(function(movie){
                    movie.editing=false;
                    return movie;
                })
                Vue.set(vm,'movies',editMovie);
            })
        },
        createMovie: function(){
            var newMovie = {
                "title": "",
                "director": "",
                "editing":true
            }
            this.movies.push(newMovie);
        }
    }
})  