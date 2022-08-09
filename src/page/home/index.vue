<template>
        <q-toolbar class="bg-primary glossy text-white">
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>

        <q-toolbar-title>{{userStore.getName ? userStore.getName : 'Welcome'}}</q-toolbar-title>

        <q-btn flat round dense icon="logout"  @click="logout"/>
        </q-toolbar>

        <div class="q-pa-md">
            <div class="row">
                <div class="col-12 col-md-12">

                     <q-btn color="primary" label="Create new order" @click="isOpenCreateOrder = true"/>

                     <div class="q-pa-md" v-if="isLoadingDataOrder">
                        <q-markup-table>
                        <thead>
                            <tr>
                            <th class="text-left" style="width: 150px">
                                <q-skeleton animation="blink" type="text" />
                            </th>
                            <th class="text-right">
                                <q-skeleton animation="blink" type="text" />
                            </th>
                            <th class="text-right">
                                <q-skeleton animation="blink" type="text" />
                            </th>
                            <th class="text-right">
                                <q-skeleton animation="blink" type="text" />
                            </th>
                            <th class="text-right">
                                <q-skeleton animation="blink" type="text" />
                            </th>
                            <th class="text-right">
                                <q-skeleton animation="blink" type="text" />
                            </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="n in 5" :key="n">
                            <td class="text-left">
                                <q-skeleton animation="blink" type="text" width="85px" />
                            </td>
                            <td class="text-right">
                                <q-skeleton animation="blink" type="text" width="50px" />
                            </td>
                            <td class="text-right">
                                <q-skeleton animation="blink" type="text" width="35px" />
                            </td>
                            <td class="text-right">
                                <q-skeleton animation="blink" type="text" width="65px" />
                            </td>
                            <td class="text-right">
                                <q-skeleton animation="blink" type="text" width="25px" />
                            </td>
                            <td class="text-right">
                                <q-skeleton animation="blink" type="text" width="85px" />
                            </td>
                            </tr>
                        </tbody>
                        </q-markup-table>
                    </div>

                     <!-- table data order -->

                      <div class="q-pa-md" v-else>
                            <q-table
                            style="height: 400px"
                            title="Order list"
                            :rows="dataRows"
                            :columns="columns"
                            row-key="index"
                            virtual-scroll
                            :rows-per-page-options="[0]"
                            />
                        </div>
                    
                     <!-- <router-link to="/">Go to Home</router-link>
                     <br>
                    <router-link to="/login">Go to login</router-link> -->

                    <!-- Dialog create order -->
                    <q-dialog v-model="isOpenCreateOrder" persistent>
                        <q-card style="width: 700px; max-width: 80vw;">
                            <q-card-section>
                                <div class="text-h6">Create your order</div>
                            </q-card-section>

                            <q-card-section class="q-pt-none">
                                <div class="row q-pa-sm">
                                    <div class="col-12">
                                        <q-input 
                                        filled lazy-rules autofocus
                                        v-model="consigneeName" 
                                        label="name"
                                        placeholder="Please enter your name"
                                        @keyup.enter="prompt = false" />
                                    </div>
                                    <span class="text-negative">{{validConsigneeName}}</span>
                                </div>
                                
                                <div class="row q-pa-sm">
                                    <div class="col-12">
                                        <q-input 
                                        filled lazy-rules 
                                        type="textarea"
                                        label="address"
                                        v-model="consigneeAddress" 
                                        placeholder="Please enter your address"
                                        @keyup.enter="prompt = false" />
                                    </div>
                                    <span class="text-negative">{{validConsigneeAddress}}</span>
                                </div>

                                <div class="row q-pa-sm">
                                    <div class="col-12">
                                        <q-input 
                                        filled lazy-rules autofocus
                                        v-model="consigneeCity"
                                        label="city"
                                        placeholder="Please enter your city"
                                        @keyup.enter="prompt = false" />
                                    </div>
                                    <span class="text-negative">{{validConsigneeCity}}</span>
                                </div>

                                <div class="row q-pa-sm">
                                    <div class="col-12">
                                        <q-input
                                        filled lazy-rules autofocus
                                        v-model="consigneeCountry"
                                        label="country"
                                        placeholder="Please enter your country"
                                        @keyup.enter="prompt = false" />
                                    </div>
                                    <span class="text-negative">{{validConsigneeCountry}}</span>
                                </div>

                                <div class="row q-pa-sm">
                                    <div class="col-12">
                                        <q-input 
                                        filled lazy-rules autofocus
                                        v-model="consigneePostalCode"
                                        label="postal code"
                                        placeholder="Please enter your postal code"
                                        @keyup.enter="prompt = false" />
                                    </div>
                                    <span class="text-negative">{{validConsigneePostalCode}}</span>
                                </div>

                                 <div class="row q-pa-sm">
                                    <div class="col-12">
                                        <q-input 
                                        filled lazy-rules autofocus
                                        v-model="consigneeProvince"
                                        label="province"
                                        placeholder="Please enter your province"
                                        @keyup.enter="prompt = false" />
                                    </div>
                                    <span class="text-negative">{{validConsigneeProvince}}</span>
                                </div>

                                <div class="row q-pa-sm">
                                    <div class="col-12">
                                        <q-input
                                        filled lazy-rules autofocus
                                        v-model="consigneeNumber"
                                        label="No"
                                        placeholder="Please enter your No"
                                        @keyup.enter="prompt = false" />
                                    </div>
                                    <span class="text-negative">{{validConsigneeNumber}}</span>
               
                                </div>

                                <div class="row q-pa-sm">
                                    <div class="col-12">
                                        <q-input
                                        type="number"
                                        filled
                                        label="height"
                                         mask="#.#"
                                        v-model="height"
                                        placeholder="Please enter your height"
                                        @keyup.enter="prompt = false" />
                                    </div>
                                    <span class="text-negative">{{validHeight}}</span>
                                </div>

                                 <div class="row q-pa-sm">
                                    <div class="col-12">
                                        <q-input 
                                        rows="3"
                                        type="number"
                                        filled
                                        label="weight"
                                        v-model="weight"
                                        placeholder="Please enter your weight"
                                        @keyup.enter="prompt = false" />
                                    </div>
                                    <span class="text-negative">{{validWeight}}</span>
                                </div>

                                <div class="row q-pa-sm">
                                    <div class="col-12">
                                        <q-input 
                                        rows="3"
                                        type="number"
                                        filled
                                        label="length"
                                        v-model="length"
                                        placeholder="Please enter your length"
                                        @keyup.enter="prompt = false" />
                                    </div>
                                    <span class="text-negative" >{{validLength}}</span>
                                </div>

                                 <div class="row q-pa-sm">
                                    <div class="col-12">
                                        <q-input 
                                        rows="3"
                                        type="number"
                                        label="width"
                                        filled
                                        v-model="width"
                                        placeholder="Please enter your width"
                                        @keyup.enter="prompt = false" />
                                    </div>
                                    <span class="text-negative">{{validWidth}}</span>
                                </div>

                                <div class="row q-pa-sm">
                                    <div class="col-12">
                                         <q-select 
                                            filled 
                                            v-model="paymentType" 
                                            :emit-value="true"
                                            :options="paymentTypeOption" 
                                            label="payment type"
                                            placeholder="Please enter your payment type" />
                                          <span class="text-negative">{{validPaymentType}}</span>
                                    </div>
                                </div>



                                
                            </q-card-section>

                            <q-card-actions align="right" class="text-primary">
                                <q-btn flat label="Cancel" @click="handleCancel" />
                                <q-btn flat label="Submit" @click="handleSubmit" />
                            </q-card-actions>
                        </q-card>
                    </q-dialog>


                </div>
            </div>
    </div>
</template>

<script>
import Cookies from "js-cookie";
import { useQuasar,  Loading, QSpinnerGears} from 'quasar'
import { ref } from 'vue'
import {useUserStore} from './../../store/user.js'
import {useOrderStore} from './../../store/order.js'


const columns = [
  {
    name: 'index',
    label: '#',
    field: 'index'
  },
  {
    name: 'ConsigneeName',
    required: true,
    label: 'Name',
    align: 'left',
    field: row => row.ConsigneeName,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'TrackingNumber', align: 'left', label: 'Tracking Number', field: 'TrackingNumber', sortable: true },
  { name: 'ConsigneeAddress', align: 'left', label: 'Address', field: 'ConsigneeAddress', sortable: true },
  { name: 'ConsigneeCity',  align: 'left', label: 'City', field: 'ConsigneeCity', sortable: true },
  { name: 'ConsigneeCountry',  align: 'left', label: 'Country', field: 'ConsigneeCountry' },
  { name: 'ConsigneeNumber',  align: 'left', label: 'No', field: 'ConsigneeNumber' },
  { name: 'ConsigneePostalCode',  align: 'left', label: 'Postal Code', field: 'ConsigneePostalCode' },
  { name: 'ConsigneeProvince',  align: 'left', label: 'Province', field: 'ConsigneeProvince' },
  { name: 'Height',  align: 'left', label: 'Height', field: 'Height', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'Length',  align: 'left', label: 'Length', field: 'Length', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'Weight',  align: 'left', label: 'Weight', field: 'Weight', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'Width',  align: 'left', label: 'Width', field: 'Width', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'PaymentType',  align: 'left', label: 'PaymentType', field: 'PaymentType' },
]

const seed = [
  {
    ConsigneeName: 'Frozen Yogurt',
    TrackingNumber:"",
    TrackingNumber : "",
    ConsigneeAddress : "",
    ConsigneeCity : "",
    ConsigneeCountry : "",
    ConsigneeNumber : "",
    ConsigneePostalCode : "",
    ConsigneeProvince : "",
    Height : "",
    Length : "",
    Weight : "",
    Width : "",
    PaymentType : "",
  }
]

export default {
    setup () {
        const $q = useQuasar()
        const userStore = useUserStore()
        const orderStore = useOrderStore()
        const isOpenCreateOrder = ref(false)
        function getOrder(){
            return new Promise((resolve, reject) => {
                 orderStore.actionGetOrder()
                 .then((res) => resolve(res))
                 .catch((err)=> reject(err))
            })
        }

        function saveOrder(data){
            return new Promise((resolve, reject) => {
                 orderStore.actionSaveOrder(data)
                 .then((res) => resolve(res))
                 .catch((err)=> reject(err))
            })
        }

        return {
            columns,
            userStore,
            orderStore,
            getOrder,
            saveOrder,
            isOpenCreateOrder,
            showNotifSuccess (msg) {
                $q.notify({
                    message: msg,
                    type: 'positive',
                    position: 'top',
                    timeout: 2500,
                })
            },
            
        }
    },
    data() {
        return {
            consigneeName: "",
            consigneeAddress: "",
            consigneeCity: "",
            consigneeCountry: "",
            consigneePostalCode: "",
            consigneeProvince: "",
            consigneeNumber: "",
            height: 0,
            weight: 0,
            length: 0,
            width: 0,
            paymentType: "",
            validConsigneeName: "",
            validConsigneeAddress: "",
            validConsigneeCity: "",
            validConsigneeCountry: "",
            validConsigneePostalCode: "",
            validConsigneeProvince: "",
            validConsigneeNumber: "",
            validHeight: "",
            validWeight: "",
            validLength: "",
            validWidth: "",
            validPaymentType: "",

            paymentTypeOption:['cod', 'tunai', 'gopay', 'ovo'],
            dataRows:[],
            isLoadingDataOrder: false,
        };
    },
    methods: {
        handleGetList() {
            // Loading.show({spinner: QSpinnerGears,})
            this.isLoadingDataOrder = true
            this.getOrder()
            .then((res)=>{
                this.dataRows = res.data.data ?  res.data.data : []
                if(this.dataRows.length < 1){ return false}
                this.dataRows = this.dataRows.map((data, index)=>{
                    return data = {
                        index: index+1,
                        ConsigneeName: data['ConsigneeName'],
                        TrackingNumber: data['TrackingNumber'],
                        ConsigneeAddress : data['ConsigneeAddress'],
                        ConsigneeCity : data['ConsigneeCity'],
                        ConsigneeCountry : data['ConsigneeCountry'],
                        ConsigneeNumber : data['ConsigneeNumber'],
                        ConsigneePostalCode : data['ConsigneePostalCode'],
                        ConsigneeProvince : data['ConsigneeProvince'],
                        Height : data['Height'],
                        Length : data['Length'],
                        Weight : data['Weight'],
                        Width : data['Width'],
                        PaymentType : data['PaymentType'],
                    }
                })
            })
            .catch((err)=> {
                console.log('err', err)
            })
            .finally(()=>{
                setTimeout(() => {
                    this.isLoadingDataOrder = false
                }, 200);
                 
            })
        },
        handleCancel(){
            this.consigneeName = "";
            this.consigneeAddress = "";
            this.consigneeCity = "";
            this.consigneeCountry = "";
            this.consigneePostalCode = "";
            this.consigneeProvince = "";
            this.consigneeNumber = "";
            this.height = 0;
            this.weight = 0;
            this.length = 0;
            this.width = 0;
            this.paymentType = "";
            this.resetValidate()
            this.isOpenCreateOrder = false;
        },
        resetValidate(){
            this.validConsigneeName = "";
                this.validConsigneeAddress =  "";
                this.validConsigneeCity = "";
                this.validConsigneeCountry =  "";
                this.validConsigneePostalCode = "";
                this.validConsigneeProvince = "";
                this.validConsigneeNumber = "";
                this.validHeight =  "";
                this.validWeight = "";
                this.validLength = "";
                this.validWidth =  "";
                this.validPaymentType = "";
        },
        handleSubmit(){
            const sendData = {
                consigneeName:  this.consigneeName ,
                consigneeAddress: this.consigneeAddress,
                consigneeCity: this.consigneeCity,
                consigneeCountry: this.consigneeCountry,
                consigneePostalCode: this.consigneePostalCode,
                consigneeProvince: this.consigneeProvince,
                consigneeNumber: this.consigneeNumber,
                height: parseFloat(this.height),
                weight: parseFloat(this.weight),
                length: parseFloat(this.length),
                width: parseFloat(this.width),
                paymentType: this.paymentType
            }
            Loading.show({spinner: QSpinnerGears,})
            this.saveOrder(sendData)
            .then((res)=>{
                 this.isOpenCreateOrder = false
                 this.showNotifSuccess('success to add data')
                 this.handleGetList()
            })
            .catch((err)=> {
                this.validConsigneeName = (err.response.data.details.ConsigneeName) ? err.response.data.details.ConsigneeName : "";
                this.validConsigneeAddress = (err.response.data.details.ConsigneeAddress) ? err.response.data.details.ConsigneeAddress : "";
                this.validConsigneeCity = (err.response.data.details.ConsigneeCity) ? err.response.data.details.ConsigneeCity : "";
                this.validConsigneeCountry = (err.response.data.details.ConsigneeCountry) ? err.response.data.details.ConsigneeCountry : "";
                this.validConsigneePostalCode = (err.response.data.details.ConsigneePostalCode) ? err.response.data.details.ConsigneePostalCode : "";
                this.validConsigneeProvince = (err.response.data.details.ConsigneeProvince) ? err.response.data.details.ConsigneeProvince : "";
                this.validConsigneeNumber = (err.response.data.details.ConsigneeNumber) ? err.response.data.details.ConsigneeNumber : "";
                this.validHeight = (err.response.data.details.Height) ? err.response.data.details.Height : "";
                this.validWeight = (err.response.data.details.Weight) ? err.response.data.details.Weight : "";
                this.validLength = (err.response.data.details.Length) ? err.response.data.details.Length : "";
                this.validWidth = (err.response.data.details.Width) ? err.response.data.details.Width : "";
                this.validPaymentType = (err.response.data.details.PaymentType) ? err.response.data.details.PaymentType : "";
            })
            .finally(()=>{
                 Loading.hide()
               
            })

        },
        logout(){
            Cookies.remove('session')
            Cookies.remove('user')
            this.$router.push("/login")
        }
    },
    created () {
        this.handleGetList()
    },
}
</script>

<style lang="scss" scoped>

</style>