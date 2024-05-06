export class Util {
    public static setDelay(i: number) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }

}