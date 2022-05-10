<template>
  <layout> 首页 </layout>
</template>
<script>
import { UserOutlined, LaptopOutlined, NotificationOutlined, LoginOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import store from '../store'
import { Modal } from 'ant-design-vue'
export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    LoginOutlined,
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
