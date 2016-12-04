// class TitleBar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state =  {
//             styles: {
//                 display: 'none'
//             },
//             hidden: true
//         };
//         this.toggleDrawer = this.toggleDrawer.bind(this);
//     }
//
//     toggleDrawer() {
//         if (this.state.hidden) {
//             this.setState({
//                 styles: {
//                     display: 'block'
//                 },
//                 hidden: false
//             });
//         } else {
//             this.setState({
//                 styles: {
//                     display: 'none'
//                 },
//                 hidden: true
//             });
//         }
//     }
//
//     render() {
//         let links = this.props.links.map(function (link, ind) {
//             return <a className="menu-link" key={ind} href={link[0]}>{link[1]}</a>
//         });
//         return <header className="header">
//             <div className="header-row">
//             <a className="button" onClick={this.toggleDrawer}>&#9776;</a>
//         <span className="title">{this.props.title}</span>
//         </div>
//         <div className="drawer" style={this.state.styles}>
//     <nav className="menu">
//             {links}
//             </nav>
//             </div>
//             </header>
//     }
// }