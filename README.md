 # ☕ Brew & Bean — Premium Café Website

<p align="center">

  <img src="https://img.shields.io/badge/Project-Brew%20%26%20Bean-6F4E37?style=for-the-badge&logo=coffeescript&logoColor=white" alt="Project">

  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">

  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">

  <img src="https://img.shields.io/badge/Responsive-Design-8B5E3C?style=for-the-badge" alt="Responsive">

</p>

<p align="center">
  <strong>Crafted with passion. Served with love. ☕</strong>
</p>

<p align="center">
  A premium, immersive and responsive café website featuring cinematic scroll animation,
  interactive menu exploration, cart functionality, checkout flow, reservations and order tracking.
</p>

<p align="center">
  🌐 <strong>Live Demo:</strong>
  <a href="https://brew-bean-cafe-gold.vercel.app/">
    brew-bean-cafe-gold.vercel.app
  </a>
</p>

---

## 📌 Table of Contents

* [About the Project](#-about-the-project)
* [Project Highlights](#-project-highlights)
* [550-Frame Cinematic Animation](#-550-frame-cinematic-animation)
* [Features](#-features)
* [Website Structure](#-website-structure)
* [Design Philosophy](#-design-philosophy)
* [Color Palette](#-color-palette)
* [Typography](#-typography)
* [User Journey](#-complete-user-journey)
* [Performance Optimization](#-performance-optimization)
* [Technical Architecture](#-technical-architecture)
* [Technologies Used](#-technologies-used)
* [Project Structure](#-project-structure)
* [Responsive Design](#-responsive-design)
* [Accessibility](#-accessibility)
* [Installation](#-getting-started)
* [Production Build](#-production-build)
* [Deployment](#-deployment)
* [What I Learned](#-what-i-learned)
* [Internship Project](#-internship-project)
* [Future Improvements](#-future-improvements)
* [Important Note](#-important-project-note)
* [Credits](#-credits)
* [License](#-license)

---

# 🌟 About the Project

**Brew & Bean** is a premium café website designed to create an engaging and immersive digital experience for coffee lovers.

The project combines:

* ☕ Premium café branding
* 🎨 Modern UI/UX
* 🎬 Cinematic scroll-based animation
* 📱 Fully responsive layouts
* 🍰 Interactive food and beverage menu
* 🔎 Menu search and filtering
* 🛒 Shopping cart
* 🧾 Checkout experience
* 💳 Demo payment interface
* 📦 Order confirmation
* 🚚 Order tracking
* 📅 Table reservation
* ⭐ Customer reviews
* 📸 Café gallery
* 📍 Contact information

The primary goal was to combine **visual storytelling, smooth interaction and usability** into one complete café web experience.

---

# 🚀 Project Highlights

| Highlight                 | Description                                     |
| ------------------------- | ----------------------------------------------- |
| 🎬 **550 Frames**         | Cinematic scroll-controlled hero animation      |
| ⚡ **Performance Focused** | Progressive asset loading and frame caching     |
| ☕ **Premium Branding**    | Warm coffee-inspired visual identity            |
| 🍰 **Interactive Menu**   | Categories, search, filtering and product cards |
| 🛒 **Shopping Cart**      | Add, remove and update products                 |
| 🧾 **Checkout**           | Delivery, pickup and dine-in flows              |
| 💳 **Payment UI**         | Frontend demonstration payment interface        |
| 📅 **Reservations**       | Table reservation experience                    |
| 📦 **Order Tracking**     | Complete frontend order journey                 |
| 📱 **Responsive**         | Desktop, tablet and mobile friendly             |
| ♿ **Accessible**          | Semantic and accessibility-conscious UI         |

---

# 🎬 550-Frame Cinematic Animation

One of the biggest highlights of Brew & Bean is its **550-frame cinematic hero animation**.

Instead of using a traditional static hero image or a simple video, the website uses **550 individual image frames** to create a detailed scroll-controlled visual experience.

### 🔄 How It Works

```text
User Scroll
     ↓
Scroll Position
     ↓
Frame Calculation
     ↓
Correct Image Frame
     ↓
Canvas Rendering
     ↓
Cinematic Animation
```

The animation progresses from:

```text
Frame 001
   ↓
Frame 002
   ↓
Frame 003
   ↓
   ...
   ↓
Frame 550
```

This creates a cinematic experience where the visitor controls the animation simply by scrolling.

### ✨ Why 550 Frames?

Using a large number of frames provides:

* Smoother transitions
* More detailed motion
* Precise scroll control
* Better visual storytelling
* More cinematic presentation
* Greater control than a traditional GIF

---

# ⚡ Performance Optimization

Loading hundreds of high-resolution frames can create a significant performance challenge.

To address this, Brew & Bean follows a **progressive loading strategy**.

### 🚀 Loading Strategy

```text
Website Starts
      ↓
Critical Assets Load
      ↓
Initial Hero Frame Loads
      ↓
Website Becomes Interactive
      ↓
Remaining Frames Load Progressively
      ↓
Frames Are Cached
      ↓
Smooth Scroll Animation
```

### 🛠️ Optimization Techniques

* Progressive frame loading
* Controlled image requests
* Frame caching
* Request prioritization
* `requestAnimationFrame`
* Reduced unnecessary React state updates
* Critical asset prioritization
* Background frame loading
* Nearest available frame rendering
* Duplicate request prevention
* Responsive image handling
* Reduced-motion support

### 💡 Core Principle

> **The visitor should never have to wait for all 550 frames before the website becomes usable.**

The initial experience loads quickly while remaining animation assets continue loading in the background.

---

# ✨ Features

## 🧭 Navigation

The responsive navigation provides quick access to the major sections of the website.

Designed to be:

* Simple
* Clean
* Responsive
* Consistent
* Easy to understand

---

## 🎬 Cinematic Hero

The hero section acts as the visual centerpiece.

### Features

* 550-frame animation
* Scroll-controlled animation
* Premium typography
* Café-inspired storytelling
* Smooth transitions
* Responsive layout
* Scroll interaction indicator

### Brand Message

> **Crafted with passion. Served with love.**

---

# ☕ About Section

### Crafting Moments, Creating Memories

The About section presents Brew & Bean as more than just a coffee shop.

The experience focuses on:

* Quality coffee
* Relaxation
* Friends and conversations
* Work
* Creating memories
* Handcrafted beverages

---

# 🌱 What Makes Brew & Bean Special?

### ☕ Freshly Roasted

Coffee is presented as fresh, carefully selected and roasted with quality in mind.

### 🤲 Handcrafted

The experience emphasizes attention to detail and handcrafted preparation.

### ❤️ Locally Loved

The brand focuses on creating a welcoming and community-oriented café experience.

---

# ☕ Signature Brews

The Signature Brews section highlights selected beverages using premium product cards.

### Includes

* Product photography
* Product names
* Descriptions
* Pricing
* Premium cards
* Hover interactions
* Call-to-action elements

---

# 🍰 Interactive Menu

The menu is one of the primary functional parts of the website.

### Categories

```text
☕ Coffee
🍔 Fast Food
🍰 Desserts
🥤 Beverages
⭐ Specials
```

### Menu Features

* Category filtering
* Search functionality
* Product cards
* Product images
* Product names
* Product descriptions
* Pricing
* Add-to-cart functionality
* Responsive layout

---

# 🔎 Menu Search

Visitors can search through the available menu items.

This improves usability when the café menu contains a large number of products.

---

# 📖 Our Story

The **Our Story** section adds emotional depth to the website rather than making the experience purely transactional.

It focuses on:

* Coffee culture
* Craftsmanship
* Quality
* Community
* Passion
* Café moments

---

# ⭐ Why Choose Us?

The website communicates several reasons to choose Brew & Bean.

### Premium Coffee

A carefully presented coffee experience.

### Quality Ingredients

Emphasis on quality food and beverages.

### Handcrafted

Products are presented as thoughtfully prepared.

### Warm Atmosphere

A comfortable and welcoming environment.

---

# ☕ Café Experience

The website highlights the atmosphere customers can expect.

### Features

* Free Wi-Fi
* Comfortable seating
* Freshly roasted coffee
* Relaxed atmosphere
* Conversation space
* Work and meeting space

> **GOOD COFFEE**
>
> **GOOD PEOPLE**
>
> **GOOD MOMENTS**

---

# 📸 Gallery

The Gallery provides a visual understanding of the café experience.

Content includes:

* Coffee
* Café interiors
* Food
* Desserts
* Drinks
* Customer moments
* Café atmosphere

The layout follows a more premium editorial style rather than a basic image grid.

---

# ⭐ Customer Reviews

The website includes a review section to build customer trust and social proof.

### Rating Highlight

```text
⭐ 4.9 / 5
500+ Reviews
```

### Goals

* Build trust
* Demonstrate customer satisfaction
* Improve credibility
* Provide social proof

---

# 📅 Reservation System

Visitors can submit a table reservation through the reservation interface.

### Reservation Flow

```text
Choose Reservation
       ↓
Enter Customer Details
       ↓
Select Date / Time
       ↓
Submit Reservation
       ↓
Reservation Confirmation
```

---

# 📞 Contact

### 📍 Address

**21 Coffee Street**
Jaipur, Rajasthan, India

### 📱 Phone

**+91 98765 43210**

### ✉️ Email

**[hello@brewandbean.com](mailto:hello@brewandbean.com)**

### 🕐 Opening Hours

**Monday – Friday**
8:00 AM – 10:00 PM

**Saturday – Sunday**
9:00 AM – 11:00 PM

---

# 🛒 Shopping Cart

The website includes an interactive cart experience.

Users can:

* Add menu items
* View selected products
* Increase quantities
* Decrease quantities
* Remove products
* Review subtotal
* Continue to checkout

### Cart Flow

```text
Menu
 ↓
Add Item
 ↓
Cart
 ↓
Review Items
 ↓
Checkout
```

---

# 🧾 Checkout Experience

The checkout interface provides three ordering methods.

## 🚚 Delivery

Customers provide delivery information.

## 🏪 Pickup

Customers choose a pickup option and preferred time.

## 🍽️ Dine-in

Customers can provide table and timing information.

---

# 👤 Customer Information

Depending on the selected order method, the checkout interface can collect:

* Customer name
* Contact information
* Delivery address
* Pickup time
* Dine-in table
* Dine-in time

The interface dynamically adapts according to the selected order type.

---

# 🎟️ Promo Code

The checkout experience includes a promotional-code field.

Users can enter a promo code before completing the order.

---

# 💳 Payment Interface

The project includes a frontend payment experience.

### Payment Options

```text
UPI
Credit / Debit Card
Cash
```

> ⚠️ **Demo Payment Only**

No real payment processing is implemented.

The frontend does not store or send actual card details.

---

# ✅ Order Confirmation

After checkout, the user receives an order confirmation experience.

It can display:

* Order status
* Order details
* Selected items
* Order type
* Customer information
* Estimated processing information

---

# 📦 Order Tracking

The website includes an order tracking interface.

### Order Journey

```text
Order Placed
      ↓
Order Confirmed
      ↓
Preparing
      ↓
Ready / Out for Delivery
      ↓
Completed
```

This creates a more realistic frontend ordering experience.

---

# 🎉 Complete Customer Journey

The complete experience follows:

```text
Browse Menu
     ↓
Select Product
     ↓
Add to Cart
     ↓
Review Cart
     ↓
Checkout
     ↓
Delivery / Pickup / Dine-in
     ↓
Enter Details
     ↓
Apply Promo Code
     ↓
Select Payment Method
     ↓
Payment Demo
     ↓
Order Confirmation
     ↓
Order Tracking
     ↓
Order Completed
```

---

# 🎨 Design Philosophy

The Brew & Bean visual identity is inspired by:

* Specialty coffee culture
* Premium cafés
* Warm interiors
* Artisan craftsmanship
* Modern editorial design
* Minimal luxury
* Natural materials
* Roasted coffee tones

The design intentionally avoids:

* Generic corporate layouts
* Excessive gradients
* Neon colors
* Overloaded interfaces
* Excessive animation
* Unnecessary UI elements

### Design Goal

> **Warm. Elegant. Sophisticated.**

---

# 🎨 Color Palette

The website uses a coffee-inspired color system.

| Color         | Hex       | Purpose                    |
| ------------- | --------- | -------------------------- |
| Deep Espresso | `#2B1A14` | Primary dark backgrounds   |
| Coffee Brown  | `#4A2C20` | Secondary elements         |
| Warm Cream    | `#F5EBDD` | Main text / light surfaces |
| Soft Beige    | `#E8D8C3` | Supporting backgrounds     |
| Caramel       | `#B87945` | Interactive accents        |
| Warm Gold     | `#C99A5B` | Premium highlights         |

The palette is carefully used to maintain a premium café atmosphere.

---

# ✍️ Typography

Brew & Bean combines two typography styles.

### Serif — Editorial & Luxury

Used for:

* Hero headings
* Brand messaging
* Section headings
* Important statements
* Editorial content

### Sans-Serif — Modern & Usable

Used for:

* Navigation
* Buttons
* Menu information
* Descriptions
* Forms
* Labels

### Typography Philosophy

```text
SERIF
 ↓
Luxury + Editorial + Craft

SANS-SERIF
 ↓
Modern + Clean + Usable
```

This combination balances **traditional café character with modern web design**.

---

# 🧠 Technical Animation Architecture

The animation system separates animation logic from UI rendering.

```text
useFrameAnimation
        ↓
Frame Loader
        ↓
Frame Cache
        ↓
Canvas Renderer
        ↓
Scroll Position
```

### Important Principles

* Avoid React state updates on every scroll event
* Use `requestAnimationFrame`
* Keep frequently changing animation values outside React state
* Cache loaded frames
* Prevent duplicate network requests
* Render only the required frame
* Keep animation logic reusable

---

# 🛠️ Technologies Used

## Core Technologies

| Technology            | Purpose                        |
| --------------------- | ------------------------------ |
| HTML5                 | Semantic structure             |
| CSS3                  | Styling and responsive layouts |
| JavaScript            | Interactivity and logic        |
| React                 | Component-based UI             |
| Canvas API            | Frame animation rendering      |
| Responsive Web Design | Multi-device experience        |

## Development Concepts

* Component-based architecture
* Reusable components
* State management
* Client-side interactions
* Progressive asset loading
* Image caching
* Responsive layouts
* Performance optimization
* Scroll-driven animation

---

# 🧩 Component Architecture

The interface is structured using reusable components.

```text
App
│
├── Header
│
├── Hero
│   └── FrameAnimation
│
├── About
│
├── SignatureBrews
│
├── Menu
│   ├── MenuCategories
│   ├── MenuSearch
│   └── MenuCard
│
├── Story
│
├── WhyChooseUs
│
├── Gallery
│
├── Reviews
│   └── ReviewCard
│
├── Reservation
│
├── Contact
│
├── Cart
│
├── Checkout
│
├── Payment
│
├── OrderConfirmation
│
├── OrderTracking
│
├── OrderCompleted
│
└── Footer
```

This architecture makes the application easier to:

* Maintain
* Debug
* Reuse
* Scale
* Update

---

# 🗂️ Project Structure

A recommended structure for the project:

```text
brew-and-bean-cafe/
│
├── public/
│   │
│   ├── frames/
│   │   ├── frame_001.webp
│   │   ├── frame_002.webp
│   │   ├── frame_003.webp
│   │   ├── ...
│   │   └── frame_550.webp
│   │
│   ├── images/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── menu/
│   │   ├── gallery/
│   │   └── reviews/
│   │
│   ├── icons/
│   └── favicon.ico
│
├── src/
│   │
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Menu/
│   │   ├── Story/
│   │   ├── Reviews/
│   │   ├── Gallery/
│   │   ├── Reservation/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   └── common/
│   │
│   ├── hooks/
│   │   ├── useFrameAnimation.js
│   │   └── useScrollAnimation.js
│   │
│   ├── utils/
│   │   ├── frameLoader.js
│   │   └── animation.js
│   │
│   ├── data/
│   │   ├── menuData.js
│   │   ├── reviewsData.js
│   │   └── galleryData.js
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── animations.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── README.md
└── .gitignore
```

> The exact structure may vary depending on the frontend framework and implementation.

---

# 📱 Responsive Design

Brew & Bean is designed for:

### 🖥️ Desktop

* Large hero visuals
* Multi-column layouts
* Large typography
* Wide gallery compositions
* Expanded navigation
* Detailed menu cards

### 📱 Tablet

* Adaptive layouts
* Readable typography
* Comfortable spacing
* Responsive navigation
* Optimized image presentation

### 📱 Mobile

* Touch-friendly controls
* Simplified navigation
* Responsive menu
* Stacked content
* Readable typography
* Optimized images
* Comfortable spacing
* Accessible forms

---

# ♿ Accessibility

Accessibility considerations include:

* Semantic HTML
* Accessible buttons
* Form labels
* Keyboard navigation
* Sufficient contrast
* Meaningful text
* Responsive typography
* Reduced-motion support

### Reduced Motion

Users who prefer reduced motion should receive a simplified animation experience where appropriate.

---

# 📊 Feature Status

| Feature                      | Status |
| ---------------------------- | :----: |
| Responsive Design            |    ✅   |
| Premium UI/UX                |    ✅   |
| Cinematic Hero               |    ✅   |
| 550-Frame Animation          |    ✅   |
| Scroll-Controlled Animation  |    ✅   |
| Progressive Frame Loading    |    ✅   |
| Frame Caching                |    ✅   |
| Interactive Menu             |    ✅   |
| Menu Categories              |    ✅   |
| Menu Search                  |    ✅   |
| Shopping Cart                |    ✅   |
| Delivery Checkout            |    ✅   |
| Pickup Checkout              |    ✅   |
| Dine-in Checkout             |    ✅   |
| Promo Code UI                |    ✅   |
| Payment UI                   | ✅ Demo |
| Order Confirmation           |    ✅   |
| Order Tracking               |    ✅   |
| Order Completed              |    ✅   |
| Reservation Form             |    ✅   |
| Reviews Section              |    ✅   |
| Gallery                      |    ✅   |
| Contact Section              |    ✅   |
| Responsive Navigation        |    ✅   |
| Accessibility Considerations |    ✅   |
| Reduced Motion Support       |    ✅   |

---

# 🧭 UX Principles

The project follows several core UX principles.

### 1. Visual Hierarchy

Important information receives stronger visual emphasis.

### 2. Consistent Design

Colors, typography, spacing and interactions remain consistent.

### 3. Clear Navigation

Users should always understand where they are and what action they can take next.

### 4. Minimal Friction

Forms and interactions are kept simple.

### 5. Visual Feedback

Interactive actions provide appropriate feedback.

### 6. Responsive Experience

The experience adapts to different screen sizes.

### 7. Performance First

Large visual assets should not prevent the website from becoming interactive.

---

# 🎯 Project Goals

The project was built around the following goals:

```text
Create Premium Café Identity
          ↓
Build Immersive Website
          ↓
Add Cinematic Storytelling
          ↓
Create Intuitive Navigation
          ↓
Build Interactive Menu
          ↓
Add Ordering Experience
          ↓
Add Reservation Experience
          ↓
Optimize Performance
          ↓
Create Portfolio-Quality Project
```

---

# 📚 What I Learned

This project helped strengthen my understanding of modern frontend development.

## 💻 Frontend Development

* Component-based development
* Reusable components
* Responsive layouts
* Interactive interfaces
* Client-side state handling

## 🎨 UI/UX

* Visual hierarchy
* Typography pairing
* Color systems
* Spacing systems
* User flows
* Responsive design
* Interaction design

## 🎬 Animation

* Scroll-driven animation
* Canvas rendering
* Frame-based animation
* Animation timing
* `requestAnimationFrame`
* Scroll performance

## ⚡ Performance

* Progressive asset loading
* Image optimization
* Frame caching
* Network request management
* Rendering optimization
* Initial load optimization

## 🧠 Product Thinking

The project helped me understand how multiple features can work together as one complete customer journey:

```text
Discover
   ↓
Explore
   ↓
Choose
   ↓
Order
   ↓
Pay
   ↓
Track
   ↓
Complete
```

---

# 🚀 Getting Started

Follow these steps to run the project locally.

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/brew-and-bean-cafe.git
```

## 2️⃣ Navigate to the Project

```bash
cd brew-and-bean-cafe
```

## 3️⃣ Install Dependencies

```bash
npm install
```

## 4️⃣ Start Development Server

```bash
npm run dev
```

## 5️⃣ Open in Browser

The development server will provide a local address similar to:

```text
http://localhost:5173
```

---

# 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# 🚀 Deployment

The project is deployed using **Vercel**.

### 🌐 Live Website

**Brew & Bean — Premium Café Website**

👉 https://brew-bean-cafe-gold.vercel.app/

---

# 🔮 Future Improvements

Possible future enhancements include:

* 🔐 Real authentication
* 🗄️ Real database integration
* ⚙️ Backend integration
* 💳 Real payment gateway
* 👤 Customer accounts
* 📦 Live order status
* 🛠️ Admin dashboard
* 📅 Online table management
* 🧾 Order history
* ❤️ Wishlist
* 🎁 Loyalty and rewards system
* 📧 Email notifications
* 📱 SMS notifications
* ⚡ Real-time order updates
* 📝 CMS-based menu management
* 📊 Advanced analytics
* 🔍 SEO optimization
* 📲 Progressive Web App support

---

# 🎓 Internship Project

This project was developed as part of my internship at:

## **SQ Rock It Solution**

The project provided practical experience in:

* Frontend development
* UI/UX design
* Responsive web development
* JavaScript / React
* Web animation
* Performance optimization
* Component architecture
* Interactive user experiences

It helped transform a design concept into a complete interactive web experience.

---

# ⚠️ Important Project Note

Brew & Bean is primarily a **frontend portfolio / internship project**.

The payment interface is a demonstration and **does not represent a production payment-processing system**.

For production deployment, the project would require:

* Secure backend infrastructure
* Authentication
* Database integration
* Secure payment processing
* Production-grade security
* Certified payment provider

> **No real payment transactions are processed by this frontend project.**

---

# 📸 Project Preview

The website includes a variety of visual experiences:

* 🎬 Cinematic hero animation
* ☕ Coffee imagery
* 🍰 Product cards
* 🏠 Café atmosphere
* 📖 Editorial storytelling
* 📸 Gallery layouts
* ⭐ Review cards
* 📅 Reservation interface
* 🛒 Shopping cart
* 🧾 Checkout experience
* 📦 Order tracking

> 💡 **Tip:** Add your best project screenshots or a short demo GIF here to make the GitHub repository even more visually attractive.

Example:

```md
## 📸 Screenshots

![Hero Section](./screenshots/hero.png)

![Menu](./screenshots/menu.png)

![Shopping Cart](./screenshots/cart.png)

![Checkout](./screenshots/checkout.png)
```

---

# ☕ Brand Experience

Brew & Bean is built around one simple idea:

> **Good coffee is not just a drink.**
>
> **It is an experience.**

The website translates that philosophy into a digital experience through:

```text
Coffee
   +
Craft
   +
People
   +
Design
   +
Technology
   =
Brew & Bean ☕
```

---

# ❤️ Credits

### Designed & Developed by

## **Code With Vishesh**

> Made with care by Code With Vishesh ❤️

---

# 🌐 Live Demo

  Experience the complete Brew & Bean website:

### 👉 https://brew-bean-cafe-gold.vercel.app/

---

# 📄 License

This project was created as an **internship and portfolio project**.

The source code and visual assets are intended for **project demonstration and educational purposes**.

---

<p align="center">

### ☕ Brew & Bean

<strong>Crafted with passion. Served with love.</strong>

<br><br>

Made with ❤️ by <strong>Code With Vishesh</strong>

</p>
