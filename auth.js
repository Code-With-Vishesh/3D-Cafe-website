const authState = { mode: "login" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^(?:\+?91\s?)?[6-9]\d{9}$/;

function toast(message) {
  const element = document.getElementById("auth-toast");
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => element.classList.remove("show"), 2800);
}
function setMode(mode) {
  authState.mode = mode;
  document.querySelectorAll("[data-mode]").forEach(control => {
    if (control.classList.contains("auth-tab") || control.closest(".mobile-auth-switch")) {
      control.classList.toggle("active", control.dataset.mode === mode);
      control.setAttribute("aria-selected", control.dataset.mode === mode ? "true" : "false");
    }
  });
  document.querySelectorAll(".auth-form-view[data-view]").forEach(view => view.classList.toggle("active", view.dataset.view === mode));
}
function setError(input, message) {
  const wrapper = input.closest(".auth-input") || input.closest(".auth-check");
  wrapper.classList.toggle("invalid", Boolean(message));
  const error = wrapper.querySelector("small");
  if (error) error.textContent = message || "";
  return !message;
}
function validateEmail(input) { return setError(input, input.value.trim() && emailPattern.test(input.value.trim()) ? "" : input.value.trim() ? "Please enter a valid email address." : "Please enter your email address."); }
function passwordLevel(value) { return value.length < 8 ? 0 : Number(/[A-Z]/.test(value)) + Number(/\d/.test(value)) + 1; }
function updateStrength() {
  const input = document.getElementById("signup-password");
  const box = document.getElementById("password-strength");
  const level = passwordLevel(input.value);
  box.dataset.level = level;
  box.querySelector("b").textContent = level === 0 ? "Enter a password" : level === 1 ? "Weak" : level === 2 ? "Medium" : "Strong";
}
function showSuccess(message) {
  document.getElementById("auth-success-message").textContent = message;
  setMode("success");
}
function simulate(button, label, callback) {
  button.disabled = true;
  button.innerHTML = `<span class="auth-spinner"></span>${label}`;
  setTimeout(() => { button.disabled = false; callback(); }, 900);
}

document.querySelectorAll("[data-mode]").forEach(control => control.addEventListener("click", () => setMode(control.dataset.mode)));
document.querySelectorAll(".password-toggle").forEach(button => button.addEventListener("click", () => {
  const input = document.getElementById(button.dataset.target);
  input.type = input.type === "password" ? "text" : "password";
  button.setAttribute("aria-label", input.type === "password" ? "Show password" : "Hide password");
  button.textContent = input.type === "password" ? "◉" : "◌";
}));
document.getElementById("forgot-open").addEventListener("click", () => setMode("forgot"));
document.getElementById("signup-password").addEventListener("input", updateStrength);
document.getElementById("signup-confirm").addEventListener("input", () => { const input = document.getElementById("signup-confirm"); setError(input, input.value === document.getElementById("signup-password").value ? "" : "Passwords do not match."); });
["login-email", "signup-email", "forgot-email"].forEach(id => document.getElementById(id).addEventListener("blur", event => validateEmail(event.target)));

document.getElementById("login-form").addEventListener("submit", event => {
  event.preventDefault();
  const email = document.getElementById("login-email"); const password = document.getElementById("login-password");
  const validEmail = validateEmail(email); const validPassword = setError(password, password.value ? "" : "Please enter your password.");
  if (!validEmail || !validPassword) return;
  simulate(event.submitter, "Signing in...", () => { toast("✓ Welcome back!"); showSuccess("Your coffee journey starts here."); });
});
document.getElementById("signup-form").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("signup-name"); const email = document.getElementById("signup-email"); const phone = document.getElementById("signup-phone"); const password = document.getElementById("signup-password"); const confirm = document.getElementById("signup-confirm"); const terms = document.getElementById("terms-check");
  let valid = setError(name, name.value.trim() ? "" : "Please enter your full name."); valid = validateEmail(email) && valid; valid = setError(phone, !phone.value.trim() || phonePattern.test(phone.value.replace(/\s/g, "")) ? "" : "Please enter a valid mobile number.") && valid; valid = setError(password, password.value.length >= 8 && /[A-Z]/.test(password.value) && /\d/.test(password.value) ? "" : "Password must be at least 8 characters and include one uppercase letter and one number.") && valid; valid = setError(confirm, confirm.value && confirm.value === password.value ? "" : "Passwords do not match.") && valid; const termsError = terms.closest(".auth-check").querySelector("small"); termsError.textContent = terms.checked ? "" : "Please accept the Terms & Conditions."; valid = terms.checked && valid;
  if (!valid) return;
  simulate(event.submitter, "Creating account...", () => { toast("✓ Account created successfully."); showSuccess("Welcome to Brew & Bean. Your coffee journey starts here."); });
});
document.getElementById("forgot-form").addEventListener("submit", event => { event.preventDefault(); const email = document.getElementById("forgot-email"); if (!validateEmail(email)) return; simulate(event.submitter, "Sending...", () => { document.getElementById("forgot-form").classList.add("is-hidden"); document.getElementById("forgot-success").classList.remove("is-hidden"); toast("✓ Reset link sent."); }); });
document.querySelectorAll(".social-btn").forEach(button => button.addEventListener("click", () => { toast(`Demo ${button.dataset.social} sign in selected.`); }));
setMode("login");
