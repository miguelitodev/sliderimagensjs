let imagens = [
	"https://images.unsplash.com/photo-1597694491741-8b9dc3645656?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
	"https://images.unsplash.com/photo-1588699219474-fce022b9f633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80",
	"https://images.unsplash.com/photo-1593642703013-5a3b53c965f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80",
	"https://images.unsplash.com/photo-1597697349091-cc9ccb2b4241?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
];

let indice = 0;
let valorTotal = imagens.length;
const elementoImagem = document.querySelector(".imagem");

function trocarImagem(valorIndice) {
	if (valorIndice === valorTotal) {
		elementoImagem.style.backgroundImage = `url(${imagens[valorIndice]})`;
		return (indice = 0);
	} else {
		elementoImagem.style.backgroundImage = `url(${imagens[valorIndice]})`;
		return indice++;
	}
}

// setInterval(função, tempo)
setInterval(() => {
	trocarImagem(indice);
}, 3000);

/**
 * criar uma função
 *
 * -> se ultimo valor que for passado for igual ao valoTotal,
 * colocar o ultimo e resetar o indice
 *
 * -> se não, coloca a imagem de acordo com o valor passado
 * e add +1 ao indice
 *
 * setInvertal((funcaoTrocar) => {}, 2000)
 * -> executar a cada tempo a funcao
 *
 */
