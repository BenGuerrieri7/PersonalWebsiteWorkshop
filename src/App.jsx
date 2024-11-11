import { useState, useEffect } from 'react';
import { Code, Terminal, Package, Check, Download, ChevronRight, Copy, CheckCircle2,Globe, GitBranchIcon } from 'lucide-react';

import ExampleImage from './assets/example.jpg';
const NavbarPreview = () => (
  <nav className="w-full bg-white/10 backdrop-blur-md border-b border-white/10">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <span className="text-xl font-bold text-white">Your Name</span>
        <div className="hidden sm:flex space-x-8">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </nav>
);

const HeroPreview = () => (
  <div className="w-full flex flex-col items-center justify-center px-4 py-12 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
      Hi, I'm Your Name
    </h1>
    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
      Full Stack Developer passionate about building beautiful web experiences
    </p>
    <div className="flex gap-4">
      <a href="#contact" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors text-white">
        Get in Touch
      </a>
      <a href="#projects" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors text-white">
        View Projects
      </a>
    </div>
  </div>
);

const ProjectCardPreview = () => (
  <div className="max-w-md mx-auto">
    <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors">
      <img 
        src={ExampleImage}
        alt="Project preview" 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">Example Project</h3>
        <p className="text-gray-300 mb-4">A brief description of your amazing project and its key features.</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {['React', 'Tailwind', 'Node.js'].map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-gray-700 rounded-full text-sm text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-colors text-white">
            Live Demo
          </button>
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors text-white">
            View Code
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Utility Components
const DownloadCard = ({ title, version, downloadUrl, icon, description }) => (
  <a 
    href={downloadUrl}
    target="_blank"
    rel="noopener noreferrer" 
    className="block p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800/80 transition-all duration-300 border border-gray-700 hover:border-blue-500"
  >
    <div className="flex items-center gap-4 mb-3">
      {icon}
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-400">{version}</p>
      </div>
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex items-center text-blue-400 hover:text-blue-300 font-medium">
      <Download className="w-4 h-4 mr-2" />
      Download Now
    </div>
  </a>
);

const SystemRequirement = ({ title, command, expected }) => (
  <div className="mb-6 last:mb-0">
    <h4 className="text-lg font-medium mb-2 flex items-center">
      <ChevronRight className="w-4 h-4 mr-2 text-blue-400" />
      {title}
    </h4>
    <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm">
      <div className="mb-2">Check with command:</div>
      <div className="text-blue-400">{command}</div>
      <div className="mt-2 text-gray-400">Expected output: {expected}</div>
    </div>
  </div>
);

const  CodeBlock = ({ code, language = "bash", title, preview }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('code');

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-4">
      {title && <div className="text-sm text-gray-400 mb-2">{title}</div>}
      <div className="bg-gray-800/50 rounded-lg overflow-hidden">
        {preview && (
          <div className="border-b border-gray-700">
            <div className="flex">
              <button
                onClick={() => setActiveTab('code')}
                className={`px-4 py-2 ${
                  activeTab === 'code'
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Code
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-4 py-2 ${
                  activeTab === 'preview'
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Preview
              </button>
            </div>
          </div>
        )}
        {activeTab === 'code' ? (
          <div className="relative">
            <button
              onClick={handleCopy}
              className="absolute right-2 top-2 p-2 hover:bg-gray-700 rounded-md transition-colors"
            >
              {copied ? (
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 text-gray-400" />
              )}
            </button>
            <pre className="p-4 overflow-x-auto font-mono text-sm text-gray-300">
              <code>{code}</code>
            </pre>
          </div>
        ) : (
          <div className="p-4 bg-gray-900">
            {preview}
          </div>
        )}
      </div>
    </div>
  );
};

const ScrollSection = ({ children, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const element = document.getElementById(`section-${index}`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [index]);

  return (
    <div
      id={`section-${index}`}
      className={`transform transition-all duration-1000 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-20 opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

const TutorialWebsite = () => {
  const [activeTab, setActiveTab] = useState('windows');

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center  top-0 z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-fade-in">
          Modern Web Development Tutorial
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in-delay">
          Learn how to build beautiful, responsive websites using React, Tailwind CSS, and modern development tools
        </p>
        <div className="flex gap-4 animate-fade-in-delay-2">
          <button
            onClick={() => document.getElementById('content').scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors"
          >
            Get Started
          </button>
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors flex items-center"
          >
            <GitBranchIcon className="w-5 h-5 mr-2" />
            View Source
          </a>
        </div>
      </div>

      {/* Content Sections */}
      <div id="content" className="relative bg-gray-900/95 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-32">
          {/* Prerequisites Section */}
          <ScrollSection index={1}>
            <div className="space-y-16">
              <div className="flex items-center space-x-4">
                <Terminal className="w-8 h-8 text-blue-400" />
                <h2 className="text-4xl font-bold">Prerequisites</h2>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-8">Essential Software</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <DownloadCard
                    title="Node.js"
                    version="LTS Version (Recommended)"
                    downloadUrl="https://nodejs.org/"
                    icon={<Package className="w-8 h-8 text-green-500" />}
                    description="Includes npm (Node Package Manager) for installing JavaScript packages"
                  />
                  <DownloadCard
                    title="Git"
                    version="Latest Version"
                    downloadUrl="https://git-scm.com/"
                    icon={<GitBranchIcon className="w-8 h-8 text-orange-500" />}
                    description="Version control system for tracking changes in your code"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-8">Installation Guide</h3>
                <div>
                  <div className="flex border-b border-gray-700 mb-4">
                    {['windows', 'mac', 'linux'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 capitalize ${
                          activeTab === tab
                            ? 'border-b-2 border-blue-500 text-blue-500'
                            : 'text-gray-400 hover:text-gray-300'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    {activeTab === 'windows' && (
                      <ol className="list-decimal list-inside space-y-4 text-gray-300">
                        <li>Download the Node.js installer for Windows</li>
                        <li>Run the installer (node-v*.msi)</li>
                        <li>Follow the installation wizard prompts</li>
                        <li>Ensure "Add to PATH" is checked during installation</li>
                        <li>Download and run the Git for Windows installer</li>
                        <li>Choose default options in the Git installation wizard</li>
                      </ol>
                    )}
                    {activeTab === 'mac' && (
                      <ol className="list-decimal list-inside space-y-4 text-gray-300">
                        <li>Install Homebrew if not already installed:
                          <CodeBlock
                            code='/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'
                          />
                        </li>
                        <li>Install Node.js using Homebrew:
                          <CodeBlock code="brew install node" />
                        </li>
                        <li>Install Git using Homebrew:
                          <CodeBlock code="brew install git" />
                        </li>
                      </ol>
                    )}
                    {activeTab === 'linux' && (
                      <ol className="list-decimal list-inside space-y-4 text-gray-300">
                        <li>Update your package manager:
                          <CodeBlock code="sudo apt update && sudo apt upgrade" />
                        </li>
                        <li>Install Node.js and npm:
                          <CodeBlock code="sudo apt install nodejs npm" />
                        </li>
                        <li>Install Git:
                          <CodeBlock code="sudo apt install git" />
                        </li>
                      </ol>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-8">Verify Installation</h3>
                <div className="space-y-6">
                  <SystemRequirement
                    title="Check Node.js installation"
                    command="node --version"
                    expected="v18.x.x or higher"
                  />
                  <SystemRequirement
                    title="Check npm installation"
                    command="npm --version"
                    expected="9.x.x or higher"
                  />
                  <SystemRequirement
                    title="Check Git installation"
                    command="git --version"
                    expected="2.x.x or higher"
                  />
                </div>
              </div>
            </div>
          </ScrollSection>

          {/* Project Setup Section */}
          <ScrollSection index={2}>
            <div className="space-y-16">
              <div className="flex items-center space-x-4">
                <Package className="w-8 h-8 text-blue-400" />
                <h2 className="text-4xl font-bold">Project Setup</h2>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-8">Project Creation</h3>
                <div className="space-y-6">
                  <p className="text-gray-300">First, create a new Vite project with React:</p>
                  <CodeBlock
                    code="npm create vite@latest my-website -- --template react"
                  />
                  <p className="text-gray-300">Navigate to the project directory and install dependencies:</p>
                  <CodeBlock
                    code="cd my-website
npm install"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-8">Install and Configure Tailwind CSS</h3>
                <div className="space-y-6">
                  <p className="text-gray-300">Install Tailwind and its peer dependencies:</p>
                  <CodeBlock
                    code="npm install -D tailwindcss postcss autoprefixer"
                  />
                  <p className="text-gray-300">Generate Tailwind and PostCSS config files:</p>
                  <CodeBlock
                    code="npx tailwindcss init -p"
                  />
                  <p className="text-gray-300">Update tailwind.config.js:</p>
                  <CodeBlock
                    code={`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
                    language="javascript"
                    title="tailwind.config.js"
                  />
                  <p className="text-gray-300">Update your CSS file:</p>
                  <CodeBlock
                    code={`@tailwind base;
@tailwind components;
@tailwind utilities;`}
                    language="css"
                    title="src/index.css"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-8">Start Development Server</h3>
                <div className="space-y-6">
                  <p className="text-gray-300">Run the development server:</p>
                  <CodeBlock code="npm run dev" />
                  <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
                    <div className="flex items-center text-green-500 mb-2">
                      <Check className="w-5 h-5 mr-2" />
                      <span className="font-medium">Development server started!</span>
                    </div>
                    <p className="text-green-400">
                      Your site should now be running at http://localhost:5173
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollSection>

          {/* Basic Components Section */}
          <ScrollSection index={3}>
        <div className="space-y-16">
          <div className="flex items-center space-x-4">
            <Code className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold">Basic Components</h2>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8">1. Navbar Component</h3>
            <div className="space-y-6">
              <p className="text-gray-300">Create a responsive navigation bar component:</p>
              <CodeBlock
                code={`import React from 'react';
                    
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold">Your Name</span>
          <div className="hidden sm:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;`}
                language="jsx"
                title="src/components/Navbar.jsx"
                preview={<NavbarPreview />}
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8">2. Hero Component</h3>
            <div className="space-y-6">
              <p className="text-gray-300">Create an engaging hero section:</p>
              <CodeBlock
                code={`import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        Hi, I'm Your Name
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
        Full Stack Developer passionate about building beautiful web experiences
      </p>
      <div className="flex gap-4">
        <a href="#contact" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors">
          Get in Touch
        </a>
        <a href="#projects" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors">
          View Projects
        </a>
      </div>
    </div>
  );
};

export default Hero;`}
                language="jsx"
                title="src/components/Hero.jsx"
                preview={<HeroPreview />}
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8">3. Project Card Component</h3>
            <div className="space-y-6">
              <p className="text-gray-300">Create a reusable project card component:</p>
              <CodeBlock
                code={`import React from 'react';

const ProjectCard = ({ title, description, tags, imageUrl, liveUrl, githubUrl }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{tag}</span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-colors">
            Live Demo
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;`}
                language="jsx"
                title="src/components/ProjectCard.jsx"
                preview={<ProjectCardPreview />}
              />
            </div>
          </div>
              <div>
                <h3 className="text-2xl font-semibold mb-8">4. Putting It All Together</h3>
                <div className="space-y-6">
                  <p className="text-gray-300">Update your App.jsx to use all components:</p>
                  <CodeBlock
                    code={`import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';

const App = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of your first project",
      tags: ["React", "Tailwind", "Node.js"],
      imageUrl: "/project1.jpg",
      liveUrl: "https://project1.com",
      githubUrl: "https://github.com/username/project1"
    },
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      <Hero />
      <section id="projects" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;`}
                    language="jsx"
                    title="src/App.jsx"
                  />
                  <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
                    <div className="flex items-center text-green-500 mb-2">
                      <Check className="w-5 h-5 mr-2" />
                      <span className="font-medium">All components ready!</span>
                    </div>
                    <p className="text-green-400">
                      You now have a beautiful, responsive website with a navbar, hero section, and project cards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollSection>

          {/* Github Pages */}
          <ScrollSection index={4}>
      <div className="space-y-16">
        <div className="flex items-center space-x-4">
          <Globe className="w-8 h-8 text-blue-400" />
          <h2 className="text-4xl font-bold">Deploy to GitHub Pages</h2>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8">1. Configure Vite for GitHub Pages</h3>
          <div className="space-y-6">
            <p className="text-gray-300">First, update your Vite configuration to support GitHub Pages deployment:</p>
            <CodeBlock
              code={`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Add this line
})`}
              language="javascript"
              title="vite.config.js"
            />
            <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-4">
              <p className="text-blue-300">
                Replace 'your-repo-name' with your actual GitHub repository name. For example, if your repo is
                "username.github.io", you can use base: '/'
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8">2. Add Deployment Script</h3>
          <div className="space-y-6">
            <p className="text-gray-300">Create a deployment script in your package.json:</p>
            <CodeBlock
              code={`{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}`}
              language="json"
              title="package.json (scripts section)"
            />
            <p className="text-gray-300">Install the gh-pages package:</p>
            <CodeBlock
              code="npm install -D gh-pages"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8">3. GitHub Repository Setup</h3>
          <div className="space-y-6">
            <p className="text-gray-300">Initialize your repository and push your code:</p>
            <CodeBlock
              code={`git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/your-repo-name.git
git push -u origin main`}
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8">4. Configure GitHub Pages</h3>
          <div className="space-y-6">
            <ol className="list-decimal list-inside space-y-4 text-gray-300">
              <li>Go to your GitHub repository settings</li>
              <li>Scroll down to the "Pages" section</li>
              <li>Under "Build and deployment":
                <ul className="list-disc list-inside ml-8 mt-2 space-y-2">
                  <li>Source: Deploy from a branch</li>
                  <li>Branch: gh-pages / root</li>
                </ul>
              </li>
              <li>Click Save</li>
            </ol>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8">5. Deploy Your Site</h3>
          <div className="space-y-6">
            <p className="text-gray-300">Run the deploy command:</p>
            <CodeBlock
              code="npm run deploy"
            />
            <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
              <div className="flex items-center text-green-500 mb-2">
                <Check className="w-5 h-5 mr-2" />
                <span className="font-medium">Deployment successful!</span>
              </div>
              <p className="text-green-400">
                Your site will be available at: https://username.github.io/your-repo-name
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8">6. Handle Client-Side Routing (Optional)</h3>
          <div className="space-y-6">
            <p className="text-gray-300">If you're using React Router, create a 404.html file in your public folder:</p>
            <CodeBlock
              code={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Page Not Found</title>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License
      // https://github.com/rafgraph/spa-github-pages
      var pathSegmentsToKeep = 1;

      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>`}
              language="html"
              title="public/404.html"
            />
            <p className="text-gray-300">Add this script to your index.html:</p>
            <CodeBlock
              code={`<!-- Add this before your main script -->
<script type="text/javascript">
  // Single Page Apps for GitHub Pages
  // MIT License
  // https://github.com/rafgraph/spa-github-pages
  (function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) { 
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
</script>`}
              language="html"
              title="index.html (script section)"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8">Troubleshooting</h3>
          <div className="space-y-4">
            <p className="text-gray-300">If your site isn't working, check these common issues:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Ensure the repository name in vite.config.js matches exactly</li>
              <li>Wait a few minutes for GitHub Pages to build and deploy</li>
              <li>Check if the gh-pages branch was created successfully</li>
              <li>Verify that the GitHub Pages source branch is set to gh-pages</li>
              <li>Check browser console for any 404 errors on assets</li>
            </ul>
          </div>
        </div>
      </div>
    </ScrollSection>
        </div>
      </div>
    </div>
  );
};

export default TutorialWebsite;