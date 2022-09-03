//exemplo de callback no browser
document.getElementsByTagName("body")[0].onclick = function(e){
    console.log("rolou o evento")
}

// no contexto do browser, vc passa uma função callback que fica esperando ser disparada