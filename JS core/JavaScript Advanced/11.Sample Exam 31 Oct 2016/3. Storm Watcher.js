//Mocha
(function () {
    let id = 0;

    class StormWatcher {
        constructor (temperature, humidity, pressure, windSpeed) {
            this.id = id++;
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
        }
        get status () {
            let status = 'Not stormy';

            if (this.temperature < 20 &&
                (this.pressure < 700 || this.pressure > 900) &&
                this.windSpeed > 25) {
                status = 'Stormy';
            }
            return status;
        }
        toString () {
            let resultString = `Reading ID: ${this.id}\n`;
            resultString += `Temperature: ${this.temperature}*C\n`;
            resultString += `Relative Humidity: ${this.humidity}%\n`;
            resultString += `Pressure: ${this.pressure}hpa\n`;
            resultString += `Wind Speed: ${this.windSpeed}m/s\n`;
            resultString += `Weather: ${this.status}`;

            return resultString;
        }
    }
    return StormWatcher;
}());