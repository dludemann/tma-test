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

    <div
        class="py-[100px] lg:py-[200px] relative"
        :style="{
            backgroundImage: 'url(https://cdn.buttercms.com/EiyEcgzGQyd2H1KLQCqI)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }"
    >
        <h1 class="font-light z-10 relative text-[39px] lg:text-[96px] lg:leading-[96px] text-center text-white">
            Our Blog
        </h1>
        <p class="text-[18px] lg:text-[26px] z-10 relative text-center tracking-[1px] leading-[44px] text-white">
            Sharing tips for online dating success
        </p>
        <div class="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50 z-0" />
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
