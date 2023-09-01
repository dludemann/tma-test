<script setup>
import { useRoute } from 'nuxt/app';
const route = useRoute();

let slug = route.params.slug;
let links = [];

const { data, error } = await useAsyncData('locations', async () => {
    const gallery = await $fetch(`/api/getGalleryBySlug?slug=${slug}`);
    const galleryList = await $fetch(`/api/getGallery`);
    return { gallery, galleryList };
});

// Extract gallery images and create an array of image links.
const galleryImages = Object.keys(data.value.gallery.data.fields.gallery_images_component)
    .map((key) => data.value.gallery.data.fields.gallery_images_component[key])
    .flat()
    .map((photo) => photo.photos);

// Extract Possible Pages for Navigation
links = data.value.galleryList.data.map((page) => {
    return {
        title: page.fields.gallery_name,
        href: page.slug === 'portfolio' ? '/portfolio' : `/portfolio/${page.slug}`,
        active: page.slug === slug,
    };
});

const gallery = data.value.galleryList.data.filter((gallery) => gallery.slug === slug)[0];
const galleryName = gallery.fields.gallery_name;
const bannerImage = gallery.fields.banner_image;
</script>

<template>
    <Header />

    <section class="flex w-full gap-4">
        <!-- SIDE NAV -->
        <side-nav-old :links="links" />

        <!-- HERO SECTION -->
        <article style="width: 100%">
            <photo-gallery :images="galleryImages" :gallery-name="galleryName" :banner-image="bannerImage" />
        </article>
    </section>
    <Footer />
</template>
