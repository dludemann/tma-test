<script setup>
const search = ref('');

const page = 1;

const { data, error } = await useAsyncData('locations', async () => {
    const posts = await $fetch(`/api/getPosts?page=${page}`);
    return { posts };
});

const posts = data.value.posts.data;

const pagerClasses = 'hover:bg-[#444444] bg-[#181818] py-2.5 px-5 text-white rounded text-[18px]';
</script>

<template>
    <Header />

    <div class="py-[200px] bg-gray-600">
        <h1 class="font-light text-[96px] leading-[96px] text-center">Our Blog</h1>
        <p class="text-[26px] text-center tracking-[1px] leading-[44px]">Sharing tips for online dating success</p>
    </div>

    <BlogListEntry
        v-for="post in posts"
        :key="post.slug"
        :title="post.title"
        :summary="post.summary"
        :slug="post.slug"
        :created="post.created"
        :img="post.featured_image"
    />

    <div class="flex gap-4 mt-8 justify-center">
        <nuxt-link to="/blog">
            <button :class="pagerClasses">&lt;&lt; First Page</button>
        </nuxt-link>

        <nuxt-link :to="`/blog/${page - 1}`">
            <button v-if="page !== 1" :class="pagerClasses">&lt; Previous Page</button>
        </nuxt-link>
        <nuxt-link :to="`/blog/${page + 1}`">
            <button :class="pagerClasses">Next Page &gt;</button>
        </nuxt-link>
        <!-- <button :class="pagerClasses">Last Page &gt;&gt;</button> -->
    </div>

    <ConnectWithUs />
    <Footer />
</template>
