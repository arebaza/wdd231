const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

const membersURL = "data/members.json";

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");
});

async function getMembers() {
  try {
    const response = await fetch(membersURL);

    if (!response.ok) {
      throw new Error("Members data could not be loaded.");
    }

    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    membersContainer.innerHTML = `<p>There was an error loading the business directory.</p>`;
    console.error(error);
  }
}

function displayMembers(members) {
  membersContainer.innerHTML = "";

  members.forEach((member) => {
    const card = document.createElement("section");
    const image = document.createElement("img");
    const name = document.createElement("h2");
    const tagline = document.createElement("p");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    const website = document.createElement("a");
    const membership = document.createElement("p");

    card.classList.add("member-card");

    image.setAttribute("src", `images/${member.image}`);
    image.setAttribute("alt", `${member.name} logo`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "100");
    image.setAttribute("height", "100");

    name.textContent = member.name;
    tagline.textContent = member.tagline;
    tagline.classList.add("tagline");

    address.textContent = member.address;
    phone.textContent = member.phone;

    website.setAttribute("href", member.website);
    website.setAttribute("target", "_blank");
    website.setAttribute("rel", "noopener");
    website.textContent = "Visit Website";

    membership.textContent = `Membership Level: ${getMembershipName(member.membershipLevel)}`;
    membership.classList.add("membership");

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(tagline);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);

    membersContainer.appendChild(card);
  });
}

function getMembershipName(level) {
  if (level === 3) {
    return "Gold";
  }

  if (level === 2) {
    return "Silver";
  }

  return "Member";
}

gridButton.addEventListener("click", () => {
  membersContainer.classList.add("grid");
  membersContainer.classList.remove("list");
});

listButton.addEventListener("click", () => {
  membersContainer.classList.add("list");
  membersContainer.classList.remove("grid");
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastmodified").textContent = document.lastModified;

getMembers();