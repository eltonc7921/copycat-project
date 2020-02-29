class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.links = ["Assignments","Grades","Attendance","Calendar","Progress","Account"];
        this.homeLinks = ["Dashboard", "Class Schedule", "Mail", "Anecdotals"];
    }
    
    generateLinks() {
        let sideNav = [];
        for(var i = 0; i < this.links.length; i++) {
            sideNav.push(
                <li className="side-links" key={i}>
                    <a href="#">
                        {this.links[i]}
                    </a>
                </li>);
        }
        return sideNav;
    }
    
    generateHomeLinks() {
        let sideNav = [];
        for(var i = 0; i < this.homeLinks.length; i++) {
            sideNav.push(
                <li className="home-links" key={i}>
                    <a href="#">
                        {this.homeLinks[i]}
                    </a>
                </li>);
        }
        return sideNav;
    }

    render() {
        return (
          <div className="sidebar">
            <img src="img/logo_io.png" className="logo"></img>
            <p>
                <a href="#" className="school">High School of Telecommunication Arts and Technology</a>
                <a href="#" className="school">ID: 123456789</a>
            </p>

            <ul className="side-nav">
                <li className="home">
                    <a href="#" className="home-link">Home</a>
                    <ul>
                        {this.generateHomeLinks()}
                    </ul>
                </li>
                {this.generateLinks()}
            </ul>
            </div>
        );
    }
}

class App extends React.Component {
	render(){
		return (
			<div>
			    <Navbar/>
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
document.getElementById('root')
);