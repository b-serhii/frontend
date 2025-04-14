function showStudent(id) {
    const allStudents = document.querySelectorAll('.student-info');
    allStudents.forEach(div => {
      div.classList.remove('active');
    });
  
    const selected = document.getElementById(id);
    if (selected) {
      selected.classList.add('active');
    }
  }
  
  function toggleTheme() {
    document.body.classList.toggle('light-theme');
    // Опціонально: зберегти вибір у localStorage
  }
  
  
  window.onload = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.body.classList.add('light-theme');
    }
  };
  

  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
  }
  
  function showStudent(id) {
  const allStudents = document.querySelectorAll('.student-info');
  allStudents.forEach(div => div.classList.remove('active'));

  const selected = document.getElementById(id);
  if (selected) {
    selected.classList.add('active');
  }

  // Закриває бургер-меню на мобільних
  const sidebar = document.querySelector('.sidebar');
  if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
  }
}
