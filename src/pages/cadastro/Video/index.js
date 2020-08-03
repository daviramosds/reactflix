import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField'
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button'
import videoRepository from '../../../repostitories/videos'
import categoriasRepository from '../../../repostitories/categorias'


function CadastroVideo() {
    const history = useHistory()
    const [categorias, setCategorias] = useState([])
    const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: ''
  });

  useEffect(() => {
      categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
          setCategorias(categoriasFromServer)
      })
  }, [])

  console.log(categorias)

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
          event.preventDefault()

          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === values.categoria
          })

          videoRepository.create({
              titulo: values.titulo,
              url: values.url,
              categoriaId: categoriaEscolhida.id,
          })
          .then(() => {
              console.log('Cadastrou com sucesso')
            history.push('/')
          })
      }}>
        <FormField
          label="Titulo do video"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

      

      <Link to="/cadastro/categoria">
        Cadastrar Categorias
      </Link>

    </PageDefault>
  );
}

export default CadastroVideo;
