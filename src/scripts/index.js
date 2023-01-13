import {login,createUser,getListaEmpresas,getListaSetor,verificarOTipoDeUsuario} from "./request.js";

export function getUser(){
    const user = JSON.parse(localStorage.getItem('@kenzieMarket:user'))// busca o usuario no localstorage
    return user
}


 

export function renderLogin(){
   
    
    // verificarOTipoDeUsuario()
    // const {token}= user
   
    // vai enviar o token para a rota de verificação e com a resposta da rota vou definir se 
    // o usuario é adm ou usuario normal
   // validar token 'token'
    // criar uma requisição que vai receber o token por parametro e vai retornar o resultado da requisição

    // if(user && user.isAdm){
    //     // window.location.replace('./src/pages/admin.html')
    // } else if(user && !user.isAdm){
    //     // window.location.replace('/src/pages/user.html')
        
    // }
}


 
export async function loginForm(){
    const inputs = document.querySelectorAll('.inputLogin')
    const buttonLogin= document.querySelector('.btnLogin')
    var loginUser= {}
    let user ={}
    buttonLogin.addEventListener('click',async (event) => {
        event.preventDefault()
        

        inputs.forEach(input=>{
            loginUser[input.name] = input.value
            localStorage.setItem([input.name],input.value)
        })
       user = await login(loginUser)
       console.log()
       await verificarOTipoDeUsuario(user.token)
      
       localStorage.setItem("token",user.token)
      

     
        
        
    })
    return user
 }




export function createUserForm(){
    const inputs = document.querySelectorAll('.signUp>input')
    const button = document.querySelectorAll('.signUp>inputs')
    const botaoCadastre= document.querySelector('.btnCadastrar')
    
    button.addEventListener('click', async(event) =>{
        event.preventDefault()

        inputs.forEach(input =>{
            newUser[input.name] = input.value
        })

        const request = await createUser(newUser)
        if(createUser.ok){
            

        }
    })
    return newUser

}


 renderLogin()
 loginForm()




export async function renderListaEmpresas(array){
    const listaEmpresas = document.querySelector('.ulCardEmprego')
    listaEmpresas.innerHTML=''
    const empresas = await getListaEmpresas()
  
    if(array){
        listaEmpresas.innerHTML=''
        array.forEach(element => {
            const cardEmpresa=  renderizarEmpresasnaHome(element)
            listaEmpresas.append(cardEmpresa)
            
        });

    }else if(!array){
        listaEmpresas.innerHTML=''
        empresas.forEach(element => {
            const cardEmpresa=  renderizarEmpresasnaHome(element)
            listaEmpresas.append(cardEmpresa)
            
        });

    }
 
  
}
renderListaEmpresas()




export function renderizarEmpresasnaHome({uuid,name,opening_hours,sectors}){
  
    const liEmpresas= document.createElement('li')
    const divLi =document.createElement('div')
    const pEmpresaName = document.createElement('p')
    const pHoras = document.createElement('p')
    const pSetor = document.createElement('p')
    liEmpresas.classList.add('liListaEmpresas')
    liEmpresas.id=uuid
    divLi.classList.add('divDentroLi')
    pEmpresaName.classList.add('pEmpresaName')
    pEmpresaName.innerText=name
    pHoras.classList.add('pHoras')
    pHoras.innerText=opening_hours
    pSetor.classList.add('pSetor')
    pSetor.innerText=sectors.description
    divLi.append(pEmpresaName,pHoras,pSetor)
    liEmpresas.append(divLi)
    return liEmpresas
}


const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


// corrigir*

export function selecionandoSetores(x){
    const selecinando= document.querySelector('select')
    
    selecinando.addEventListener('change', async (select) =>{
        console.log(select.target.value)
      
         renderListaEmpresas( await getListaSetor(select.target.value))
     
    })
    
}
selecionandoSetores()


////////////////// PATCH

// Atualizar informações do funcionário
//  Contratar funcionário
//  Demitir funcionário
//  Editar Departamento
//  Atualizar informações do funcionário



