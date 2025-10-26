# 3D Resume Portfolio

An interactive 3D portfolio website built with React Three Fiber that showcases your resume in an immersive 3D environment. Features a stunning 3D computer monitor displaying your professional information with smooth animations and intuitive interactions.

## ✨ Features

- **3D Computer Model**: A realistic 3D monitor with stand that serves as the main focal point
- **Interactive Resume Display**: View your resume sections directly on the 3D monitor screen
- **Detailed View Modal**: Click on sections to open a full-screen detailed view with comprehensive information
- **Smooth Animations**: Gentle floating and rotation animations for an engaging experience
- **Responsive Design**: Works seamlessly on desktop and tablet devices
- **Dark Theme**: Modern dark interface with gradient backgrounds and smooth transitions
- **Zoom Controls**: Extensive zoom capability to explore the 3D scene in detail
- **Color-Coded Sections**: Each resume section has its own color theme for easy navigation

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js 16](https://nextjs.org/) - React framework with App Router
- **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) - React renderer for Three.js
- **3D Utilities**: [@react-three/drei](https://github.com/pmndrs/drei) - Useful helpers for React Three Fiber
- **3D Engine**: [Three.js](https://threejs.org/) - JavaScript 3D library
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - High-quality React components
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **Animations**: [Tailwind CSS Animate](https://github.com/jamiebuilds/tailwindcss-animate)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)

## 📋 Project Structure

\`\`\`
├── app/
│   ├── page.tsx              # Main page with 3D scene setup
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── computer-model.tsx    # 3D computer/monitor model
│   ├── scene.tsx             # 3D scene configuration
│   ├── floating-card.tsx     # Floating card component for resume content
│   ├── detailed-view.tsx     # Modal for detailed section view
│   ├── navigation.tsx        # Navigation buttons
│   ├── info-panel.tsx        # Info panel component
│   └── ui/                   # shadcn/ui components
├── public/                   # Static assets
├── package.json              # Project dependencies
└── tsconfig.json             # TypeScript configuration
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/3d-resume-portfolio.git
   cd 3d-resume-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio in action!

## 📝 Customizing with Your Resume Data

To customize the portfolio with your own resume information, edit the resume data in the components:

### 1. Update Resume Data
Edit `/components/scene.tsx` and `/components/detailed-view.tsx` to include your:
- Personal information (name, email, phone, location)
- Technical skills
- Work experience
- Projects
- Education
- Achievements

### 2. Modify Colors
Update the color schemes in the components to match your personal brand:
- Edit the `bg-` and `text-` Tailwind classes
- Modify gradient colors in the 3D scene

### 3. Add Your Links
Update social media and portfolio links:
- GitHub profile
- LinkedIn profile
- Portfolio website
- Email address

## 🎮 How to Use

1. **View the 3D Scene**: The main page displays a 3D computer monitor with your portfolio
2. **Navigate Sections**: Click on the section buttons displayed on the monitor screen to switch between:
   - About
   - Skills
   - Experience
   - Projects
   - Education
3. **View Details**: Click the "View Details" button to open a full-screen modal with comprehensive information
4. **Explore in 3D**: 
   - **Zoom**: Use mouse wheel to zoom in/out
   - **Rotate**: Click and drag to rotate the view
   - **Pan**: Right-click and drag to pan the camera

## 🎨 Customization Guide

### Changing Colors
Edit the Tailwind CSS classes in the component files to change the color scheme. Each section has its own color theme.

### Modifying Animations
Adjust animation speeds and styles in:
- `computer-model.tsx` - Monitor animations
- `floating-card.tsx` - Card animations
- `globals.css` - Global animation definitions

### Adjusting Camera Settings
Modify the camera and OrbitControls settings in `app/page.tsx`:
- `minDistance`: Minimum zoom distance (currently 2)
- `maxDistance`: Maximum zoom distance (currently 50)
- `position`: Initial camera position
