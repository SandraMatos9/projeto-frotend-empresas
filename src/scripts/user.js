function showEditarModal(x){
    const body=document.querySelector('body');
  
    const  modalBotaoAbrirPost=document.querySelector(".btnIconeEditarPerfil")

    modalBotaoAbrirPost.addEventListener('click',(event) =>{
        // console.log('modalBotaoAbrirPost')
        console.log('testaaando')
        event.preventDefault()
        const modal= modalEditar()
        body.append(modal)
        // closeModal()
    })
  
}

// showEditarModal()

//   function closeModal(){
//     const divModalContainer=document.querySelector('.btnXModal')
//     divModalContainer.remove()
  
// }


function modalEditar(x){
    const modalLocalizaHtml= document.querySelector('body')
    const section=document.createElement('section')
    const divModalEditarPerfil = document.createElement('div')
    const criandoBtn= document.createElement('button')
    criandoBtn.innerText= 'testando'
    divModalEditarPerfil.append(criandoBtn)
    section.append(divModalEditarPerfil)
    body.append(section)
    // const pEditarPerfil = document.createElement('p')
    // const inputText = document.createElement('input')
    // const inputEmail = document.createElement('input')
    // const inputSenha = document.createElement('input')
    // const btnEditarPerfil = document.createElement('button')

    // section.classList.add('modal_container')
    // divModalEditarPerfil.classList.add('modalDivEditarPerfil')
   
    console.log('testaaaando')
    // pEditarPerfil.classList.add('pEditarPerfil')
    // pEditarPerfil.innerText='Editar Perfil'
    // inputText.classList.add('input')
    // inputText.placeholder= 'Seu nome'
    // inputEmail.classList.add('input')
    // inputEmail.placeholder= 'Seu email'
    // inputSenha.classList.add('input')
    // inputSenha.placeholder= 'Sua senha'
    // inputSenha.type='password'
    // btnEditarPerfil.classList.add('btnIconeEditarPerfilModal')
    // btnEditarPerfil.innerText='Editar perfil'

    // const botaoFechar= document.createElement('button')
    // botaoFechar.classList.add('btnXModal')
    // botaoFechar.innerText='X'

    

    
    // divModalEditarPerfil.append(botaoFechar)
    // divModalEditarPerfil.append(botaoFechar,pEditarPerfil,inputText,inputEmail,inputSenha,btnEditarPerfil)
    // console.log(divModalEditarPerfil)
    // section.append(divModalEditarPerfil)
    // modalLocalizaHtml.appendChild(divModalEditarPerfil)
    // console.log(modalLocalizaHtml)
    
    return section

}