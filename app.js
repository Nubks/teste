var adicionar = document.getElementById('adicionar');
var elementoPai = document.getElementById('criacao');

adicionar.addEventListener('click',()=>{
    if(document.getElementById('titulo')){
        
    }
    else if(document.getElementById('escrito')){

    }
    else{
    var div = document.createElement("div");
    div.className ="postIt";
    var input = document.createElement("input");
    input.placeholder ="Titulo";
    input.id = "titulo";
    div.appendChild(input);
    var textarea = document.createElement("textarea");
    textarea.placeholder ="Escreva seu texto aqui";
    textarea.id = "escrito"
    div.appendChild(textarea);
    let adicionar = document.createElement("button");
    adicionar.innerHTML = "Adicionar";
    adicionar.id ="adicionarTexto"
    adicionar.onclick = ()=>{
        let tituloInput = document.getElementById('titulo').value;
        let text = document.getElementById('escrito').value;
        let titulo = document.createTextNode(tituloInput);
        let texto = document.createTextNode(text);

        let addTitulo = document.createElement("h1");
        addTitulo.append(titulo);
        div.appendChild(addTitulo);

        let addTexto = document.createElement("p");
        addTexto.append(texto);
        div.appendChild(addTexto);


        if(tituloInput != "" && text != ""){
        input.remove();
        textarea.remove();
        document.getElementById('adicionarTexto').remove();
        }

    }
    div.appendChild(adicionar);
    elementoPai.appendChild(div);
    }
});