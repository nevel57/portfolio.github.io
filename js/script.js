document.addEventListener('DOMContentLoaded', () => {
    const distortion = document.createElement('div');
    distortion.id = 'distortion';
    document.body.appendChild(distortion);

    // Оптимизация: используем requestAnimationFrame
    let lastX = 0;
    let lastY = 0;
    let isVisible = false;

    const updatePosition = () => {
        distortion.style.left = `${lastX}px`;
        distortion.style.top = `${lastY}px`;
        if (isVisible) requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', (e) => {
        lastX = e.clientX;
        lastY = e.clientY;

        if (!isVisible) {
            isVisible = true;
            distortion.style.opacity = '1';
            updatePosition();
        }
    });

    window.addEventListener('mouseout', () => {
        isVisible = false;
        distortion.style.opacity = '0';
    });

    // Адаптация к фону
    const container = document.querySelector('.container');
    window.addEventListener('mousemove', (e) => {
        if (container) {
            const rect = container.getBoundingClientRect();
            const isInside =
                e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= rect.top &&
                e.clientY <= rect.bottom;

            distortion.style.background = isInside
                ? 'radial-gradient(circle, rgba(30, 30, 30, 0.95) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(70, 70, 70, 0.85) 0%, transparent 70%)';
        }
    });
});

// Функция для показа модального окна
function showRoadmapModal(skill) {
  const modal = document.getElementById('roadmapModal');
  const skillName = document.getElementById('skillName');
  const modalContent = document.getElementById('modalContent');

  // Установка названия навыка
  skillName.textContent = skill;

  // Загрузка контента (можно заменить на реальные данные)
  modalContent.innerHTML = `
    <h4>Этапы изучения ${skill}:</h4>
    <ol class="roadmap-steps">
      <li>Основы</li>
      <li>Продвинутые концепции</li>
      <li>Практические проекты</li>
      <li>Оптимизация</li>
    </ol>
    <div class="resources">
      <h4>Ресурсы:</h4>
      <a href="#" target="_blank">Официальная документация</a><br>
      <a href="#" target="_blank">Лучшие курсы</a>
    </div>
  `;

  // Показываем модальное окно
  modal.classList.add('active');

  // Закрытие по клику на overlay или крестик
  modal.querySelector('.modal-close').onclick = () => {
    modal.classList.remove('active');
  };

  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  };
}

// Назначение обработчиков для кнопок Roadmap
document.querySelectorAll('.roadmap-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const skill = this.getAttribute('data-skill');
    showRoadmapModal(skill);
  });
});