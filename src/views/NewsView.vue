<template>
  <div class="news-view">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h1>{{ $t("news.title") }}</h1>
        </div>
      </template>
      <div v-if="newsItems.length === 0" class="no-news">
        <p>暂无新闻动态，敬请期待！</p>
      </div>
      <el-timeline v-else>
        <el-timeline-item
          v-for="(item, index) in newsItems"
          :key="index"
          :timestamp="item.date"
          placement="top"
        >
          <el-card class="news-item-card">
            <h4>{{ item.title }}</h4>
            <p class="news-summary">{{ item.summary }}</p>
            <img v-if="item.imageUrl" :src="item.imageUrl" :alt="item.title" class="news-image">
            <el-button type="primary" plain size="small" @click="readMore(item.id)">
              {{ $t("news.readMore") }}
            </el-button>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-card>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "NewsView",
  setup() {
    const newsItems = ref([
      {
        id: 1,
        date: "2025-05-10",
        title: "Slinx新款潜水服发布，带来极致深潜体验",
        summary: "Slinx今日发布了其最新一代专业潜水服系列，采用创新材料与人体工学设计，旨在为潜水爱好者提供前所未有的舒适度与安全性。",
        imageUrl: "/images/news1.jpg", // Placeholder
        fullContent: "详细内容..."
      },
      {
        id: 2,
        date: "2025-04-22",
        title: "Slinx赞助国际潜水摄影大赛圆满落幕",
        summary: "由Slinx独家赞助的年度国际潜水摄影大赛于近日落下帷幕，涌现众多优秀水下摄影作品，展现了海洋世界的奇妙与美丽。",
        imageUrl: "/images/news2.jpg", // Placeholder
        fullContent: "详细内容..."
      },
      {
        id: 3,
        date: "2025-03-15",
        title: "Slinx参与亚洲潜水装备展，展示最新科技成果",
        summary: "Slinx携多款创新潜水装备亮相亚洲潜水装备展，其独特的防水技术和环保材料受到广泛关注。",
        imageUrl: "/images/news3.jpg", // Placeholder
        fullContent: "详细内容..."
      },
    ]);

    const readMore = (newsId) => {
      // In a real app, you would navigate to a full news article page
      // For now, just log to console
      const news = newsItems.value.find(item => item.id === newsId);
      console.log("Read more about:", news.title);
      // this.$router.push({ name: 'newsDetail', params: { id: newsId } });
    };

    return {
      newsItems,
      readMore,
    };
  },
};
</script>

<style scoped>
.news-view {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.card-header h1 {
  font-size: 2em;
  color: #333;
  margin: 0;
}

.no-news {
  text-align: center;
  padding: 40px;
  color: #909399;
}

.news-item-card {
  margin-bottom: 20px; /* Add some space between timeline items if needed */
}

.news-item-card h4 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.4em;
  color: #303133;
}

.news-summary {
  font-size: 1em;
  color: #606266;
  line-height: 1.6;
  margin-bottom: 15px;
}

.news-image {
  width: 100%;
  max-height: 200px; /* Adjust as needed */
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 15px;
}

.el-timeline-item__timestamp {
  font-size: 0.9em;
  color: #909399;
}

@media (max-width: 768px) {
  .card-header h1 {
    font-size: 1.5em;
  }
  .news-item-card h4 {
    font-size: 1.2em;
  }
  .news-summary {
    font-size: 0.9em;
  }
}
</style>
