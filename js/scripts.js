'use strict';

class Storage {
    constructor() {
        this.input = document.querySelector('input');
        this.buttons = document.querySelectorAll('button');
        this.p = document.querySelector('p');
        this.assignEvents();
    }
    assignEvents() {
        this.buttons.forEach((elem, index) => {
            elem.addEventListener('click', ()=>{
                switch(index) {
                    case 0:
                        this.addStorage();
                        break;
                    case 1:
                        this.getStorage();
                        break;
                    case 2:
                        this.removeStorage();
                        break;
                    default:
                        console.error('nieznana akcja');
                }
            })
        })
    }
    addStorage() {
        localStorage.setItem('klucz', this.input.value);
    }
    getStorage() {
        this.p.innerText = localStorage.getItem('klucz');
    }
    removeStorage() {
        localStorage.removeItem('klucz');
    }
}
new Storage;