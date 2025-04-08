// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// Theme Manager
const themeManager = {
  init() {
    this.themeToggle = document.getElementById('theme-toggle');
    this.setInitialTheme();
    this.setupThemeToggle();
  },

  setInitialTheme() {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      this.themeToggle.checked = savedTheme === 'dark';
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', prefersDark);
      this.themeToggle.checked = prefersDark;
    }
  },

  setupThemeToggle() {
    this.themeToggle.addEventListener('change', () => {
      const isDark = this.themeToggle.checked;
      document.documentElement.classList.toggle('dark', isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        document.documentElement.classList.toggle('dark', e.matches);
        this.themeToggle.checked = e.matches;
      }
    });
  }
};

// Navigation Manager
const navManager = {
  init() {
    this.nav = document.querySelector('nav');
    this.menuIcon = document.getElementById('menu-icon');
    this.mobileMenu = document.querySelector('.md\\:hidden + .hidden');
    this.setupScrollHandler();
    this.setupMobileMenu();
    this.setupActiveSection();
  },

  setupScrollHandler() {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll <= 0) {
        this.nav.classList.remove('bg-white/80', 'dark:bg-gray-900/80', 'backdrop-blur-sm');
      } else {
        this.nav.classList.add('bg-white/80', 'dark:bg-gray-900/80', 'backdrop-blur-sm');
      }

      if (currentScroll > lastScroll && currentScroll > 100) {
        this.nav.classList.add('-translate-y-full');
      } else {
        this.nav.classList.remove('-translate-y-full');
      }

      lastScroll = currentScroll;
    });
  },

  setupMobileMenu() {
    this.menuIcon.addEventListener('click', () => {
      this.menuIcon.classList.toggle('active');
      this.mobileMenu.classList.toggle('hidden');
    });
  },

  setupActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('text-primary', 'dark:text-dark-primary');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('text-primary', 'dark:text-dark-primary');
            }
          });
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
  }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  themeManager.init();
  navManager.init();
}); 