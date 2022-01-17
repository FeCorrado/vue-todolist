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
                done: false
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
                    done: false,
                })
                
            },

            elFatto: function (i) {
                if (this.lista[i].done === true) {
                    this.lista[i].done = false
                }else{this.lista[i].done = true
                }
            },

            cancella: function (i) {
                this.lista.splice(i, 1);
              },
        },
    });