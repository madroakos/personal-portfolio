const sections = ['about', 'skills', 'portfolio', 'experience', 'contact'];

sections.forEach(section => {
  const element = document.getElementById(section);
  const button = document.getElementById(`${section}ButtonText`);
  const symbol = document.getElementById(`${section}ButtonSymbol`);

  button.addEventListener('click', (event) => {
    event.preventDefault();
    element.scrollIntoView({ behavior: 'smooth' });
  });

  symbol.addEventListener('click', (event) => {
    event.preventDefault();
    element.scrollIntoView({ behavior: 'smooth' });
  });
});

const contactElement = document.getElementById('contact');
const secondContactButton = document.getElementById('secondContactButton');

secondContactButton.addEventListener('click', (event) => {
  event.preventDefault();
  contactElement.scrollIntoView({ behavior: 'smooth' });
});
