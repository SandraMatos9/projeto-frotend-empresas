// import{toast} from './toast.js'


// let chaveToken= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMzg2NTk2M2MtMzZkNS00YmViLWJlMmYtNDI2ODNiZTJlYTQ0IiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE2NjY5MTc5MzIsImV4cCI6MTY2Nzc4MTkzMiwic3ViIjoiW29iamVjdCBVbmRlZmluZWRdIn0.zS0QPz6SBanZN6pCVDL028SphZIwy9osySmBumUsegA'
var baseUrl = 'http://localhost:6278'




const requestHeaders = {
    'Content-type': 'application/json',
    // Authorization:`Bearer ${token}`
}




///////// comandos GET

// GET Listar todos os departamentos --- OK
// GET Listar todos os departamentos de uma empresa --- OK
// GET listar todos os usuários --- OK
// GET Verificar o tipo de usuário --- OK
// GET Usuários sem departamentos  ---OK
// GET Listar todas as Empresas --- OK
// GET Listar Empresas por setor --- OK
// GET Listar todos os setores --- OK
// GET Buscas Informações do funcionario logado --- OK
// GET Listar todos os funcionários do mesmo departamento --- OK
// GET Listar os Departamentos da empresa do funcionário logado --- OK
// GET Verificar o tipo de usuário


//listar todo o departamento
export async function getListarTodoODepartamento() {

    const departamentos = await fetch(`http://localhost:6278/departments`, {
        method: 'GET',
        Headers: {
            'Content-Type': 'application/json'
        }

    })
        .then(res => res.json())
        .then(res => {

            return res
        })
    return departamentos


}

//listar todos os departamentos de uma empresa (id)
export async function departamentosEmpresaId(empresaId) {
    const departIdEmpresa = await fetch(`http://localhost:6278/departments/${empresaId}`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
    })

    const departIdEmpresaJson = await departIdEmpresa.json()

    return departIdEmpresaJson
}

//listar todos os usuários
export async function listarTodosOsUsuarios() {
    const departIdEmpresa = await fetch(`http://localhost:6278/users`, {
        method: 'GET',
        headers: requestHeaders,
    })
    const departIdEmpresaJson = await product.json()

    if (!product.ok) {
        toast(departIdEmpresaJson.message, '#CE4646')
    } else {
        toast('Criação de usuário bem sucedida', '#4BA036')
        localStorage.clear()
        // window.location.replace('/')
    }
    return departIdEmpresaJson
}


//verificar o tipo de usuário

export async function verificarOTipoDeUsuario(token) {
    const verificaTipoUsuario = await fetch(`http://localhost:6278/auth/validate_user`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },

    })

    const response = await verificaTipoUsuario.json()
    console.log(response)





    if (response.is_admin) {
        alert("admin logado")
        window.location.replace('./admin.html')




    } else {
        window.location.replace('./user.html')
        alert('usuario logado')



    }
    return verificaTipoUsuario
}


//listar todos os usuários sem departamentos
export async function listarTodosOsUsuariosSemDepartamento() {
    const usuariosSemDepar = await fetch(`http://localhost:6278/admin/out_of_work`, {
        method: 'GET',
        headers: requestHeaders,
    })
    const usuariosSemDeparJson = await usuariosSemDepar.json()

    if (!product.ok) {
        toast(usuariosSemDepar.message, '#CE4646')
    } else {
        toast('Criação de usuário bem sucedida', '#4BA036')
        localStorage.clear()
        // window.location.replace('/')
    }
    return usuariosSemDeparJson
}

export async function getListaEmpresas() {

    const empresas = await fetch(`http://localhost:6278/companies`, {
        method: 'GET',
        Headers: {
            'Content-Type': 'application/json'
        }

    })
        .then(res => res.json())
        .then(res => {

            return res
        })
    return empresas
}

export async function getListaSetor(sector) {
    const empresas = await fetch(`http://localhost:6278/companies/${sector}`, {
        method: 'GET',
        Headers: {
            'Content-Type': 'application/json'
        }
    })
    const empresasJson = await empresas.json()
    console.log(empresasJson)
    return empresasJson

}

// Buscas Informações do funcionario logado
export async function infoFuncionarioLogado() {

    const empresas = await fetch(`http://localhost:6278/users/profile`, {
        method: 'GET',
        Headers: {
            'Content-Type': 'application/json'
        }

    })
        .then(res => res.json())
        .then(res => {

            return res
        })
    return empresas
}

// Listar todos os funcionários do mesmo departamento

export async function funcionariosDoMesmoDepart() {

    const empresas = await fetch(`http://localhost:6278/users/departments/coworkers`, {
        method: 'GET',
        Headers: {
            'Content-Type': 'application/json'
        }

    })
        .then(res => res.json())
        .then(res => {

            return res
        })
    return empresas
}

// Listar os Departamentos da empresa do funcionário logado

export async function departamentosDaEmpresaDoFuncionarioLogado() {

    const empresas = await fetch(`http://localhost:6278/users/departments`, {
        method: 'GET',
        Headers: {
            'Content-Type': 'application/json'
        }

    })
        .then(res => res.json())
        .then(res => {

            return res
        })
    return empresas
}





/////////////// comandos  POST 
// Cadastrar Empresa --- OK
//  Criar departamento --- OK
// POST Criar Usuário --- OK
// POST Login --- OK



// Login
export async function login(data) {
    const loginData = await fetch(`http://localhost:6278/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)


    })
        .then(res => res.json())
        .catch(err => console.log(err))

    return loginData
}


// Criar usuario
export async function createUser() {
    const newUser = await fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(data)

    })
    const newUserJson = await newUser.json()
    if (!newUser.ok) {
        toast(newUserJson.message, '#CE4646')
    } else {
        toast('Usuario cadastrado com sucesso!', '#4BA036')
    }
    return newUserJson
}

// Criar departamento

export async function criarDepartamento() {
    const novoDepartamento = await fetch(`http://localhost:6278/departments`, {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(data)

    })
    const novoDepartamentoJson = await newUser.json()
    if (!newUser.ok) {
        toast(newUserJson.message, '#CE4646')
    } else {
        toast('Usuario cadastrado com sucesso!', '#4BA036')
    }
    return novoDepartamentoJson
}

// Cadastrar Empresa

export async function cadastrarEmpresa() {
    const novoDepartamento = await fetch(`http://localhost:6278/companies`, {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(data)

    })
    const novoDepartamentoJson = await newUser.json()
    if (!newUser.ok) {
        toast(newUserJson.message, '#CE4646')
    } else {
        toast('Usuario cadastrado com sucesso!', '#4BA036')
    }
    return novoDepartamentoJson
}





/////////// comandos DELETE

// Deletar departamento

export async function deletarDepartamento(idDepartamento) {
    const deleteDepart = await fetch(`http://localhost:6278/departments/${idDepartamento}`, {
        method: 'DELETE',
        headers: requestHeaders,
    }
    )

    const deleteDepartJson = deleteDepart.json()
    if (!deleteDepart.ok) {
        toast(deleteDepartJson.message, '#CE4646')
    } else {
        toast('Criação de usuário bem sucedida', '#4BA036')
        localStorage.clear()
        // window.location.replace('/')
    }
    return deleteDepartJson
}


// Deletar usuário

export async function deletarUsuario(idDeleteUsuario) {
    const deleteUsuario = await fetch(`http://localhost:6278/admin/delete_user/${idDeleteUsuario}`, {
        method: 'DELETE',
        headers: requestHeaders,
    }
    )

    const deleteUsuarioJson = deleteUsuario.json()
    if (!deleteUsuario.ok) {
        toast(deleteUsuarioJson.message, '#CE4646')
    } else {
        toast('Criação de usuário bem sucedida', '#4BA036')
        localStorage.clear()
        // window.location.replace('/')
    }
    return deleteUsuarioJson
}



///////////// comandos PATCH
// Contratar funcionário
export async function contratarFuncionario(data) {
    const contratar = await fetch(`http://localhost:6278/departments/hire/`, {
        method: 'PATCH',
        headers: requestHeaders,
        body: JSON.stringify(data)
    })
    const contratarJson = await contratar.json()
    if (!contratar.ok) {
        toast(contratarJson.message, '#CE4646')
    } else {
        toast('Criação de usuário bem sucedida', '#4BA036')
    }
}


// Demitir funcionário
export async function demitirFuncionario(idDemitir) {
    const demitir = await fetch(`http://localhost:6278/departments/dismiss/${idDemitir}`, {
        method: 'PATCH',
        headers: requestHeaders,
        body: JSON.stringify(data)
    })
    const demitirJson = await demitir.json()
    if (!demitir.ok) {
        toast(demitirJson.message, '#CE4646')
    } else {
        toast('Criação de usuário bem sucedida', '#4BA036')
    }
}


// Editar Departamento
export async function updatedProfile(idDepartamento) {
    const editar = await fetch(`http://localhost:6278/departments/${idDepartamento}`, {
        method: 'PATCH',
        headers: requestHeaders,
        body: JSON.stringify(data)
    })
    const editarJson = await editar.json()
    if (!editar.ok) {
        toast(editarJson.message, '#CE4646')
    } else {
        toast('Criação de usuário bem sucedida', '#4BA036')
    }
}


//Atualizar informações do funcionário 
export async function atualizarFuncionario(idAtualizar) {
    const atualizar = await fetch(`http://localhost:6278/admin/update_user/${idAtualizar}`, {
        method: 'PATCH',
        headers: requestHeaders,
        body: JSON.stringify(data)
    })
    const atualizarJson = await atualizar.json()
    if (!atualizar.ok) {
        toast(atualizarJson.message, '#CE4646')
    } else {
        toast('Criação de usuário bem sucedida', '#4BA036')
    }
}

