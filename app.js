
function redirigir(select) {
    console.log("funciona")
    let url = select.value;
    
    if (url) {
        window.top.location.href = url;
    }
}