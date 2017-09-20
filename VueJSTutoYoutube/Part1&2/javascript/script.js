new Vue({
    el:'#app',
    data: {
        movieTitles:["Old Boy","A dog's purpose","My neighbor Totoro"],
        playlist: [
            {title: "aie aie aie",artist:"Caballero & JeanJass"},
            {title: "TMTC",artist:"Caballero & JeanJass"},
            {title: "Début d'empire",artist:"BigFlo & Oli"},
            {title: "54321",artist:"Caballero & JeanJass"},
            {title: "Ma dope",artist:"Nekfeu"},
        ],
        numbers: [1,2,3,4,5],
        password: '',
        categories: [
            {name: 'Javascript', sub: ['Vue.js','React','Angular2']},
            {name: 'Databases', sub: ['MySQL','PostegreSQL','MariaDB']},
            {name: 'Javascript', sub: ['macOS','Linux','Windows']}
        ],
        firstname: "",
        lastname:"",
        counter:0
    },
    methods: {
        changeNumber: function(){
            //Vue.set(this.numbers,0,8);
            //this.numbers[0]= 8;
            this.numbers.splice(0,1);
            alert(this.numbers);
        },
        checkPass: function(){
            alert(this.password);
        },
        changeNameSetter: function(newFullName){
            this.fullName = newFullName
        }
    },
    computed: {
        fullName: {
            get:function(){
                alert("Getting full name...");
                return this.firstname +" "+this.lastname;
            },
            set:function(newValue){
                alert("Setting full name: " +newValue);
                var parts = newValue.split(" ")
                this.firstname=parts[0];
                this.lastname=parts[1];
            }
        } 
    }
});

