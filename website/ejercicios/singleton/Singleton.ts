class Singleton {
    private static instance: Singleton;

    constructor(){
        //init
    }

    static getInstance(): Singleton{
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

export default Singleton;