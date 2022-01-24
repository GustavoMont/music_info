import React, { useEffect, useState } from 'react';

export default function Artistas() {
    const [artistas, setArtistas] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [nomeEdit, setNomeEdit] = useState('');
    const [hitEdit, setHitEdit] = useState('');
    const [urlEdit, setUrlEdit] = useState('');
    const [genEdit, setGenEdit] = useState(0);
    const [idEdit, setIdEdit] = useState(0);
    const [deleteId, setDeleteId] = useState(0);
    useEffect(() => {
        (async () => {
            const req = await fetch('/artistas');
            const artistas = await req.json();
            setArtistas(artistas);
            const reqGen = await fetch('/generos')
            const generos = await reqGen.json()
            setGeneros(generos)
        })()
    }, [])
    return (
        <>
            <div className={'container pt-4'} >
                <div className='row' >
                    {artistas.map(({ id, nome, image_url, genero, maior_hit, nacionalidade }) => (

                        <div className='col-12 col-md-5 col-lg-4 rounded' key={id} >
                            <div className="card my-2" >
                                <div className='artist-pic' style={{ backgroundImage: `url(${image_url})` }} ></div>
                                <div className="card-body">
                                    <h4 className="card-text">{nome}</h4>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Estilo: {genero.nome}</li>
                                        <li className="list-group-item">Nacionalidade: {nacionalidade}</li>
                                        <li className="list-group-item">Maior Sucesso: {maior_hit}</li>
                                    </ul>
                                    <hr />
                                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" className="btn btn-warning" onClick={() => {
                                            setIdEdit(id)
                                            setNomeEdit(nome)
                                            setHitEdit(maior_hit)
                                            setUrlEdit(image_url)
                                            setGenEdit(genero.id);
                                        }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" >Editar</button>
                                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setDeleteId(id)} >Excluir</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
            {/* Offcanvas ============================== */}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Editar</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form onSubmit={async (e) => {
                        e.preventDefault()
                        const semAtualizado = artistas.filter(({ id }) => id !== idEdit)
                        const req = await fetch('/artistas/update', {
                            method: 'PUT',
                            headers: { 'Content-type': 'application/json' },
                            body: JSON.stringify({
                                id: idEdit, nome: nomeEdit, image_url: urlEdit, genero: genEdit, maior_hit: hitEdit
                            })
                        })
                        const update = await req.json();
                        if (update.erro) {
                            alert(update.message)
                            return
                        }
                        alert(update.message)
                        setArtistas([{
                            id: idEdit, nome: nomeEdit, image_url: urlEdit, genero: genEdit, maior_hit: hitEdit
                        }, ...semAtualizado]);

                    }} >
                        <div className="mb-3">
                            <label htmlFor="nome-edit" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="nome-edit" name='nome' aria-describedby="emailHelp" value={nomeEdit} onChange={({ target }) => {
                                setNomeEdit(target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hit" className="form-label">Maior Hit: </label>
                            <input type="text" className="form-control" id="hit" name='hit' value={hitEdit} onChange={({ target }) => {
                                setHitEdit(target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hit" className="form-label">Url da Imagem: </label>
                            <input type="text" className="form-control" id="hit" name='hit' value={urlEdit} onChange={({ target }) => {
                                setUrlEdit(target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gen" className="form-label">Genero: </label>
                            <select className="form-select" size="3" aria-label="size 3 select example" id='gen' value={genEdit} onChange={({ target }) => {
                                setGenEdit(target.value)
                            }} >
                                {generos.map(({ id, nome }) => {
                                    return <option value={id} key={id}>{nome}</option>
                                })}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Confirmar</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Deseja mesmo excluir o artista?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-danger" onClick={async () => {
                                const req = await fetch('/artistas/delete', {
                                    method: 'DELETE',
                                    headers: {
                                        'Content-type': 'application/json'
                                    },
                                    body: JSON.stringify({ id: deleteId })
                                })
                                const del = req.json()
                                if (del.erro) {
                                    alert(del.message)
                                    return
                                }
                                alert('Artista Excluído com Sucesso')
                                setArtistas(artistas.filter(artista => artista.id !== deleteId))
                            }} >Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
