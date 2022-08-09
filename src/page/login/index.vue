<template>
    <q-layout>
        <q-page-container>
        <q-page class="flex bg-image flex-center">
            <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
            <q-card-section>
                <q-avatar size="103px" class="absolute-center shadow-10">
                <img src="./../../assets/profile.svg">
                </q-avatar>
            </q-card-section>
            <q-card-section>
                <div class="text-center q-pt-lg">
                <div class="col text-h6 ellipsis">
                    Log in
                </div>
                </div>
            </q-card-section>
            <q-card-section>
                <q-form
                class="q-gutter-md"
                >
                <q-input
                    filled
                    v-model="username"
                    label="Username"
                    lazy-rules
                    @keydown.enter.prevent="handleLogin"
                />

                <q-input
                    type="password"
                    filled
                    v-model="password"
                    label="Password"
                    lazy-rules
                    @keydown.enter.prevent="handleLogin"

                />

                <div>
                    <q-btn label="Login" :loading="isProsess" type="button" @click="handleLogin" color="primary"/>
                </div>
                </q-form>
            </q-card-section>
            </q-card>
        </q-page>
        </q-page-container>
    </q-layout>
    
</template>

<script>
import { ref } from 'vue'
import { reactive } from 'vue'
import {postLogin} from './../../service/api'
import Cookies from 'js-cookie'
import { useQuasar } from 'quasar'
import {useUserStore} from './../../store/user.js'


export default {
    setup () {
        const $q = useQuasar()
        const userStore = useUserStore()

        function saveUser({dataUser, dataSession}){
            userStore.saveName({user: dataUser, session: dataSession})
        }

        return {
            showNotifWarning (msg) {
                $q.notify({
                    message: msg,
                    type: 'warning',
                    position: 'top',
                    timeout: 2500,
                })
            },
            userStore,
            saveUser
        }
    },
     data() {
        return {
            username: '',
            password: '',
            isProsess: false
        };
     },
     methods:{
        async handleLogin(){
            let data = {
                "username": this.username,
                "password": this.password
            }
            this.isProsess = true
          
            postLogin(data).then(async(res)=>{
                this.saveUser({dataUser: res.data.user, dataSession: res.data.session})
                await this.$router.push("/dashboard")
            })
            .catch((err)=>{
                this.showNotifWarning(err.response.data.error)
                Cookies.remove('session')
            })
            .finally(()=>{
                 this.isProsess = false
            })
        },
     },
     beforeCreate () {
        const checkCookies = ( Cookies.get('session')) ? true : false
        if(checkCookies){
            this.$router.push("/home")
        }
     },
}
</script>
<style>

.bg-image {
  background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%);
}
</style>