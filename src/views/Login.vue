<template>
  <div class="main">
    <a-form :label-col="{ span: 8 }" :wrapper-col="{ span: 10 }" autocomplete="off" class="logindiv">
      <br><br>
      <a-form-item name="clientId" label="客 户 号" >
        <a-input v-model:value="form.clientId" placeholder="请输入客户号">
        </a-input>
      </a-form-item>
      <a-form-item name="operatorCode" label="操 作 员" >
        <a-input v-model:value="form.operatorCode" placeholder="请输入操作员代码">
        </a-input>
      </a-form-item>
      <a-form-item name="password" label="密 码" >
        <a-input-password
            type="password"
            v-model:value="form.password"
            placeholder="请输入密码"
        >
        </a-input-password>
      </a-form-item>
      <a-form-item 
        name="identifyCode" 
        label="验 证 码" 
        style=" display: flex; align-items: baseline;" 
      >
        <div style="display: flex; align-items: center ;">
          <a-input
            v-model:value="iuputIdentifyCode"
            placeholder="验证码"
            style="flex: 1; width: 120px;  margin-right: 15px;"
          />
          <SIdentify v-model:value="iuputIdentifyCode" @sendData="getCode" style="flex: 1;"/>
        </div>
      </a-form-item>
      <div class="buttonGroup">
          <a-button type="primary" @click="submit">登录</a-button>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <a-button @click="reset">重置</a-button>
        </div>
    </a-form>
  </div>
</template>

<script>
import SIdentify from '@/components/SIdentify.vue';
import axios from "axios"
export default {
  name: "Login",
  components:{SIdentify},
  data(){
    return{
      form:{
        clientId:"",
        operatorCode:"",
        password:""
      },
      iuputIdentifyCode:"",
      validCode:""
    };
  },
  methods:{
    submit(){
      if(this.form.clientId === ""){
        alert("客户号不能为空！")
      }else if(this.form.operatorCode === ""){
        alert("操作员不能为空！")
      }else if(this.iuputIdentifyCode === ""){
        alert("验证码不能为空！")
      }else if(this.iuputIdentifyCode !== this.validCode){
        alert("验证码错误！")
      }else{
        axios.post("http://localhost:8800/user/login", this.form).then(
          response => {
            const result = response.data
            if (result.code !== 200) {
              alert(result.data)
            } else {
              localStorage.setItem("clientId",this.form.clientId)
              localStorage.setItem("operatorCode",this.form.operatorCode)
              localStorage.setItem("token",result.data.token)

              console.log('登陆成功,跳转...')
              this.$router.push("/index")
            }
          }).catch(error => { console.log(error.message);});
       }
    },
    reset(){
      this.form.clientId = ""
      this.form.operatorCode = ""
      this.form.password = ""
      this.iuputIdentifyCode = ""
    },
    getCode(data){
      console.log('验证码：',data)
      this.validCode = data;
    }
  },
  mounted(){
    const token = localStorage.getItem("token")
    if(token !==null && token !== ""){
      this.$router.push("/index")
    }
  }
};
</script>

<style scoped>
.main{
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgb(42, 71, 199);
}
.logindiv{
  border: 1px solid black;
  height: 47vh;
  width: 76vh;
  background:white;
  border-radius: 5px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);
}
.buttonGroup{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
