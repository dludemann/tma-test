<template>
    <div ref="container" class="masonry">
        <!-- <div class="masonry__sizer" /> -->
        <img
            v-for="img in imgs"
            :key="img.meta.id"
            :src="img.testimonial"
            :alt="img.alt_text"
            sizes="(min-width: 600px) 50vw, (min-width: 900px) 33vw, 100vw"
            class="masonry__item"
        />
    </div>
</template>

<script>
export default {
    name: 'Masonry',
    inheritAttrs: false,
    props: {
        imgs: {
            type: Array,
            default: [],
        },
    },
};
</script>

<style scoped>
.masonry {
    columns: 3;
    column-gap: 1rem;
    text-align: center;
}
</style>
