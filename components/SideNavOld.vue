<template>
    <nav class="w-[300px] flex-shrink-0 gap-[22px] flex flex-col">
        <a v-for="link in links" :key="link.title" :href="link.href" :class="link.active ? linkActiveClass : linkClass"
            >{{ link.title }}

            <svg
                data-v-783a4ef6=""
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                class=""
                style="stroke: white"
            >
                <path
                    data-v-783a4ef6=""
                    d="M21.883 12l-7.527 6.235L15 19l9-7.521L15 4l-.645.764L21.884 11H0v1h21.883z"
                ></path>
            </svg>
        </a>
    </nav>
</template>

<script setup lang="ts">
const linkClass = `text-[20px] py-[8.5714px] px-[11.43px] flex justify-between items-center overflow-hidden bg-black hover:bg-[#cc3737] text-white cursor-pointer font-bold`;
const linkActiveClass = `text-[20px] py-[8.5714px] px-[11.43px] flex justify-between items-center overflow-hidden bg-[#cc3737] text-white cursor-pointer font-bold`;

interface Props {
    links: {
        title: string;
        href: string;
        active: boolean;
    };
}

const props = defineProps<Props>();
</script>
