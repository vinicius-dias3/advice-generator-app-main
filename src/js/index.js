const button = document.getElementById('button')

button.addEventListener('click', async () => {
    await pegarConselhoAleatorio()
    await pegarIdConselhoAleatorio()
})

async function criarColecaoDeConselhos(){
    const url = 'https://api.adviceslip.com/advice'
    const resposta = await fetch(url)
    return await resposta.json()
}

async function selecionarConselho (slip_id){
    const url = `https://api.adviceslip.com/advice/${slip_id}`
    // console.log(url)
    const resposta = await fetch(url)
    return await resposta.json()
}

async function pegarConselhoAleatorio(){
    const conselhos = await criarColecaoDeConselhos()
    const paragrafoConselho = document.querySelector('.paragrafo')
    paragrafoConselho.innerHTML = conselhos.slip.advice
}

async function pegarIdConselhoAleatorio(){
    const idConselho = await criarColecaoDeConselhos()
    // return await idConselho.slip.id
    const localIdConselho = document.querySelector('.titulo')
    localIdConselho.innerHTML = `ADVICE #${idConselho.slip.id}`
}