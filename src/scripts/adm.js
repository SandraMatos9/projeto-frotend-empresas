import { getListaEmpresas, departamentosEmpresaId } from "./request.js";

function mostrarVisualizarDepartamento(departamento) {
    const body = document.querySelector('body');
    const modal = domModalVisualizarDepartamento(departamento)
    body.append(modal)
}

function domModalVisualizarDepartamento(departamento) {

    const section = document.createElement('section')
    const divPrincipal = document.createElement('div')
    const btnFecharModal = document.createElement('button')
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
    divPrincipal.classList.add('divNomeDoDepartamento')
    btnFecharModal.classList.add('btnX')
    divOrganizacao.classList.add('divOrganizacao')
    divOrganizandoP.classList.add('divOrganizandoP')
    ph1NomeDepartamento.innerText = 'Nome do departamento'
    pDescricaoDepart.innerText = 'Descricao do departamento'
    pEmpresaPertencente.innerText = 'Empresa pertencente'
    divSelectContratar.classList.add('selectContratar')
    botaoContratar.classList.add('btnContratar')
    ulNomeDepartamento.classList.add('ulNomeDepartamento')
    liNomeDepartamento.classList.add('liNomeDepartamento')
    pTituloUserName.classList.add('pTituloUserName')
    pNivel.classList.innerText = 'Setor'
    pNomeEmpresa.innerText = 'Nome da empresa'
    btnDesligarDaEmpresa.classList.add('btnDesligar')


    divOrganizandoP.append(ph1NomeDepartamento, pDescricaoDepart, pEmpresaPertencente)
    divSelectContratar.append(select, botaoContratar)
    divOrganizacao.append(divOrganizandoP, divSelectContratar)
    divPrincipal.append(btnFecharModal, divOrganizacao)
    section.append(divPrincipal)

    btnFecharModal.addEventListener('click', () => {
        section.remove()
    });

    return section
}

// modal criar departamento 

function mostrarDepartModalCriado() {
    const body = document.querySelector('body');
    const modalBotaoAbrirPost = document.querySelector(".btnCriar")

    modalBotaoAbrirPost.addEventListener('click', (event) => {
        event.preventDefault()
        const modal = modalCriarDepartamentoCard()
        body.append(modal)

    })

}

// mostrarDepartModalCriado()

function modalCriarDepartamentoCard() {

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

// modal editar departamento 

function mostrarEditarDepartamento() {

    const body = document.querySelector('body');
    const modalBotaoAbrirPost = document.querySelector('.btnEditar')

    modalBotaoAbrirPost.addEventListener('click', (event) => {
        event.preventDefault()
        const modal = modalEditarDepartamento()
        body.append(modal)
    })

}

function modalEditarDepartamento() {
    const section = document.createElement('section')
    const divEditarDepartamento = document.createElement('div')
    const btnXEditarDepart = document.querySelector('button')
    const pEditarDepartamento = document.createElement('p')
    const pAppendInput = document.createElement('p')
    const pInputValoresDescricao = document.createElement('input')
    const btnConfirmarEdicaoDepart = document.createElement('btn')

    section.classList.add('modal_container')
    divEditarDepartamento.classList.add('.divEditarDepart')
    btnXEditarDepart.classList.add('.btnX')
    pEditarDepartamento.classList.add('.pEditarDepart')
    pAppendInput.append(pInputValoresDescricao)
    btnConfirmarEdicaoDepart.classList.add('.btnEditarDepart')

    divEditarDepartamento.append(btnXEditarDepart, pEditarDepartamento, pAppendInput, btnConfirmarEdicaoDepart)
    section.append(divEditarDepartamento)
    btnXEditarDepart.addEventListener('click', () => {
        section.remove()


        return section
    })
}

// mostrarEditarDepartamento()

// modal realmente deseja deletar departamento nome e demitir funcionario usuario 

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

function mostrarEditarUsuario() {
    const body = document.querySelector('body');
    const modalBotaoAbrirPost = document.querySelector('.btnEditarUsuario')

    modalBotaoAbrirPost.addEventListener('click', (event) => {
        event.preventDefault()
        const modal = modalEditarUsuario()
        body.append(modal)
    })

}
function modalEditarUsuario() {
    const section = document.createElement('section')
    const divEditarUsuario = document.createElement('div')
    const btnXEditarUsuario = document.querySelector('button')
    const pEditarUsuario = document.createElement('p')
    const pForm = document.createElement('form')
    const pSelect = document.createElement('select')
    const pInputModalidadeTrabalho = document.createElement('option')
    const pInputNivelProfissional = document.createElement('option')
    const btnConfirmarEdicaoUsuario = document.createElement('btn')

    section.classList.add('modal_container')
    divEditarUsuario.classList.add('divEditarUsuario')
    btnXEditarUsuario.classList.add('btnX')
    pEditarUsuario.classList.add('pEditarUsuario')
    btnConfirmarEdicaoUsuario.classList.add('btnEditarUsuarioConfirmacao')
    pSelect.append(pInputModalidadeTrabalho, pInputNivelProfissional)
    pForm.append(pSelect)
    divEditarUsuario.append(btnXEditarUsuario, pEditarUsuario, pForm, btnConfirmarEdicaoUsuario)

    section.append(divEditarUsuario)
    btnXEditarUsuario.addEventListener('click', () => {
        section.remove()

        return section
    })


}
// mostrarEditarUsuario()

// modal removerUsuario

function mostrarRemoverUsuario() {
    const body = document.querySelector('body');
    const modalBotaoAbrirPost = document.querySelector('.btnLixeira')

    modalBotaoAbrirPost.addEventListener('click', (event) => {
        event.preventDefault()
        const modal = modalRemoverUsuario()
        body.append(modal)
    })

}

function modalRemoverUsuario() {

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

async function carregarSelectDepartamentos() {
    var empresas = await getListaEmpresas()
    var selectEmpresas = document.querySelector("#selectEmpresas")

    empresas.forEach(element => {

        var option = document.createElement("option")

        option.innerHTML = element.name;
        option.value = element.uuid;

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

    const btnEditarImg = document.createElement("img")
    btnEditarImg.src = "..//assets/corrigir.png"

    const btnLixeira = document.createElement("button")

    btnLixeira.classList.add("btnLixeira")

    const btnLixeiraImg = document.createElement("img")
    btnLixeiraImg.src = "../assets/lixeira.png"

    divIcones.append(btnVisualizar, btnEditar, btnLixeira)
    liCartao.append(pDepartamento, pDepartamentoDescricao, pCompanyName, divIcones)
    listaDepartamentos.append(liCartao)
}

carregarSelectDepartamentos();