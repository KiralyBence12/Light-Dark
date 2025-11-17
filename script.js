function switchTheme() {
  document.body.classList.add('bg-dark')

  const navbar = document.getElementById('navbar')
  const cards = document.querySelectorAll('.card')
  const tables = document.querySelectorAll('.table')
  const cardColums = document.querySelectorAll('.column')
  const footerText = document.querySelector('.navbar-text')
  const h1Title = document.getElementById('h1_title')
  const button = document.getElementById('themeSwitch')

  navbar.classList.remove('navbar-light', 'bg-light')
  navbar.classList.add('navbar-dark', 'bg-dark')

  cards.forEach(card => {
    card.classList.add("text-white", "bg-dark", "border-light")
  });

  tables.forEach(table => {
    table.classList.add('table-dark')
  })

  cardColums.forEach(card => {
    card.classList.remove('col')
    card.classList.add('col-12')
  })

  footerText.style.paddingLeft = '1700px';
  footerText.style.display = 'block';
  footerText.classList.add('text-white')

  h1Title.innerHTML = "This is the dark theme"
  h1Title.classList.add('text-white')

  button.textContent = "Activate Light Theme"
  
} 

