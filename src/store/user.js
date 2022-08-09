import { defineStore } from 'pinia'
import Cookies from 'js-cookie'


export const useUserStore = defineStore('user', {
    state: () => ({
        user: "Walcome to dashboard",
        session: ''
      }),
      getters: {
        // getName: (state) => state.user
        getName: () =>  Cookies.get('user')
      },
      actions:{
        saveName({user = '', session = ''}){
            try {
                this.user = user
                this.session = session
                Cookies.set('session', this.session, { sameSite: 'strict' })
                Cookies.set('user',  this.user, { sameSite: 'strict' })
            } catch (error) {
                this.user = "Test nama default"
            }
           
        }
      }
  })

  