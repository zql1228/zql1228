<template>
  <a-layout>
    <a-layout-sider width="200" style="background: #fff" v-model:collapsed="collapsed" collapsible>
      <a-menu mode="inline" theme="dark" v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" :style="{ height: '100%', borderRight: 0 }">
        <a-sub-menu :key="m.name" v-for="(m, i) of menuList">
          <template #title>
            <router-link :to="m.path">
              <user-outlined />
              {{ m.title }}
            </router-link>
          </template>
          <a-menu-item v-if="m.children" :key="item.name" v-for="(item, k) of m.children"
            ><router-link :to="item.path"><laptop-outlined /> {{ item.title }}</router-link></a-menu-item
          >
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout style="padding: 0 24px 24px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"></a-layout-content>
      <!-- <slot>content</slot> -->
    </a-layout>
  </a-layout>
</template>

<script>
import { defineComponent, reactive, ref, onMounted, toRefs } from 'vue'
import { UserOutlined, LaptopOutlined, NotificationOutlined, LoginOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    LoginOutlined,
  },
  setup() {
    const state = reactive({
      collapsed: false,
      menuList: JSON.parse(sessionStorage.getItem('userInfo')).menuList,
    })
    console.log(state.menuList)
    return {
      ...toRefs(state),
      selectedKeys: ref(['1']),
      openKeys: ref(),
    }
  },
})
</script>

<style scoped lang="less"></style>
