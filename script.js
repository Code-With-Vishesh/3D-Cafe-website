/* ==========================================================================
   BREW & BEAN — App Logic
   ========================================================================== */

const IMG = {
  cappuccino: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=500&q=80",
  espresso: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=500&q=80",
  latte: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80",
  americano: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=500&q=80",
  mocha: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=500&q=80",
  coldcoffee: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80",
  sandwich: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=500&q=80",
  panini: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?auto=format&fit=crop&w=500&q=80",
  burger: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=500&q=80",
  garlicbread: "https://images.unsplash.com/photo-1573140401552-3fab0b24427f?auto=format&fit=crop&w=500&q=80",
  croissant: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80",
  brownie: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80",
  cheesecake: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=500&q=80",
  tiramisu: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&q=80",
  chocolatecake: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?auto=format&fit=crop&w=500&q=80",
  cinnamonroll: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=500&q=80",
  icedtea: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=500&q=80",
  lemonade: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=80",
  hotchoc: "https://images.unsplash.com/photo-1542990253-0b8be3aa9c6b?auto=format&fit=crop&w=500&q=80",
  mangosmoothie: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=500&q=80",
  berrysmoothie: "https://images.unsplash.com/photo-1553530979-fbc9c9d5b0e8?auto=format&fit=crop&w=500&q=80",
  special: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80",
  hazelnut: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80",
  caramelmacchiato: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?auto=format&fit=crop&w=500&q=80",
};

const MENU_DATA = [
  { id: 1, category: "coffee", name: "Espresso", description: "Bold, concentrated shot of pure coffee.", price: 120, image: IMG.espresso },
  { id: 2, category: "coffee", name: "Cappuccino", description: "Espresso with steamed milk and silky foam.", price: 180, image: IMG.cappuccino },
  { id: 3, category: "coffee", name: "Latte", description: "Smooth espresso layered with steamed milk.", price: 190, image: IMG.latte },
  { id: 4, category: "coffee", name: "Americano", description: "Espresso diluted with hot water for a lighter body.", price: 150, image: IMG.americano },
  { id: 5, category: "coffee", name: "Mocha", description: "Rich espresso blended with premium chocolate.", price: 220, image: IMG.mocha },
  { id: 6, category: "coffee", name: "Cold Coffee", description: "Chilled espresso blended with milk and ice.", price: 200, image: IMG.coldcoffee },

  { id: 7, category: "fastfood", name: "Grilled Sandwich", description: "Toasted sandwich with fresh vegetables and cheese.", price: 220, image: IMG.sandwich },
  { id: 8, category: "fastfood", name: "Paneer Panini", description: "Pressed panini filled with spiced paneer.", price: 240, image: IMG.panini },
  { id: 9, category: "fastfood", name: "Veggie Burger", description: "Loaded plant patty with fresh greens and sauces.", price: 250, image: IMG.burger },
  { id: 10, category: "fastfood", name: "Cheese Garlic Bread", description: "Toasted bread with garlic butter and melted cheese.", price: 180, image: IMG.garlicbread },
  { id: 11, category: "fastfood", name: "Classic Croissant", description: "Flaky, buttery croissant baked fresh daily.", price: 160, image: IMG.croissant },

  { id: 12, category: "desserts", name: "Chocolate Brownie", description: "Fudgy, rich chocolate brownie served warm.", price: 170, image: IMG.brownie },
  { id: 13, category: "desserts", name: "Cheesecake", description: "Creamy baked cheesecake with a buttery crust.", price: 220, image: IMG.cheesecake },
  { id: 14, category: "desserts", name: "Tiramisu", description: "Classic Italian layered coffee dessert.", price: 240, image: IMG.tiramisu },
  { id: 15, category: "desserts", name: "Chocolate Cake", description: "Moist layered cake with silky chocolate ganache.", price: 200, image: IMG.chocolatecake },
  { id: 16, category: "desserts", name: "Cinnamon Roll", description: "Soft roll swirled with cinnamon and glaze.", price: 180, image: IMG.cinnamonroll },

  { id: 17, category: "beverages", name: "Iced Tea", description: "Refreshing chilled tea with a hint of citrus.", price: 150, image: IMG.icedtea },
  { id: 18, category: "beverages", name: "Fresh Lemonade", description: "Freshly squeezed lemons with a touch of mint.", price: 140, image: IMG.lemonade },
  { id: 19, category: "beverages", name: "Hot Chocolate", description: "Velvety chocolate served warm and comforting.", price: 200, image: IMG.hotchoc },
  { id: 20, category: "beverages", name: "Mango Smoothie", description: "Creamy blend of fresh mango and yogurt.", price: 220, image: IMG.mangosmoothie },
  { id: 21, category: "beverages", name: "Berry Smoothie", description: "Mixed berries blended smooth and chilled.", price: 230, image: IMG.berrysmoothie },

  { id: 22, category: "specials", name: "Brew & Bean Special", description: "Our signature house blend, crafted with care.", price: 280, image: IMG.special },
  { id: 23, category: "specials", name: "Hazelnut Latte", description: "Espresso and steamed milk with hazelnut notes.", price: 240, image: IMG.hazelnut },
  { id: 24, category: "specials", name: "Caramel Macchiato", description: "Espresso marked with vanilla and caramel drizzle.", price: 250, image: IMG.caramelmacchiato },
  { id: 25, category: "specials", name: "Signature Brownie", description: "Our house brownie with a molten caramel core.", price: 220, image: IMG.brownie },
];

const REVIEWS = [
  { text: "Beautiful atmosphere and probably the best cappuccino I've had in months.", name: "Aarav Sharma", avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&q=80" },
  { text: "Amazing coffee, friendly staff and a perfect place to spend an afternoon.", name: "Priya Mehta", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" },
  { text: "The desserts are incredible and the atmosphere is perfect for working.", name: "Rohan Kapoor", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
  { text: "A beautiful little cafe with excellent coffee and friendly service.", name: "Ananya Singh", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=100&q=80" },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80",
];

/* ---------------------------------- State ---------------------------------- */
const state = {
  category: "all",
  search: "",
  cart: JSON.parse(localStorage.getItem("bb_cart") || "[]"),
  reviewIndex: 0,
  reviewTimer: null,
  galleryIndex: 0,
};

/* ---------------------------------- Preloader ---------------------------------- */
// The loader tracks only the first usable experience, never the full 550-frame
// sequence. It is removed after frame 001 is decoded and the short entrance has run.
const preloader = document.getElementById("preloader");
const preloaderStartedAt = performance.now();
let preloaderFinished = false;
function setPreloaderProgress(value, status) {
  if (!preloader || preloaderFinished) return;
  const progress = Math.max(0, Math.min(100, Math.round(value)));
  document.getElementById("pre-progress-fill").style.width = `${progress}%`;
  document.getElementById("pre-percent").textContent = `${progress}%`;
  if (status) document.getElementById("pre-status").textContent = status;
}
function finishPreloader() {
  if (!preloader || preloaderFinished) return;
  setPreloaderProgress(100, "Your coffee awaits.");
  preloaderFinished = true;
  const minimumDisplay = 900;
  const remaining = Math.max(0, minimumDisplay - (performance.now() - preloaderStartedAt));
  window.setTimeout(() => {
    preloader.classList.add("hide");
    window.setTimeout(() => preloader.remove(), 700);
  }, remaining);
}
setPreloaderProgress(25, "Preparing your cup...");
if (document.fonts?.ready) document.fonts.ready.then(() => setPreloaderProgress(55, "Warming the room..."));
window.addEventListener("brew:hero-critical-ready", () => {
  setPreloaderProgress(85, "Almost ready...");
  requestAnimationFrame(() => {
    setPreloaderProgress(100, "Your coffee awaits.");
    finishPreloader();
  });
}, { once: true });

/* ---------------------------------- Theme ---------------------------------- */
function initTheme() {
  const saved = localStorage.getItem("bb_theme");
  const theme = saved || "light";
  document.documentElement.setAttribute("data-theme", theme);
}
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("bb_theme", next);
}
initTheme();
document.querySelectorAll(".theme-toggle").forEach(btn => btn.addEventListener("click", toggleTheme));

/* ---------------------------------- Navbar scroll ---------------------------------- */
const navbar = document.getElementById("navbar");
const navSections = ["home", "about", "menu", "reviews", "gallery", "reservation", "contact"];
function onScroll() {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
  document.getElementById("back-top").classList.toggle("show", window.scrollY > 700);
  document.body.classList.toggle("has-scrolled", window.scrollY > 20);
  updateActiveNav();
}
window.addEventListener("scroll", onScroll);
onScroll();

/* Active nav link highlighting */
function updateActiveNav() {
  let current = "home";
  navSections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 140) current = id;
  });
  document.querySelectorAll('.nav-links a[data-nav]').forEach(a => {
    a.classList.toggle("active", a.dataset.nav === current);
  });
}

/* ---------------------------------- Mobile nav ---------------------------------- */
const mobileNav = document.getElementById("mobile-nav");
const hamburgerButton = document.getElementById("hamburger-btn");
function setMobileNav(open) {
  mobileNav.classList.toggle("open", open);
  hamburgerButton.setAttribute("aria-expanded", String(open));
  hamburgerButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
hamburgerButton.setAttribute("aria-expanded", "false");
hamburgerButton.addEventListener("click", () => setMobileNav(!mobileNav.classList.contains("open")));
document.getElementById("mobile-nav-close").addEventListener("click", () => setMobileNav(false));
mobileNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMobileNav(false)));

/* ---------------------------------- Back to top ---------------------------------- */
document.getElementById("back-top").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------------------------------- Scroll reveal ---------------------------------- */
const revealEls = document.querySelectorAll(".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-image, .reveal-stagger");
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
revealEls.forEach(el => io.observe(el));

/* ---------------------------------- Lightweight scroll parallax (subtle, GPU-friendly) ---------------------------------- */
function initParallax(selector, strength) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return;
  const el = document.querySelector(selector);
  if (!el) return;
  let ticking = false;
  const update = () => {
    ticking = false;
    const rect = el.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    const offset = ((rect.top + rect.height / 2) - window.innerHeight / 2) / window.innerHeight;
    el.style.setProperty("--parallax-y", `${Math.round(offset * strength)}px`);
  };
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}
initParallax(".about-img", 18);
initParallax(".res-info-img", 14);

/* ---------------------------------- Cinematic intro reveal ---------------------------------- */
function initCinematicIntro() {
  const intro = document.querySelector(".intro-cinematic");
  if (!intro) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const image = intro.querySelector(".intro-img");
  const badge = intro.querySelector(".intro-badge");
  let active = false, rafId = 0;

  const updateParallax = () => {
    rafId = 0;
    if (!active || reducedMotion) return;
    const rect = intro.getBoundingClientRect();
    const offset = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight));
    image.style.setProperty("--intro-parallax", `${Math.round(offset * -14)}px`);
    badge.style.setProperty("--intro-badge-parallax", `${Math.round(offset * -7)}px`);
  };
  const onScroll = () => { if (!rafId) rafId = requestAnimationFrame(updateParallax); };
  const revealIntro = () => {
    if (active) return;
    intro.classList.add("is-intro-visible");
    active = true;
    updateParallax();
    if (!reducedMotion) window.addEventListener("scroll", onScroll, { passive: true });
  };
  if (!("IntersectionObserver" in window)) {
    revealIntro();
    return;
  }
  const observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    observer.disconnect();
    revealIntro();
  }, { threshold: 0.2 });
  observer.observe(intro);
}
initCinematicIntro();

/* ---------------------------------- Stat counters ---------------------------------- */
const statEls = document.querySelectorAll(".stat-num[data-target]");
const statIo = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || "";
    let current = 0;
    const step = Math.max(1, Math.round(target / 60));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = current + suffix;
    }, 20);
    statIo.unobserve(el);
  });
}, { threshold: 0.4 });
statEls.forEach(el => statIo.observe(el));

/* ---------------------------------- Toast ---------------------------------- */
function showToast(message) {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg><span>${message}</span>`;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 2600);
}

/* ---------------------------------- Cart ---------------------------------- */
function saveCart() { localStorage.setItem("bb_cart", JSON.stringify(state.cart)); }

function addToCart(id, btnEl) {
  const item = MENU_DATA.find(m => m.id === id) || SIGNATURE.find(m => m.id === id);
  animateCartFlight(item, btnEl);
  const existing = state.cart.find(c => c.id === id);
  if (existing) existing.qty += 1;
  else state.cart.push({ id: item.id, name: item.name, price: item.price, image: item.image, qty: 1 });
  saveCart();
  renderCart();
  showToast("Added to your order");
  if (btnEl) { btnEl.classList.remove("bump"); void btnEl.offsetWidth; btnEl.classList.add("bump"); }
}

function animateCartFlight(item, source) {
  const cartButton = document.querySelector(".cart-open-btn");
  if (!source || !cartButton) return;
  const sourceRect = source.getBoundingClientRect();
  const targetRect = cartButton.getBoundingClientRect();
  const clone = document.createElement("img");
  clone.src = item.image;
  clone.alt = "";
  clone.className = "cart-flight-image";
  clone.style.left = `${sourceRect.left + sourceRect.width / 2 - 24}px`;
  clone.style.top = `${sourceRect.top + sourceRect.height / 2 - 24}px`;
  clone.style.setProperty("--flight-x", `${targetRect.left + targetRect.width / 2 - sourceRect.left - sourceRect.width / 2}px`);
  clone.style.setProperty("--flight-y", `${targetRect.top + targetRect.height / 2 - sourceRect.top - sourceRect.height / 2}px`);
  document.body.appendChild(clone);
  requestAnimationFrame(() => clone.classList.add("fly"));
  clone.addEventListener("transitionend", () => { clone.remove(); cartButton.classList.remove("cart-pulse"); void cartButton.offsetWidth; cartButton.classList.add("cart-pulse"); }, { once: true });
}

function changeQty(id, delta) {
  const item = state.cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart = state.cart.filter(c => c.id !== id);
  saveCart();
  renderCart();
  if (typeof renderCheckoutSummary === "function") renderCheckoutSummary();
}

function removeFromCart(id) {
  const cartItem = document.querySelector(`.cart-item[data-cart-id="${id}"]`);
  if (cartItem) {
    cartItem.classList.add("removing");
    setTimeout(() => removeCartItemNow(id), 280);
    return;
  }
  removeCartItemNow(id);
}
function removeCartItemNow(id) {
  state.cart = state.cart.filter(c => c.id !== id);
  saveCart();
  renderCart();
  if (typeof renderCheckoutSummary === "function") renderCheckoutSummary();
}

function renderCart() {
  const wrap = document.getElementById("cart-items");
  const count = state.cart.reduce((s, c) => s + c.qty, 0);
  const subtotal = state.cart.reduce((s, c) => s + c.qty * c.price, 0);

  document.querySelectorAll(".cart-count").forEach(el => {
    el.textContent = count;
    el.classList.toggle("show", count > 0);
  });
  document.getElementById("cart-subtotal-val").textContent = "₹" + subtotal;

  if (state.cart.length === 0) {
    wrap.innerHTML = `<div class="cart-empty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
      <p>Your order is empty.</p>
      <p style="font-size:13px;margin-top:6px;">Add something delicious from the menu.</p>
    </div>`;
    return;
  }

  wrap.innerHTML = state.cart.map((c, index) => `
    <div class="cart-item" data-cart-id="${c.id}" style="--item-delay:${index * 70}ms">
      <img src="${c.image}" alt="${c.name}">
      <div class="cart-item-info">
        <h4>${c.name}</h4>
        <div class="price">₹${c.price}</div>
        <div class="qty-ctrl">
          <button aria-label="Decrease quantity" onclick="changeQty(${c.id}, -1)">−</button>
          <span>${c.qty}</span>
          <button aria-label="Increase quantity" onclick="changeQty(${c.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" aria-label="Remove item" onclick="removeFromCart(${c.id})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z"/></svg>
      </button>
    </div>
  `).join("");
}

const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
function openCart() { cartDrawer.classList.add("open"); cartOverlay.classList.add("open"); }
function closeCart() { cartDrawer.classList.remove("open"); cartOverlay.classList.remove("open"); }
document.querySelectorAll(".cart-open-btn").forEach(b => b.addEventListener("click", openCart));
document.getElementById("cart-close").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
document.getElementById("cart-view-order").addEventListener("click", () => {
  closeCart();
  const button = document.getElementById("cart-view-order");
  button.disabled = true;
  button.innerHTML = "Opening checkout...";
  setTimeout(() => { button.disabled = false; button.innerHTML = "Proceed to Checkout <span>→</span>"; openOrderApp(); }, 240);
});

/* ---------------------------------- Signature Brews ---------------------------------- */
const SIGNATURE = [
  { id: 101, name: "Classic Cappuccino", description: "Rich espresso, steamed milk and silky foam.", price: 180, image: IMG.cappuccino },
  { id: 102, name: "Caramel Latte", description: "Smooth espresso blended with creamy caramel.", price: 210, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80" },
  { id: 103, name: "Spanish Latte", description: "Bold espresso balanced with sweet condensed milk.", price: 220, image: IMG.latte },
  { id: 104, name: "Mocha", description: "Rich espresso blended with premium chocolate.", price: 230, image: IMG.mocha },
];

function renderSignature() {
  const wrap = document.getElementById("brew-grid");
  wrap.innerHTML = SIGNATURE.map(item => `
    <div class="brew-card">
      <div class="brew-card-img"><img src="${item.image}" alt="${item.name}" loading="lazy"></div>
      <div class="brew-card-body">
        <h4>${item.name}</h4>
        <p>${item.description}</p>
        <div class="brew-card-foot">
          <span class="brew-price">₹${item.price}</span>
          <button class="add-btn" aria-label="Add ${item.name} to order" onclick="addToCart(${item.id}, this)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 5v14M5 12h14"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join("");
}
renderSignature();

/* ---------------------------------- Menu render / filter / search ---------------------------------- */
function renderMenu() {
  const wrap = document.getElementById("menu-grid");
  const empty = document.getElementById("menu-empty");
  const q = state.search.trim().toLowerCase();

  const filtered = MENU_DATA.filter(item => {
    const matchesCategory = state.category === "all" || item.category === state.category;
    const matchesSearch = !q || item.name.toLowerCase().includes(q) || item.category.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    wrap.innerHTML = "";
    empty.classList.add("show");
    return;
  }
  empty.classList.remove("show");
  wrap.classList.remove("menu-filtering");
  void wrap.offsetWidth;
  wrap.classList.add("menu-filtering");

  wrap.innerHTML = filtered.map((item, i) => `
    <div class="menu-card reveal in" style="--item-delay:${Math.min(i, 8) * 40}ms">
      <div class="menu-card-img"><img src="${item.image}" alt="${item.name}" loading="lazy"></div>
      <div class="menu-card-info">
        <h4>${item.name}</h4>
        <p>${item.description}</p>
        <div class="menu-card-foot">
          <span class="menu-price">₹${item.price}</span>
          <button class="add-btn-sm" aria-label="Add ${item.name} to order" onclick="addToCart(${item.id}, this)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 5v14M5 12h14"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll(".category-card").forEach(card => card.classList.remove("active"));
    state.category = btn.dataset.filter;
    renderMenu();
  });
});

document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".category-card").forEach(item => item.classList.remove("active"));
    card.classList.add("active");
    document.querySelectorAll(".filter-btn").forEach(button => button.classList.toggle("active", button.dataset.filter === card.dataset.categoryFilter));
    state.category = card.dataset.categoryFilter;
    renderMenu();
    document.getElementById("menu-grid").scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});

document.getElementById("menu-search-input").addEventListener("input", (e) => {
  state.search = e.target.value;
  renderMenu();
});

renderMenu();

/* ---------------------------------- Gallery + Lightbox ---------------------------------- */
function renderGallery() {
  const wrap = document.getElementById("gallery-grid");
  wrap.innerHTML = GALLERY.map((src, i) => `
    <div class="gallery-item" onclick="openLightbox(${i})">
      <img src="${src}" alt="Brew & Bean gallery photo ${i + 1}" loading="lazy">
      <div class="gallery-overlay">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
      </div>
    </div>
  `).join("");
}
renderGallery();

const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
function openLightbox(i) {
  state.galleryIndex = i;
  lbImg.src = GALLERY[i];
  lightbox.classList.add("open");
}
function closeLightbox() { lightbox.classList.remove("open"); }
function lbNav(delta) {
  state.galleryIndex = (state.galleryIndex + delta + GALLERY.length) % GALLERY.length;
  lbImg.src = GALLERY[state.galleryIndex];
}
document.getElementById("lb-close").addEventListener("click", closeLightbox);
document.getElementById("lb-prev").addEventListener("click", () => lbNav(-1));
document.getElementById("lb-next").addEventListener("click", () => lbNav(1));
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") lbNav(-1);
  if (e.key === "ArrowRight") lbNav(1);
});

/* ---------------------------------- Reviews carousel ---------------------------------- */
function renderReviews() {
  const wrap = document.getElementById("review-slides");
  wrap.innerHTML = REVIEWS.map(r => `
    <div class="review-slide">
      <div class="review-slide-inner">
        <div class="stars">★★★★★</div>
        <p>"${r.text}"</p>
        <div class="review-person">
          <div class="review-avatar"><img src="${r.avatar}" alt="${r.name}"></div>
          <div><strong>${r.name}</strong><span>Verified Customer</span></div>
        </div>
      </div>
    </div>
  `).join("");
  const dots = document.getElementById("review-dots");
  dots.innerHTML = REVIEWS.map((_, i) => `<button class="review-dot${i === 0 ? " active" : ""}" aria-label="Go to review ${i + 1}" onclick="goToReview(${i})"></button>`).join("");
}
function updateReviewSlide() {
  document.getElementById("review-slides").style.transform = `translateX(-${state.reviewIndex * 100}%)`;
  document.querySelectorAll(".review-dot").forEach((d, i) => d.classList.toggle("active", i === state.reviewIndex));
}
function goToReview(i) { state.reviewIndex = i; updateReviewSlide(); restartAutoplay(); }
function nextReview() { state.reviewIndex = (state.reviewIndex + 1) % REVIEWS.length; updateReviewSlide(); }
function prevReview() { state.reviewIndex = (state.reviewIndex - 1 + REVIEWS.length) % REVIEWS.length; updateReviewSlide(); }
function restartAutoplay() {
  clearInterval(state.reviewTimer);
  state.reviewTimer = setInterval(nextReview, 5000);
}
renderReviews();
restartAutoplay();
document.getElementById("review-next").addEventListener("click", () => { nextReview(); restartAutoplay(); });
document.getElementById("review-prev").addEventListener("click", () => { prevReview(); restartAutoplay(); });
document.querySelector(".review-track-wrap").addEventListener("mouseenter", () => clearInterval(state.reviewTimer));
document.querySelector(".review-track-wrap").addEventListener("mouseleave", restartAutoplay);

/* ---------------------------------- Reservation form ---------------------------------- */
const resForm = document.getElementById("reservation-form");
const dateInput = document.getElementById("res-date");
dateInput.min = new Date().toISOString().split("T")[0];

function setFieldError(fieldId, message) {
  const field = document.getElementById(fieldId).closest(".field");
  field.classList.add("error");
  field.querySelector(".error-msg").textContent = message;
}
function clearFieldError(fieldId) {
  document.getElementById(fieldId).closest(".field").classList.remove("error");
}

resForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById("res-name").value.trim();
  const phone = document.getElementById("res-phone").value.trim();
  const email = document.getElementById("res-email").value.trim();
  const date = document.getElementById("res-date").value;
  const time = document.getElementById("res-time").value;
  const guests = document.getElementById("res-guests").value;

  ["res-name", "res-phone", "res-email", "res-date", "res-time", "res-guests"].forEach(clearFieldError);

  if (!name) { setFieldError("res-name", "Please enter your name."); valid = false; }
  if (!phone) { setFieldError("res-phone", "Please enter your phone number."); valid = false; }
  else if (!/^[0-9+\-\s()]{7,}$/.test(phone)) { setFieldError("res-phone", "Please enter a valid phone number."); valid = false; }

  if (!email) { setFieldError("res-email", "Please enter your email address."); valid = false; }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setFieldError("res-email", "Please enter a valid email address."); valid = false; }

  if (!date) { setFieldError("res-date", "Please select a date."); valid = false; }
  else {
    const today = new Date(); today.setHours(0,0,0,0);
    const chosen = new Date(date);
    if (chosen < today) { setFieldError("res-date", "Date cannot be in the past."); valid = false; }
  }

  if (!time) { setFieldError("res-time", "Please select a time."); valid = false; }
  if (!guests) { setFieldError("res-guests", "Please select number of guests."); valid = false; }

  if (!valid) return;

  const submitButton = e.submitter;
  submitButton.disabled = true;
  submitButton.innerHTML = "Checking availability...";
  setTimeout(() => {
    submitButton.disabled = false;
    submitButton.innerHTML = "Reserve Table <span>→</span>";
    document.getElementById("reservation-form-wrap").style.display = "none";
    const success = document.getElementById("res-success");
    document.getElementById("res-success-name").textContent = name;
    success.classList.add("show");
    showToast("Reservation request sent");
  }, 650);
});

document.getElementById("res-back-btn").addEventListener("click", () => {
  document.getElementById("res-success").classList.remove("show");
  document.getElementById("reservation-form-wrap").style.display = "block";
  resForm.reset();
});

/* ---------------------------------- Newsletter (frontend only) ---------------------------------- */
document.getElementById("newsletter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = e.target.querySelector("input");
  if (!input.value.trim()) return;
  showToast("Thanks for subscribing");
  input.value = "";
});

/* ---------------------------------- Smooth scroll for in-page links ---------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 90, behavior: "smooth" });
    }
  });
});

/* ---------------------------------- Init ---------------------------------- */
renderCart();

/* ---------------------------------- Cinematic scroll hero ---------------------------------- */
function initCoffeeScrollHero() {
  const hero = document.querySelector(".coffee-scroll-hero");
  const canvas = hero?.querySelector(".coffee-frame-canvas");
  if (!hero || !canvas) return;

  const FRAME_COUNT = 550;
  const FRAME_POSITION_X = 0.5;
  const FRAME_POSITION_Y = 0.5;
  const frames = new Array(FRAME_COUNT);
  const context = canvas.getContext("2d");
  const loadingMessage = hero.querySelector(".coffee-hero-loading");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const INITIAL_FRAME_COUNT = 10;
  const MAX_CONCURRENT_LOADS = 3;
  const frameStatus = new Uint8Array(FRAME_COUNT); // 0: idle, 1: loading, 2: loaded, 3: failed
  const queuedPriorities = new Map();
  const queue = [];
  const backgroundBatches = [[10, 49], [50, 149], [150, 299], [300, 449], [450, 549]];
  let targetFrame = 0, currentFrame = -1, drawnSource = -1, rafId = 0;
  let activeLoads = 0, queueOrder = 0, backgroundBatch = 0, idleId = 0, scrollDirection = 1;

  const framePath = index => `frames/frame_${String(index + 1).padStart(3, "0")}.png`;
  const closestLoadedFrame = index => {
    if (frames[index]) return index;
    for (let offset = 1; offset < FRAME_COUNT; offset += 1) {
      if (frames[index - offset]) return index - offset;
      if (frames[index + offset]) return index + offset;
    }
    return -1;
  };
  const resizeCanvas = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.round(width * ratio));
    canvas.height = Math.max(1, Math.round(height * ratio));
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    currentFrame = -1;
    drawnSource = -1;
    requestRender();
  };
  const drawFrame = index => {
    const sourceIndex = closestLoadedFrame(index);
    const image = frames[sourceIndex];
    if (!image) return;
    const { width, height } = canvas.getBoundingClientRect();
    const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
    const drawWidth = image.naturalWidth * scale;
    const drawHeight = image.naturalHeight * scale;
    const x = (width - drawWidth) * FRAME_POSITION_X;
    const y = (height - drawHeight) * FRAME_POSITION_Y;
    context.clearRect(0, 0, width, height);
    context.drawImage(image, x, y, drawWidth, drawHeight);
    currentFrame = index;
    drawnSource = sourceIndex;
  };
  const requestRender = () => {
    if (!rafId) rafId = requestAnimationFrame(() => {
      rafId = 0;
      if (currentFrame !== targetFrame || closestLoadedFrame(targetFrame) !== drawnSource) drawFrame(targetFrame);
    });
  };

  // Frames are queued by importance, never requested more than once, and only
  // three at a time. This avoids saturating the network/main thread on first visit.
  const queueFrame = (index, priority = 0) => {
    if (index < 0 || index >= FRAME_COUNT || frameStatus[index]) return;
    const queuedPriority = queuedPriorities.get(index);
    if (queuedPriority !== undefined && queuedPriority >= priority) return;
    queuedPriorities.set(index, priority);
    queue.push({ index, priority, order: queueOrder++ });
  };
  const queueRange = (start, end, priority) => {
    for (let index = start; index <= end; index += 1) queueFrame(index, priority);
  };
  const queueFramesNearTarget = () => {
    queueFrame(targetFrame, 1000);
    for (let distance = 1; distance <= 16; distance += 1) {
      // Look farther ahead in the direction the visitor is travelling.
      queueFrame(targetFrame + scrollDirection * distance, 900 - distance);
      queueFrame(targetFrame - scrollDirection * distance, 700 - distance);
    }
  };
  const scheduleBackgroundBatch = () => {
    if (backgroundBatch >= backgroundBatches.length || idleId) return;
    const run = () => {
      idleId = 0;
      const [start, end] = backgroundBatches[backgroundBatch++];
      queueRange(start, end, 10);
      drainQueue();
    };
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(run, { timeout: 1200 });
    } else {
      idleId = window.setTimeout(run, 700);
    }
  };
  const finishLoad = (index, image) => {
    if (image) {
      frames[index] = image;
      frameStatus[index] = 2;
      if (index === targetFrame || closestLoadedFrame(targetFrame) !== drawnSource) requestRender();
    } else {
      frameStatus[index] = 3;
    }
    activeLoads -= 1;
    drainQueue();
    if (!activeLoads && !queue.length) scheduleBackgroundBatch();
  };
  const startFrameLoad = index => {
    frameStatus[index] = 1;
    activeLoads += 1;
    const image = new Image();
    image.decoding = "async";
    image.onload = () => {
      // Decoding happens off the main rendering path where supported. A decode
      // failure still leaves a perfectly usable loaded HTMLImageElement.
      image.decode().catch(() => {}).then(() => finishLoad(index, image));
    };
    image.onerror = () => finishLoad(index, null);
    image.src = framePath(index);
  };
  function drainQueue() {
    if (queue.length > 1) queue.sort((a, b) => b.priority - a.priority || a.order - b.order);
    while (activeLoads < MAX_CONCURRENT_LOADS && queue.length) {
      const job = queue.shift();
      if (queuedPriorities.get(job.index) !== job.priority) continue;
      queuedPriorities.delete(job.index);
      if (frameStatus[job.index]) continue;
      startFrameLoad(job.index);
    }
  }
  const updateFrameFromScroll = () => {
    if (reducedMotion) return;
    const rect = hero.getBoundingClientRect();
    const scrollableDistance = hero.offsetHeight - window.innerHeight;
    const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, scrollableDistance)));
    const nextFrame = Math.floor(progress * (FRAME_COUNT - 1));
    if (nextFrame !== targetFrame) scrollDirection = nextFrame > targetFrame ? 1 : -1;
    targetFrame = nextFrame;
    queueFramesNearTarget();
    drainQueue();
    requestRender();
  };
  const firstFrame = new Image();
  frameStatus[0] = 1;
  firstFrame.decoding = "async";
  firstFrame.fetchPriority = "high";
  firstFrame.onload = () => {
    firstFrame.decode().catch(() => {}).then(() => {
      frames[0] = firstFrame;
      frameStatus[0] = 2;
      loadingMessage?.classList.add("is-ready");
      window.dispatchEvent(new Event("brew:hero-critical-ready"));
      resizeCanvas();
      updateFrameFromScroll();
      queueRange(1, INITIAL_FRAME_COUNT - 1, 800);
      drainQueue();
      scheduleBackgroundBatch();
    });
  };
  firstFrame.onerror = () => { frameStatus[0] = 3; loadingMessage.textContent = "Coffee story unavailable — please continue exploring."; window.dispatchEvent(new Event("brew:hero-critical-ready")); };
  firstFrame.src = framePath(0);

  window.addEventListener("scroll", updateFrameFromScroll, { passive: true });
  window.addEventListener("resize", resizeCanvas, { passive: true });
  updateFrameFromScroll();
}
initCoffeeScrollHero();

/* ---------------------------------- Checkout / payment / tracking ---------------------------------- */
const orderState = {
  view: "checkout", type: "delivery", payment: "upi", coupon: false, guestCount: 2,
  orderId: "", status: 0, previousItems: [], trackingTimer: null,
};
const orderViews = ["order-checkout", "order-payment", "order-confirmation", "order-tracking"];
const orderSteps = { checkout: 2, payment: 3, confirmation: 4, tracking: 4 };
const orderApp = document.getElementById("order-app");

function orderSubtotal() { return state.cart.reduce((sum, item) => sum + item.price * item.qty, 0); }
function orderDiscount() { return orderState.coupon ? Math.round(orderSubtotal() * .1) : 0; }
function orderDelivery() { return orderState.type === "delivery" ? 40 : 0; }
function orderTax() { return Math.round((orderSubtotal() - orderDiscount()) * .05); }
function orderTotal() { return orderSubtotal() + orderDelivery() - orderDiscount() + orderTax(); }
function money(value) { return "₹" + Math.max(0, value); }

function renderCheckoutItems(targetId, compact = false) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = state.cart.map(item => `<div class="summary-item"><img src="${item.image}" alt="${item.name}"><div><b>${item.name}</b><span class="summary-qty"><button type="button" aria-label="Decrease ${item.name}" onclick="changeQty(${item.id}, -1)">−</button> Qty ${item.qty} <button type="button" aria-label="Increase ${item.name}" onclick="changeQty(${item.id}, 1)">+</button></span></div><b>${money(item.price * item.qty)}</b></div>`).join("");
}
function renderCheckoutSummary() {
  renderCheckoutItems("checkout-items");
  const subtotal = orderSubtotal();
  document.getElementById("checkout-subtotal").textContent = money(subtotal);
  document.getElementById("checkout-delivery").textContent = money(orderDelivery());
  document.getElementById("checkout-discount").textContent = "-" + money(orderDiscount());
  document.getElementById("checkout-tax").textContent = money(orderTax());
  document.getElementById("checkout-total").textContent = money(orderTotal());
  const payAmount = document.getElementById("pay-amount");
  if (payAmount) payAmount.textContent = money(orderTotal());
  renderCheckoutItems("payment-summary", true);
}
function openOrderApp() {
  if (!state.cart.length) { showToast("Add an item before checkout"); document.getElementById("menu").scrollIntoView({ behavior: "smooth" }); return; }
  orderApp.classList.add("open"); orderApp.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden";
  showOrderView("checkout"); renderCheckoutSummary();
}
function closeOrderApp() { if (orderApp.contains(document.activeElement)) document.activeElement.blur(); orderApp.classList.remove("open"); orderApp.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; clearTimeout(orderState.trackingTimer); }
function showOrderView(view) {
  orderState.view = view;
  orderViews.forEach(id => document.getElementById(id).classList.toggle("is-hidden", id !== "order-" + view));
  const step = orderSteps[view] || 2;
  document.querySelectorAll(".progress-step").forEach((item, index) => { item.classList.toggle("done", index + 1 < step); item.classList.toggle("current", index + 1 === step); item.innerHTML = `${index + 1 < step ? "✓" : index + 1 === step ? "●" : "○"} <b>${item.dataset.step === "1" ? "Cart" : item.dataset.step === "2" ? "Checkout" : item.dataset.step === "3" ? "Payment" : "Done"}</b>`; });
  orderApp.scrollTo({ top: 0, behavior: "smooth" });
}
function setOrderType(type) {
  orderState.type = type;
  document.querySelectorAll(".order-type").forEach(button => button.classList.toggle("selected", button.dataset.type === type));
  ["delivery", "pickup", "dinein"].forEach(id => document.getElementById(id + "-fields").classList.toggle("is-hidden", id !== type));
  renderCheckoutSummary();
}
document.getElementById("order-close").addEventListener("click", closeOrderApp);
document.getElementById("order-back").addEventListener("click", () => { if (orderState.view === "checkout") { closeOrderApp(); openCart(); } else if (orderState.view === "payment") showOrderView("checkout"); else if (orderState.view === "tracking") showOrderView("confirmation"); });
document.querySelectorAll(".order-type").forEach(button => button.addEventListener("click", () => setOrderType(button.dataset.type)));
function updatePaymentButton() { const button = document.getElementById("pay-now"); button.innerHTML = orderState.payment === "cash" ? "Confirm Order <span>→</span>" : `Pay <span id="pay-amount">${money(orderTotal())}</span> <span>→</span>`; }
document.querySelectorAll(".payment-method").forEach(button => button.addEventListener("click", () => { orderState.payment = button.dataset.payment; document.querySelectorAll(".payment-method").forEach(item => item.classList.toggle("selected", item === button)); ["upi", "card", "cash"].forEach(id => document.getElementById(id + "-payment").classList.toggle("is-hidden", id !== orderState.payment)); updatePaymentButton(); }));
document.querySelectorAll("[data-guest]").forEach(button => button.addEventListener("click", () => { orderState.guestCount = Math.max(1, Math.min(12, orderState.guestCount + Number(button.dataset.guest))); document.getElementById("guest-count").textContent = orderState.guestCount; }));
document.getElementById("special-instructions").addEventListener("input", event => { document.getElementById("char-count").textContent = event.target.value.length; });
document.getElementById("save-address").addEventListener("change", event => { if (event.target.checked) showToast("Address saved for this demo"); });
document.querySelectorAll("#order-checkout input, #order-checkout textarea, #order-checkout select").forEach(input => input.addEventListener("input", () => { const label = input.closest("label"); if (label) label.classList.remove("invalid"); }));
document.getElementById("coupon-apply").addEventListener("click", () => { const input = document.getElementById("coupon-input"); const message = document.getElementById("coupon-message"); if (input.value.trim().toUpperCase() === "BREW10") { orderState.coupon = true; message.textContent = "✓ Coupon applied successfully"; showToast("Coupon applied"); } else { orderState.coupon = false; message.textContent = "Invalid promo code. Please try again."; message.style.color = "#B84B3E"; } renderCheckoutSummary(); });
function validateOrder() {
  const checks = [{ id: "order-name", message: "Please enter your full name." }, { id: "order-phone", message: "Please enter a valid mobile number.", test: value => { const digits = value.replace(/\D/g, ""); const local = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits; return /^[6-9]\d{9}$/.test(local); } }, { id: "order-email", message: "Please enter a valid email address.", test: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) }];
  if (orderState.type === "delivery") checks.push({ id: "address-house", message: "Please enter your delivery address." }, { id: "address-street", message: "Please enter your street or area." }, { id: "address-city", message: "Please enter your city." }, { id: "address-state", message: "Please enter your state." }, { id: "address-pincode", message: "Please enter a valid pincode.", test: value => /^\d{6}$/.test(value) });
  let firstInvalid = null;
  checks.forEach(check => { const input = document.getElementById(check.id); const valid = input.value.trim() && (!check.test || check.test(input.value.trim())); const label = input.closest("label"); label.classList.toggle("invalid", !valid); label.querySelector("small").textContent = valid ? "" : check.message; if (!valid && !firstInvalid) firstInvalid = input; });
  if (firstInvalid) { firstInvalid.focus(); showToast("Please check the highlighted details"); return false; }
  return true;
}
document.getElementById("continue-payment").addEventListener("click", () => { if (validateOrder()) { showOrderView("payment"); renderCheckoutSummary(); } });
function createOrder() {
  orderState.previousItems = state.cart.map(item => ({ ...item })); orderState.orderId = "BB" + Math.floor(1000 + Math.random() * 9000); orderState.status = 0;
  localStorage.setItem("bb_current_order", JSON.stringify({ id: orderState.orderId, type: orderState.type, items: orderState.previousItems }));
  renderConfirmation(); showOrderView("confirmation"); showToast("Order placed successfully");
}
function showPaymentFailure() { const error = document.getElementById("payment-error"); error.innerHTML = "✕ Payment Failed. Something went wrong while processing your payment.<br><button type=\"button\" onclick=\"retryPayment()\">Try Again</button> <button type=\"button\" onclick=\"changePaymentMethod()\">Change Payment Method</button>"; }
function retryPayment() { document.getElementById("payment-error").textContent = ""; document.getElementById("pay-now").click(); }
function changePaymentMethod() { document.getElementById("payment-error").textContent = ""; document.querySelector('.payment-method[data-payment="upi"]').focus(); }
document.getElementById("pay-now").addEventListener("click", () => { const error = document.getElementById("payment-error"); error.textContent = ""; const success = document.getElementById("payment-success"); success.classList.add("is-hidden"); if (orderState.payment === "upi" && !document.getElementById("upi-id").value.trim()) { error.textContent = "Please enter a demo UPI ID."; return; } if (orderState.payment === "upi" && document.getElementById("upi-id").value.trim().toLowerCase() === "fail@upi") { showPaymentFailure(); return; } if (orderState.payment === "card") { const cardNumber = document.getElementById("card-number").value.replace(/\s/g, ""); const expiry = document.getElementById("card-expiry").value.trim(); const cvv = document.getElementById("card-cvv").value.trim(); if (!/^\d{16}$/.test(cardNumber) || !document.getElementById("card-name").value.trim() || !/^((0[1-9])|(1[0-2]))\s*\/\s*\d{2}$/.test(expiry) || !/^\d{3,4}$/.test(cvv)) { error.textContent = "Please complete the demo card details using valid formats."; return; } } const button = document.getElementById("pay-now"); button.disabled = true; button.innerHTML = "◌ Processing payment..."; setTimeout(() => { button.disabled = false; success.classList.remove("is-hidden"); setTimeout(createOrder, 700); }, 1200); });
function renderConfirmation() { renderCheckoutItems("confirmation-items"); document.getElementById("order-id-display").textContent = "Order #" + orderState.orderId; document.getElementById("confirmation-order-id").textContent = orderState.orderId; document.getElementById("confirmation-estimate").textContent = orderState.type === "delivery" ? "25–35 minutes" : orderState.type === "pickup" ? "20–30 minutes" : "Your table is reserved"; document.getElementById("confirmation-time-title").textContent = orderState.type === "delivery" ? "Estimated Delivery" : orderState.type === "pickup" ? "Ready in" : "Dine-in Details"; document.getElementById("confirmation-details").innerHTML = orderState.type === "delivery" ? `Delivery Address<br>${document.getElementById("address-house").value}<br>${document.getElementById("address-street").value}, ${document.getElementById("address-city").value}<br>${document.getElementById("address-state").value} ${document.getElementById("address-pincode").value}` : orderState.type === "pickup" ? "Pickup Location<br><b>Brew &amp; Bean Café</b><br>21 Coffee Street, Jaipur" : `Table: <b>${document.getElementById("dine-table").value}</b><br>Guests: <b>${orderState.guestCount}</b>`; document.getElementById("confirmation-totals").innerHTML = `<div><span>Subtotal</span><b>${money(orderSubtotal())}</b></div><div><span>Delivery</span><b>${money(orderDelivery())}</b></div><div><span>Discount</span><b>-${money(orderDiscount())}</b></div><div><span>Taxes</span><b>${money(orderTax())}</b></div><hr><div class="summary-total"><span>Total</span><b>${money(orderTotal())}</b></div>`; }
const trackingStates = { delivery: ["Order Placed", "Order Confirmed", "Preparing Your Order", "Out for Delivery", "Delivered"], pickup: ["Order Placed", "Order Confirmed", "Preparing Your Order", "Ready for Pickup", "Picked Up"], dinein: ["Reservation Confirmed", "Order Confirmed", "Preparing Your Order", "Served", "Completed"] };
function renderTracking() { const labels = trackingStates[orderState.type]; document.getElementById("tracking-status").textContent = labels[orderState.status]; document.getElementById("tracking-subtitle").textContent = "Order #" + orderState.orderId + " · " + labels[orderState.status]; document.getElementById("tracking-order-id").textContent = "#" + orderState.orderId; document.getElementById("delivery-visual").classList.toggle("is-hidden", orderState.type !== "delivery"); document.querySelector("#delivery-visual p").textContent = orderState.status >= 3 ? "Your order is on the way." : "Your order is being prepared at the café."; document.getElementById("order-timeline").innerHTML = labels.map((label, index) => `<div class="timeline-step ${index < orderState.status ? "complete" : ""} ${index === orderState.status ? "active" : ""}"><span class="timeline-dot">${index < orderState.status ? "✓" : index === orderState.status ? "●" : "○"}</span><b>${label}</b><span>${index === 0 ? "Your order has been received" : index === 1 ? "Café has accepted your order" : index === 2 ? "Our team is preparing your food" : index === labels.length - 1 ? "Enjoy your meal!" : "Your order is moving along"}</span></div>`).join(""); const done = orderState.status === labels.length - 1; document.getElementById("completed-panel").classList.toggle("is-hidden", !done); document.getElementById("order-timeline").classList.toggle("is-hidden", done); }
function startTracking() { showOrderView("tracking"); renderTracking(); const advance = () => { if (orderState.status < trackingStates[orderState.type].length - 1) { orderState.status += 1; renderTracking(); orderState.trackingTimer = setTimeout(advance, 4000); } }; orderState.trackingTimer = setTimeout(advance, 3000); }
document.getElementById("track-order").addEventListener("click", startTracking);
function continueShopping() { closeOrderApp(); document.getElementById("menu").scrollIntoView({ behavior: "smooth" }); }
document.getElementById("continue-shopping").addEventListener("click", continueShopping); document.getElementById("completed-shopping").addEventListener("click", continueShopping);
document.getElementById("order-again").addEventListener("click", () => { state.cart = orderState.previousItems.map(item => ({ ...item })); saveCart(); renderCart(); closeOrderApp(); openCart(); showToast("Previous order added to your cart"); });
