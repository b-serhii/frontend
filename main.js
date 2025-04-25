function showStudent(studentId) {
  // Прибрати active з усіх блоків student-info
  document.querySelectorAll('.student-info').forEach(el => el.classList.remove('active'));

  // Показати вибраного студента або галерею
  const selected = document.getElementById(studentId);
  if (selected) {
    selected.classList.add('active');
  }

  // Підсвітити активний елемент у списку
  const studentItems = document.querySelectorAll('.student-item');
  studentItems.forEach(item => item.classList.remove('active'));
  const clickedItem = Array.from(studentItems).find(item =>
    item.getAttribute('onclick')?.includes(`'${studentId}'`)
  );
  if (clickedItem) {
    clickedItem.classList.add('active');
  }

  // Закрити бургер-меню на мобільних
  const sidebar = document.querySelector('.sidebar');
  if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
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

function openModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  modal.style.display = "flex";
  modalImg.src = imgElement.src;
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}
modalImg.addEventListener('click', (e) => e.stopPropagation());




const studentItems = document.querySelectorAll('.student-item');


