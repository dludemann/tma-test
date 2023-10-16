<script setup>
import dayjs from 'dayjs';

let page = 1;

const route = useRoute();
const slug = route.params.slug;

let posts = null;
let post = null;
let isBlogPost = false;
let blogDate = null;

if (parseInt(slug)) {
    const { data, error } = await useAsyncData('locations', async () => {
        const posts = await $fetch(`/api/getPosts?page=${parseInt(slug)}`);
        return { posts };
    });

    page = parseInt(slug);
    posts = data.value.posts.data;
} else {
    const { data, error } = await useAsyncData('locations', async () => {
        const post = await $fetch(`/api/getBlogPost?slug=${slug}`);
        return { post };
    });

    isBlogPost = true;
    post = data.value.post.data;
    console.log('data', post);

    blogDate = dayjs(post.published).format('MMM DD');
}

const pagerClasses = 'hover:bg-[#444444] bg-[#181818] py-2.5 px-5 text-white rounded text-[18px]';

console.log('post', post);
console.log(route);
useHead({
    title: post.seo_title,
    meta: [
        {
            name: 'description',
            content: cleanButterText(post.meta_description),
        },
        {
            name: 'og:description',
            content: cleanButterText(post.meta_description),
        },
        {
            name: 'og:title',
            content: cleanButterText(post.seo_title),
        },
        {
            name: 'og:url',
            content: 'https://thematchartist.com/' + route.fullPath,
        },
        {
            name: 'og:image',
            content: post.featured_image,
        },
        {
            name: 'og:site_name',
            content: 'https://thematchartist.com',
        },
        {
            name: 'og:type',
            content: 'website',
        },
    ],
});
</script>

<template>
    <Header />

    <!-- IF JUST PAGINATION -->
    <div v-if="!isBlogPost">
        <div
            class="py-[200px] relative"
            :style="{
                backgroundImage: 'url(https://cdn.buttercms.com/EiyEcgzGQyd2H1KLQCqI)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }"
        >
            <h1 class="font-light z-10 relative text-[96px] leading-[96px] text-center text-white">Our Blog</h1>
            <p class="text-[26px] z-10 relative text-center tracking-[1px] leading-[44px] text-white">
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
    </div>

    <!-- IF BLOG POST -->
    <div v-if="isBlogPost">
        <section class="bg-[#efefef] py-[70px]">
            <div class="max-w-[800px] mx-auto">
                <div class="w-[800px] h-[500px] mb-[20px]">
                    <img :src="post.featured_image" class="object-cover w-full h-full" />
                </div>
                <p class="text-center text-[20px] text-[#787878] px-6">{{ blogDate }}</p>
                <h1 class="font-bold text-center text-[#171717] text-[48px] leading-[62.5px] mb-[50px] px-6">
                    {{ post.title }}
                </h1>
                <p class="text-[22px] font-medium leading-[37.4px] text-[#787878] px-6">{{ post.summary }}</p>
            </div>
        </section>

        <div class="max-w-[800px] mx-auto py-[70px] body-container px-6">
            <div v-html="post.body" />
        </div>
    </div>

    <ConnectWithUs />
    <Footer />
</template>

<style>
.body-container {
    letter-spacing: 0.014em;
    line-height: 1.7;
}

.body-container p {
    margin-bottom: 20px;
    font-size: 18px;
    color: #171717;
}

.body-container a {
    color: #bf9941;
}

.body-container img {
    margin-bottom: 20px;
}
</style>
