<template>
  <div class="login">
    <a-form class="login_form" :label-col="{ style: { width: '100px' } }" :wrapper-col="{ span: 12 }" ref="formRef" :model="formState" :rules="rules">
      <a-form-item label="用户名" name="username">
        <a-input v-model:value="formState.checkPass" type="text" autocomplete="off" />
      </a-form-item>
      <a-form-item label="密码" name="password">
        <a-input v-model:value="formState.username" type="password" autocomplete="off" />
      </a-form-item>
      <a-form-item label="验证码" name="imgSrc">
        <a-input style="width: 140px" v-model:value="formState.imgSrc" type="text" autocomplete="off" />
        <a-image :width="60" :height="40" :src="formState.imgCode" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 6 }">
        <a-button type="primary" html-type="Login">登录</a-button>
        <a-button style="margin-left: 10px">重置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, onMounted, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const state = reactive({
      router: useRouter(),
      formRef: {},
      formState: {
        username: '',
        password: '',
        imgSrc: '',
        token: '',
        imgCode: '',
      },
      rules: {
        username: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
        imgSrc: [
          {
            required: true,
            message: '必填',
            trigger: 'blur',
          },
        ],
      },
    })
    onMounted(() => {
      //获取token
      // axios
      //   .get('/imgCode')
      //   .then((res) => {
      //     console.log(res)
      //   })
      //   .catch((err) => {})
    })
    const Login = () => {
      // state.formRef
      //   .validate()
      //   .then(() => {
      //     state.router.push('/')
      //   })
      //   .catch((err) => {})
    }

    return {
      ...toRefs(state),
      Login,
    }
  },
})
</script>

<style scoped>
.login {
  background-image: linear-gradient(to right, rgb(245, 193, 193), rgb(247, 128, 17));
  width: 100%;
  height: 100%;
  padding-top: 250px;
}
.login_form {
  background: rgba(255, 255, 255, 0.7);
  margin: 0 auto;
  width: 450px;
  border-radius: 4px;
  padding: 24px 14px 14px;
}
</style>
