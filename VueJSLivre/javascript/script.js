new Vue({
    el:'#app',
    data: {
        candidates: [
            {name:"MR.Black",votes:0},
            {name:"MR.Pink",votes:0},
            {name:"MR.White",votes:0},
            {name:"MR.Brown",votes:0}
        ]
    },
    methods: {
        resetCounters: function(){
            this.candidates = this.candidates.map(function(candidate){
                candidate.votes=0;
                return candidate;
            })
        }
    },
    computed: {
        winner: function(){
            candidates = this.candidates.slice();
            sortedCandidates = candidates.sort(function(a,b){
                return b.votes - a.votes;
            });
            return sortedCandidates[0];
        }
    }
})  