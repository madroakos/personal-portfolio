const sections = ['about', 'skills', 'portfolio', 'experience', 'contact'];

sections.forEach(section => {
  const element = document.getElementById(section);
  const button = document.getElementById(`${section}ButtonText`);
  const symbol = document.getElementById(`${section}ButtonSymbol`);

  button.addEventListener('click', (event) => {
    event.preventDefault();
    element.scrollIntoView({ behavior: 'smooth'});
  });

  symbol.addEventListener('click', (event) => {
    event.preventDefault();
    element.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('introductionSection')) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});
