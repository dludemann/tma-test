import Butter from 'buttercms';
import slugify from 'slugify';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@nuxt/image'],
    runtimeConfig: {
        butterApiToken: process.env.BUTTERCMS_API_TOKEN,
    },

    ssr: true,
    hooks: {
        async 'nitro:config'(nitroConfig) {
            const butter = Butter(process.env.BUTTERCMS_API_TOKEN as string);

            // Generate Dynamic Locations
            const locations = await butter.content.retrieve(['locations']);
            const locationSlugs = locations.data?.data.locations.map((location) => {
                return `/locations/${slugify(`${location.city}-dating-photography`, {
                    lower: true,
                })}`;
            });

            // Generate Dynamic Portfolio Links
            const galleryPages = await butter.page.list('gallery-page');
            const gallerySlugs = galleryPages.data?.data.map((page) => {
                if (page.slug === 'portfolio') return '/portfolio';
                else return `/portfolio/${page.slug}`;
            });

            // Error Handling
            if (!locationSlugs) return;
            if (!gallerySlugs) return;

            // Construct final array
            const slugs = [...locationSlugs, ...gallerySlugs];

            // Add Routes
            nitroConfig?.prerender?.routes?.push(...slugs);
        },
    },
});
