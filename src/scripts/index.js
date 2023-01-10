
async function renderListaEmpresas(){
    const listaEmpresas = document.querySelector('.ulCardEmprego')
    listaEmpresas.innerHTML=''
    const empresas = await getListaEmpresas()
  
    console.log(empresas)
    empresas.forEach(element => {
        const cardEmpresa=  renderizarEmpresasnaHome(element)
        listaEmpresas.append(cardEmpresa)
        
    });
  
}
renderListaEmpresas()

async function getListaEmpresas(){
    const empresas= await fetch(`http://localhost:6278/companies`,{
        method:'GET',
        Headers:{
        'Content-Type':'application/json'
    }

    })
    .then(res=> res.json())
    .then(res=>{
      
        return res
    })
    return empresas
}




function renderizarEmpresasnaHome({uuid,name,opening_hours,sectors}){
  
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




// function selecionandoSetores(){
//     const selecinando= document.querySelector('select')
//     const
//     selecinando.addEventListener('change', (select) =>{
//         console.log(select.value)
//         if(select.value==sectors.description){
//             return renderizarEmpresasnaHome()
//         }
//     })
    
// }
// selecionandoSetores()