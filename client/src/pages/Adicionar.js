import React, { useEffect, useState } from 'react';
import '../styles/adicionar.css'

function Adicionar() {
    const [generos, setGeneros] = useState([]);
    const [formState, setFormState] = useState({ nome: '', image_url: '', maior_hit: '', genero_id: 0 });
    useEffect(() => {
        (async () => {
            const reqGen = await fetch('/generos')
            const generos = await reqGen.json()
            setGeneros(generos)
        })()
    }, [])

    function handleForm({ target }) {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <div className='rounded-3 my-4 mx-auto p-3' id='adicionar-body' >
            <h1 className='my-2' >Adiocionar Artista</h1>
            <form onSubmit={async (e) => {
                e.preventDefault();
                const req = await fetch('/artistas/add', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(formState)
                })
                const add = await req.json()
                if (add.erro) {
                    alert('Erro ao adicionar artista')
                    return
                }
                setFormState({ nome: '', image_url: '', maior_hit: '', genero_id: 0 })
                alert(`Artista ${add.nome} adicionado`);
            }} >
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome do Artista: </label>
                    <input type="text" className="form-control" name="nome" id="nome" aria-describedby="text" value={formState.nome} onChange={handleForm} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="image_url" className="form-label">Url de uma imagem: </label>
                    <input type="text" className="form-control" name="image_url" id="image_url"
                        value={formState.image_url} onChange={handleForm} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="maior_hit" className="form-label">Maior Sucesso: </label>
                    <input type="text" className="form-control" name="maior_hit" id="maior_hit" value={formState.maior_hit} onChange={handleForm} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="gen" className="form-label">Gênero Musical: </label>
                    <select className="form-select" aria-label="Default select example" name='genero_id' id='genero'
                        value={formState.genero_id} onChange={handleForm} required >
                        <option disabled value={0} >Selecione um gênero musical</option>
                        {generos.map(({ id, nome }) => (
                            <option value={id} key={id} >{nome}</option>
                        ))}
                    </select>
                </div>
                <hr />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Adicionar;
