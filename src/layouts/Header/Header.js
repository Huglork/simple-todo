import "./Header.css"

const menuItems = ["Catalog", "Delivery", "About", "Contacts"];

const Header =()=> {
    return <header className="header">
        <div className="header__inner">
            <div className="header__left">
                <h1 className="main-logo">Toy Store</h1>
                <nav className="header__nav">
                    <ul className="nav__list">
                       {menuItems.map((item, index) => (
                        <li key={index}>{item}</li>
                       ))}
                    </ul>
                </nav>
            </div>
            <div className="header__cart-block">cart</div>
        </div>
    </header>
}

export default Header;