import React, { Component } from 'react';
import config               from 'react-global-configuration';
import { Link }             from 'react-router-dom';
import './Navbar.compact.css'

class Navbar extends Component {
    constructor() {
        super();

        this.state = {
            currentPath: window.location.pathname,
            pages: config.get("routes")
        };

        this.changePage = this.changePage.bind(this);
    }

    changePage(path) {
        this.setState({
            currentPath: path
        });
    }

    render() {
        let pages = this.state.pages;

        return (
            <div className="navbar">
                {pages.map((page, i) =>
                    <NavbarButton key={i}
                        text={page.name}
                        icon=""
                        to={page.path}
                        selected={page.path === this.state.currentPath}
                        onClick={(e) => this.changePage(page.path)}
                    />
                )}
            </div>
        );
    }
}

class NavbarButton extends Component {
    render() {
        let text      = this.props.text;
        let selected  = this.props.selected;
        let to        = this.props.to;
        let icon      = this.props.icon;

        return (
            <Link to={to}>
                <button className="navbar-button" onClick={this.props.onClick} data-selected={selected}>
                    <div className="icon">
                        {icon}
                    </div>
                    {text}
                </button>
            </Link>
        );
    }
}

export default Navbar;
