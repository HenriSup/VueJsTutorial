new Vue({
    el:'#app',
    data:{
        message: 'hello world!'
    },
    filters:{
        uwfirst: function(value){
            if (!value){
                return '';
            }

            var words = value.toString().split(' ');

            var uppercasedWords = words.map(function(word){
                return word.charAt(0).toUpperCase() + word.slice(1);
            });  

            return uppercasedWords.join(' ');
        },

        removeSpaces: function(value){
            if(!value){
                return '';
            }
            return value.toString().replace(/\s/g, '');
        }
    }
})