document.addEventListener('DOMContentLoaded', function() {
    // Обработчики для кнопок проектов
    const projectButtons = document.querySelectorAll('.project-buttons button');

    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectName = this.getAttribute('data-project');
            alert(`Вы выбрали проект: ${projectName}`);
            // В реальном проекте здесь может быть переход на страницу проекта
            // window.location.href = `/${projectName}`;
        });
    });

    // Дополнительные эффекты при наведении на кнопки
    projectButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Анимация прогресс-баров
    const skillLevels = document.querySelectorAll('.skill-level');

    skillLevels.forEach(level => {
        // Устанавливаем значение из data-атрибута
        const percent = level.getAttribute('data-level');
        level.style.setProperty('--level', percent);

        // Добавляем класс для анимации после небольшой задержки
        setTimeout(() => {
            level.classList.add('animated');
        }, 100);
    });
});

// Показ модального окна
function showRoadmapModal(skill) {
  const modal = document.getElementById('roadmapModal');
  const skillName = document.getElementById('skillName');
  const modalContent = document.getElementById('modalContent');

  // Устанавливаем название навыка
  skillName.textContent = skill;

  // Заполняем контент (пример)
  modalContent.innerHTML = `
    <h4>Этапы изучения:</h4>
    <ol>
      <li>Основы ${skill}</li>
      <li>Продвинутые концепции</li>
      <li>Реальные проекты</li>
    </ol>
    <div class="resources">
      <h4>Ресурсы:</h4>
      <a href="https://google.com/search?q=${skill}+roadmap" target="_blank">Искать в Google</a>
    </div>
  `;

  // Показываем модальное окно
  modal.classList.add('active');

  // Запрещаем прокрутку body при открытом модальном окне
  document.body.style.overflow = 'hidden';

  // Закрытие по клику на крестик
  document.querySelector('.modal-close').onclick = closeModal;

  // Закрытие по клику вне окна
  modal.onclick = function(e) {
    if (e.target === modal) {
      closeModal();
    }
  };

  // Закрытие по ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

function closeModal() {
  const modal = document.getElementById('roadmapModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Назначаем обработчики на все кнопки Roadmap
document.querySelectorAll('.roadmap-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const skill = this.getAttribute('data-skill');
    showRoadmapModal(skill);
  });
});