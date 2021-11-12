// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

// 1. Creare un Vue js

// 2. Creare l'array di oggetti contenente gli items

// 3. Per ogni oggetto, stampare la proprietà su html

// 4. Riuscire ad aggiungere nuovi elementi nell'array

// 5. Riuscire a cancellare elementi dell'array

// 6. Tramite la proprietà "done", sbarrare il testo

var list = new Vue (
    {
        el: '#myList',
        data: {
            items: [
                {
                    text: 'Fare la spesa',
                    done: true,
                },

                {
                    text: 'Portare il cane fuori',
                    done: false,
                }
            ]
        }
    }
)