<template>
    <div class="bg-white flex flex-col">
        <div class="h-[300px] w-[300px] bg-slate-500 overflow-hidden">
            <nuxt-img :src="props.img" />
        </div>
        <div class="flex flex-col gap-1 p-4">
            <p class="text-black font-bold font-display text-heading-h4">{{ props.name }}</p>
            <p class="text-[#0F172A] font-body text-body-large">{{ props.title }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    name: string;
    title: string;
    img: string;
}

const props = defineProps<Props>();
</script>
