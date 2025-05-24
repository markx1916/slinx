<template>
  <div class="brand-story-view">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h1>{{ $t('brandStory.title') }}</h1>
        </div>
      </template>
      <div class="story-content">
        <el-row :gutter="30">
          <el-col :xs="24" :md="12">
            <img src="/images/brand_story_banner.jpg" alt="Slinx Brand Story" class="brand-image" />
            <!-- Placeholder: Replace with actual Slinx factory or team image -->
          </el-col>
          <el-col :xs="24" :md="12">
            <p class="intro-text">{{ $t('brandStory.content') }}</p>
            <p>东莞市水尚运动用品有限公司成立于2008年，自有品牌SLINX、FINDSINE，水尚等多个国内国际品牌。公司经营和员工都来自于原国际大品牌的国内最大代工工厂，专门做世界贴牌潜水运动产品类，主要生产潜水服，冲浪衣，潜水袜，打猎服，钓鱼服，防晒衣，水母衣等。</p>
            <p>我们坚持选用优质的氯丁橡胶（Neoprene）等专业潜水面料，结合多年积累的生产工艺，致力于为全球潜水爱好者提供安全、舒适、时尚的潜水装备。无论是专业的深潜探险，还是轻松的浮潜体验，Slinx都希望能成为您值得信赖的伙伴。</p>
          </el-col>
        </el-row>
        
        <el-divider content-position="center">核心价值</el-divider>
        
        <el-row :gutter="20" class="core-values">
          <el-col :xs="24" :sm="8">
            <div class="value-item">
              <el-icon :size="40"><StarFilled /></el-icon>
              <h3>品质卓越</h3>
              <p>源自国际大厂的品控标准，每一件产品都经过严格测试。</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="8">
            <div class="value-item">
              <el-icon :size="40"><Ship /></el-icon>
              <h3>持续创新</h3>
              <p>不断研发新材料、新工艺，提升产品性能与用户体验。</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="8">
            <div class="value-item">
              <el-icon :size="40"><UserFilled /></el-icon>
              <h3>客户至上</h3>
              <p>倾听用户需求，提供专业的定制服务与完善的售后支持。</p>
            </div>
          </el-col>
        </el-row>

      </div>
    </el-card>
  </div>
</template>

<script>
import { StarFilled, Ship, UserFilled } from '@element-plus/icons-vue'; // Import icons

export default {
  name: 'BrandStoryView',
  components: {
    StarFilled,
    Ship,
    UserFilled
  }
};
</script>

<style scoped>
.brand-story-view {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.card-header h1 {
  font-size: 2em;
  color: #333;
  margin: 0;
}

.story-content {
  line-height: 1.8;
  font-size: 1.1em;
  color: #555;
}

.brand-image {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
  object-fit: cover;
  max-height: 400px; /* Adjust as needed */
}

.intro-text {
  margin-bottom: 20px;
  font-style: italic;
}

.story-content p {
  margin-bottom: 15px;
}

.el-divider {
  margin: 40px 0;
}

.core-values {
  text-align: center;
}

.value-item {
  padding: 20px;
}

.value-item .el-icon {
  color: #409EFF; /* Element Plus primary color */
  margin-bottom: 10px;
}

.value-item h3 {
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
}

.value-item p {
  font-size: 1em;
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .card-header h1 {
    font-size: 1.5em;
  }
  .story-content {
    font-size: 1em;
  }
  .value-item h3 {
    font-size: 1.2em;
  }
}
</style>
