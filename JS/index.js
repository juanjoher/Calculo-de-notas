class Elementos{
    static contadorElementos=0;
    constructor(calificacion,porcentaje){
        this._cantidadElementos= ++Elementos.contadorElementos;
        this._calificacion=calificacion;
        this._porcentaje=porcentaje;
    }
    get cantidadElementos(){
        return this_cantidadElementos;
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

function mostrarElementos(){
    let texto='';
    let contador=1;
    for(let elemen of elementos){
        texto+=` <h3>${contador}. <input type="number" placeholder="Digite la calificación" value="${elemen.calificacion}" disabled> <input type="number" placeholder="Digite el porcentaje" value="${elemen.porcentaje}" disabled></h3>`;
        contador++;
    }
    document.getElementById('elementos').innerHTML=texto;
}
function agregarElementos(){
    const forma= document.forms['form'];
    const calificacion= forma['calificacion'];
    const porcentaje = forma['porcentaje'];
    const nota= new Elementos(calificacion.value, porcentaje.value);
    console.log("hola");
    elementos.push(nota);
    mostrarElementos();
    forma['calificacion'].value='';
    forma['porcentaje'].value='';
    document.getElementById('resultado').innerHTML='';
}
function borrar(){
    elementos =[];
    document.getElementById('resultado').innerHTML='';
    mostrarElementos();
}
function calcular(){
    let resultado=0;
    let nota=0;
    for(let cantidad of elementos){
        nota= cantidad.calificacion * (cantidad.porcentaje/100) ;
        resultado+=nota;
    }
    console.log(nota);
    document.getElementById('resultado').innerHTML='Su resultado es: '+resultado.toFixed(2);
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

