import { defineStore } from 'pinia'
import {getOrderList, posrOrder} from '../service/api/index'

export const useOrderStore = defineStore('order', {
    state: () => ({
      data: [],
    }),
    getters: {
      getDataOrder: (state) => state.data,
    },
    actions: {
        actionGetOrder() {
            return new Promise((resolve, reject) => {
                getOrderList().
                    then((result) => {
                        this.data = result.data.data
                        resolve(result)
                    }).catch((err) => {
                        reject(err)
                    })
            })
        },
        actionSaveOrder(data){
            return new Promise((resolve, reject) => {
                posrOrder(data).
                    then((result) => {
                        this.data = result.data.data
                        resolve(result)
                    }).catch((err) => {
                        reject(err)
                    })
            })
        }
      },
  })

  