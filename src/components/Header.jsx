const navItems = [
  { href: "#about", label: "About" },
  { href: "#service", label: "Services" },
  { href: "#works", label: "Works" },
  { href: "#contact", label: "Contact" }
];

function Header() {
  return (
    <header className="main-header">
      <div className="header-upper">
        <div className="container">
          <div className="header-inner d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <a href="/">
                  <img src="/assets/images/logo.png" alt="Sinan NP Logo" title="Sinan NP Portfolio" />
                </a>
              </div>
            </div>

            <div className="nav-outer clearfix mx-auto">
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <a href="/">
                      <img src="/assets/images/logo.png" alt="Sinan NP Logo Mobile" />
                    </a>
                  </div>
                  <button type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>

                <div className="navbar-collapse collapse">
                  <ul className="navigation onepage clearfix">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <a className="nav-link-click" href={item.href}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>

            <div className="menu-btns">
              <a href="#contact" className="theme-btn">
                Hire Me<i className="ri-shake-hands-line" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
