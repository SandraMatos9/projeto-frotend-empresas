// import{atualizarFuncionario} from './request'
function showEditarModal(x){
    const body=document.querySelector('body');
  
    const  modalBotaoAbrirPost=document.querySelector(".btnIconeEditarPerfil");

    modalBotaoAbrirPost.addEventListener('click',(event) =>{
        // console.log('modalBotaoAbrirPost')
        event.preventDefault()
        const modal= modalEditar(x)
        body.append(modal)
        
    })
    return modalBotaoAbrirPost
  
}

showEditarModal()




function modalEditar(x){
    // const modalLocalizaHtml= document.querySelector('body')
    const section=document.createElement('section')
    const divModalEditarPerfil = document.createElement('div')
    const botaoFechar= document.createElement('button')
    const pEditarPerfil = document.createElement('p')
    const inputText = document.createElement('input')
    const inputEmail = document.createElement('input')
    const inputSenha = document.createElement('input')
    const btnEditarPerfil = document.createElement('button')

    section.classList.add('modal_container')
    divModalEditarPerfil.classList.add('modalDivEditarPerfil')
    botaoFechar.classList.add('btnX')
    botaoFechar.innerText='X'
    pEditarPerfil.classList.add('pEditarPerfil')
    pEditarPerfil.innerText='Editar Perfil'
    inputText.classList.add('input')
    inputText.placeholder= 'Seu nome'
    inputEmail.classList.add('input')
    inputEmail.placeholder= 'Seu email'
    inputSenha.classList.add('input')
    inputSenha.placeholder= 'Sua senha'
    inputSenha.type='password'
    btnEditarPerfil.classList.add('btnIconeEditarPerfilModal')
    btnEditarPerfil.innerText='Editar perfil'

    botaoFechar.addEventListener('click',(event) =>{
        section.remove()
    })
    

    
    divModalEditarPerfil.appendChild(botaoFechar)
    
    divModalEditarPerfil.append(pEditarPerfil,inputText,inputEmail,inputSenha,btnEditarPerfil)
    console.log(divModalEditarPerfil)
    section.append(divModalEditarPerfil)
    // modalLocalizaHtml.appendChild(divModalEditarPerfil)
    // console.log(modalLocalizaHtml)
    
    return  section

}









function modalCriarDepartamentoCard(departamento) {

    const section = document.createElement('section')
    const divCriarDepart = document.createElement('div')
    const botaoXcriarDepart = document.createElement('button')
    const pCriarDepart = document.createElement('p')
    const selectOptionsEmpresas = document.createElement('select')
    const optionEmpresas = document.createElement('option')
    const botaoConfirmarCriarDepart = document.createElement('button')

    section.classList.add('modal_container')
    divCriarDepart.classList.add('divCriarDepart')
    botaoXcriarDepart.classList.add('btnX')
    pCriarDepart.classList.add('pCriarDepart')
    optionEmpresas.placeholder = 'Selecionar empresa'
    botaoConfirmarCriarDepart.classList.add('btnCriarDepart')
    

    selectOptionsEmpresas.append(optionEmpresas)
    divCriarDepart.append(botaoXcriarDepart, pCriarDepart, selectOptionsEmpresas, botaoConfirmarCriarDepart)

    section.append(divCriarDepart)

    

    botaoXcriarDepart.addEventListener('click', () => {
        section.remove()
    })

    return section
}

function mostrarDepartModalCriado(departamento) {
    const body = document.querySelector('body');
    const modalBotaoAbrirPost = document.querySelector('#btnCriarDepartamento')
    console.log("Eu vou aprender programação")

    modalBotaoAbrirPost.addEventListener('click', (event) => {
        event.preventDefault()
        const modal = modalCriarDepartamentoCard(departamento)
        console.log(modal)
        console.log("Eu vou aprender programação")

        
    })
    console.log('teste3')
    return modalBotaoAbrirPost
    
}

mostrarDepartModalCriado() 