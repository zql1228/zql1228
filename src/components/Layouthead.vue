<template>
  <a-layout>
    <a-layout-header class="header">
      <a-row :gutter="24" justify="space-between">
        <a-col :span="4"><span style="color: #fff; font-size: 20px">系统管理</span></a-col>
        <a-col :span="2">
          <a-button type="link" style="color: #fff" @click="LoginOut"><LoginOutlined />退出</a-button></a-col
        >
      </a-row>
    </a-layout-header>
    <layout-menu></layout-menu>
  </a-layout>
</template>
<script>
import { UserOutlined, LaptopOutlined, NotificationOutlined, LoginOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
import LayoutMenu from './Layout.vue'
import { useRouter } from 'vue-router'
import store from '../store'
import { Modal } from 'ant-design-vue'
export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    LoginOutlined,
    LayoutMenu,
  },

  setup() {
    const router = useRouter()
    const LoginOut = () => {
      Modal.confirm({
        title: '确定退出?',
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
          store.commit('SET_TOKEN', '')
          store.commit('SET_USERINFO', '')
          router.push({ path: '/login' })
        },
      })
    }
    return {
      selectedKeys1: ref(['2']),
      LoginOut,
    }
  },
})
</script>
<style scoped>
.ant-layout {
  height: 100%;
  padding: 0;
}
.site-layout-background {
  background: #fff;
}
</style>
