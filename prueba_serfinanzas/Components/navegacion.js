function navegacion() {
    let navegacion = `
    <div class="container" id="nav-container">
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#" id="home">Home</a>
        </nav>          
    </div>
    `;

    $("body").append(navegacion);
}

$(function () {
    $("#home").click(function (e) { 
        e.preventDefault();
        location.reload();
    });
});