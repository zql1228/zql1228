<template>
  <a-sub-menu :key="menuInfo.path">
    <template #icon><MailOutlined /></template>
    <template #title>{{ menuInfo.title }}</template>
    <template v-for="item in menuInfo.children" :key="item.path">
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
        <sub-menu :menu-info="item" :key="item.key" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
import { defineComponent, toRefs } from 'vue'
import { PieChartOutlined, MailOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  name: 'SubMenu',
  components: {
    PieChartOutlined,
    MailOutlined,
  },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    return {
      ...toRefs(props),
    }
  },
})
</script>

<style scoped lang="less"></style>
