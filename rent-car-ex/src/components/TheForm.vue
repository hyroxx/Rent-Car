<template>
    <b-form class="formReservation" @submit.stop.prevent>
        <label class="mr-sm-2">Pick location</label>
        <b-form-select 
            v-model="pickLocationValue" 
            :options="pickLocation" 
            size="sm" 
            class="mt-1">
        </b-form-select>
        <label class="mr-sm-2 mt-2">Return location</label>

        <b-form-select 
            v-model="returnLocationValue" 
            :options="returnLocation" 
            size="sm" 
            class="mt-1">
        </b-form-select>
        <label class="mt-3" for="example-datepicker">Choose a pick date</label>

        <div class="timeClass" >
            <b-form-datepicker 
                id="example-datepicker" 
                v-model="pickDate" 
                class="mr-2" ></b-form-datepicker>
            <b-form-timepicker v-model="pickTime" locale="en">
            </b-form-timepicker>
        </div>

        <label class="mt-2" for="example-datepicker">Choose a return date</label>
        <div class="timeClass">
            <b-form-datepicker id="example-datepicker" v-model="returnDate" class="mr-2"></b-form-datepicker>
            <b-form-timepicker v-model="returnTime" locale="en"></b-form-timepicker>
        </div>
        <b-button class="mt-3" @click="gotoRent()" block variant="outline-dark">Search</b-button>
    </b-form>
</template>

<script>
export default {
    data() {
        return {
            sliding: null,
            pickLocation:['istanbul','izmir','antalya','eskişehir'],
            pickLocationValue:'istanbul',
            returnLocation:['istanbul','izmir','antalya','eskişehir'],
            returnLocationValue:'istanbul',
            pickDate:'',
            pickTime:'',
            returnDate:'',
            returnTime:'',
            userSelect:[],
        }
    },
    methods:{
        gotoRent(){
                this.userSelect.push(
                    this.pickLocationValue,
                    this.returnLocationValue,
                    this.pickDate,
                    this.pickTime,
                    this.returnDate,
                    this.returnTime);

                const userSelect = this.userSelect;
                this.$router.push({name:'Rent',params:{userData:userSelect}});
            }
    }
}
</script>