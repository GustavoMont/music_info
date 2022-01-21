import React from 'react';
import Nav from '../components/Nav';
import Outdoor from '../components/Outdoor';
import dancing from '../assets/img/dancing.svg'
import woman from '../assets/img/woman-music.svg'
import '../styles/home.css'

export default function Home() {
    return <div>
        <Outdoor />
        <Nav />
        <div id='home-body' className='mx-auto my-4 px-md-5 py-3 rounded container' >
            <h2 className='text-center' >Seu site sobre Música</h2>
            <hr />
            <div id='home-content' className='row align-items-center mx-auto' >
                <article className='col-12 col-md-6 ' >
                    <figure className="figure h-100 d-flex flex-column align-items-center">
                        <img src={dancing} className="figure-img img-fluid rounded" alt="..." />
                        <figcaption className="figure-caption text-center">
                            <h4>
                                Descubra novas bandas e artistas.
                            </h4>
                        </figcaption>
                    </figure>
                </article>
                <article className='align-items-center col-12 col-md-6 align-self-start' >
                    <figure className="figure d-flex flex-column align-items-center">
                        <img src={woman} className="figure-img img-fluid rounded" alt="..." />
                        <figcaption className="figure-caption text-center">
                            <h4>
                                Fale sobre seus artistas/banda favoritos.
                            </h4>
                        </figcaption>
                    </figure>
                </article>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto my-md-4">
                <button className="btn btn-light rounded-pill py-2" type="button">Veja Agora</button>
            </div>

        </div>
    </div >;
}
