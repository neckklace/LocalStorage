function enviar() {
    var numero = document.getElementById('numero')

    localStorage.setItem("Number",numero.value)

    console.log(localStorage)
}