function showSection(section) {
  const content = document.getElementById('content');

  if (section === 'home') {
    content.style.opacity = '0';
    document.getElementById('nav').style.display = 'none';
    
    setTimeout(() => {
      content.style.display = 'none';
      document.getElementById('cover').style.display = 'flex';
      document.querySelector('.enter-button').style.opacity = '1';
      document.getElementById('floating-menu').style.display = 'none';
      document.getElementById('floating-menu').style.opacity = '0';
      
      // Reiniciar las animaciones de las flores
      document.querySelectorAll('.emoji').forEach(elem => {
        elem.style.animation = 'none';
        setTimeout(() => elem.style.animation = '', 10);
      });
    }, 500);
    return;
  }
  
  // Si es "Empezar", mostramos el menú flotante
  if (section === 'start') {
    // Ocultar el botón de empezar
    document.querySelector('.enter-button').style.opacity = '0';
    
    // Mostrar los elementos flotantes
    const floatingMenu = document.getElementById('floating-menu');
    floatingMenu.style.display = 'flex';
    
    // Definir diferentes animaciones para cada elemento
    const animations = [
      'floatInTop 0.8s ease forwards',  // Sobre mí (arriba izquierda)
      'floatInBottom 0.8s ease forwards',  // Lenguajes (abajo izquierda)
      'floatInTop 0.8s ease forwards',  // Proyectos (arriba derecha)
      'floatInBottom 0.8s ease forwards'  // Contacto (abajo derecha)
    ];
    
    setTimeout(() => {
      floatingMenu.style.opacity = '1';
      
      // Aplicar animaciones a cada elemento por su clase y posiciones
      const aboutItem = document.querySelector('.item-about');
      aboutItem.style.animation = animations[0] + ' 0.3s';
      aboutItem.style.top = '10%';
      aboutItem.style.left = '20%';
      aboutItem.style.bottom = 'auto';
      
      const skillsItem = document.querySelector('.item-skills');
      skillsItem.style.animation = animations[1] + ' 0.4s';
      skillsItem.style.bottom = '20%';
      skillsItem.style.left = '20%';
      skillsItem.style.top = 'auto';
      
      const projectsItem = document.querySelector('.item-projects');
      projectsItem.style.animation = animations[2] + ' 0.3s';
      projectsItem.style.top = '10%';
      projectsItem.style.right = '20%';
      projectsItem.style.bottom = 'auto';
      
      const contactItem = document.querySelector('.item-contact');
      contactItem.style.animation = animations[3] + ' 0.4s';
      contactItem.style.bottom = '20%';
      contactItem.style.right = '20%';
      contactItem.style.top = 'auto';
    }, 100);
    
    return;
  }
  
  // Para secciones de contenido (about, skills, projects, contact)
  // Ocultamos la pantalla principal y mostramos la sección de contenido
  document.getElementById('cover').style.display = 'none';
  
  // Configurar la navegación simplificada con solo Inicio y la sección seleccionada
  const nav = document.getElementById('nav');
  nav.innerHTML = '';
  
  // Crear el botón de inicio
  const homeButton = document.createElement('button');
  homeButton.className = 'home-button';
  homeButton.setAttribute('onclick', "showSection('home')");
  homeButton.textContent = 'Inicio';
  nav.appendChild(homeButton);
  
  // Crear el botón de la sección actual
  const sectionButton = document.createElement('button');
  sectionButton.setAttribute('onclick', `showSection('${section}')`);
  sectionButton.className = 'active';
  
  // Configurar el texto del botón según la sección
  switch(section) {
    case 'about':
      sectionButton.textContent = 'Sobre mí';
      break;
    case 'skills':
      sectionButton.textContent = 'Lenguajes';
      break;
    case 'projects':
      sectionButton.textContent = 'Proyectos';
      break;
    case 'contact':
      sectionButton.textContent = 'Contacto';
      break;
  }
  
  nav.appendChild(sectionButton);
  nav.style.display = 'flex';
  
  // Preparamos el contenido
  content.innerHTML = '';
  content.className = 'content fade-in';
  content.style.display = 'block';
  content.style.backgroundColor = '#E6E6FA';
  
  setTimeout(() => {
    content.style.opacity = '1';
  }, 10);
  
  let html = '';
  
  if (section === 'about') {
    html = `
      <h2 class="section-title">👩‍💻 Sobre mí</h2>
      <div class="content-items">
        <div class="item slide-in">
          <div class="emoji-icon">💡</div>
          <p>Me encanta aprender cosas nuevas y resolver problemas con código.</p>
        </div>
        <div class="item slide-in" style="animation-delay: 0.2s">
          <div class="emoji-icon">🚀</div>
          <p>Actualmente estoy enfocándome en el desarrollo fullstack.</p>
        </div>
        <div class="item slide-in" style="animation-delay: 0.4s">
          <div class="emoji-icon">📚</div>
          <p>Estoy practicando con proyectos para fortalecer mis habilidades.</p>
        </div>
        <div class="item slide-in" style="animation-delay: 0.6s">
          <div class="emoji-icon">🌱</div>
          <p>Aprendiendo constantemente nuevas tecnologías y buenas prácticas.</p>
        </div>
      </div>
    `;
  } else if (section === 'skills') {
    html = `
      <h2 class="section-title">🛠 Tecnologías con las que trabajo</h2>
      <div class="content-items">
        <div class="skill-card pop-in">
          <h3>Interfaz</h3>
          <div class="skill-badge">HTML</div>
          <div class="skill-badge">CSS</div>
          <div class="skill-badge">JavaScript</div>
          <div class="skill-badge">AJAX</div>
          <div class="skill-badge">Bootstrap</div>
        </div>
        <div class="skill-card pop-in" style="animation-delay: 0.3s">
          <h3>Backend</h3>
          <div class="skill-badge">PHP</div>
        </div>
        <div class="skill-card pop-in" style="animation-delay: 0.6s">
          <h3>Base de datos</h3>
          <div class="skill-badge">MySQL</div>
        </div>
      </div>
    `;
  } else if (section === 'projects') {
    html = `
      <h2 class="section-title">📂 Proyectos</h2>
      <div class="content-items">
        <div class="project-card fade-in-up">
          <h3>📌 Formulario de Registro de Usuarios</h3>
          <div class="project-details">
            <p><strong>🧩 Tecnologías:</strong> HTML, CSS, JavaScript, PHP, MySQL</p>
            <p><strong>🗂 Funcionalidades:</strong> validación de campos, almacenamiento en base de datos</p>
          </div>
        </div>
        <div class="project-card fade-in-up" style="animation-delay: 0.3s">
          <h3>📌 Lista de Tareas</h3>
          <div class="project-details">
            <p><strong>🧩 Tecnologías:</strong> HTML, CSS, JavaScript</p>
            <p><strong>🗂 Funcionalidades:</strong> agregar tareas, marcar completadas, eliminar tareas</p>
          </div>
        </div>
      </div>
    `;
  } else if (section === 'contact') {
    html = `
      <h2 class="section-title">📫 Contacto</h2>
      <div class="content-items">
        <div class="contact-item scale-in">
          <div class="contact-icon">📧</div>
          <p>Correo: <a href="mailto:veritovargas3105@gmail.com">veritovargas3105@gmail.com</a></p>
        </div>
        <div class="contact-item scale-in">
          <div class="contact-icon">📞</div>
          <p>Teléfono: 3214691930</p>
        </div>
        <div class="contact-item scale-in" style="animation-delay: 0.3s">
          <div class="contact-icon">🌐</div>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/veronica-vargas-742b5a305" target="_blank">veronica-vargas-742b5a305</a></p>
        </div>
        <div class="contact-item scale-in" style="animation-delay: 0.6s">
          <div class="contact-icon">🐈</div>
          <p>GitHub: <a href="https://github.com/Vvargas310">Vvargas310</a></p>
        </div>
      </div>
    `;
  }
  
  content.innerHTML = html;
}

// Crear brillos
function createSparkles() {
  const flowerBg = document.querySelector('.flower-bg');
  if (flowerBg) {
    for (let i = 0; i < 15; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      sparkle.style.top = Math.random() * 100 + '%';
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.animationDelay = Math.random() * 3 + 's';
      flowerBg.appendChild(sparkle);
    }
  }
}

window.addEventListener('load', createSparkles);
  