export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper header__nav">
        <a href="#" className="brand-logo">
          IDEAL
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">React</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
