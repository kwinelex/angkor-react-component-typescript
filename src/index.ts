export class Log {
    static success(msg: string){
        console.log(`%c ${msg}`, "color: green");
    }
    static danger(msg: string){
        console.error(`%c ${msg}`, "color: red");
    }
    static info(msg: string){
        console.info(`%c ${msg}`, "color: blue");
    }
}