<script setup lang="ts">
import { reactive } from 'vue';

const weather = reactive({ data: {} as any });
fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${import.meta.env.VITE_OPENWEATHER_KEY}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        weather.data = Object.entries(data.main);
                    });

console.log(weather);
</script>
<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Attribute</th>
                    <th>Value</th>
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