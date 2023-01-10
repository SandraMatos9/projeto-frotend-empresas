

function showEditarModal(x){
    const body=document.querySelector('body');
  
    const  modalBotaoAbrirPost=document.querySelector(".btnEditar")

    modalBotaoAbrirPost.addEventListener('click',(event) =>{
        // console.log('modalBotaoAbrirPost')
        event.preventDefault()
        const modal= modalEditarUsuario()
        body.append(modal)
        closeModal()
    })
  
}

showEditarModal()

  function closeModal(){
    const divModalContainer=document.querySelector('.btnX')
    divModalContainer.remove()
  
}


function modalEditarUsuario(x){
    // const modalLocalizaHtml= document.querySelector('body')
    const section=document.createElement('section')
    const modalDivEditarPerfil = document.createElement('div')
    const botaoXEditarUsuario = document.createElement('button')
    const pEditarUsuarioModal = document.createElement('p')
    const selectOptions= select = document.createElement('select')
    const optionsModalidadeTrabalho = document.createElement('option')
    const optionsNivelProfissional = document.createElement('option')
    const botaoConfirmarEditarUsuario = document.createElement('button')

    
    modalDivEditarPerfil.classList.add('divEditarUsuario')
    botaoXEditarUsuario.classList.add('btnX')
    pEditarUsuarioModal.classList.add('pEditarPerfil')
   
    optionsModalidadeTrabalho.placeholder='Selecionar modalidade de trabalho'
    optionsNivelProfissional.placeholder='Selecionar nível profissional'
    botaoConfirmarEditarUsuario.classList.add('btnEditarUsuario')

    
    selectOptions.append(optionsModalidadeTrabalho,optionsNivelProfissional)
    modalDivEditarPerfil.append(botaoXEditarUsuario,pEditarUsuarioModal,selectOptions,botaoConfirmarEditarUsuario)
   
    section.append(modalDivEditarPerfil)
    // modalLocalizaHtml.appendChild(divModalEditarPerfil)
    // console.log(modalLocalizaHtml)
    
    return  section

}