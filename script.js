let theme = false;

function switchTheme() {
  const navbar = document.getElementById('navbar')
  const cards = document.querySelectorAll('.card')
  const tables = document.querySelectorAll('.table')
  const cardColums = document.querySelectorAll('.column')
  const footerText = document.querySelector('.navbar-text')
  const h1Title = document.getElementById('h1_title')
  const button = document.getElementById('themeSwitch')
  const szoveg = document.getElementById('szoveg')

  
  if (theme === false) {
    
    document.body.classList.add('bg-dark')
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
      
      szoveg.classList.add('text-white')
  }
  else {
    document.body.classList.remove('bg-dark')
    document.body.classList.add('bg-light')

    navbar.classList.remove('navbar-dark', 'bg-dark')
    navbar.classList.add('navbar-light', 'bg-light')
          cards.forEach(card => {
            
        card.classList.add("text-white", "bg-dark", "border-light")
        card.classList.remove("text-white", "bg-dark", "border-dark")
      });

      tables.forEach(table => {
        table.classList.remove('table-dark')
        table.classList.add('table-light')
      })
            cardColums.forEach(card => {
        card.classList.remove('col-12')
        card.classList.add('col')
      })
      h1Title.innerHTML = "This is the light theme"
      h1Title.classList.remove('text-white')
      h1Title.classList.add('text-dark')
      footerText.style.paddingLeft = '0px';
      footerText.style.display.remove = 'block';
      footerText.classList.remove('text-white')
      footerText.classList.add('text-dark')

      szoveg.classList.remove('text-white')
      szoveg.classList.add('text-dark')
  }
  theme = !theme
} 

