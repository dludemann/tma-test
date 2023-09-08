<template>
    <nuxt-link :to="slug" class="col-span-4 lg:col-span-1">
        <div
            class="relative w-[280px] h-[300px] flex p-2 justify-center items-center overflow-hidden rounded-lg border-secondary-300 cursor-pointer"
        >
            <p
                class="text-white relative z-20 font-display text-heading-h3 font-bold drop-shadow-[4px_4px_4px_rgba(0,0,0,0.30)]"
            >
                {{ props?.city }}
            </p>

            <div class="h-full w-full absolute bg-black bg-opacity-50 z-10" />
            <img :src="props.img" class="absolute object-cover h-full w-full" />
        </div>
    </nuxt-link>
</template>

<script setup lang="ts">
import slugify from 'slugify';

interface Props {
    city: string;
    img: string;
}

const props = defineProps<Props>();
const slug = `/locations/${slugify(`${props.city}-dating-photography`, {
    lower: true,
})}`;
</script>
