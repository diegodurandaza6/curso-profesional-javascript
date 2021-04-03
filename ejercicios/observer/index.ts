interface Observer {
    update: (data: any) => void
}

interface Subject {
    suscribe: (observer: Observer) => void,
    unsuscribe: (observer: Observer) => void
}

class BitcoinPrice implements Subject {
    private observers: Observer[] = [];

    constructor(){
        const el: HTMLInputElement = document.querySelector('#value');
        el.addEventListener('input', () => {
            this.notify(el.value);
        })
    }

    suscribe(observer: Observer){
        this.observers.push(observer);
    }

    unsuscribe(observer:Observer){
        //debugger
        const index = this.observers.findIndex(obs => obs == observer);
        this.observers.slice(index, 1)
    }

    private notify(data: any){
        this.observers.forEach(obs => obs.update(data));
    }
}

class PriceDisplay implements Observer {
    private el: HTMLElement;
    constructor(){
        this.el = document.querySelector('#price');
    }

    update(data: any){
        this.el.innerHTML = data;
    }
}

const subject = new BitcoinPrice();
const observer = new PriceDisplay();

subject.suscribe(observer);

setTimeout(() => subject.unsuscribe(observer), 5000);