# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Ask The Model" is an educational website about Large Language Models (LLMs) built for the Holberton School hackathon 2025 by ATM Corp. It's a comprehensive guide covering LLM fundamentals, architecture, business models, and practical applications.

## Architecture

This is a static website built with:
- **HTML5** with semantic structure
- **Tailwind CSS** (via CDN) for styling with a dark theme (purple and gray color scheme)
- **Custom Web Components** for reusable UI elements
- **Vanilla JavaScript** for component logic

### Web Components Structure

The site uses Custom Elements API with these main components defined in `web-components.js`:
- `<ask-the-model-header>` - Sticky navigation header
- `<ask-the-model-sidebar>` - Chapter navigation sidebar (desktop)
- `<ask-the-model-footer>` - Site footer with team info
- `<ask-the-model-mobile-nav>` - Bottom navigation for mobile
- `<ask-the-model-chapter-nav>` - Previous/Next chapter navigation

### Chapter System

The site contains 11 chapters covering different aspects of LLMs:
1. LLMs 101: A Crash Course
2. Behind the Scenes: How LLMs Work
3. From ELIZA to GPT-5: The LLM Timeline
4. The LLM DNA: Tokens, Parameters & Prompts
5. LLM Toolbox: Today's Top Tools
6. The Business Side: How LLMs Make Money
7. The Great Debate: Open Source vs Proprietary
8. Prompt Engineering: Your New Superpower
9. AI in Action: LLMs Inside Your IDE
10. Do LLMs Really Remember? Memory Explained
11. AI Jargon Demystified (Glossary)

Each chapter follows a consistent structure with header, sections, and chapter navigation.

## Development Utilities

### Python Scripts

- `fix_chapters.py` - Repairs broken chapters and converts them to use web components
- `uniformize_chapters.py` - Ensures all chapters follow the same structure and styling
- `remove_did_you_know.py` - Removes "Did You Know" sections from chapters

### Chapter Template

`chapter-template.html` contains the base structure for creating new chapters with placeholder content.

## File Structure

- `index.html` - Landing page with project overview
- `chapter[1-11].html` - Individual chapter pages
- `web-components.js` - All custom web components
- `chapter-template.html` - Template for new chapters
- Python scripts for maintenance and content management

## Design System

- **Typography**: Inter font family with Fira Code for monospace
- **Colors**: Dark theme with gray-900 background, purple-400 accents
- **Layout**: Responsive flexbox with sidebar on desktop, mobile navigation on smaller screens
- **Styling**: Utility-first approach with Tailwind CSS classes

## External Dependencies

- Tailwind CSS (CDN): `https://cdn.tailwindcss.com`
- Google Fonts: Inter and Fira Code font families

No build process required - this is a static site that can be opened directly in a browser.