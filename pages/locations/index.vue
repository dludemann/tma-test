<script setup>
import { computed } from 'vue';
const search = ref('');

const { data, error } = await useAsyncData('locations', async () => {
    const locations = await $fetch('/api/getLocations');
    return { locations };
});

const locations = data.value.locations.data.locations.map((location) => ({
    ...location,
    cityFilter: location.city.toLowerCase(),
}));

const filteredLocations = computed(() =>
    locations.filter((location) => location.cityFilter.includes(search.value.toLowerCase())),
);
</script>

<template>
    <Header />

    <!-- SEARCH -->
    <section class="bg-black">
        <div class="container mx-auto py-[42px] flex justify-center items-center px-6">
            <div class="max-w-[600px]">
                <h1 class="text-white text-center text-heading-h1 font-bold font-display">Locations</h1>
                <p class="text-white text-center mt-2 text-body-regular font-body">
                    Serving all major cities in the U.S. no but we totally got space.
                </p>

                <div class="relative">
                    <input class="input w-full mt-10" placeholder="Where do you live?" v-model="search" />

                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute right-[14px] top-1/2 transform -translate-y-1/2"
                    >
                        <path
                            d="M21.3877 21.5L17.8878 18M20.3877 12C20.3877 16.6944 16.5821 20.5 11.8877 20.5C7.19327 20.5 3.3877 16.6944 3.3877 12C3.3877 7.30558 7.19327 3.5 11.8877 3.5C16.5821 3.5 20.3877 7.30558 20.3877 12Z"
                            stroke="#94A3B8"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </section>

    <!-- GRID -->
    <section class="bg-black min-h-[50vh]">
        <div class="container mx-auto py-20 flex items-center justify-center px-6">
            <div class="grid grid-cols-4 gap-6">
                <LocationGridPreview
                    v-for="location in filteredLocations"
                    :key="location.city"
                    :city="location.city"
                    :img="location.image"
                />
            </div>
        </div>
    </section>

    <Footer />
</template>
