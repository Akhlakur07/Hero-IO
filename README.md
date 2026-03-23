# HeroIO - Productivity App Showcase

A modern, responsive web application built with React and Vite that showcases productivity and utility applications with detailed information, ratings, downloads statistics, and visualization charts.

🔗 **[Live Demo](https://hero-io-l1h8.vercel.app/)**

## 🎯 Features

- **App Directory**: Browse a comprehensive list of productivity applications
- **Detailed App Pages**: View in-depth information about each application including descriptions, ratings, and download statistics
- **Rating Visualization**: Interactive charts displaying distribution of user ratings
- **Responsive Design**: Fully responsive UI that works seamlessly on desktop, tablet, and mobile devices
- **Fast Navigation**: Smooth routing between different pages using React Router
- **Modern UI**: Built with Tailwind CSS and DaisyUI components for a sleek, professional appearance
- **Toast Notifications**: User-friendly feedback messages using React Hot Toast
- **Icon Support**: Comprehensive icon library with React Icons

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.4
- **Build Tool**: Vite 8.0.1
- **Routing**: React Router 7.13.2
- **Styling**: Tailwind CSS 4.2.2 + DaisyUI 5.5.19
- **Data Visualization**: Recharts 3.8.0
- **UI Enhancements**:
  - React Icons 5.6.0
  - React Hot Toast 2.6.0
- **Linting**: ESLint 9.39.4

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Akhlakur07/Hero-IO.git
   cd HeroIO
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🚀 Available Scripts

- `npm run dev` - Start Vite development server with hot module replacement
- `npm run build` - Build the project for production with optimized output
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## 📁 Project Structure

```
src/
├── assets/          # Static images and icon files
├── components/      # Reusable React components
│   ├── AppCard.jsx          # App listing card component
│   ├── Footer.jsx           # Footer component
│   ├── Header.jsx           # Header component
│   └── LoadingSpinner.jsx   # Loading indicator component
├── layout/
│   └── MainLayout.jsx       # Main layout wrapper with header/footer
├── pages/           # Page components
│   ├── HomePage.jsx         # Home page with featured apps
│   ├── AppsPage.jsx         # Full apps directory page
│   ├── AppDetailsPage.jsx   # Individual app details page
│   ├── InstallationPage.jsx # Installation guide page
│   └── NotFoundPage.jsx     # 404 not found page
├── Routes/
│   └── Routes.jsx           # Route configuration with data loaders
├── utility/
│   └── logic.js             # Utility functions (formatting, calculations)
├── App.jsx          # Main App component
├── index.css        # Global styles
├── main.jsx         # Application entry point
└── App.css          # App-specific styles
```

## 🔄 Routing

The application includes the following routes:

| Route           | Component        | Description                             |
| --------------- | ---------------- | --------------------------------------- |
| `/`             | HomePage         | Home page with app showcase             |
| `/apps`         | AppsPage         | Full directory of all applications      |
| `/apps/:id`     | AppDetailsPage   | Detailed view of a specific application |
| `/installation` | InstallationPage | Instructions for app installation       |
| `*`             | NotFoundPage     | 404 error page for undefined routes     |

## 📊 Data Format

App data is loaded from `public/data.json` and includes:

```json
{
  "id": 1,
  "image": "image-url",
  "title": "App Title",
  "companyName": "Company Name",
  "description": "Detailed description",
  "size": 42,
  "reviews": 154320,
  "ratingAvg": 4.8,
  "downloads": 9200000,
  "ratings": [
    { "name": "1 star", "count": 1200 },
    ...
  ]
}
```

## 💅 Styling

- **Framework**: Tailwind CSS for utility-first styling
- **Component Library**: DaisyUI for pre-built components
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Color Scheme**: Professional color palette with accent highlights

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up

## 🔧 Development

### Global Dependencies

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Key Features in Development

- Hot Module Replacement (HMR) for instant updates during development
- ESLint for code quality and consistency
- Optimized build output with Vite

## 📝 Notes

- App data is fetched from the `data.json` file in the public folder
- The layout uses a consistent header and footer across all pages
- All pages include proper error handling and loading states
- The application supports data-driven content rendering

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests to improve the application.

---

**Built with ❤️ using React and Vite**
