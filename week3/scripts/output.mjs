export function setTitle(course) {
  const courseTitle = document.querySelector("#courseTitle");
  courseTitle.textContent = `${course.code}: ${course.name}`;
}

export function renderSections(sections) {
  const sectionContainer = document.querySelector("#sections");

  sectionContainer.innerHTML = "";

  sections.forEach((section) => {
    const sectionCard = document.createElement("article");
    sectionCard.classList.add("course-section");

    sectionCard.innerHTML = `
      <h3>Section ${section.sectionNum}</h3>
      <p><strong>Room:</strong> ${section.roomNum}</p>
      <p><strong>Enrolled:</strong> ${section.enrolled}</p>
      <p><strong>Days:</strong> ${section.days}</p>
      <p><strong>Instructor:</strong> ${section.instructor}</p>
    `;

    sectionContainer.appendChild(sectionCard);
  });
}