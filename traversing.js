const $cards = document.querySelector(".cards");
console.log($cards); // Imprime el elemento $cards en la consola

// Imprime todos los hijos de $cards
console.log($cards.children);

// Intenta acceder al hijo en la posición 21 (si existe)
console.log($cards.children[21]);

// Imprime el elemento padre de $cards
console.log($cards.parentElement);

// Imprime el primer hijo de $cards
console.log($cards.firstElementChild);

// Imprime el último hijo de $cards
console.log($cards.lastElementChild);

// Imprime el elemento hermano anterior de $cards
console.log($cards.previousElementSibling);

// Imprime el elemento hermano siguiente de $cards
console.log($cards.nextElementSibling);

// Encuentra el ancestro más cercano de $cards que sea un <div>
console.log($cards.closest("div"));

// Encuentra el ancestro más cercano de $cards que sea el <body>
console.log($cards.closest("body"));

// Encuentra el tercer hijo de $cards y luego el ancestro más cercano que sea una <section>
console.log($cards.children[3].closest("section"));
