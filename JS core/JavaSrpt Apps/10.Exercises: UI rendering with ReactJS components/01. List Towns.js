// function listTowns(selector) {
//     let Form = React.createClass({
//         render: function () {
//             return <form onSubmit={this.props.onsubmit}>
//             <input type="text" />
//                 <input type="submit" defaultValue="Submit" />
//                 </form>
//         }
//     });
//
//     let List = React.createClass({
//         render: function () {
//             let cities = this.props.cities.filter(city => city != "");
//             cities = cities.map(function (city, index) {
//                 return <li key={index}>{city}</li>
//             });
//             return <ul>{cities}</ul>
//         }
//     });
//
//     let App = React.createClass({
//         getInitialState: function () {
//             return {
//                 cities: []
//             }
//         },
//         onSubmitHandler: function (event) {
//             event.preventDefault();
//             let cities = event.target.children[0].value.split(/,\s+/);
//             this.setState({
//                 cities: cities
//             })
//         },
//         render: function () {
//             return <div>
//             <Form onsubmit={this.onSubmitHandler} />
//             <List cities={this.state.cities} />
//             </div>
//         }
//     });
//
//     ReactDOM.render(
//     <App />,
//         document.getElementById(selector)
// );
// }