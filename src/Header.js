import { NavLink } from "react-router-dom";
import React, { useState } from 'react';

function HeaderItem(props) {
    return <li className="p-5">
        <div className="relative inline-block dropdown">
            {props.children}
        </div>
    </li>
}

function HeaderNavLink(props) {
    return (
        <NavLink className="px-4 py-2 no-underline rounded-t whitespace-nowrap hover:underline underline-offset-8" {...props}>{props.children}</NavLink>
    )
}

function DropdownLink(props) {
    return (
        <li className="p-1 bg-gray-200">
            <HeaderNavLink {...props}>{props.children}</HeaderNavLink>
        </li>
    )
}

function NavDropdownContent(props) {
    return (
        <div {...props} className="shadow-lg">
            <ul id={"hov"+props.isHovering} className={"absolute pt-1 border-2 " + (props.isHovering ? "display:block" : "hidden")}>{props.children}</ul>
        </div>
    )
}

function NavDropdownTrigger(props) {
    return (
    <button {...props} className="inline-flex items-center rounded">
        <span className="mr-1">{props.children}</span>
    </button>
    )
}

function ServicesHeaderItem() {
    const [isHovering, setIsHovering] = useState(false);
    const show = () => {
        setIsHovering(true)
    }
    const hide = () => {
        setIsHovering(false)
    }
    return (
        <HeaderItem>
        <NavDropdownTrigger onMouseOver={show} onMouseOut={hide}>Services</NavDropdownTrigger>
        <NavDropdownContent onMouseOver={show} onMouseOut={hide} isHovering={isHovering}>
            <DropdownLink onClick={hide} to="services/web-development">Web Development</DropdownLink>
            <DropdownLink onClick={hide} to="services/cost-optimizations">Cost Optimizations</DropdownLink>
            <DropdownLink onClick={hide} to="services/migrations">Migrations</DropdownLink>
            <DropdownLink onClick={hide} to="services/infrastructure">Infrastructure</DropdownLink>
            <DropdownLink onClick={hide} to="services/cloud-computing">Cloud Computing</DropdownLink>
        </NavDropdownContent>
    </HeaderItem>
    )
}


export default function Header() {
    return (
        <div id="header" className="w-full py-4">
            <ul className="flex">
                <HeaderItem><HeaderNavLink to="/">Home</HeaderNavLink></HeaderItem>
                <ServicesHeaderItem></ServicesHeaderItem>
                <HeaderItem><HeaderNavLink to="/contact">Contact</HeaderNavLink></HeaderItem>
            </ul>
        </div>
    );
}