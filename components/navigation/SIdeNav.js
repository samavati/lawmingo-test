import React from 'react';

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.navRef = React.createRef();
    }

    componentDidUpdate() {
        if (this.props.isOpen) {
            this.navRef.current.classList.add("open");
        } else {
            this.navRef.current.classList.remove("open");
        }
    }

    render() {
        return (
            <div id="mySidenav" className="sidenav" ref={this.navRef}>
                <a href="#" className="closebtn" onClick={() => { this.props.close() }}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
        );
    }
}

export default SideNav;