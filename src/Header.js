function HeaderItem(props) {
    return <li className="p-5">
        <div class="dropdown inline-block relative">
            {props.children}
        </div>
    </li>
}

function HeaderNavLink(props) {
    return (
        <a class="rounded-t py-2 px-4 whitespace-nowrap no-underline hover:underline underline-offset-8" href={props.to}>{props.children}</a>
    )
}

function DropdownLink(props) {
    return (
        <li class="p-1">
            <HeaderNavLink to={props.to}>{props.children}</HeaderNavLink>
        </li>
    )
}

function NavDropdown(props) {
    return (
        <div className="shadow-lg">
            <ul class="dropdown-menu absolute hidden pt-1 border-2">{props.children}</ul>
        </div>
    )
}

function NavDropdownTrigger(props) {
    return (
    <button class="rounded inline-flex items-center">
        <span class="mr-1">{props.children}</span>
    </button>
    )
}

export default function Header() {
    return (
        <div id="header" className="w-full py-4">
            <ul className="flex">
                <HeaderItem><HeaderNavLink to="/">Home</HeaderNavLink></HeaderItem>
                <HeaderItem>
                    <NavDropdownTrigger>Services</NavDropdownTrigger>
                    <NavDropdown>
                        <DropdownLink to="web-development">Web Development</DropdownLink>
                        <DropdownLink to="cost-optimization">Cost Optimizations</DropdownLink>
                        <DropdownLink to="migration">Migrations</DropdownLink>
                        <DropdownLink to="infrastructure">Infrastructure</DropdownLink>
                        <DropdownLink to="cloud-computing">Cloud Computing</DropdownLink>
                    </NavDropdown>
                </HeaderItem>
                <HeaderItem><HeaderNavLink to="/">Contact</HeaderNavLink></HeaderItem>
            </ul>
        </div>
    );
}