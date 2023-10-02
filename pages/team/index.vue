<script setup lang="ts">
import { team } from '../../configs/team';

useHead({
    title: 'Our Team',
});
</script>

<template>
    <Header />

    <section class="container mx-auto max-w-[1000px] text-[48px] px-6">
        <h1 class="my-10 font-bold">The Team</h1>

        <!-- GRID -->
        <div class="grid grid-cols-2 gap-16">
            <!-- TEAM MEMBER -->
            <div v-for="member in team" :key="member.name" class="col-span-2 lg:col-span-1 text-center overflow-hidden">
                <div class="h-auto lg:h-[510px] w-full lg:w-[510px] bg-slate-500 overflow-hidden">
                    <nuxt-img :src="member.img" />
                </div>

                <article class="p-8">
                    <p class="font-bold text-[25px]">{{ member.name }}</p>
                    <p class="mb-8 text-[18px]">{{ member.title }}</p>
                    <p class="text-[18px]">{{ member.description }}</p>
                </article>
            </div>
        </div>
    </section>

    <ConnectWithUs />

    <Footer />
</template>
