<template>
  <div class="login">
    <a-form class="login_form" :label-col="{ style: { width: '100px' } }" :wrapper-col="{ span: 16 }" ref="formRef" :model="formState" :rules="rules">
      <a-form-item label="用户名" name="username">
        <a-input size="large" v-model:value="formState.username" type="text" autocomplete="off" />
      </a-form-item>
      <a-form-item label="密码" name="password">
        <a-input size="large" v-model:value="formState.password" type="password" autocomplete="off" />
      </a-form-item>
      <a-form-item label="验证码" name="imgSrc">
        <a-input size="large" style="width: 150px" v-model:value="formState.imgSrc" type="text" autocomplete="off" />
        <div class="imgCode" @click="getImgCode" v-html="formState.imgCode"></div>
        <!-- <a-image :width="60" :height="40" :src="`http://127.0.0.1:8003/${formState.imgCode}`" /> -->
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 6 }">
        <a-button type="primary" @click="Login">登录</a-button>
        <!-- -->
        <a-button style="margin-left: 10px">重置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, onMounted, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import store from '../store'
import axios from 'axios'
export default defineComponent({
  setup() {
    const state = reactive({
      router: useRouter(),
      formRef: {},
      formState: {
        username: '',
        password: '',
        imgSrc: '',
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
    const getImgCode = () => {
      axios
        .get('/api/captcha')
        .then((res) => {
          if (res.data) {
            state.formState.imgCode = res.data
          }
        })
        .catch((err) => {})
    }
    onMounted(() => {
      //获取token
      getImgCode()
    })
    const Login = () => {
      state.formRef
        .validate()
        .then(() => {
          const params = {
            username: state.formState.username,
            password: state.formState.password,
            imgSrc: state.formState.imgSrc,
          }
          axios
            .post('/api/login', params)
            .then((res) => {
              console.log(res)
              if (res.data.code) {
                message.success(res.data.msg)
                store.commit('SET_USERINFO', res.data.userInfo)
                store.commit('SET_TOKEN', res.data.token)
                state.router.push({ path: '/' })
                formRef.clearValidate()
              } else {
                message.warning(res.data.msg)
                getImgCode()
                formState.imgSrc = ''
              }
            })
            .catch((err) => {})
        })
        .catch((err) => {})
    }

    return {
      ...toRefs(state),
      Login,
      getImgCode,
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
.imgCode {
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
}
</style>
