<template>
  <div class="home-view">
    <!-- Banner Carousel with Bootstrap -->
    <div id="homeBannerCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#homeBannerCarousel" v-for="(item, index) in bannerItems" :key="'indicator-' + item.id" :data-bs-slide-to="index" :class="{ active: index === 0 }" :aria-current="index === 0 ? 'true' : 'false'" :aria-label="'Slide ' + (index + 1)"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(item, index) in bannerItems" :key="item.id" :class="{ active: index === 0 }">
          <img :src="item.imageUrl" class="d-block w-100 banner-image-sport" :alt="$t(item.titleKey)">
          <div class="carousel-caption d-none d-md-block banner-text-sport">
            <h2>{{ $t(item.titleKey) }}</h2>
            <p>{{ $t(item.subtitleKey) }}</p>
            <a :href="item.link" class="btn btn-lg btn-primary sport-btn">{{ $t(item.buttonKey) }}</a>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#homeBannerCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#homeBannerCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Featured Products with Bootstrap -->
    <section class="featured-products-sport container my-5">
      <h2 class="text-center display-5 fw-bold">{{ $t('home.featuredProducts') }}</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        <div class="col" v-for="product in featuredProducts" :key="product.id">
          <div class="card h-100 product-card-sport">
            <img :src="product.imageUrl" class="card-img-top product-image-sport" :alt="product.name">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title fw-semibold">{{ product.name }}</h5>
              <p class="card-text small text-muted flex-grow-1">{{ product.description }}</p>
              <a :href="product.link" class="btn btn-outline-primary sport-btn-outline mt-auto">{{ $t('home.viewDetails') }}</a>
            </div>
          </div>
        </div>
      </div>
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
      // For Bootstrap carousel, navigation is handled by the <a> tag's href
      // If SPA navigation is needed, you'd prevent default and use router.push
      console.log('Attempting to navigate to:', link);
      // Example: router.push(link); // Ensure router is available in setup context if used this way
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
  /* padding: 0; */ /* Bootstrap containers will handle padding */
}

/* Sporty Banner Styles */
#homeBannerCarousel .banner-image-sport {
  height: 500px; /* Slightly taller for a more premium feel */
  object-fit: cover;
  filter: brightness(0.7) contrast(1.0) saturate(0.9); /* More subdued and refined filter */
}

#homeBannerCarousel .carousel-caption {
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%); /* Softer gradient */
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 4rem; /* More space for text */
  padding-top: 3rem;
}

#homeBannerCarousel .banner-text-sport h2 {
  font-size: 2.8em; /* Slightly adjusted size */
  font-weight: 600; /* Less bold, more refined */
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
  margin-bottom: 1rem;
}

#homeBannerCarousel .banner-text-sport p {
  font-size: 1.2em;
  color: #e9ecef;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
  margin-bottom: 2rem;
}

#homeBannerCarousel .sport-btn {
  background-color: rgba(255, 255, 255, 0.15); /* Semi-transparent white */
  border: 2px solid #fff;
  color: #fff;
  padding: 0.8rem 2rem;
  font-size: 1em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px); /* Frosted glass effect */
}

#homeBannerCarousel .sport-btn:hover {
  background-color: rgba(255, 255, 255, 0.3);
  border-color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

/* Carousel controls styling for a sportier feel */
#homeBannerCarousel .carousel-control-prev-icon,
#homeBannerCarousel .carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.3); /* More subtle control background */
  border-radius: 50%;
  padding: 12px;
  width: 45px;
  height: 45px;
}

#homeBannerCarousel .carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}

#homeBannerCarousel .carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

#homeBannerCarousel .carousel-indicators button {
  background-color: rgba(255, 255, 255, 0.4);
  border: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 6px;
  transition: background-color 0.3s ease;
}

#homeBannerCarousel .carousel-indicators .active {
  background-color: #fff;
}

/* Sporty Featured Products Styles */
.featured-products-sport h2 {
  color: #343a40; /* Standard dark heading */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px; /* Slightly more spacing */
  margin-bottom: 4rem !important; /* Increased bottom margin */
}

.product-card-sport {
  border: 1px solid #e9ecef; /* Subtle border */
  border-radius: 8px; /* Slightly rounded corners */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  background-color: #fff;
}

.product-card-sport:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.12); /* Refined shadow */
}

.product-card-sport .product-image-sport {
  height: 200px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.product-card-sport:hover .product-image-sport {
  transform: scale(1.03); /* Subtle zoom */
}

.product-card-sport .card-body {
  text-align: left; /* Align text to left for a more traditional/premium feel */
  padding: 1.5rem; /* Increased padding */
}

.product-card-sport .card-title {
  margin-bottom: 0.75rem;
  color: #212529;
  font-size: 1.1rem;
  font-weight: 600;
}

.product-card-sport .card-text {
  font-size: 0.9em;
  color: #495057;
  margin-bottom: 1.25rem;
  min-height: 60px; /* Adjust for consistent text height */
}

.product-card-sport .sport-btn-outline {
  border: 1px solid #6c757d; /* Grey outline */
  color: #6c757d;
  font-weight: 500;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-size: 0.85em;
  letter-spacing: 0.5px;
}

.product-card-sport .sport-btn-outline:hover {
  background-color: #6c757d;
  color: #fff;
  box-shadow: 0 2px 8px rgba(108, 117, 125, 0.3);
}

/* Ensure consistent card height if using different content lengths */
.row-cols-1 > .col,
.row-cols-sm-2 > .col,
.row-cols-md-3 > .col,
.row-cols-lg-4 > .col {
  display: flex;
  flex-direction: column;
}

/* Additional global styles or utility classes can go in App.vue or a main CSS file */
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
