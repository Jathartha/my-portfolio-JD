# Jathartha Das - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Showcasing my projects, experience, and skills as a software developer.

## 🌟 Live Demo

**Vercel Deployment**: [Portfolio Link](https://your-vercel-url.vercel.app)  
**GitHub Repository**: [Source Code](https://github.com/Jathartha/my-portfolio-JD)

## ✨ Features

### 🎨 **Modern Design**

- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Elegant dark color scheme with gradient accents
- **Smooth Animations**: Hover effects and transitions for enhanced UX
- **Typography**: Clean, readable fonts with proper hierarchy

### 📱 **Pages & Sections**

- **Home**: Introduction and overview
- **Projects**: Showcase of technical projects with live demos
- **Experience**: Professional timeline with internships and achievements
- **Contact**: Interactive contact form with EmailJS integration

### 🔧 **Technical Features**

- **Static Site Generation**: Fast loading with Next.js static export
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **EmailJS Integration**: Functional contact form
- **SEO Optimized**: Meta tags and proper structure

## 🛠️ Tech Stack

### **Frontend**

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS 4**: Utility-first CSS framework
- **React 19**: Latest React features

### **Deployment & Services**

- **Vercel**: Primary hosting platform
- **GitHub Pages**: Alternative deployment (configured)
- **EmailJS**: Contact form functionality

### **Development Tools**

- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing
- **GitHub Actions**: Automated deployment

## 📦 Installation & Setup

### **Prerequisites**

- Node.js 18+
- npm or yarn package manager

### **Local Development**

1. **Clone the repository**

   ```bash
   git clone https://github.com/Jathartha/my-portfolio-JD.git
   cd my-portfolio-JD
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### **Build for Production**

```bash
npm run build
npm run start
```

## 🚀 Deployment

### **Vercel (Recommended)**

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Your site will be available at `https://your-project.vercel.app`

### **GitHub Pages**

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Site will be available at `https://jathartha.github.io/my-portfolio-JD/`

## 📁 Project Structure

```
my-portfolio-latest/
├── src/
│   └── app/
│       ├── components/
│       │   └── Navigation.tsx
│       ├── contact/
│       │   └── page.tsx          # Contact form with EmailJS
│       ├── experience/
│       │   └── page.tsx          # Professional experience
│       ├── projects/
│       │   └── page.tsx          # Project showcase
│       ├── globals.css           # Global styles
│       ├── layout.tsx            # Root layout
│       └── page.tsx              # Home page
├── public/                       # Static assets
├── .github/workflows/            # GitHub Actions
├── next.config.ts               # Next.js configuration
├── tailwind.config.js           # Tailwind configuration
└── package.json                 # Dependencies and scripts
```

## 🔧 Configuration

### **EmailJS Setup**

The contact form uses EmailJS for email functionality. Update these values in `src/app/contact/page.tsx`:

```typescript
const serviceId = "your-service-id";
const templateId = "your-template-id";
const publicKey = "your-public-key";
```

### **Environment Variables (Optional)**

Create a `.env.local` file for EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-service-id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-template-id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-public-key
```

## 🎯 Customization

### **Personal Information**

Update the following files with your information:

- `src/app/page.tsx` - Home page content
- `src/app/projects/page.tsx` - Your projects
- `src/app/experience/page.tsx` - Your experience
- `src/app/contact/page.tsx` - Contact details

### **Styling**

- **Colors**: Modify `tailwind.config.js` for custom color scheme
- **Fonts**: Update font imports in `src/app/globals.css`
- **Layout**: Adjust components in `src/app/components/`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for performance
- **SEO**: Meta tags and structured data
- **Accessibility**: WCAG compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: dasjathartha@gmail.com
- **LinkedIn**: [Jathartha Das](https://linkedin.com/in/jathartha)
- **GitHub**: [@Jathartha](https://github.com/Jathartha)
- **LeetCode**: [JatharthaDas](https://leetcode.com/u/JatharthaDas/)

---

⭐ **Star this repository if you found it helpful!**
