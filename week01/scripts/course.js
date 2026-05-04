const courses = [
  { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
  { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
  { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: true },
  { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: true },
  { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: true },
  { subject: 'WDD', number: 231, title: 'Web Frontend Development I', credits: 2, completed: false }
];

const listaCursos = document.querySelector('#course-list');
const totalCreditos = document.querySelector('#total-credits');
const botonTodos = document.querySelector('#all');
const botonCse = document.querySelector('#cse');
const botonWdd = document.querySelector('#wdd');

function mostrarCursos(cursosFiltrados) {
  listaCursos.innerHTML = '';

  cursosFiltrados.forEach(curso => {
    const tarjetaCurso = document.createElement('section');
    tarjetaCurso.classList.add('course-card');

    if (curso.completed) {
      tarjetaCurso.classList.add('completed');
    }

    tarjetaCurso.textContent = `${curso.subject} ${curso.number}`;
    tarjetaCurso.title = `${curso.title} - ${curso.credits} credits`;
    listaCursos.appendChild(tarjetaCurso);
  });

  const creditos = cursosFiltrados.reduce((total, curso) => total + curso.credits, 0);
  totalCreditos.textContent = `The total credits for courses listed above is ${creditos}`;
}

botonTodos.addEventListener('click', () => mostrarCursos(courses));
botonCse.addEventListener('click', () => mostrarCursos(courses.filter(curso => curso.subject === 'CSE')));
botonWdd.addEventListener('click', () => mostrarCursos(courses.filter(curso => curso.subject === 'WDD')));

mostrarCursos(courses);