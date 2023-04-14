const chatGpt = document.querySelector('#chat-gpt');
const text = chatGpt.textContent;
chatGpt.textContent = '';

let index = 0;
function escrever() {
  chatGpt.textContent += text[index];
  index++;
  if (index > text.length - 1) {
    clearInterval(intervalo);
  }
}

const intervalo = setInterval(escrever, 45);


// Dando foco aos tópicos do menu selecionados
const menuTopics = document.querySelectorAll('.menu-topics li');

menuTopics.forEach(topic => {
  topic.addEventListener('click', () => {
    // Remove a classe 'active' de todos os elementos da lista
    menuTopics.forEach(topic => topic.classList.remove('active'));
    // Adiciona a classe 'active' ao elemento clicado
    topic.classList.add('active');
  });

  
});
