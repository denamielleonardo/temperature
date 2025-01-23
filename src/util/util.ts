export class Util  {
    public static convertCelsius(celsius: number) {
        const converted = ((celsius - 32) * 5) / 9;
        return Number(converted.toFixed(2));
    }

    public static convertFarenheit(fahrenheit: number) {
        const converted = (fahrenheit * 9) / 5 + 32;
        return Number(converted.toFixed(2));
    }
}
