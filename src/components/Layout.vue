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
    <a-layout>
      <a-layout-sider width="200" style="background: #fff" v-model:collapsed="collapsed" collapsible>
        <a-menu mode="inline" theme="dark" v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" :style="{ height: '100%', borderRight: 0 }">
          <template v-for="item in menuList" :key="item.path">
            <template v-if="!item.children">
              <router-link :to="item.path">
                <a-menu-item :key="item.path">
                  <template #icon>
                    <PieChartOutlined />
                  </template>
                  {{ item.title }}
                </a-menu-item>
              </router-link>
            </template>
            <template v-else>
              <MenuChildren :menu-info="item" :key="item.path" />
            </template>
          </template>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"> <slot></slot></a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import { LoginOutlined, PieChartOutlined } from '@ant-design/icons-vue'
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import store from '../store'
import { Modal } from 'ant-design-vue'
import SunMenu from '../components/SubMenu.vue'
export default defineComponent({
  components: {
    LoginOutlined,
    PieChartOutlined,
    MenuChildren: SunMenu,
  },

  setup() {
    const router = useRouter()
    const state = reactive({
      openKeys: ref(),
      selectedKeys1: ref(['2']),
      selectedKeys2: ref(['1']),
      collapsed: false,
      menuList: JSON.parse(sessionStorage.getItem('userInfo')).menuList,
    })
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
      ...toRefs(state),
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
