tailwind.config = {
    theme: {
      extend: {
        colors: {
            bgColorLight: '#73AFE8',
            bgColorDark: '#2A1768',
            bgBlueHover: '#509BE2',
            yellowDark: '#FBC02D',
            yellowLight: '#FFEB3B',
            yellowBorder: '#FBC02D',
            grayLight: '#D3D3D3',
            grayDark: '#707070',
            blueAccent: '#1E3A8A',
            greenLight: '#A7D7C5',
            redWarning: '#F44336',
            purpleAccent: '#6A1B9A',
        },
      },
    },
  };




// MARQUE-TEXT
function handleResize() {
    const marquee = document.getElementById('marquee-container');
    const staticText = document.getElementById('static-text');

    if (window.innerWidth >= 640) {
      marquee.style.display = 'flex';
      staticText.style.display = 'none';
    } else {
      marquee.style.display = 'none';
      staticText.style.display = 'flex';
    }
  }

  handleResize();
  window.addEventListener('resize', handleResize);



// HERO-SECTION

const text = "You’ve Come to the Right Place";
const typingTextElement = document.getElementById("typing-text");
const secondLineElement = document.getElementById("second-line");
let index = 0;

function typeText() {
  if (index < text.length) {
    typingTextElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 50);
  } else {
    setTimeout(() => {
      secondLineElement.classList.remove("opacity-0");
      secondLineElement.classList.add("opacity-100");
    }, 300);
  }
}

window.onload = () => {
  typeText();
};

// NAV-BAR
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const sidebarClose = document.getElementById("sidebar-close");
const sidebarOverlay = document.getElementById("sidebar-overlay");
const dropdownToggles = document.querySelectorAll("[data-dropdown]");

// Sidebar Toggle
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
  sidebarOverlay.classList.toggle("hidden");
});

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  sidebarOverlay.classList.add("hidden");
});

sidebarOverlay.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  sidebarOverlay.classList.add("hidden");
});

// Dropdowns in Sidebar
dropdownToggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    const dropdownId = toggle.dataset.dropdown;
    const dropdown = document.getElementById("dropdown-" + dropdownId);
    dropdown.classList.toggle("hidden");
  });
});

// Dropdown handling
const dropdowns = document.querySelectorAll('.relative.group');

dropdowns.forEach(dropdown => {
const button = dropdown.querySelector('button'); 
const content = dropdown.querySelector('div'); 
let hideTimeout;

// Show dropdown on hover
dropdown.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout);
  content.classList.remove('hidden');
});

// Hide dropdown with a delay
dropdown.addEventListener('mouseleave', () => {
  hideTimeout = setTimeout(() => {
    content.classList.add('hidden');
  }, 500);
});
});


// ZOOM-IN REMOVAL
// Prevent zooming with mouse wheel and touch gestures
document.addEventListener('wheel', function (event) {
if (event.ctrlKey || event.metaKey) {
  event.preventDefault();
}
}, { passive: false });

document.addEventListener('touchstart', function (event) {
if (event.touches.length > 1) {
  event.preventDefault();
}
}, { passive: false });

document.addEventListener('gesturestart', function (event) {
event.preventDefault();
});

// Block zooming via keyboard (Ctrl + +/- or Ctrl + scroll)
window.addEventListener('keydown', function (event) {
if ((event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '='))) {
  event.preventDefault();
}
});

// Block zooming via pinch zoom gesture on touch devices
document.addEventListener('touchmove', function (event) {
if (event.touches.length > 1) {
  event.preventDefault();
}
}, { passive: false });

