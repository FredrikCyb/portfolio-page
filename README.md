# Personal Portfolio Website

A modern, responsive portfolio website showcasing my projects and skills. Built with HTML, CSS, and JavaScript, featuring a clean design and dark mode functionality.

## Features

- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- 📬 Contact form with EmailJS integration
- 🎨 Modern and clean UI
- ⚡ Smooth scrolling and animations
- 🔗 Social media integration

## Technologies Used

- HTML5
- CSS3
- JavaScript
- EmailJS for contact form
- Font Awesome for icons

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── images/            # Project images
│   ├── bcs.jpg
│   ├── keylogger.webp
│   └── profile.jpg
└── README.md          # Project documentation
```

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/FredrikCyb/portfolio.git
```

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Open `index.html` in your browser or use a local server.

## Customization

### Adding Projects
To add a new project, add a new project card in the projects section of `index.html`:
```html
<div class="project-card">
    <div class="project-image">
        <img src="images/your-image.jpg" alt="Project Name">
    </div>
    <h3>Project Name</h3>
    <p>Project description goes here.</p>
    <div class="project-links">
        <a href="#" class="project-link">View Demo</a>
        <a href="#" class="project-link">Source Code</a>
    </div>
</div>
```

### Modifying Styles
- Main styles are in `styles.css`
- Color scheme can be modified in the CSS variables
- Dark mode colors can be adjusted in the `[data-theme="dark"]` section

### Contact Form
The contact form uses EmailJS. To set up your own:
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Update the credentials in `script.js`

## Features in Detail

### Dark Mode
- Toggle between light and dark themes
- Persists user preference
- Smooth transitions between modes

### Responsive Design
- Adapts to all screen sizes
- Mobile-first approach
- Optimized for desktop and mobile viewing

### Contact Form
- Form validation
- Success/error messages
- EmailJS integration
- Loading states

## Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- GitHub: [FredrikCyb](https://github.com/FredrikCyb)
- LinkedIn: [Fredrik Jensen](https://www.linkedin.com/in/fredrik-jensen-6032a5242/)
