/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/

/*PROGETTO
Il progetto è quello di fare una to-do list.
per prima cosa aggiungo un input di testo con un bottone AGGIUNGI, che dovrà aggiungere la task alla lista, dovrà dargli una importanza (alta media o bassa) e in base a quello si colorerà il contenitore di rosso per alta, di giallo per media e di verde per bassa.
All'interno dei contenitori, in questo caso è una lista,  il nome della task e la priorità stanno sulla sinistra, la data dinamica e il bottone elimina (che ora non serve ma domani si) la elimina dalla lista. In css dice la data di creazione
In fondo alla lista c'è un totale che cambia in base al numero delle task */



const listaTask = document.querySelector('#lista-task');
const contatore = document.querySelector('#contatore');


const contaPerPriorita = () => {
    const taskPresenti = document.querySelectorAll('#lista-task li');
    contatore.textContent = taskPresenti.length;
};


const aggiungiTask = (testo, priorita) => {
    const li = document.createElement('li');
    li.classList.add(`priorita-${priorita}`);

    li.id = `task-${Date.now()}`;

    // PARTE SINISTRA
    const divLeft = document.createElement('div');
    divLeft.classList.add('task-left');

    const spanTesto = document.createElement('span');
    spanTesto.textContent = testo;

    const spanBadge = document.createElement('span');
    spanBadge.classList.add('badge');
    spanBadge.textContent = priorita;

    divLeft.appendChild(spanTesto);
    divLeft.appendChild(spanBadge);

    // PARTE DESTRA 
    const divRight = document.createElement('div');
    divRight.classList.add('task-right');

    const spanData = document.createElement('span');
    spanData.classList.add('data');
    spanData.textContent = new Date().toLocaleString('it-IT');


    const btnElimina = document.createElement('button');
    btnElimina.classList.add('li-button'); // non sembra funzionare (??)
    btnElimina.textContent = 'Elimina';

    divRight.appendChild(spanData);
    divRight.appendChild(btnElimina);


    li.appendChild(divLeft);
    li.appendChild(divRight);


    listaTask.appendChild(li);


    contaPerPriorita();
};


aggiungiTask('Pagare le bollette', 'alta');
aggiungiTask('Studiare JavaScript', 'media');
aggiungiTask('Riposarsi', 'bassa');
aggiungiTask('Andare a fare la spesa', 'media');
aggiungiTask('Finire questo esercizio', 'alta');



const tutteLeTask = document.querySelectorAll('#lista-task li');
if (tutteLeTask.length > 1) {
    tutteLeTask[1].classList.add('evidenziato');
}