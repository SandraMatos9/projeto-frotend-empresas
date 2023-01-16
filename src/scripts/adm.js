import { getListaEmpresas, departamentosEmpresaId, listarTodosOsUsuarios, contratarFuncionario,deletarUsuario } from "./request.js";

function  mostrarModalDeletarDepartamento(departamento) {
    const body = document.querySelector('body');
    const modal = modalDeletarDepartamento(departamento)
    body.append(modal)
}
 
   
function modalDeletarDepartamento(departamento){
    const section = document.createElement('section')
    const divDesejaRemoverUsuario = document.createElement('div')
    const botaoFecharModalRemover = document.createElement('button')
    const pTituloRealmenteRemover= document.createElement('h1')
    const botaoConfirmarDeletar=document.createElement('button')

    divDesejaRemoverUsuario.classList.add('divDesejaRemoverUsuario')
    botaoFecharModalRemover.classList.add('btnXRemover')
    pTituloRealmenteRemover.classList.add('pTituloRealmenteRemover')
    botaoConfirmarDeletar.classList.add('btnDeletar')
    section.classList.add('modal_container')
    botaoFecharModalRemover.innerText="X"


    pTituloRealmenteRemover.innerText="Realmente deseja deletar o Departamento NOME e demitir seus funcionários?"
    botaoConfirmarDeletar.innerText="Confirmar"

    divDesejaRemoverUsuario.append(botaoFecharModalRemover,pTituloRealmenteRemover,botaoConfirmarDeletar)
    section.append(divDesejaRemoverUsuario)

    botaoConfirmarDeletar.addEventListener('click',()=>{
        liCartao.remove()
    })
    botaoFecharModalRemover.addEventListener('click',()=>{
        section.remove()

    })

    return section


}




function mostrarEditarDepartamento(departamento) {
    const body = document.querySelector('body');
    const modal = modalEditarDepartamento(departamento)
    body.append(modal)
   
}




function modalEditarDepartamento() {
    const section = document.createElement('section')
    const divEditarDepartamento = document.createElement('div')
    const btnXEditarDepart = document.querySelector('button')
    const pEditarDepartamento = document.createElement('p')
    const pAppendInput = document.createElement('p')
    const pInputValoresDescricao = document.createElement('input')
    const btnConfirmarEdicaoDepart = document.createElement('button')

    section.classList.add('modal_container')
    divEditarDepartamento.classList.add('divEditarDepartamento')
    btnXEditarDepart.classList.add('btnXFecharModalEditarDepart')
    btnXEditarDepart.innerText='X'
    pEditarDepartamento.classList.add('pEditarDepart')
    pEditarDepartamento.innerText="Editar Departamento"
    pAppendInput.append(pInputValoresDescricao)
    btnConfirmarEdicaoDepart.classList.add('btnEditarDepart')
    btnConfirmarEdicaoDepart.innerText="Salvar alterações"

    divEditarDepartamento.append(btnXEditarDepart,pEditarDepartamento,pAppendInput,pInputValoresDescricao,btnConfirmarEdicaoDepart)
    section.append(divEditarDepartamento)

    btnXEditarDepart.addEventListener('click', () => {
        section.remove()
        debugger

       
    })
    return section
}



function mostrarVisualizarDepartamento(departamento) {
    const body = document.querySelector('body');
    const modal = domModalVisualizarDepartamento(departamento)
    
    body.append(modal)
}

function domModalVisualizarDepartamento(departamento,usu) {

    const section = document.createElement('section')
    const divPrincipal = document.createElement('div')
    const btnFecharModal = document.createElement('button')
    btnFecharModal.innerText = "X"
    const divOrganizacao = document.createElement('div')
    const divOrganizandoP = document.createElement('div')
    const ph1NomeDepartamento = document.createElement('h1')
    const pDescricaoDepart = document.createElement('p')
    const pEmpresaPertencente = document.createElement('p')
    const divSelectContratar = document.createElement('div')
    const select = document.createElement('select')
    const botaoContratar = document.createElement('button')
    // fora da div organizacao pra baixo
    const ulNomeDepartamento = document.createElement('ul')
    const liNomeDepartamento = document.createElement('li')
    const pTituloUserName = document.createElement('p')
    const pNivel = document.createElement('p')
    const pNomeEmpresa = document.createElement('p')
    const btnDesligarDaEmpresa = document.createElement('button')


    section.classList.add('modal_container')
    divPrincipal.classList.add('domNomeDoDepartamento')
    btnFecharModal.classList.add('btnXVisualizar')
    divOrganizacao.classList.add('divOrganizacao')
    divOrganizandoP.classList.add('divOrganizandoP')
    ph1NomeDepartamento.innerText = departamento.name
    pDescricaoDepart.innerText =  departamento.description
    pEmpresaPertencente.innerText = departamento.companies.name
    divSelectContratar.classList.add('selectContratar')
    select.classList.add("selectClasse")
    var optionInitial = document.createElement("option")
    optionInitial.innerHTML = "Selecionar usuário"
    select.append(optionInitial)



    botaoContratar.classList.add('btnContratar')
    botaoContratar.innerText = 'Contratar'
    ulNomeDepartamento.classList.add('ulNomeDepartamento')
    liNomeDepartamento.classList.add('liNomeDepartamento')
    pTituloUserName.classList.add('pTituloUserName')
    pTituloUserName.innerText = 'UserName'
    pNivel.innerText = 'Setor'
    pNomeEmpresa.innerText = 'Nome da empresa'
    btnDesligarDaEmpresa.classList.add('btnDesligar')
    btnDesligarDaEmpresa.innerText = 'Desligar'
    btnDesligarDaEmpresa.addEventListener('click', () => {
        const liUsuario=JSON.p
       
        liNomeDepartamento.remove()
         usuario.forEach(async(element) =>{
            if(element.username == select.value){
                let data = {
                    "user_uuid":element.uuid,
                    "department_uuid": departamento
                }
                await deletarUsuario(data)
        
    
            }
        });
    })
    

    


    liNomeDepartamento.append(pTituloUserName, pNivel, pNomeEmpresa, btnDesligarDaEmpresa)
    ulNomeDepartamento.append(liNomeDepartamento)
    debugger
    
    const usuario =[]
    async function carregarSelectUsuarios() {
        var usuarios = await listarTodosOsUsuarios()
        usuarios.forEach(element => {
            usuario.push(element)
            const option = document.createElement('option')
            option.innerHTML = element.username;
            option.id = element.uuid;
            select.append(option)
        })
        
    }


    botaoContratar.addEventListener("click",  () => {
        const departamento=JSON.p
        usuario.forEach(async(element) =>{
            if(element.username == select.value){
                let data = {
                    "user_uuid":element.uuid,
                    "department_uuid": departamento
                }
                await contratarFuncionario(data)
        
    
            }

        })
      
      
        
    })
    debugger

  
    divOrganizandoP.append(ph1NomeDepartamento, pDescricaoDepart, pEmpresaPertencente)
    divSelectContratar.append(select, botaoContratar)
    divOrganizacao.append(divOrganizandoP, divSelectContratar)
    divPrincipal.append(btnFecharModal, divOrganizacao, ulNomeDepartamento)
    section.append(divPrincipal)

    btnFecharModal.addEventListener('click', () => {
        section.remove()
    });
    carregarSelectUsuarios()
    return section

}

// modal criar departamento 

console.log('teste')





function mostrarDepartamentoDeletado() {
    const body = document.querySelector('body');
    const modalBotaoAbrirPost = document.querySelector('.btnEditar')

    modalBotaoAbrirPost.addEventListener('click', (event) => {
        event.preventDefault()
        const modal = modalDepartamentoDeletado()
        body.append(modal)
    })

}

function modalDepartamentoDeletado() {
    const section = document.createElement('section')
    const divDepartDeletado = document.createElement('div')
    const botaoFecharDeparDeletado = document.createElement('button')
    const pTituloRealmenteRemover = document.createElement('p')
    const btnConfirmarDeletarDepart = document.createElement('button')


    section.classList.add('modal_container')
    divDepartDeletado.classList.add('divDesejaRemoverUsuario')
    botaoFecharDeparDeletado.classList.add('btnX')
    pTituloRealmenteRemover.classList.add('pTituloRealmenteRemover')
    btnConfirmarDeletarDepart.classList.add('btnDeletarConfirmar')

    btnConfirmarDeletarDepart.addEventListener('click',()=>{
        liCartao.remove()
        

    })

    divDepartDeletado.append(botaoFecharDeparDeletado, pTituloRealmenteRemover, btnConfirmarDeletarDepart)
    section.append(divDepartDeletado)
    botaoFecharDeparDeletado.addEventListener('click', () => {
        section.remove()

        return section
    })
}


// mostrarDepartamentoDeletado()
// modais usuario

// modal editar usuario 


// modal removerUsuario

function mostrarRemoverUsuario() {
    const body = document.querySelector('body');
    const modalBotaoAbrirPost = document.querySelector('.btnLixeira')

    modalBotaoAbrirPost.addEventListener('click', (event) => {
        event.preventDefault()
        const modal = modalRemoverUsuario()
        console.log(modal)
        console.log("Affff")
        debugger
        body.append(modal)
    })

}

function modalRemoverUsuario(departamento) {

    const section = document.createElement('section')
    const divDesejaRemoverUsuario = document.createElement('div')
    const botaoFecharRemoverUsuario = document.createElement('button')
    const pTituloRemoverUsuario = document.createElement('p')
    const btnConfirmarDeletarUsuario = document.createElement('button')


    section.classList.add('modal_container')
    divDesejaRemoverUsuario.classList.add('divDesejaRemoverUsuario')
    botaoFecharRemoverUsuario.classList.add('btnX')
    pTituloRemoverUsuario.classList.add('pTituloRealmenteRemover')
    btnConfirmarDeletarUsuario.classList.add('btnDeletar')

    divDesejaRemoverUsuario.append(botaoFecharRemoverUsuario, pTituloRemoverUsuario, btnConfirmarDeletarUsuario)
    section.append(divDesejaRemoverUsuario)
    botaoFecharRemoverUsuario.addEventListener('click', () => {
        section.remove()

        return section
    })


}
// mostrarRemoverUsuario()


// pCompanyName.innerHTML = departamento.companies.name




function mostrarCartaoUsuario(usuarios) {
    const listaUsuarios = document.querySelector("#listaUsuarios")
    const liUsuario = document.createElement('li')
    liUsuario.classList.add('liUsuariosCadastrados')
    const pUserName = document.createElement('p')
    pUserName.innerHTML = usuarios.username
    pUserName.classList.add("pUserName")
    const pPleno = document.createElement('p')
    pPleno.innerHTML = usuarios.professional_level
    pPleno.classList.add("pPleno")
    const pCompanyNameUsuarios = document.createElement('p')


    const divIcones = document.createElement('div')
    divIcones.classList.add("divIcones")
    const botaoEditar = document.createElement('button')
    botaoEditar.classList.add("btnEditarUsuario")
    const botaoEditarImg = document.createElement('img')
    botaoEditarImg.src = "..//assets/corrigir.png"

    botaoEditar.append(botaoEditarImg)
    const botaoLixeira = document.createElement('button')
    const botaoLixeiraImg = document.createElement('img')
    botaoLixeira.classList.add("btnLixeiraUsuario")
    botaoLixeiraImg.src = "../assets/lixeira.png"
    botaoLixeira.append(botaoLixeiraImg)

    divIcones.append(botaoEditar, botaoLixeira)

    liUsuario.append(pUserName, pPleno, divIcones)
    listaUsuarios.append(liUsuario)

    botaoEditar.addEventListener('click',()=>{
        const editarUsuario=JSON.p
        usuarios.forEach(async(element)=>{
            if(element.username == select.value){
                let data = {
                    "user_uuid":element.uuid,
                    "department_uuid": departamento
                }
                await atualizarFuncionario(data)
        }
    })
})








}
async function carregarUsuariosDoDepartamento() {
    const todosUsuarios = await listarTodosOsUsuarios()
    const listaDepartamentos = document.querySelector("#listaDepartamentos")
    const usuario = document.querySelector(".ulUsuariosCadastrados")
    debugger
    todosUsuarios.forEach(usuarios => {
        mostrarCartaoUsuario(usuarios)

    })


}
carregarUsuariosDoDepartamento()







async function carregarSelectDepartamentos() {
    var empresas = await getListaEmpresas()
    var selectEmpresas = document.querySelector("#selectEmpresas")

    empresas.forEach(element => {

        var option = document.createElement("option")

        option.innerHTML = element.name;
        option.value = element.uuid;
        localStorage.setItem("departamentoId", element.uuid)
        

        selectEmpresas.append(option)

    });

    selectEmpresas.addEventListener('change', async (event) => {
        const listaDepartamentos = document.querySelector("#listaDepartamentos")
        listaDepartamentos.innerHTML = "";

        var elementoSelect = event.target;
        var idDepartamentoSelecionado = elementoSelect.options[elementoSelect.selectedIndex].value;
        var departamentosEmpresa = await departamentosEmpresaId(idDepartamentoSelecionado)

        departamentosEmpresa.forEach(departamento => {
            mostrarCartaoDepartamento(departamento)
        })

        debugger;
    })
}






function mostrarCartaoDepartamento(departamento) {

    const listaDepartamentos = document.querySelector("#listaDepartamentos")

    const liCartao = document.createElement("li")

    liCartao.classList.add("liDepartamentos")

    const pDepartamento = document.createElement("p")

    pDepartamento.innerHTML = departamento.name
    pDepartamento.classList.add("pDepartamentoName")

    const pDepartamentoDescricao = document.createElement("p")

    pDepartamentoDescricao.innerHTML = departamento.description
    pDepartamentoDescricao.classList.add("pDepartamentoDescricao")

    const pCompanyName = document.createElement("p")

    pCompanyName.innerHTML = departamento.companies.name
    pCompanyName.classList.add("pCompanyName")

    const divIcones = document.createElement("div")

    divIcones.classList.add("divIcones")

    const btnVisualizar = document.createElement("button")
    btnVisualizar.classList.add("btnVisualizar")
    btnVisualizar.addEventListener("click", () => {
        mostrarVisualizarDepartamento(departamento);
    })
    const btnVisualizarImg = document.createElement("img")
    btnVisualizarImg.src = "../assets/olho.png"
    btnVisualizar.append(btnVisualizarImg)

    const btnEditar = document.createElement("button")
    btnEditar.classList.add("btnEditar")
    btnEditar.addEventListener("click",()=>{
        mostrarEditarDepartamento(departamento)
        debugger
    })
    const btnEditarImg = document.createElement("img")
    btnEditarImg.src = "..//assets/corrigir.png"
    btnEditar.append(btnEditarImg)
   
    

    const btnLixeira = document.createElement("button")

    btnLixeira.classList.add("btnLixeira")

    const btnLixeiraImg = document.createElement("img")
    btnLixeiraImg.src = "../assets/lixeira.png"
    btnLixeira.append(btnLixeiraImg)
    btnLixeira.addEventListener("click",()=>{
        mostrarModalDeletarDepartamento(departamento)

    })

    divIcones.append(btnVisualizar, btnEditar, btnLixeira)
    liCartao.append(pDepartamento, pDepartamentoDescricao, pCompanyName, divIcones)
    listaDepartamentos.append(liCartao)
}

carregarSelectDepartamentos();