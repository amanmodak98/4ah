# 4Ability Hive (4AH) - Premium Website

A modern, professional Next.js website for **4Ability Hive**, a Learning & Development company empowering students and professionals to become industry-ready.

## 🚀 Live Development Server

The website is now running at: **http://localhost:3000**

## ✨ Features

### **Complete Website Structure**
- ✅ **10 Major Pages** - Home, About, Programs, College Solutions, Corporate Solutions, Flagship Program, Methodology, Outcomes, Contact
- ✅ **Premium Dark Design** - Sophisticated multi-level surface depth with navy gradients
- ✅ **Brand Colors** - Navy blue, orange, and yellow palette
- ✅ **World-Class Typography** - Fluid responsive text sizing with Poppins & Inter
- ✅ **Advanced Animations** - Framer Motion scroll-triggered effects, hover states, and smooth transitions
- ✅ **Fully Responsive** - Mobile-first design optimized for all devices
- ✅ **Rich Content** - Detailed information from the training proposal document

### **Design Excellence**
- 🎨 **Sophisticated Color System** - Gradient overlays, glow effects, and depth layers
- 🎭 **Professional Typography** - Large display text, readable body copy, proper hierarchy
- ⚡ **Smooth Animations** - Entrance effects, parallax backgrounds, interactive hover states
- 🎯 **Grid-First Layout** - CSS Grid primary layout with proper spacing tokens
- 🔥 **Custom Design Tokens** - Consistent spacing, colors, and effects throughout

### **Technical Stack**
- **Framework**: Next.js 16.3.1 (Latest with Turbopack)
- **Language**: TypeScript 5.6.3
- **Styling**: Tailwind CSS 3.4.14
- **Animations**: Framer Motion 11.11.17
- **Icons**: Lucide React 0.454.0
- **Scroll Detection**: React Intersection Observer 9.13.1

## 📄 Pages Overview

### **1. Home Page** (`/`)
- Impactful hero section with animated taglines
- 4A philosophy showcase (Aspire, Acquire, Ascend, Amplify)
- Training domains grid with icons
- Statistics and measurable outcomes
- Social proof and CTAs

### **2. About Page** (`/about`)
- Mission, vision, and story
- Team and trainer expertise
- 4A philosophy deep dive
- What makes 4AH different

### **3. Programs Page** (`/programs`)
- Comprehensive training solutions overview
- 8 major program categories with detailed modules
- Employability skills, communication, aptitude, technical training
- Corporate and placement readiness programs

### **4. College Solutions** (`/college-solutions`)
- Year-wise learning journey (1st to Final year)
- Progressive skill development approach
- Before/after training comparison
- Partnership benefits for institutions

### **5. Corporate Solutions** (`/corporate-solutions`)
- 6 comprehensive corporate programs
- Leadership development, communication excellence
- Emotional intelligence, time management
- Measurable impact metrics

### **6. Flagship Program** (`/flagship-program`)
- 90-hour Final Year Employability Program
- Week-by-week curriculum breakdown
- 60 hours Aptitude + 30 hours Soft Skills
- Training goals and deliverables

### **7. Methodology** (`/methodology`)
- 5-step training process (Assess → Learn → Practice → Feedback → Improve)
- Core training principles
- Delivery framework
- VARK methodology

### **8. Contact Page** (`/contact`)
- Institutional enquiry form
- Multiple CTAs
- Contact information

## 🎨 Design Philosophy

### **Color Palette**
```css
Primary Navy: #0A0F1E, #0F1521, #131B2E
Orange Accent: #F97316, #FB923C
Blue Accent: #3B82F6, #60A5FA
Yellow Accent: #FBBF24
```

### **Typography Scale**
- Display: 72px-48px (clamp)
- Heading 1: 56px-36px
- Heading 2: 48px-32px
- Heading 3: 36px-24px
- Body: 18px-16px

### **Animation Principles**
- Entrance animations on scroll
- Staggered delays for list items
- Hover lift effects on cards
- Gradient animations on accents
- Smooth page transitions

## 🛠️ Development

### **Start Development Server**
```bash
npm run dev
```
Opens at http://localhost:3000

### **Build for Production**
```bash
npm run build
npm start
```

### **Type Checking**
```bash
npx tsc --noEmit
```

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Home page
│   ├── about/page.tsx              # About page
│   ├── programs/page.tsx           # Programs page
│   ├── college-solutions/page.tsx  # College solutions
│   ├── corporate-solutions/page.tsx # Corporate solutions
│   ├── flagship-program/page.tsx   # Flagship program
│   ├── methodology/page.tsx        # Training methodology
│   ├── contact/page.tsx            # Contact page
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles
└── components/
    ├── Navigation.tsx              # Main navigation
    ├── Hero.tsx                    # Hero section
    ├── About.tsx                   # About section
    ├── Programs.tsx                # Programs section
    ├── Outcomes.tsx                # Outcomes section
    └── Contact.tsx                 # Contact form
```

## 🎯 Content Source

All content is derived from the official **4Ability Hive Training Proposal** document, including:
- Training programs and curriculum
- Methodology and approach
- Year-wise learning journey
- Corporate training modules
- Deliverables and outcomes

## 🌟 Key Highlights

### **World-Class Design**
- Premium dark UI with sophisticated depth
- Large, bold typography with proper hierarchy
- Rich animations and micro-interactions
- Professional color gradients and effects

### **Comprehensive Content**
- 10+ detailed pages
- 90-hour program breakdown
- Year-wise college journey
- 6 corporate training programs
- Complete methodology documentation

### **Performance**
- ✅ TypeScript type checking passed
- ✅ Production build successful
- ✅ Static page generation optimized
- ✅ All routes pre-rendered

## 📞 Contact Information

**Email**: info@4ah.in  
**Founders**: Himani S., Aviral Jain, Anand Tiwari, Aman Modak, Aarti Tiwari

## 🚀 Deployment

Ready to deploy to:
- Vercel (Recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

```bash
# Deploy to Vercel
vercel --prod
```

---

**Built with ❤️ for 4Ability Hive - Empowering people with the skills that matter**

*Aspire • Acquire • Ascend • Amplify*
