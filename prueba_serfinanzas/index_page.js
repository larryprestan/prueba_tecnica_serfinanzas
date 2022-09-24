$(function () {
    //importamos la navegacio//
    $.getScript("./Components/navegacion.js", function () {
        navegacion();
    });

    //importamos el formulario principal//
    $.getScript("./Components/formulario_principal.js", function () {
        formulario_principal();
    });

});