<script setup lang="ts">
import dayjs from 'dayjs';

interface Props {
    title: string;
    slug: string;
    img: string;
    created: string;
    summary: string;
}

const props = defineProps<Props>();

const date = dayjs(props.created).format('MMM DD');
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        <div class="h-[300px] lg:h-[600px] w-full relative">
            <img :src="props.img" class="object-cover w-full h-full" />
        </div>
        <article class="p-[70px] flex flex-col items-start">
            <h1 class="mb-[50px] font-bold text-[31px] tracking-[0.252px] leading-[40px]">
                {{ props.title }}
            </h1>

            <p class="border-t-2 border-black text-[18px] mb-[20px]">
                {{ date }}
            </p>

            <p class="text-[18px] mb-[20px] leading-[30.6px] tracking-[0.252px] text-[#171717]">
                {{ props.summary }}
            </p>

            <nuxt-link :to="`/blog/${props.slug}`" class="text-[#BF9441] text-[18px]">Read full post</nuxt-link>
        </article>
    </div>
</template>
