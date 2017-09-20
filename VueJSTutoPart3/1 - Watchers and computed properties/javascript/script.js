new Vue({
    el:'#app',
    data:{
        movies: [
            {name: 'The Matrix', year: 1999},
            {name: 'The Matrix Reloaded', year: 2003},
            {name: 'The Matrix Revolutions', year: 2003},
        ]
    },
    methods:{
        addMovie: function(){
            this.movies.push({
                name: 'OldBoy',
                year: 2003
            });
        }
    },
    computed:{
        moviesWithDate:function(){
            return this.movies.map(function(movie){
                return movie.name+" ("+movie.year+")";
            });  
        }
    },
    watch:{
        movies: function(movies){
            var newMovie = movies[movies.length-1]; 
            alert("New Movie : " + newMovie.name+"\nRelease year: "+newMovie.year)
        }
    }
})