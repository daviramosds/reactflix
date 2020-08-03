import config from '../config/'

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`

function getAll() {
    return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json()
        return resposta
    } else {
        throw new Error('Não foi possiver pegar os dados :(');
    }

    })
}

function getAllWithVideos() {
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json()
        return resposta
    } else {
        throw new Error('Não foi possiver pegar os dados :(');
    }

    })
}

export default {
    getAllWithVideos,
    getAll,
}