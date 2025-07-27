function showPopup(content) {
  const popup = document.getElementById('popup');
  document.getElementById('popupContent').innerText = content;
  popup.style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function getUserName() {
  // Vérifie si un prénom est déjà stocké
  let name = localStorage.getItem("username");

  // Si non, demande le prénom
  if (!name) {
    name = prompt("What is your first name?");
    if (name) {
      localStorage.setItem("username", name);
    } else {
      name = "Guest";
    }
  }

  return name;
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  else if (hour < 18) return "Good afternoon";
  else return "Good evening";
}

function showWelcomeMessage() {
  const name = getUserName();
  const greeting = getGreeting();
  const message = `${greeting}, ${name}! Welcome to the ChezElle intranet.`;
  document.getElementById("welcome-message").textContent = message;
}

showWelcomeMessage();


// Assistant panel toggle
const toggleBtn = document.getElementById('assistantToggle');
const panel = document.getElementById('assistantPanel');

toggleBtn.addEventListener('click', () => {
  panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
});
