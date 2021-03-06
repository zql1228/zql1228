<template>
  <layout>
    <template v-slot>
      <a-button type="primary" class="editable-add-btn" style="margin-bottom: 8px" @click="handleAdd">新增</a-button>
      <a-table bordered :data-source="dataSource" :columns="columns">
        <template #bodyCell="{ column, text, record }">
          <template v-if="column.dataIndex === 'name'">
            <div class="editable-cell">
              <div v-if="editableData[record.key]" class="editable-cell-input-wrapper">
                <a-input v-model:value="editableData[record.key].name" @pressEnter="save(record.key)" />
                <check-outlined class="editable-cell-icon-check" @click="save(record.key)" />
              </div>
              <div v-else class="editable-cell-text-wrapper">
                {{ text || ' ' }}
                <edit-outlined class="editable-cell-icon" @click="edit(record.key)" />
              </div>
            </div>
          </template>
          <template v-else-if="column.dataIndex === 'operation'">
            <a-popconfirm v-if="dataSource.length" title="Sure to delete?" @confirm="onDelete(record.key)">
              <a>Delete</a>
            </a-popconfirm>
          </template>
        </template>
      </a-table>
    </template>
  </layout>
</template>

<script>
import { defineComponent, reactive, ref, onMounted, toRefs, computed } from 'vue'
import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  components: { CheckOutlined, EditOutlined },
  setup() {
    const columns = [
      {
        title: '用户名',
        dataIndex: 'name',
        width: '30%',
      },
      {
        title: 'age',
        dataIndex: 'age',
      },
      {
        title: 'address',
        dataIndex: 'address',
      },
      {
        title: 'operation',
        dataIndex: 'operation',
      },
    ]
    const dataSource = ref([
      {
        key: '0',
        name: 'Edward King 0',
        age: 32,
        address: 'London, Park Lane no. 0',
      },
      {
        key: '1',
        name: 'Edward King 1',
        age: 32,
        address: 'London, Park Lane no. 1',
      },
    ])
    const count = computed(() => dataSource.value.length + 1)
    const editableData = reactive({})

    const edit = (key) => {
      editableData[key] = cloneDeep(dataSource.value.filter((item) => key === item.key)[0])
    }

    const save = (key) => {
      Object.assign(dataSource.value.filter((item) => key === item.key)[0], editableData[key])
      delete editableData[key]
    }

    const onDelete = (key) => {
      dataSource.value = dataSource.value.filter((item) => item.key !== key)
    }

    const handleAdd = () => {
      const newData = {
        key: `${count.value}`,
        name: `Edward King ${count.value}`,
        age: 32,
        address: `London, Park Lane no. ${count.value}`,
      }
      dataSource.value.push(newData)
    }
    return {
      columns,
      onDelete,
      handleAdd,
      dataSource,
      editableData,
      count,
      edit,
      save,
    }
  },
})
</script>

<style scoped lang="less"></style>
