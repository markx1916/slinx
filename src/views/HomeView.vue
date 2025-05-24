<template>
  <div class="home-view">
    <!-- Banner Carousel -->
    <el-carousel height="400px" class="banner-carousel">
      <el-carousel-item v-for="item in bannerItems" :key="item.id">
        <div class="banner-content" :style="{ backgroundImage: 'url(' + item.imageUrl + ')' }">
          <div class="banner-text">
            <h2>{{ $t(item.titleKey) }}</h2>
            <p>{{ $t(item.subtitleKey) }}</p>
            <el-button type="primary" @click="handleBannerClick(item.link)">{{ $t(item.buttonKey) }}</el-button>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>

    <!-- Featured Products -->
    <section class="featured-products">
      <h2>{{ $t('home.featuredProducts') }}</h2>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="product in featuredProducts" :key="product.id">
          <el-card class="product-card">
            <img :src="product.imageUrl" class="product-image" :alt="product.name" />
            <div style="padding: 14px;">
              <h3>{{ product.name }}</h3>
              <p class="product-description">{{ product.description }}</p>
              <div class="bottom clearfix">
                <el-button type="text" class="button">{{ $t('home.viewDetails') }}</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    const bannerItems = ref([
      {
        id: 1,
        titleKey: 'home.bannerTitle1',
        subtitleKey: 'home.bannerSubtitle1',
        buttonKey: 'home.bannerBtn1',
        imageUrl: '/images/banner1.jpg', // Placeholder - replace with actual image path
        link: '/products/category1' // Placeholder link
      },
      {
        id: 2,
        titleKey: 'home.bannerTitle2',
        subtitleKey: 'home.bannerSubtitle2',
        buttonKey: 'home.bannerBtn2',
        imageUrl: '/images/banner2.jpg', // Placeholder - replace with actual image path
        link: '/products' // Placeholder link
      }
    ]);

    const featuredProducts = ref([
      {
        id: 1,
        name: 'Slinx Pro Wetsuit 3mm',
        description: 'Professional grade 3mm neoprene wetsuit for optimal performance.',
        imageUrl: '/images/product1.jpg', // Placeholder
        link: '/products/slinx-pro-3mm'
      },
      {
        id: 2,
        name: 'Slinx Explorer Rash Guard',
        description: 'Lightweight and UV protective rash guard for all water activities.',
        imageUrl: '/images/product2.jpg', // Placeholder
        link: '/products/slinx-explorer-rashguard'
      },
      {
        id: 3,
        name: 'Slinx Aqua Boots',
        description: 'Durable and comfortable aqua boots for various terrains.',
        imageUrl: '/images/product3.jpg', // Placeholder
        link: '/products/slinx-aqua-boots'
      },
      {
        id: 4,
        name: 'Slinx Diving Hood',
        description: 'Thermal diving hood for extra warmth in cold waters.',
        imageUrl: '/images/product4.jpg', // Placeholder
        link: '/products/slinx-diving-hood'
      }
    ]);

    const handleBannerClick = (link) => {
      // In a real app, you would use vue-router to navigate
      console.log('Navigate to:', link);
      // this.$router.push(link); // If using Options API and router is injected
    };

    return {
      bannerItems,
      featuredProducts,
      handleBannerClick
    };
  }
};
</script>

<style scoped>
.home-view {
  padding: 0; /* Remove default padding if main has it */
}

.banner-carousel .el-carousel__item {
  color: #fff;
  text-align: center;
}

.banner-content {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.banner-text {
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background for text */
  padding: 20px;
  border-radius: 8px;
}

.banner-text h2 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.banner-text p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.featured-products {
  padding: 40px 20px;
  text-align: left;
}

.featured-products h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2em;
  color: #333;
}

.product-card {
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.product-image {
  width: 100%;
  height: 200px; /* Adjust as needed */
  object-fit: cover;
  display: block;
}

.product-description {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 10px;
  min-height: 40px; /* Ensure consistent card height */
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
  
.clearfix:after {
    clear: both
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .banner-text h2 {
    font-size: 2em;
  }
  .banner-text p {
    font-size: 1em;
  }
  .featured-products h2 {
    font-size: 1.5em;
  }
}
</style>
