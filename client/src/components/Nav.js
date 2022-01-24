import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-light" id='menu' >
        <div className="container-fluid">
            <Link className="navbar-brand title" to="/">Music Info</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon navbar-light"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m e-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/artistas">Ver artistas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/adicionar">Adicionar Artistas</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;
}
