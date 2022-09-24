//generamos el formulario principal//
function formulario_principal() {
    //declaramos la variable que contiene el componente//
    let formulario_principal = `
    <div class="container" id="root-container">
        <form action="#" id="root-form">
            <h5>Prestamo Libros</h5>
            <hr>
            <!--datos del usuario-->
            <div class="row">
                <div class="col-4">
                    <label for="id-usuario">Id-Usuario</label>
                    <input type="text" class="form-control" name="id-usuario" id="id-usuario">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="nombre-usuario">Nombre</label>
                    <input type="text" class="form-control" name="nombre-usuario" id="nombre-usuario">
                </div>
                <div class="col">
                    <label for="apellido-usuario">Apellido</label>
                    <input type="text" class="form-control" name="apellido-usuario" id="apellido-usuario">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="fecha-naci">Fecha de Nacimiento</label>
                    <input type="date" class="form-control" name="fecha-naci" id="fecha-naci">
                </div>
                <div class="col">
                    <label for="telefono-usuario">Telefono</label>
                    <input type="text" class="form-control" name="telefono-usuario" id="telefono-usuario">
                </div>
            </div>
            <hr>
            <!--datos del liro-->
            <div class="row">
                <div class="col-4">
                    <label for="idlib">IDLIB</label>
                    <input type="text" class="form-control" name="idlib" id="idlib">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="fecha-prestamo">Fecha Prestamo</label>
                    <input type="text" class="form-control" name="fecha-prestamo" id="fecha-prestamo" readonly>
                </div>
                <div class="col">
                    <label for="fecha-devolucion">Fecha de Devolucion</label>
                    <input type="text" class="form-control" name="fecha-devolucion" id="fecha-devolucion" readonly>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col">
                    <button class="btn btn-primary btn-block" id="btn-confirmar">Confirmar Datos</button>
                </div>
                <div class="col">
                    <button class="btn btn-success btn-block" id="btn-prestamo" disabled >Realizar-Prestamo</button>
                </div>
            </div>
        </form>
    </div>
    `;
    //añadimos el formulario al body//
    $("body").append(formulario_principal);
}


$(function () {

    //funcion sumar 5 dias para  suma de digitos del idlib mayor a 40//
    function calcular_fecha() {
        var fecha_actual = new Date();       
        //nueva fecha sumada
        fecha_actual.setDate(fecha_actual.getDate() + 5);
        let fecha_suamada = fecha_actual.getDate() + '/' +
        (fecha_actual.getMonth() + 1) + '/' + fecha_actual.getFullYear();
        return fecha_suamada;
    }

    //funcion calcular palindromo//
    function palindromo(str) {
        const strReversed = str.split("").reverse().join("");
        return strReversed === str ? "es palindromo" : "no es palindromo";
    }

    //sumar digitos del idlib//
    function sumar_digitos(idlib) {
        let res = 0;
        idlib.split('').forEach(c => res += parseInt(c));
        return res;
    }

    //funcion para obtener la fecha actual//
    function fecha_actual() {
        var fecha = new Date();
        let fecha_actual = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();
        //var now = today.toLocaleDateString('en-US');
        return fecha_actual;
    }

    //asignamos la facha actual a fecha-prestamo//
    $("#fecha-prestamo").val(fecha_actual());


    //funcion boton confirmar datos//
    $("#btn-confirmar").click(function (e) { 
        e.preventDefault();
        //obtenemos el valor de idlib//
        let idlib = $("#idlib").val();

        //verificamos si es palindromo o si la suma de los digitos de >40//
        if(palindromo(idlib)=="es palindromo"){
            alert("los libros palíndromos solo se pueden utilizar en la biblioteca");
            $("#idlib").val("");
            //verificamos la suma de los digitos//
        }else if(sumar_digitos(idlib)>40){
            //si es mayor a 40 sumamos 5 dias//
            alert ("la suma de los digitos del idlib es mayor a 40 la fecha maxima de prestamo es de 5 dias");
            $("#fecha-devolucion").val(calcular_fecha());
        }else{
            //si no es mayor de 40 cabiamos atributos para ingresar la fecha de devolucion//
            $("#fecha-devolucion").attr("type", "date");
            $("#fecha-devolucion").attr("readonly", false);
            $("#btn-prestamo").attr("disabled", false);
        }

    });

    //funcion boton realizar prestamo//
    $("#btn-prestamo").click(function (e) { 
        e.preventDefault();
        //obtengo los datos del formulario//
        let datos = $("#root-form").serialize();
        $.ajax({
            type: "post",
            url: "Php/prestar_libro.php",
            data: datos,
            success: function (res) {
                console.log(res);
            }
        });
    });

});