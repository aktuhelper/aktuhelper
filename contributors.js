// contributors.js
const contributors = [
  {
    name: "Ankit Sharma",
    amount: 150,
    crown: true
  },
  {
    name: "Priya Verma",
    amount: 120,
    crown: false
  },
  {
    name: "abhi56ti",
    amount: 100,
    crown: false
  }
  
];

function loadContributors() {
  const list = document.querySelector("#contributors-list");
  if (!list) return;

  contributors.forEach((contributor) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    const span = document.createElement("span");
    span.textContent = contributor.name;

    if (contributor.crown) {
      const icon = document.createElement("i");
      icon.className = "fas fa-crown text-warning ms-2";
      icon.setAttribute("title", "Top Contributor");
      span.appendChild(icon);
    }

    const badge = document.createElement("span");
    badge.className = "badge bg-primary rounded-pill";
    badge.textContent = `₹${contributor.amount}`;

    li.appendChild(span);
    li.appendChild(badge);
    list.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", loadContributors);
