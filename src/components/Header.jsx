import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container py-3">
          <Link to="/" className="navbar-brand">
            <img src="/logo.png" alt="logo" width={210} height={35} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/job" className="nav-link active" aria-current="page">
                  Cari Lowongan
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link">Profile Perusahaan</a>
              </li>
            </ul>
            <button className="btn btn-outline-primary">Masuk</button>
          </div>
        </div>
      </nav>
    </>
  );
}
