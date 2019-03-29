
function cargarPagina(){
    var boton = document.querySelector("button"); 
    var r = document.querySelector(".r");
    var g = document.querySelector(".g");
    var b = document.querySelector(".b");
    console.log("3");
    
    
    function actualizarBarra(){
        var barra = document.querySelector(".barra");
        barra.style.background = 'rgb('+r.value+','+g.value+','+b.value+')';
    }
    r.addEventListener("input", actualizarBarra);
    g.addEventListener("input", actualizarBarra);
    b.addEventListener("input", actualizarBarra);
    
    
    function Modificar(){
        var contenedor = document.querySelector(".contenedor");
        var anterior = contenedor.innerHTML;
        var nombre = document.querySelector(".nombre");
        var url = document.querySelector(".url");
        var seleccionada = 0;
        
        var nuevo = '<section class="contenido" style= "border: solid rgb('+r.value+','+g.value+','+b.value+'); background-image: url('+url.value+');" > <p>'+nombre.value+'</p> </section>';  
        contenedor.innerHTML = anterior + nuevo;
        var usuarios = document.querySelectorAll('.contenido');
        
        
        function recorrer(usuariositos, index){
            function eliminar(){
                usuariositos.remove();
            }
            usuariositos.addEventListener('dblclick', eliminar);
            
            function seleccionar(){
                seleccionada = index;
            }
            usuariositos.addEventListener('click', seleccionar);
            usuariositos.style.marginLeft = '0px';
            usuariositos.style.marginTop = '0px';    
        }
        usuarios.forEach(recorrer);
        
        
        function cambiarPosicion(evento){
            console.log(evento.code);
            switch(evento.code){
                case "ArrowUp":
                usuarios[seleccionada].style.marginTop = 
                parseInt(usuarios[seleccionada].style.marginTop) - 30 + 'px';
                break;
                
                case "ArrowDown":
                usuarios[seleccionada].style.marginTop = 
                parseInt(usuarios[seleccionada].style.marginTop) + 30 + 'px';
                break;
                
                case "ArrowLeft":
                usuarios[seleccionada].style.marginLeft = 
                parseInt(usuarios[seleccionada].style.marginLeft) - 30 + 'px';
                break;
                
                case "ArrowRight":
                usuarios[seleccionada].style.marginLeft = 
                parseInt(usuarios[seleccionada].style.marginLeft) + 30 + 'px';
                break;
            }
        }
        window.addEventListener('keydown', cambiarPosicion);
    }
    boton.addEventListener("click", Modificar); 
}
window.addEventListener("load", cargarPagina);

