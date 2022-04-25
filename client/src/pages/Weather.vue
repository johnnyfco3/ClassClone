<script setup lang="ts">
import { reactive } from 'vue';

const weather = reactive({ data: {} as any });
const result = fetch('https://api.coinbase.com/v2/exchange-rates')
                    .then(res => res.json())
                    .then(data => {
                        weather.data = Object.entries(data.data.rates);
                    });

console.log(weather);
</script>
<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Currency</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(currency, index) in weather.data" :key="index">
                    <td>{{ currency[0] }}</td>
                    <td>{{ currency[1] }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<style scoped>

</style>