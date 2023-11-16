// Función para agregar la clase activa al botón del navbar según la posición del desplazamiento
function actualizarBotonesNav() { //Función que verifica la posición de las seciones en la pantalla y asigna la clase activo donde corresponda
    const secciones = document.querySelectorAll('section'); // Seleccionar todos los elementos "section" en el HTML
    const botonesNav = document.querySelectorAll('nav ul li a'); //Selecciona los elementos a resaltar
  
    secciones.forEach((seccion, index) => { //Itera sobre todas las secciones (los parámetros son la sección actual y su índice en el array)
      const rect = seccion.getBoundingClientRect(); //Obtiene un objeto que describe la posición de la sección actual en la pantalla
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) { //Comprueba si la sección empieza en la mitad superior de la pantalla
        botonesNav.forEach((boton) => {
          boton.classList.remove('activo');
        });
        botonesNav[index].classList.add('activo');
      }
    });
  }
  
  // Agregar un controlador de eventos al desplazamiento de la ventana
  window.addEventListener('scroll', actualizarBotonesNav);
  
  // Llamar a la función inicialmente para resaltar el botón correcto al cargar la página
  actualizarBotonesNav();