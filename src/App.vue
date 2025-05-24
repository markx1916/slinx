<template>
  <div id="app">
    <header>
      <el-menu mode="horizontal" :router="true" :default-active="$route.path" class="slinx-menu">
        <el-menu-item index="/">
          <img src="./assets/logo.svg" alt="Slinx Logo" class="logo" /> 
        </el-menu-item>
        <el-menu-item index="/">{{ $t('nav.home') }}</el-menu-item>
        <el-menu-item index="/brand-story">{{ $t('nav.brandStory') }}</el-menu-item>
        <el-menu-item index="/products">{{ $t('nav.products') }}</el-menu-item> <!-- Placeholder for products page -->
        <el-menu-item index="/news">{{ $t('nav.news') }}</el-menu-item>
        <el-menu-item index="/contact-us">{{ $t('nav.contactUs') }}</el-menu-item>
        <div class="lang-switcher">
          <el-select v-model="currentLocale" @change="changeLocale" size="small">
            <el-option label="中文" value="zh"></el-option>
            <el-option label="English" value="en"></el-option>
          </el-select>
        </div>
      </el-menu>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  background-color: #fff;
  border-bottom: 1px solid #ebeef5;
}

.slinx-menu {
  display: flex;
  justify-content: center; /* Center menu items */
  align-items: center; /* Vertically align items */
  padding: 0 20px; /* Add some padding */
}

.logo {
  height: 40px; /* Adjust as needed */
  margin-right: 20px;
  vertical-align: middle;
}

.el-menu-item {
  font-size: 16px; /* Adjust font size */
}

.lang-switcher {
  margin-left: auto; /* Pushes the language switcher to the right */
  display: flex;
  align-items: center;
}

main {
  padding: 20px;
  min-height: calc(100vh - 120px); /* Adjust based on header/footer height */
}

footer {
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
  font-size: 14px;
  color: #666;
  border-top: 1px solid #ebeef5;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .slinx-menu {
    flex-direction: column;
  }
  .lang-switcher {
    margin-left: 0;
    margin-top: 10px;
  }
  .logo {
    margin-bottom: 10px;
  }
}
</style>
