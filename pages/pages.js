
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
          greenGradientStart: '#A1D88A',
        },
      },
    },
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

// careersSection
document.addEventListener('DOMContentLoaded', function () {
  const careersSection = document.querySelector('#careers-text-container');
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          
          entry.target.classList.add('animate-fadeInUp');
          
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5, 
    }
  );


  observer.observe(careersSection);
});