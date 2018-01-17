let versao = 8

let arquivos = [
"/",
"css/estilos.css",
"css/opcoesDaPagina.css",
"css/opcoesDoCartao.css",
"css/cabecalho.css",
"js/lib/jquery.js",
"js/lib/eventemitter2.js",
"js/lib/KeyBoardNavigation.js",
"js/tags/Tags.js",
"js/cabecalho/mudaLayout.js",
"js/cabecalho/busca.js",
"js/filtro/Filtro.js",
"js/ponto/datatime.js",
]

self.addEventListener("install", function(){
    console.log("Instalou")
})

self.addEventListener("activate", function(){
    caches.open("ponto-arquivos-" + versao).then(cache => {
        cache.addAll(arquivos)
            .then(function(){
                caches.delete("ponto-arquivos-" + (versao - 1 ))   
                caches.delete("ponto-arquivos")   
            })
        
    })
})


self.addEventListener("fetch", function(event){

    let pedido = event.request
    let promiseResposta = caches.match(pedido).then(respostaCache => {
        let resposta = respostaCache ? respostaCache : fetch(pedido)
        return resposta
    })

    event.respondWith(promiseResposta)

})

