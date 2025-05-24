<template>
  <div class="products-view">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h1>{{ $t("nav.products") }}</h1>
        </div>
      </template>
      <div class="content">
        <p>我们的产品目录即将推出。敬请期待我们最新的 Slinx 专业潜水服和潜水装备！</p>
        <p>Our product catalog is coming soon. Stay tuned for our latest Slinx wetsuits and diving gear!</p>
        <el-empty :description="$t('nav.products') + ' Coming Soon'"></el-empty>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ProductsView",
};
</script>

<style scoped>
.products-view {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}
.card-header h1 {
  font-size: 2em;
  color: #333;
  margin: 0;
}
.content {
  padding: 20px;
  line-height: 1.8;
  font-size: 1.1em;
  color: #555;
}
</style>
