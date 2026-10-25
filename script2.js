const imagem = document.getElementById('imagem');
const container = document.getElementById('container');

imagem.addEventListener('click', () => {
  // Gera posições aleatórias dentro do container
  const maxX = container.clientWidth - imagem.clientWidth;
  const maxY = container.clientHeight - imagem.clientHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  imagem.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
