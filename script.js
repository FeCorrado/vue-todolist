new Vue ({
    el: "#app",
    data: {
        lista: [
            {
                text:'cucinare', 
                done: false
            },
            {
                text:'studiare', 
                done: true
            },
            {
                text:'palestra', 
                done: false
            },
        ],
        newTodo: "",
        },
        methods: {
            aggiungi: function(){
                this.lista.push({
                    text: this.newTodo,
                    done: false
                })
            },

            elFatto: function (i) {
                this.lista[i].done === true
                console.log("funziona")
            },

            cancella: function (i) {
                this.lista.splice(i, 1);
              },
        },
    });