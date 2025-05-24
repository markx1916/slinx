<template>
  <div id="app">
    <header class="sticky-top">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sport-navbar">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">
            <img src="./assets/logo.svg" alt="Slinx Logo" class="logo-sport" />
          </router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/">{{ $t('nav.home') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/brand-story">{{ $t('nav.brandStory') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/products">{{ $t('nav.products') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/news">{{ $t('nav.news') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/contact-us">{{ $t('nav.contactUs') }}</router-link>
              </li>
            </ul>
            <div class="lang-switcher-sport d-flex align-items-center">
              <select v-model="currentLocale" @change="changeLocale($event.target.value)" class="form-select form-select-sm lang-select-refined">
                <option value="zh">中文</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>{{ $t('footer.copyright') }}</p>
    </footer>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  name: 'App',
  setup() {
    const { locale } = useI18n();
    const currentLocale = ref(locale.value);

    const changeLocale = (newLocale) => {
      locale.value = newLocale;
      currentLocale.value = newLocale; // Ensure local ref is also updated
    };

    // Watch for external changes to locale (e.g., from browser settings or initial load)
    watch(locale, (newLocale) => {
      currentLocale.value = newLocale;
    });

    return {
      currentLocale,
      changeLocale,
    };
  },
};
</script>

<style>
/* Global Sporty Styles */
body {
  font-family: 'Montserrat', sans-serif; /* Elegant and modern font */
  background-color: #f8f9fa; /* Light grey background */
  color: #2c3e50; /* Darker, more refined text color */
  line-height: 1.6;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Refined Navbar */
.sport-navbar {
  background-color: #212529 !important; /* Deeper dark for sophistication */
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.logo-sport {
  height: 40px; /* Adjusted logo size */
  transition: transform 0.3s ease-in-out;
}

.logo-sport:hover {
  transform: scale(1.05);
}

.sport-navbar .navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
}

.sport-navbar .nav-link {
  color: rgba(255,255,255,.8);
  font-weight: 500;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 0.85rem; /* Slightly smaller for refinement */
  letter-spacing: 1px; /* Increased spacing for elegance */
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.sport-navbar .nav-link:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.05);
}

.sport-navbar .nav-link.active {
  color: #fff;
  font-weight: 600; /* Slightly bolder for active link */
  /* background-color: rgba(255, 255, 255, 0.1); */ /* Optional: subtle background for active */
}

.lang-select-refined {
  background-color: #212529; /* Match navbar */
  color: rgba(255,255,255,.8);
  border: 1px solid rgba(255,255,255,.2);
  padding: 0.3rem 0.8rem;
  font-size: 0.85rem;
  width: auto;
  min-width: 90px;
  transition: border-color 0.3s ease;
}

.lang-select-refined:focus {
  box-shadow: none;
  border-color: rgba(255,255,255,.5);
}

.lang-select-refined option {
  background-color: #343a40; /* Darker dropdown options */
  color: #fff;
}

main {
  flex-grow: 1; /* Ensures main content takes available space */
  padding-top: 30px;
  padding-bottom: 30px;
  /* min-height is handled by #app flex display */
}

/* Refined Footer */
footer {
  background-color: #212529; /* Match navbar for consistency */
  color: rgba(255,255,255,.6);
  padding: 40px 0; /* Increased padding */
  text-align: center;
  font-size: 0.85em;
  margin-top: auto; /* Pushes footer to bottom if content is short */
}

footer p {
  margin-bottom: 0;
}

/* Responsive adjustments for Bootstrap Navbar */
@media (max-width: 991.98px) { /* lg breakpoint */
  .sport-navbar .navbar-nav {
    margin-top: 1rem; /* Add some space when collapsed */
  }
  .lang-switcher-sport {
    margin-top: 1rem;
    justify-content: flex-start;
  }
}
</style>
