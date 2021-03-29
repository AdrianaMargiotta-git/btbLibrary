// generalizzo la classe book
class Book{
    costructor(titolo, autore, publicazione, prezzo){
        this.titolo=titolo;
        this.autore=autore;
        this.publicazione=publicazione;
        this.prezzo=prezzo;
    }
}

//creo una lista di libri
class bookList{
    static libreria(){
        const bookStored = [
            {
                titolo: 'Portami a vedere il mare',
                autore: 'Daniel Vascan',
                publicazione: 2019,
                prezzo: 11.32,
            },
            {
                titolo: 'Ti fidi di me?',
                autore: 'Jennifer Armentrout',
                publicazione: 2018,
                prezzo: 7.60,
            },
            {
                titolo: 'Scusa se sono un disastro',
                autore: 'Piera S.',
                publicazione: 2011,
                prezzo: 13.97,
            },
            {
                titolo: 'Arsenio Lupin. Ladro Gentiluomo',
                autore: 'Maurice Leblanc',
                publicazione: 2020,
                prezzo: 11.40,
            }
        ];

        const books = bookStored;
        books.forEach((book)=>bookList.addBookToList(book));

    }

    static addBookToList(book){
        const list = document.querySelector(".book-list");
        //creo le row della tabella
        const row = document.createElement('tr');
        //creo le column della tabella
        row.innerHTML = `
            <td>${book.titolo}</td>
            <td>${book.autore}</td>
            <td>${book.publicazione}</td>
            <td>${book.prezzo}</td>
            <td><button class="botton"><span>Aggiungi al carello</span></button></td>
        `;

        list.appendChild(row);
    }
    static clear(){
        document.querySelector('#titolo').value='';
        document.querySelector('#autore').value='';
        document.querySelector('#publicazione').value='';
        document.querySelector('#prezzo').value='';
    }
}

//mostro a schermo i book
document.addEventListener('DOMContentLoaded', bookList.libreria);

//aggiungo un nuovo libro
document.querySelector('#book-add').addEventListener('submit', (e) => {
    e.preventDefault();
    //prendo i valori inseriti
    const titolo = document.querySelector('#titolo').value;
    const autore = document.querySelector('#autore').value;
    const publicazione = document.querySelector('#publicazione').value;
    const prezzo = document.querySelector('#prezzo').value;

    //creo un'istanza del libro
    const book = new Book(titolo, autore, publicazione, prezzo);
    // console.log(book);

    //aggiungo il book creato a bookList
    // bookList.addBookToList(book);

    //pulisco gli input
    bookList.clear();
});