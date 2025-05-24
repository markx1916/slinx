<template>
  <div class="contact-us-view">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h1>{{ $t("contactUs.title") }}</h1>
        </div>
      </template>
      <el-row :gutter="40">
        <el-col :xs="24" :md="12" class="contact-form-col">
          <h2>{{ $t('contactUs.formSubject') }}</h2>
          <el-form ref="contactFormRef" :model="contactForm" :rules="rules" label-position="top">
            <el-form-item :label="$t('contactUs.formName')" prop="name">
              <el-input v-model="contactForm.name"></el-input>
            </el-form-item>
            <el-form-item :label="$t('contactUs.formEmail')" prop="email">
              <el-input v-model="contactForm.email"></el-input>
            </el-form-item>
            <el-form-item :label="$t('contactUs.formPhone')" prop="phone">
              <el-input v-model="contactForm.phone"></el-input>
            </el-form-item>
            <el-form-item :label="$t('contactUs.formSubject')" prop="subject">
              <el-input v-model="contactForm.subject"></el-input>
            </el-form-item>
            <el-form-item :label="$t('contactUs.formMessage')" prop="message">
              <el-input type="textarea" :rows="4" v-model="contactForm.message"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm">{{ $t('contactUs.formSubmit') }}</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :xs="24" :md="12" class="contact-info-col">
          <h2>{{ $t('contactUs.title') }}</h2>
          <div class="info-item">
            <el-icon><Location /></el-icon>
            <p><strong>{{ $t('contactUs.address') }}</strong></p>
          </div>
          <div class="info-item">
            <el-icon><Phone /></el-icon>
            <p><strong>{{ $t('contactUs.phone') }}</strong></p>
          </div>
          <div class="info-item">
            <el-icon><Message /></el-icon>
            <p><strong>{{ $t('contactUs.email') }}</strong></p>
          </div>
          <!-- Placeholder for a map -->
          <div class="map-placeholder">
            <p>地图位置将会显示在这里 (Map will be displayed here)</p>
            <img src="/images/map_placeholder.png" alt="Map Placeholder" style="width:100%; height:auto; border-radius: 4px; margin-top:10px;" />
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { Location, Phone, Message } from '@element-plus/icons-vue';

export default {
  name: 'ContactUsView',
  components: {
    Location,
    Phone,
    Message
  },
  setup() {
    const contactFormRef = ref(null);
    const contactForm = ref({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    const rules = ref({
      name: [{ required: true, message: '请输入您的姓名', trigger: 'blur' }],
      email: [
        { required: true, message: '请输入您的邮箱地址', trigger: 'blur' },
        { type: 'email', message: '请输入有效的邮箱地址', trigger: ['blur', 'change'] }
      ],
      subject: [{ required: true, message: '请输入主题', trigger: 'blur' }],
      message: [{ required: true, message: '请输入留言内容', trigger: 'blur' }]
    });

    const submitForm = () => {
      contactFormRef.value.validate((valid) => {
        if (valid) {
          // Simulate form submission
          console.log('Form submitted:', contactForm.value);
          ElMessage.success('留言发送成功！我们将会尽快与您联系。');
          contactFormRef.value.resetFields();
        } else {
          ElMessage.error('请检查表单输入项！');
          return false;
        }
      });
    };

    return {
      contactFormRef,
      contactForm,
      rules,
      submitForm
    };
  }
};
</script>

<style scoped>
.contact-us-view {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.card-header h1 {
  font-size: 2em;
  color: #333;
  margin: 0;
}

.contact-form-col h2,
.contact-info-col h2 {
  font-size: 1.5em;
  color: #333;
  margin-bottom: 20px;
}

.contact-info-col {
  text-align: left;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.1em;
  color: #555;
}

.info-item .el-icon {
  margin-right: 10px;
  font-size: 1.5em; /* Make icon larger */
  color: #409EFF;
}

.info-item p {
  margin: 0;
  line-height: 1.6;
}

.map-placeholder {
  margin-top: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  text-align: center;
  color: #909399;
}

.el-form-item {
  margin-bottom: 22px;
}

@media (max-width: 768px) {
  .card-header h1 {
    font-size: 1.5em;
  }
  .contact-form-col h2,
  .contact-info-col h2 {
    font-size: 1.3em;
  }
  .contact-info-col {
    margin-top: 30px;
  }
  .info-item {
    font-size: 1em;
  }
}
</style>
