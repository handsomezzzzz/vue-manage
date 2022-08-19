<template>
  <div class="LoginComponent">
    <h2>登陆后台系统</h2>
    <hr />
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <div class="userword">
        <el-form-item label="账号" prop="username">
          <el-input
            type="text"
            autocomplete="off"
            v-model="ruleForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            autocomplete="off"
            v-model="ruleForm.password"
          ></el-input>
        </el-form-item>
        <el-button type="primary" @click="login">登陆</el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
// import Mock from 'mockjs'
// import { getMenu } from '../../api/adress.js'
export default {
  name: "LoginComponent",
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入您的账号", trigger: "blur" },
          {
            min: 3,
            max: 15,
            message: "长度在 3 到 15 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入您的密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login() {
      // const params = this.$qs.parse({
      //       username: this.ruleForm.username,
      //       password: this.ruleForm.password,
      //     })

      // console.log(params)
      this.$http.post(
          "/login/getMenu",
          this.$qs.parse({
            username: this.ruleForm.username,
            password: this.ruleForm.password,
          })
        ).then(({data : res})=> {
          if (res.code === 20000) {
            this.$store.commit("clearMenu");
            this.$store.commit("setMenu", res.menu);
            this.$store.commit("setToken", res.token);
            this.$store.commit("addMenu", this.$router);
            this.$router.push({ name: "Main" });
          } else {
            this.$message.warning(res.data.message);
          }
        });
      // const token = Mock.Random.guid()//利用Mock方法来生成 token
      // this.$store.commit('setToken',token)
      // this.$router.push({
      //   name: 'Main'
      // })
    },
  },
};
</script>
<style scoped>
.LoginComponent {
  border: 1px solid gray;
  width: 400px;
  height: 300px;
  position: relative;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
}
h2 {
  text-align: center;
}
.userword {
  display: inline-block;
  margin-top: 20px;
}
.el-input {
  width: 250px;
}
.el-button {
  position: relative;
  left: 100px;
  width: 100px;
}
</style>
