
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

// quote section

    // Intersection Observer Setup
    document.addEventListener("DOMContentLoaded", function () {
      const section = document.getElementById("quote-section");
    
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target;
              const quoteIcon = element.querySelector(".quote-icon");
              const quoteText = element.querySelector(".quote-text");
              const quoteParagraph = element.querySelector(".quote-paragraph");
              const quoteAuthor = element.querySelector(".quote-author");
              const quoteLine = element.querySelector(".quote-line");
              quoteIcon.classList.add("animate-bounceIn");
              quoteText.classList.add("animate-slideInUp");
              quoteParagraph.classList.add("animate-fadeInDelay");
              quoteAuthor.classList.add("animate-fadeInDelay");
              quoteLine.classList.add("animate-scaleIn");
    
              setTimeout(() => {
                quoteIcon.style.opacity = "1";
                quoteText.style.opacity = "1";
                quoteParagraph.style.opacity = "1";
                quoteAuthor.style.opacity = "1";
                quoteLine.style.opacity = "1";
              }, 1200); 
    
              
              observer.unobserve(element);
            }
          });
        },
        {
          root: null,
          threshold: 0.3, 
        }
      );
    
      observer.observe(section);
    });
    
  //blog 
  const blogData = [
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, tortor nec bibendum varius, 
        eros felis malesuada lorem, ac convallis lacus turpis sit amet lectus. Duis sit amet velit eu odio pharetra cursus. 
        Praesent non nisi vel lacus tempus interdum sit amet eget ipsum.</p>
        
        <p>Nullam facilisis sapien a justo tempor, vel gravida libero vulputate. Maecenas venenatis nec purus a tincidunt. 
        Cras dignissim risus sit amet urna malesuada ultricies. Pellentesque sed libero at turpis hendrerit sollicitudin 
        a vel lorem. Aliquam fermentum tincidunt neque vel aliquet.</p>
        
        <p>Sed dictum magna vel leo condimentum, nec efficitur orci suscipit. Curabitur maximus velit neque, in maximus 
        lacus facilisis id. Donec ac porttitor elit. Pellentesque euismod leo et nisi eleifend, a auctor justo gravida.</p>
      `,
      image: "https://media.istockphoto.com/id/973190966/photo/high-angle-view-of-people-on-street.jpg?s=612x612&w=0&k=20&c=GMVFJukOSVsOFX3HUQyBMm7VTndqjVcqrgs0X1PjW_Y=",
      next: {
        title: "Consectetur Adipiscing Elit",
        snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus condimentum ex, a volutpat risus sagittis eu.",
        image: "https://media.istockphoto.com/id/95442265/photo/lottery.jpg?s=612x612&w=0&k=20&c=oflKM4MCpA0QxVefGxRiyQLaRJSahMOcfblIggQe9Co=",
      },
    },
    {
      title: "Consectetur Adipiscing Elit",
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida ligula non felis laoreet tempor. 
        Donec volutpat quam non orci vulputate tincidunt. Integer gravida bibendum nibh, quis placerat orci tincidunt ut.</p>
        
        <p>Morbi vitae justo auctor, tincidunt ipsum eget, facilisis sem. Suspendisse viverra orci quis arcu tincidunt, 
        id elementum sapien vulputate. Ut eget orci ut urna fermentum malesuada vel et odio.</p>
        
        <p>Nam gravida metus vel augue feugiat, non efficitur lectus dapibus. Vestibulum euismod, nulla non rhoncus tempus, 
        ligula enim dictum turpis, at aliquam mauris neque id libero. Pellentesque vel semper lectus.</p>
      `,
      image: "https://media.istockphoto.com/id/2108323542/photo/abstract-seamless-background-looped-animation-infinite-motion.jpg?s=612x612&w=0&k=20&c=dLXe4gKo9G-owQb42cR4kQe4g_wnVvIzOHffabjXtDg=",
      next: {
        title: "Vestibulum Euismod Nulla",
        snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus condimentum ex, a volutpat risus sagittis eu.",
        image: "https://media.istockphoto.com/id/2174403339/photo/woman-tablet-and-search-for-online-vacancy-with-career-opportunity-hiring-and-recruitment-app.jpg?s=612x612&w=0&k=20&c=VbTbvFUUl55dZRYhPiS-EjSwYxpn0j-xtui3HH1y7vU=",
      },
    },
    {
      title: "Vestibulum Euismod Nulla",
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum, lectus vitae dapibus malesuada, 
        est massa fermentum velit, non varius mauris risus nec nulla. Vivamus tristique quam et varius pellentesque.</p>
        
        <p>Etiam a convallis libero. Proin vehicula massa sit amet arcu lacinia, a viverra turpis elementum. Nam convallis 
        accumsan urna, nec fermentum sapien scelerisque at. Curabitur vehicula lectus a justo bibendum facilisis.</p>
        
        <p>Aenean ac risus ac elit pharetra malesuada eget a nisl. Integer eu odio ac tortor pharetra ultricies.</p>
      `,
      image: "https://media.istockphoto.com/id/2174403339/photo/woman-tablet-and-search-for-online-vacancy-with-career-opportunity-hiring-and-recruitment-app.jpg?s=612x612&w=0&k=20&c=VbTbvFUUl55dZRYhPiS-EjSwYxpn0j-xtui3HH1y7vU=",
      next: {
        title: "Aliquam Fermentum Tincidunt",
        snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus condimentum ex, a volutpat risus sagittis eu.",
        image: "https://media.istockphoto.com/id/2108323542/photo/abstract-seamless-background-looped-animation-infinite-motion.jpg?s=612x612&w=0&k=20&c=dLXe4gKo9G-owQb42cR4kQe4g_wnVvIzOHffabjXtDg=",
      },
    },
    {
      title: "Aliquam Fermentum Tincidunt",
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id semper orci. Vestibulum tempor purus et quam 
        luctus tristique. Sed at mi vel mi sagittis sollicitudin in et purus. Mauris ultricies sapien eros.</p>
        
        <p>Mauris vitae semper erat. Integer lacinia dui sit amet malesuada sollicitudin. Suspendisse et orci tincidunt, 
        feugiat eros id, ullamcorper sapien. Nunc fringilla, elit quis tincidunt tincidunt, velit sapien pulvinar augue.</p>
      `,
      image: "https://media.istockphoto.com/id/1005853368/photo/chance-to-change-with-cubes.jpg?s=612x612&w=0&k=20&c=DCFuLP0sgefGNuJiTFeOUfjKVkhnsag4MeECnOCq7gA=",
      next: {
        title: "Pellentesque Viverra Ligula",
        snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus condimentum ex, a volutpat risus sagittis eu.",
        image: "https://media.istockphoto.com/id/95442265/photo/lottery.jpg?s=612x612&w=0&k=20&c=oflKM4MCpA0QxVefGxRiyQLaRJSahMOcfblIggQe9Co=",
      },
    },
  ];

  let currentIndex = 0;

  const renderBlog = (index) => {
    const { title, content, image, next } = blogData[index];
    document.getElementById("dynamicHeading").textContent = title;
    document.getElementById("blogContent").innerHTML = `<p>${content}</p>`;
    document.getElementById("blogImage").src = image;
    document.getElementById("nextBlogTitle").textContent = next.title;
    document.getElementById("nextBlogSnippet").textContent = next.snippet;
    document.getElementById("nextBlogImage").src = next.image;
  };

  document.getElementById("prevButton").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      renderBlog(currentIndex);
    }
  });

  document.getElementById("nextButton").addEventListener("click", () => {
    if (currentIndex < blogData.length - 1) {
      currentIndex += 1;
      renderBlog(currentIndex);
    }
  });

  // Initial render
  renderBlog(currentIndex);



// Disable buttons when at boundaries
document.getElementById("prevButton").disabled = index === 0;
document.getElementById("nextButton").disabled = index === blogData.length - 1;

//blog-page 

