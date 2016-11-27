// function attachEvents() {
//     class Requester {
//         get() {
//             let promise = new Promise(function (resolve, reject) {
//                 $.get('https://judgetests.firebaseio.com/locations.json', function (response) {
//
//                     let town = $('#location').val();
//                     for (let obj of response) {
//                         if (obj.name == town) {
//                             let code = obj.code;
//                             resolve(code);
//                             break;
//                         }
//                     }
//                 });
//
//
//             });
//
//             return promise;
//         }
//
//         getCurrentDayForecast(code) {
//             let promise = new Promise(function (resolve, reject) {
//                 $.get(`https://judgetests.firebaseio.com/forecast/today/${code}.json`, function (data) {
//                     resolve({data, code});
//                 })
//             });
//
//             return promise;
//         }
//
//         get3DaysForecast(data) {
//             let promise = new Promise(function (resolve, reject) {
//                 $.get(`https://judgetests.firebaseio.com/forecast/upcoming/${data.code}.json `, function (forecastFor3Days) {
//                     resolve(forecastFor3Days);
//                 })
//             });
//
//             return promise;
//         }
//     }
//     /**
//      * class for rendering forecasts on browser
//      */
//     class Client {
//         constructor() {
//             this.map = new Map();
//             this.map.set('Sunny', '&#x2600;');
//             this.map.set('Partly sunny', '&#x26C5;');
//             this.map.set('Overcast', '&#x2601;');
//             this.map.set('Rain', '&#x2614;');
//             this.map.set('Degrees', '&#176;')
//         }
//
//         drawCurrentDayForecast(data) {
//             let self = this;
//             let promise = new Promise(function (resolve, reject) {
//                 let spanWithSymbol = $(`<span>${self.map.get(data.data.forecast.condition)}</span>`)
//                     .addClass('condition symbol');
//                 let spanWIthCondion = $(`<span></span>`)
//                     .append($(`<span>${data.data.name}</span>`).addClass('forecast-data'))
//                     .append($(`<span>${data.data.forecast.low}/${data.data.forecast.high}</span>`).addClass('forecast-data'))
//                     .append($(`<span>${data.data.forecast.condition}</span>`).addClass('forecast-data'));
//                 $('#current').append(spanWithSymbol).append(spanWIthCondion);
//                 resolve(data);
//             });
//
//             return promise;
//         }
//
//         draw3DaysForecast(data) {
//             let self = this;
//             let promise = new Promise(function (resolve, reject) {
//
//                 for (let day of data.forecast) {
//                     let spanWithSymbol = $(`<span>${self.map.get(day.condition)}</span>`)
//                         .addClass('condition symbol');
//                     let spanUpcoming = $('<span></span>').addClass('upcoming');
//                     spanUpcoming.append(spanWithSymbol).append($(`<span>${day.low}/${day.high}</span>`).addClass('forecast-data'))
//                         .append($(`<span>${day.condition}</span>`).addClass('forecast-data'));
//                     $('div #upcoming').append(spanUpcoming);
//                 }
//
//             });
//
//             this.showForecast();
//             return promise;
//         }
//
//         showForecast() {
//             console.log('ending');
//             $('#forecast').show();
//         }
//
//     }
//
//     class Manager {
//         /**
//          * @param Requester requester
//          * @param Client client
//          */
//         constructor(requester, client) {
//             this.requester = requester;
//             this.client = client;
//         }
//
//         attachEvents() {
//             $('#submit').click(()=> this.requester.get()
//                 .then((code)=>this.requester.getCurrentDayForecast(code))
//                 .then((data)=>this.client.drawCurrentDayForecast(data))
//                 .then((data)=>this.requester.get3DaysForecast(data))
//                 .then((data)=>this.client.draw3DaysForecast(data))
//             )
//         }
//     }
//
//     let requester = new Requester();
//     let client = new Client();
//     let manager = new Manager(requester, client);
//     manager.attachEvents();
// }