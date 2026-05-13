const spotlightContainer = document.querySelector("#spotlights");
const membersUrl = "data/members.json";

async function getMembers() {
  try {
    const response = await fetch(membersUrl);

    if (response.ok) {
      const members = await response.json();
      displaySpotlights(members);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error("Members data error:", error);
  }
}

function displaySpotlights(members) {
  spotlightContainer.innerHTML = "";

  const qualifiedMembers = members.filter(
    (member) =>
      member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
  );

  const randomMembers = qualifiedMembers
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  randomMembers.forEach((member) => {
    const card = document.createElement("section");
    card.classList.add("spotlight-card");

    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="${member.image}" alt="${member.name} logo" width="120" height="80" loading="lazy">
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Membership:</strong> ${member.membershipLevel}</p>
      <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
    `;

    spotlightContainer.appendChild(card);
  });
}

getMembers();