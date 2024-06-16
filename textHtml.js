const $whatisDOM = document.getElementById("que-es")


let text = `<p>
                El DOM (Document Object Model, Modelo de Objeto del Documento) es una interfaz de programación para los documentos HTML y XML. 
                Define la estructura lógica de los documentos y la forma en que se accede y manipula. En el contexto de HTML y JavaScript,
            </p>
            <p>
                el DOM proporciona una representación jerárquica del documento como un conjunto de nodos y objetos, permitiendo a los programadores
                interactuar con el contenido, la estructura y el estilo de las páginas web de manera dinámica.
            </p>`



$whatisDOM.textContent =text
$whatisDOM.innerHTML =text
$whatisDOM.outerHTML =text