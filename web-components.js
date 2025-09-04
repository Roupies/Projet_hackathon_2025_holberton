// Web Components for Ask The Model
// Modern, reusable components using Custom Elements API

// Shared chapter configuration - single source of truth
const CHAPTERS_CONFIG = [
  { id: 'chapter1', url: 'chapter1.html', shortTitle: 'LLMs 101', fullTitle: 'LLMs 101: A Crash Course' },
  { id: 'chapter2', url: 'chapter2.html', shortTitle: 'Behind the Scenes', fullTitle: 'Behind the Scenes: How LLMs Work' },
  { id: 'chapter3', url: 'chapter3.html', shortTitle: 'Timeline', fullTitle: 'From ELIZA to GPT-5: The LLM Timeline' },
  { id: 'chapter4', url: 'chapter4.html', shortTitle: 'The LLM DNA', fullTitle: 'The LLM DNA: Tokens, Parameters & Prompts' },
  { id: 'chapter5', url: 'chapter5.html', shortTitle: 'LLM Toolbox', fullTitle: 'LLM Toolbox: Today\'s Top Tools' },
  { id: 'chapter6', url: 'chapter6.html', shortTitle: 'Business Side', fullTitle: 'The Business Side: How LLMs Make Money' },
  { id: 'chapter7', url: 'chapter7.html', shortTitle: 'Open Source', fullTitle: 'The Great Debate: Open Source vs Proprietary' },
  { id: 'chapter8', url: 'chapter8.html', shortTitle: 'Prompt Engineering', fullTitle: 'Prompt Engineering: Your New Superpower' },
  { id: 'chapter9', url: 'chapter9.html', shortTitle: 'AI in IDE', fullTitle: 'AI in Action: LLMs Inside Your IDE' },
  { id: 'chapter10', url: 'chapter10.html', shortTitle: 'Memory Explained', fullTitle: 'Do LLMs Really Remember? Memory Explained' },
  { id: 'chapter11', url: 'chapter11.html', shortTitle: 'AI Jargon', fullTitle: 'AI Jargon Demystified (Glossary)' },
  { id: 'atm-xperience', url: 'atm-xperience.html', shortTitle: 'ATM-Xperience', fullTitle: 'ATM-Xperience: Interactive Demos' }
];

// Header Component
class AskTheModelHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="sticky top-0 bg-gray-800 px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center z-50 shadow-lg border-b border-gray-700">
        <a href="index.html" class="text-2xl md:text-3xl font-bold text-purple-400 mb-4 md:mb-0 hover:text-purple-300 transition-colors duration-200">Ask The Model</a>
        <nav class="flex space-x-4 md:space-x-6">
          <a href="index.html" class="text-gray-300 hover:text-purple-400 transition-colors duration-200">Home</a>
          <a href="https://github.com/Roupies/Projet_hackathon_2025_holberton" target="_blank" class="text-gray-300 hover:text-purple-400 transition-colors duration-200">GitHub</a>
          <a href="#contact" class="text-gray-300 hover:text-purple-400 transition-colors duration-200">Contact</a>
        </nav>
      </header>
    `;
  }
}

// Sidebar Component
class AskTheModelSidebar extends HTMLElement {
  constructor() {
    super();
    this.chapters = CHAPTERS_CONFIG;
  }

  connectedCallback() {
    this.render();
  }

  getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    
    if (filename === 'index.html') return 'home';
    
    for (const chapter of this.chapters) {
      if (chapter.url === filename) {
        return chapter.id;
      }
    }
    return 'home';
  }

  render() {
    const currentPage = this.getCurrentPage();
    
    let sidebarHTML = `
      <aside class="lg:w-64 bg-gray-800 border-r border-gray-700 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
        <div class="p-4 lg:p-6 flex-shrink-0">
          <h2 class="text-xl font-semibold text-purple-400 mb-6 text-center">Chapters</h2>
        </div>
        <nav class="px-4 lg:px-6 pb-6 space-y-2">
    `;
    
    this.chapters.forEach(chapter => {
      const isCurrentPage = currentPage === chapter.id;
      
      let classes = 'block text-center py-2 px-3 rounded-lg transition-all duration-200';
      
      if (isCurrentPage) {
        classes += ' text-purple-400 bg-purple-900/20 font-semibold';
      } else {
        classes += ' text-gray-300 hover:text-purple-400 hover:bg-gray-700';
      }
      
      sidebarHTML += `<a href="${chapter.url}" class="${classes}">${chapter.shortTitle}</a>`;
    });
    
    sidebarHTML += `
        </nav>
        <div class="flex-grow bg-gray-800"></div>
      </aside>
    `;
    
    this.innerHTML = sidebarHTML;
  }
}

// Footer Component
class AskTheModelFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer id="contact" class="text-center py-8 text-gray-400 border-t border-gray-700 mt-12">
        <p>Team: ATM Corp. | Ask The Model | Hackathon organized by Holberton 2025 | <a href="https://github.com/Roupies/Projet_hackathon_2025_holberton" target="_blank" class="text-purple-400 hover:text-purple-300">GitHub</a></p>
      </footer>
    `;
  }
}

// Mobile Navigation Component
class AskTheModelMobileNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 z-40">
        <div class="flex justify-around items-center py-3 px-4">
          <a href="index.html" class="flex flex-col items-center text-gray-300 hover:text-purple-400 transition-colors duration-200">
            <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            <span class="text-xs">Home</span>
          </a>
          <a href="chapter1.html" class="flex flex-col items-center text-gray-300 hover:text-purple-400 transition-colors duration-200">
            <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253"></path>
            </svg>
            <span class="text-xs">Chapters</span>
          </a>
          <a href="https://github.com/Roupies/Projet_hackathon_2025_holberton" target="_blank" class="flex flex-col items-center text-gray-300 hover:text-purple-400 transition-colors duration-200">
            <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
            <span class="text-xs">GitHub</span>
          </a>
        </div>
      </div>
    `;
    
    // Highlight current page in mobile nav
    this.highlightCurrentPage();
  }

  highlightCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    
    if (filename === 'index.html') return;
    
    const chaptersLink = this.querySelector('a[href*="chapter"]');
    if (chaptersLink) {
      chaptersLink.className = 'flex flex-col items-center text-purple-400';
    }
  }
}

// Chapter Navigation Component
class AskTheModelChapterNav extends HTMLElement {
  constructor() {
    super();
    this.chapters = CHAPTERS_CONFIG;
  }

  connectedCallback() {
    this.render();
  }

  getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    
    if (filename === 'index.html') return 'home';
    
    for (const chapter of this.chapters) {
      if (chapter.url === filename) {
        return chapter;
      }
    }
    return null;
  }

  render() {
    const currentChapter = this.getCurrentPage();
    if (!currentChapter) return;
    
    const chapterIndex = this.chapters.findIndex(c => c.id === currentChapter.id);
    const prevChapter = chapterIndex > 0 ? this.chapters[chapterIndex - 1] : null;
    const nextChapter = chapterIndex < this.chapters.length - 1 ? this.chapters[chapterIndex + 1] : null;
    
    let navHTML = '<div class="flex justify-between pt-8">';
    
    if (prevChapter) {
      navHTML += `
        <a href="${prevChapter.url}" class="inline-flex items-center text-purple-400 hover:text-purple-300 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Previous: ${prevChapter.shortTitle}
        </a>
      `;
    } else {
      navHTML += '<div></div>';
    }
    
    if (nextChapter) {
      navHTML += `
        <a href="${nextChapter.url}" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
          Next: ${nextChapter.shortTitle}
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      `;
    }
    
    navHTML += '</div>';
    this.innerHTML = navHTML;
  }
}

// Register all components
customElements.define('ask-the-model-header', AskTheModelHeader);
customElements.define('ask-the-model-sidebar', AskTheModelSidebar);
customElements.define('ask-the-model-footer', AskTheModelFooter);
customElements.define('ask-the-model-mobile-nav', AskTheModelMobileNav);
customElements.define('ask-the-model-chapter-nav', AskTheModelChapterNav);

// Export for potential external use
window.AskTheModelComponents = {
  AskTheModelHeader,
  AskTheModelSidebar,
  AskTheModelFooter,
  AskTheModelMobileNav,
  AskTheModelChapterNav
};
