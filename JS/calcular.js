class Elementos{
    static contadorElementos=0;
     constructor(calificacion,porcentaje){
       this._id= ++Elementos.contadorElementos;
        this._calificacion=calificacion;
        this._porcentaje=porcentaje;
    }
    get id(){
        return this._id;
    }
    get calificacion(){
        return this._calificacion;
    }
    set calificacion(calificacion){
        this._calificacion =calificacion;
    }
    get porcentaje(){
        return this._porcentaje;
    }
    set porcentaje(porcentaje){
        this._porcentaje =porcentaje;
    }
}
let elementos=[];


const cargarElementos=()=>{
    let elementosHTML =[];
    for (let elemento of elementos){
        elementosHTML += crearElementoHTML(elemento)
    }
    document.getElementById("elementos").innerHTML=elementosHTML;
}
const crearElementoHTML =(elemento)=>{
    let elementoHTML=`<div class="elemento" id="elemento">
    <div class="elemento_calificacion">${elemento.calificacion}</div>
    
        <div class="elemento_porcentaje"> ${elemento.porcentaje}%</div> 
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn" id="elemento_eliminar">
            <ion-icon name="close-circle-outline" onclick="eliminar_unidad(${elemento.id})"></ion-icon>
            </button>
        </div>
   </div> `
   return elementoHTML;
}
function agregarElementos(){
 
    const forma= document.forms['form'];
    const calificacion= forma['calificacion'];
    const porcentaje = forma['porcentaje'];
    const nota= new Elementos(calificacion.value, porcentaje.value);
    console.log("hola");
    elementos.push(nota);
    cargarElementos();
   
    forma['calificacion'].value='';
    forma['porcentaje'].value='';
    
    document.getElementById('resultado').innerHTML='';
   }
function borrar(){
    elementos =[];
    document.getElementById('cont').innerHTML=`<div class="elementos" id="elementos"></div>`;
    cargarElementos();
    document.getElementById('resultado').innerHTML='';
    
}
function calcular(){
    let resultado=0;
    let nota=0;

    for(let cantidad of elementos){
         nota= cantidad.calificacion * (cantidad.porcentaje/100) ;
        resultado+=nota.toFixed(2);
    }
    console.log(nota);
    document.getElementById("cont").innerHTML+=`<footer id="resultado"></footer>`
    document.getElementById('resultado').innerHTML='Su resultado es: '+resultado;
}

const mostrarReloj = ( ) =>{
    let fecha = new Date();
    let hr= formato(fecha.getHours());
    let mn= formato(fecha.getMinutes());
    let sc= formato(fecha.getSeconds());
    document.getElementById("hora").innerHTML= `${hr}:${mn}:${sc}`

    let dia= formato(fecha.getDate() );
    let mes= formato(fecha.getMonth()+1);
    let año= formato(fecha.getFullYear());
    let fechaTexto= `${dia}/${mes}/${año}`;
    document.getElementById('fecha').innerHTML=fechaTexto;
}
const formato= (hora)=>{
    if(hora<10){
        hora='0' + hora;
    }
    return hora;
}
setInterval(mostrarReloj,1000);

const eliminar_unidad =(id) => {
    let indiceEliminar=elementos.findIndex(elemento => elemento.id ===id );
    if(elementos.length ===1){
        elementos =[];
        document.getElementById('cont').innerHTML=`<div class="elementos" id="elementos"></div>`;
         document.getElementById("calcular").style.display="none";
        document.getElementById("borrar").style.display="none";
        document.getElementById('resultado').innerHTML= '';
       cargarElementos();
       }else{
        elementos.splice(indiceEliminar, 1);
       cargarElementos();
       }
    

   
}

document.getElementById("agregar").addEventListener("click",function() {
    document.getElementById("calcular").style.display="inline-block";
    document.getElementById("borrar").style.display="inline-block";
});
document.getElementById("borrar").addEventListener("click",function() {
    document.getElementById("calcular").style.display="none";
    document.getElementById("borrar").style.display="none";
});

