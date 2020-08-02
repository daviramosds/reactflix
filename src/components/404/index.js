import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

function Pagina404() {
    return (
    <div className="body">
        <section className="content-root">
            <div className="content">
                <h2>404</h2>
                <h4>Oops! Pagina não encontrada</h4>
                <p></p>
                <Link to="/">
                    Ir para home
                </Link>
            </div>
        </section>
    </div>
    )
}

export default Pagina404