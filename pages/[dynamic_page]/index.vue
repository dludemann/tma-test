<script setup>
import { useRoute } from 'nuxt/app';
import { ref } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
const route = useRoute();
const sampleCarousel = ref(null);
const settings = {
    itemsToShow: 4,
};

let city = route.params.dynamic_page
    ?.replace('-dating-photography', '')
    .split('-')
    .map((token) => capitalizeFirstLetter(token))
    .join(' ');

if (city === 'Winston Salem') {
    city = 'Winston–Salem';
}

const { data, error } = await useAsyncData('locations', async () => {
    const locations = await $fetch(`/api/getLocationsByCity?city=${city}`);
    return { locations };
});

const cityInformation = data.value.locations.data.locations[0];
console.log('cityUbfirnatuib', cityInformation);

const pillClass = 'bg-white rounded-full px-6 flex gap-4 py-2 font-bold text-[22px] hover:bg-[#dea44e] items-center';
const pillClassActive = 'bg-[#dea44e] rounded-full px-6 flex gap-4 py-2 font-bold text-[22px]';

const imageGallery = [
    '/images/location/samples/headshot-1.png',
    '/images/location/samples/headshot-2.png',
    '/images/location/samples/headshot-3.png',
    '/images/location/samples/headshot-4.png',
    '/images/location/samples/headshot-5.png',
];

let inquireForm = ref(null);
const scrollToBook = () => inquireForm.value.scrollIntoView({ behavior: 'smooth' });

useHead({
    title: cityInformation.html_title ? cityInformation.html_title : `${cityInformation.city} Dating Photography`,
});
</script>

<template>
    <Header />

    <!-- HERO -->
    <section class="bg-black overflow-hidden">
        <section class="container mx-auto flex flex-col lg:flex-row items-center justify-center pb-[60px] relative p-6">
            <div class="max-w-[600px] relative z-10">
                <h1 class="text-[58px] font-accent tracking-[-1%] leading-[69.6px] font-bold text-white">
                    Premier Online Dating Photography in {{ cityInformation.city }}, {{ cityInformation.state }}
                </h1>
                <p class="text-white text-[22.5px] font-body leadig-[36px]">
                    Elevate your online dating with stunning profile photography. Increase your matches on top dating
                    apps such as Tinder, Hinge, Bumble, and Match.com. Serving {{ cityInformation.city }},
                    {{ cityInformation.state }}.
                </p>

                <button class="btn btn-primary mt-6 w-full lg:w-auto" @click="scrollToBook">
                    Book a Call
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14 4.92969L12.5 6.42969L17.0703 11H3V13H17.0703L12.5 17.5703L14 19.0703L21.0703 12L14 4.92969Z"
                            fill="white"
                        />
                    </svg>
                </button>

                <div class="mt-[80px] p-2 flex items-center gap-4 rounded-full bg-[#232323] w-[365px]">
                    <div
                        class="w-[54px] overflow-hidden h-[54px] bg-gray-600 rounded-full flex-shrink-0 border-2 border-white relative"
                    >
                        <img src="/images/brent.png" alt="Photo of Brent" fill />
                    </div>
                    <p class="text-white font text-body-small mr-1">
                        "An overall skyrocketing experience for my online dating." - Brent S.
                    </p>
                </div>
            </div>

            <div class="absolute top-0 -right-32 w-[500px] h-[800px] lg:relative opacity-80 lg:opacity-100">
                <nuxt-img src="/images/location/location-hero.png" />
            </div>

            <div
                class="flex gap-4 flex-col lg:flex-row justify-between relative lg:absolute lg:bottom-20 opacity-50 w-full z-50 max-w-[200px] lg:max-w-[1200px] py-12 lg:py-0"
            >
                <a
                    class="col-span-4 lg:col-span-1"
                    href="https://www.theamericanreporter.com/the-number-one-way-to-turn-your-online-dating-profile-around-the-match-artist/"
                    target="_blank"
                >
                    <nuxt-img src="/images/location/clients/client-1.png" />
                </a>
                <a class="col-span-4 lg:col-span-1" href="https://www.entrepreneur.com/article/430103" target="_blank">
                    <nuxt-img src="/images/location/clients/client-2.png" />
                </a>
                <a
                    class="col-span-4 lg:col-span-1"
                    href="https://nyweekly.com/dating/photos-that-help-you-find-love-introducing-the-match-artist/"
                    target="_blank"
                >
                    <nuxt-img src="/images/location/clients/client-3.png" />
                </a>
                <a
                    class="col-span-4 lg:col-span-1"
                    href="https://www.morningbrew.com/daily/stories/2023/02/22/inside-jobs-dating-app-photographer-nick-friesen"
                    target="_blank"
                >
                    <nuxt-img src="/images/location/clients/client-4.png" />
                </a>
            </div>
        </section>
    </section>

    <!--  PHOTO SECTION -->
    <section
        class="py-[110px]"
        v-bind:style="{
            background: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(' + cityInformation.image + ')',
        }"
    >
        <article class="container mx-auto text-center max-w-[800px] mb-16">
            <p class="text-[#A6A6A6] font-bold mb-4">
                DATING PHOTOGRAPHY IN {{ cityInformation.city.toUpperCase() }},
                {{ cityInformation.state.toUpperCase() }}
            </p>
            <h1 class="text-white font-bold text-heading-h1 font-accent">
                Full Photoshoot In Different Settings To Capture The Best You
            </h1>
            <p class="text-[#D9D9D9] mx-auto max-w-[620px] text-[22px] leading-[30px] mt-4">
                Our approach involves capturing a multitude of photos to ensure we curate a selection that shows your
                personality, helping you stand out on dating platforms.
            </p>
        </article>

        <!-- TABS -->
        <!-- <div class="container mx-auto flex gap-4 justify-center my-[70px] overflow-hidden">
            <button :class="pillClass">
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2831_5704)">
                        <path
                            d="M20.5057 20.0001C24.189 20.0001 27.1724 17.0167 27.1724 13.3334C27.1724 9.65008 24.189 6.66675 20.5057 6.66675C16.8224 6.66675 13.839 9.65008 13.839 13.3334C13.839 17.0167 16.8224 20.0001 20.5057 20.0001ZM20.5057 23.3334C16.0557 23.3334 7.17236 25.5667 7.17236 30.0001V33.3334H33.839V30.0001C33.839 25.5667 24.9557 23.3334 20.5057 23.3334Z"
                            fill="black"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_2831_5704">
                            <rect width="40" height="40" fill="white" transform="translate(0.505859)" />
                        </clipPath>
                    </defs>
                </svg>

                Headshots
            </button>
            <button :class="pillClass">
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2831_5709)">
                        <path
                            d="M5.53919 26.0334C5.40586 30.0668 6.07252 33.2668 6.65586 33.8501C7.23919 34.4334 10.4559 35.1168 14.4725 34.9668L5.53919 26.0334Z"
                            fill="black"
                        />
                        <path
                            d="M22.306 5.4668C18.4227 6.1668 14.3227 7.70013 11.2727 10.7668C8.22266 13.8335 6.67266 17.9168 5.97266 21.8001L18.6893 34.5168C22.5893 33.8335 26.6727 32.2835 29.7227 29.2168C32.7727 26.1501 34.3227 22.0668 35.0227 18.1835L22.306 5.4668ZM17.006 25.8335L14.6727 23.5001L24.006 14.1668L26.3393 16.5001L17.006 25.8335Z"
                            fill="black"
                        />
                        <path
                            d="M35.4724 13.9668C35.6057 9.93344 34.9391 6.73344 34.3557 6.15011C33.7724 5.56677 30.5557 4.88344 26.5391 5.03344L35.4724 13.9668Z"
                            fill="black"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_2831_5709">
                            <rect width="40" height="40" fill="white" transform="translate(0.505859)" />
                        </clipPath>
                    </defs>
                </svg>

                Action
            </button>
            <button :class="pillClass">
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.8392 0V5H17.1725V0H13.8392ZM20.5059 1.66667V5H23.8392V1.66667H20.5059ZM7.17253 8.33333V21.6667C7.17253 25.3483 10.1575 28.3333 13.8392 28.3333H23.8392C27.5209 28.3333 30.5059 25.3483 30.5059 21.6667V20H33.8392C35.6809 20 37.1725 18.5083 37.1725 16.6667V11.6667C37.1725 9.825 35.6809 8.33333 33.8392 8.33333H30.5059H7.17253ZM30.5059 11.6667H33.8392V16.6667H30.5059V11.6667ZM5.50586 31.6667V35H33.8392V31.6667H5.50586Z"
                        fill="black"
                    />
                </svg>

                Coffee
            </button>
            <button :class="pillClass">
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2831_5723)">
                        <path
                            d="M2.17236 8.33325H25.5057L15.5057 23.3333V29.9999H18.839V33.3333H8.83903V29.9999H12.1724V23.3333L2.17236 8.33325ZM17.339 14.9999L19.6724 11.6666H7.98903L10.3224 14.9999H17.339ZM28.839 8.33325H37.1724V13.3333H32.1724V28.3333C32.1724 31.0999 29.939 33.3333 27.1724 33.3333C24.4057 33.3333 22.1724 31.0999 22.1724 28.3333C22.1724 25.5666 24.4057 23.3333 27.1724 23.3333C27.7557 23.3333 28.3224 23.4333 28.839 23.6166V8.33325Z"
                            fill="black"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_2831_5723">
                            <rect width="40" height="40" fill="white" transform="translate(0.505859)" />
                        </clipPath>
                    </defs>
                </svg>

                Night Out
            </button>
            <button :class="pillClass">
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M30.5059 1.66675C28.6642 1.66675 27.1725 3.15841 27.1725 5.00008V5.31909C26.9821 5.45528 26.8129 5.62301 26.6908 5.83341L25.2096 8.36597L21.2285 15.0001H15.5059H13.4062C11.016 15.0001 8.80377 16.2841 7.61849 18.3595L2.39062 27.5066L5.28776 29.1602L8.83919 22.9428V25.0001L7.17253 30.0001V36.6667H10.5059V31.6667L13.8392 28.3334H24.474L26.9219 36.6667H30.4896L29.6725 29.6908V27.0346C31.9112 25.4152 35.5059 21.9961 35.5059 16.5496V13.3334H37.1725L38.8392 10.0001L35.5059 8.33341C35.5059 7.41675 35.1395 6.58315 34.5228 5.98315C33.9228 5.36649 33.0892 5.00008 32.1725 5.00008H30.5059V1.66675ZM26.1146 13.3334H32.1725V16.5496C32.1725 21.3396 28.4243 23.9323 27.1725 24.6811V23.4506C27.1725 20.8121 26.1255 18.2809 24.2689 16.4096L26.1146 13.3334ZM17.1725 30.0001L14.7376 32.1485L16.9902 36.6667H20.7044L17.1725 30.0001Z"
                        fill="black"
                    />
                </svg>

                Dogs
            </button>
        </div> -->

        <!-- IMAGE SLIDER -->
        <section class="container mx-auto overflow-hidden">
            <div class="flex gap-10 overflow-hidden">
                <Carousel v-bind="settings" ref="sampleCarousel">
                    <Slide v-for="slide in imageGallery" :key="slide">
                        <div class="slide mr-10">
                            <div class="h-[500px] w-[350px] overflow-hidden">
                                <nuxt-img :src="slide" />
                            </div>
                        </div>
                    </Slide>
                </Carousel>
            </div>
        </section>

        <div class="flex gap-4 mx-auto container items-center justify-center">
            <button
                @click="sampleCarousel.prev()"
                class="btn btn-primary mt-6 lg:w-auto rounded-full !w-[56px] p-0 h-[56px] flex items-center justify-center transform rotate-180"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14 4.92969L12.5 6.42969L17.0703 11H3V13H17.0703L12.5 17.5703L14 19.0703L21.0703 12L14 4.92969Z"
                        fill="white"
                    />
                </svg>
            </button>

            <button
                @click="sampleCarousel.next()"
                class="btn btn-primary mt-6 lg:w-auto rounded-full !w-[56px] p-0 h-[56px] flex items-center justify-center"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14 4.92969L12.5 6.42969L17.0703 11H3V13H17.0703L12.5 17.5703L14 19.0703L21.0703 12L14 4.92969Z"
                        fill="white"
                    />
                </svg>
            </button>
        </div>

        <div class="container mx-auto flex flex-col justify-center items-center mt-[72px]">
            <!-- FIVE STARS -->
            <div class="flex gap-1">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1560_17599)">
                        <path
                            d="M9.5442 1.60996C9.715 1.19932 10.2967 1.19932 10.4675 1.60996L12.5336 6.57744C12.6056 6.75056 12.7684 6.86885 12.9553 6.88383L18.3181 7.31376C18.7615 7.3493 18.9412 7.90256 18.6034 8.19189L14.5176 11.6919C14.3752 11.8139 14.313 12.0053 14.3565 12.1876L15.6048 17.4208C15.708 17.8534 15.2374 18.1954 14.8578 17.9635L10.2665 15.1592C10.1065 15.0615 9.90524 15.0615 9.74523 15.1592L5.15392 17.9635C4.77437 18.1954 4.30374 17.8534 4.40694 17.4208L5.65524 12.1876C5.69875 12.0053 5.63656 11.8139 5.49417 11.6919L1.40827 8.19189C1.0705 7.90256 1.25027 7.3493 1.69359 7.31376L7.0564 6.88383C7.2433 6.86885 7.4061 6.75056 7.47811 6.57744L9.5442 1.60996Z"
                            fill="#F2F4F7"
                        />
                        <g clip-path="url(#clip1_1560_17599)">
                            <path
                                d="M9.5442 1.60996C9.715 1.19932 10.2967 1.19932 10.4675 1.60996L12.5336 6.57744C12.6056 6.75056 12.7684 6.86885 12.9553 6.88383L18.3181 7.31376C18.7615 7.3493 18.9412 7.90256 18.6034 8.19189L14.5176 11.6919C14.3752 11.8139 14.313 12.0053 14.3565 12.1876L15.6048 17.4208C15.708 17.8534 15.2374 18.1954 14.8578 17.9635L10.2665 15.1592C10.1065 15.0615 9.90524 15.0615 9.74523 15.1592L5.15392 17.9635C4.77437 18.1954 4.30374 17.8534 4.40694 17.4208L5.65524 12.1876C5.69875 12.0053 5.63656 11.8139 5.49417 11.6919L1.40827 8.19189C1.0705 7.90256 1.25027 7.3493 1.69359 7.31376L7.0564 6.88383C7.2433 6.86885 7.4061 6.75056 7.47811 6.57744L9.5442 1.60996Z"
                                fill="#FEC84B"
                            />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_1560_17599">
                            <rect width="20" height="20" fill="white" transform="translate(0.00585938)" />
                        </clipPath>
                        <clipPath id="clip1_1560_17599">
                            <rect width="20" height="20" fill="white" transform="translate(0.00585938)" />
                        </clipPath>
                    </defs>
                </svg>

                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1560_17599)">
                        <path
                            d="M9.5442 1.60996C9.715 1.19932 10.2967 1.19932 10.4675 1.60996L12.5336 6.57744C12.6056 6.75056 12.7684 6.86885 12.9553 6.88383L18.3181 7.31376C18.7615 7.3493 18.9412 7.90256 18.6034 8.19189L14.5176 11.6919C14.3752 11.8139 14.313 12.0053 14.3565 12.1876L15.6048 17.4208C15.708 17.8534 15.2374 18.1954 14.8578 17.9635L10.2665 15.1592C10.1065 15.0615 9.90524 15.0615 9.74523 15.1592L5.15392 17.9635C4.77437 18.1954 4.30374 17.8534 4.40694 17.4208L5.65524 12.1876C5.69875 12.0053 5.63656 11.8139 5.49417 11.6919L1.40827 8.19189C1.0705 7.90256 1.25027 7.3493 1.69359 7.31376L7.0564 6.88383C7.2433 6.86885 7.4061 6.75056 7.47811 6.57744L9.5442 1.60996Z"
                            fill="#F2F4F7"
                        />
                        <g clip-path="url(#clip1_1560_17599)">
                            <path
                                d="M9.5442 1.60996C9.715 1.19932 10.2967 1.19932 10.4675 1.60996L12.5336 6.57744C12.6056 6.75056 12.7684 6.86885 12.9553 6.88383L18.3181 7.31376C18.7615 7.3493 18.9412 7.90256 18.6034 8.19189L14.5176 11.6919C14.3752 11.8139 14.313 12.0053 14.3565 12.1876L15.6048 17.4208C15.708 17.8534 15.2374 18.1954 14.8578 17.9635L10.2665 15.1592C10.1065 15.0615 9.90524 15.0615 9.74523 15.1592L5.15392 17.9635C4.77437 18.1954 4.30374 17.8534 4.40694 17.4208L5.65524 12.1876C5.69875 12.0053 5.63656 11.8139 5.49417 11.6919L1.40827 8.19189C1.0705 7.90256 1.25027 7.3493 1.69359 7.31376L7.0564 6.88383C7.2433 6.86885 7.4061 6.75056 7.47811 6.57744L9.5442 1.60996Z"
                                fill="#FEC84B"
                            />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_1560_17599">
                            <rect width="20" height="20" fill="white" transform="translate(0.00585938)" />
                        </clipPath>
                        <clipPath id="clip1_1560_17599">
                            <rect width="20" height="20" fill="white" transform="translate(0.00585938)" />
                        </clipPath>
                    </defs>
                </svg>

                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1560_17599)">
                        <path
                            d="M9.5442 1.60996C9.715 1.19932 10.2967 1.19932 10.4675 1.60996L12.5336 6.57744C12.6056 6.75056 12.7684 6.86885 12.9553 6.88383L18.3181 7.31376C18.7615 7.3493 18.9412 7.90256 18.6034 8.19189L14.5176 11.6919C14.3752 11.8139 14.313 12.0053 14.3565 12.1876L15.6048 17.4208C15.708 17.8534 15.2374 18.1954 14.8578 17.9635L10.2665 15.1592C10.1065 15.0615 9.90524 15.0615 9.74523 15.1592L5.15392 17.9635C4.77437 18.1954 4.30374 17.8534 4.40694 17.4208L5.65524 12.1876C5.69875 12.0053 5.63656 11.8139 5.49417 11.6919L1.40827 8.19189C1.0705 7.90256 1.25027 7.3493 1.69359 7.31376L7.0564 6.88383C7.2433 6.86885 7.4061 6.75056 7.47811 6.57744L9.5442 1.60996Z"
                            fill="#F2F4F7"
                        />
                        <g clip-path="url(#clip1_1560_17599)">
                            <path
                                d="M9.5442 1.60996C9.715 1.19932 10.2967 1.19932 10.4675 1.60996L12.5336 6.57744C12.6056 6.75056 12.7684 6.86885 12.9553 6.88383L18.3181 7.31376C18.7615 7.3493 18.9412 7.90256 18.6034 8.19189L14.5176 11.6919C14.3752 11.8139 14.313 12.0053 14.3565 12.1876L15.6048 17.4208C15.708 17.8534 15.2374 18.1954 14.8578 17.9635L10.2665 15.1592C10.1065 15.0615 9.90524 15.0615 9.74523 15.1592L5.15392 17.9635C4.77437 18.1954 4.30374 17.8534 4.40694 17.4208L5.65524 12.1876C5.69875 12.0053 5.63656 11.8139 5.49417 11.6919L1.40827 8.19189C1.0705 7.90256 1.25027 7.3493 1.69359 7.31376L7.0564 6.88383C7.2433 6.86885 7.4061 6.75056 7.47811 6.57744L9.5442 1.60996Z"
                                fill="#FEC84B"
                            />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_1560_17599">
                            <rect width="20" height="20" fill="white" transform="translate(0.00585938)" />
                        </clipPath>
                        <clipPath id="clip1_1560_17599">
                            <rect width="20" height="20" fill="white" transform="translate(0.00585938)" />
                        </clipPath>
                    </defs>
                </svg>

                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1560_17599)">
                        <path
                            d="M9.5442 1.60996C9.715 1.19932 10.2967 1.19932 10.4675 1.60996L12.5336 6.57744C12.6056 6.75056 12.7684 6.86885 12.9553 6.88383L18.3181 7.31376C18.7615 7.3493 18.9412 7.90256 18.6034 8.19189L14.5176 11.6919C14.3752 11.8139 14.313 12.0053 14.3565 12.1876L15.6048 17.4208C15.708 17.8534 15.2374 18.1954 14.8578 17.9635L10.2665 15.1592C10.1065 15.0615 9.90524 15.0615 9.74523 15.1592L5.15392 17.9635C4.77437 18.1954 4.30374 17.8534 4.40694 17.4208L5.65524 12.1876C5.69875 12.0053 5.63656 11.8139 5.49417 11.6919L1.40827 8.19189C1.0705 7.90256 1.25027 7.3493 1.69359 7.31376L7.0564 6.88383C7.2433 6.86885 7.4061 6.75056 7.47811 6.57744L9.5442 1.60996Z"
                            fill="#F2F4F7"
                        />
                        <g clip-path="url(#clip1_1560_17599)">
                            <path
                                d="M9.5442 1.60996C9.715 1.19932 10.2967 1.19932 10.4675 1.60996L12.5336 6.57744C12.6056 6.75056 12.7684 6.86885 12.9553 6.88383L18.3181 7.31376C18.7615 7.3493 18.9412 7.90256 18.6034 8.19189L14.5176 11.6919C14.3752 11.8139 14.313 12.0053 14.3565 12.1876L15.6048 17.4208C15.708 17.8534 15.2374 18.1954 14.8578 17.9635L10.2665 15.1592C10.1065 15.0615 9.90524 15.0615 9.74523 15.1592L5.15392 17.9635C4.77437 18.1954 4.30374 17.8534 4.40694 17.4208L5.65524 12.1876C5.69875 12.0053 5.63656 11.8139 5.49417 11.6919L1.40827 8.19189C1.0705 7.90256 1.25027 7.3493 1.69359 7.31376L7.0564 6.88383C7.2433 6.86885 7.4061 6.75056 7.47811 6.57744L9.5442 1.60996Z"
                                fill="#FEC84B"
                            />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_1560_17599">
                            <rect width="20" height="20" fill="white" transform="translate(0.00585938)" />
                        </clipPath>
                        <clipPath id="clip1_1560_17599">
                            <rect width="20" height="20" fill="white" transform="translate(0.00585938)" />
                        </clipPath>
                    </defs>
                </svg>

                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1560_17599)">
                        <path
                            d="M9.5442 1.60996C9.715 1.19932 10.2967 1.19932 10.4675 1.60996L12.5336 6.57744C12.6056 6.75056 12.7684 6.86885 12.9553 6.88383L18.3181 7.31376C18.7615 7.3493 18.9412 7.90256 18.6034 8.19189L14.5176 11.6919C14.3752 11.8139 14.313 12.0053 14.3565 12.1876L15.6048 17.4208C15.708 17.8534 15.2374 18.1954 14.8578 17.9635L10.2665 15.1592C10.1065 15.0615 9.90524 15.0615 9.74523 15.1592L5.15392 17.9635C4.77437 18.1954 4.30374 17.8534 4.40694 17.4208L5.65524 12.1876C5.69875 12.0053 5.63656 11.8139 5.49417 11.6919L1.40827 8.19189C1.0705 7.90256 1.25027 7.3493 1.69359 7.31376L7.0564 6.88383C7.2433 6.86885 7.4061 6.75056 7.47811 6.57744L9.5442 1.60996Z"
                            fill="#F2F4F7"
                        />
                        <g clip-path="url(#clip1_1560_17599)">
                            <path
                                d="M9.5442 1.60996C9.715 1.19932 10.2967 1.19932 10.4675 1.60996L12.5336 6.57744C12.6056 6.75056 12.7684 6.86885 12.9553 6.88383L18.3181 7.31376C18.7615 7.3493 18.9412 7.90256 18.6034 8.19189L14.5176 11.6919C14.3752 11.8139 14.313 12.0053 14.3565 12.1876L15.6048 17.4208C15.708 17.8534 15.2374 18.1954 14.8578 17.9635L10.2665 15.1592C10.1065 15.0615 9.90524 15.0615 9.74523 15.1592L5.15392 17.9635C4.77437 18.1954 4.30374 17.8534 4.40694 17.4208L5.65524 12.1876C5.69875 12.0053 5.63656 11.8139 5.49417 11.6919L1.40827 8.19189C1.0705 7.90256 1.25027 7.3493 1.69359 7.31376L7.0564 6.88383C7.2433 6.86885 7.4061 6.75056 7.47811 6.57744L9.5442 1.60996Z"
                                fill="#FEC84B"
                            />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_1560_17599">
                            <rect width="20" height="20" fill="white" transform="translate(0.00585938)" />
                        </clipPath>
                        <clipPath id="clip1_1560_17599">
                            <rect width="20" height="20" fill="white" transform="translate(0.00585938)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <p class="text-center max-w-[950px] text-white mt-4 text-[22px] font-accent leading-[33px]">
                {{ cityInformation.review_1 }}
            </p>
            <p class="text-white font-bold mt-4">- {{ cityInformation.reviewer_1 }}</p>
        </div>
    </section>

    <!-- DATING PROFILE -->
    <section class="bg-black py-20 px-8">
        <div
            class="bg-white max-w-[1200px] mx-auto rounded-[8px] py-10 px-6 lg:px-[64px] flex justify-between flex-col lg:flex-row gap-8"
        >
            <div class="flex flex-col justify-center lg:hidden">
                <p class="text-primary-500 font-bold">
                    DATING PHOTOGRAPHY IN {{ cityInformation.city.toUpperCase() }},
                    {{ cityInformation.state.toUpperCase() }}
                </p>
                <h1 class="text-[28px] leading-[32px] tracking-[-3%] font-accent font-bold mt-1">
                    Transform Your Online Dating Profile
                </h1>
                <div class="bg-primary-500 w-[120px] h-[10px] my-8" />
            </div>

            <!-- PHOTOS -->
            <div class="flex gap-4 lg:gap-12 mb-10 lg:mb-0 items-center justify-center">
                <img :src="cityInformation.beforeafter_image" class="h-full w-full object-contain" />
                <!-- <div>
                    <div class="relative max-h-[275px] max-w-[190px] w-full">
                        <nuxt-img src="/images/location/transform-1.png" />
                        <p
                            class="text-[12px] lg:text-[18px] px-1.5 bg-black text-white font-bold lg:px-[12px] lg:py-[8px] absolute -bottom-2 -left-4"
                        >
                            BEFORE
                        </p>
                    </div>
                    <ul class="mt-6 list-disc text-gray-500 lg:ml-8 text-[12px] lg:text-[18px]">
                        <li>Few photos</li>
                        <li>Few matches</li>
                        <li>Few dates</li>
                    </ul>
                </div>
                <div>
                    <div class="relative max-h-[400px] max-w-[290px] w-full">
                        <nuxt-img src="/images/location/transform-2.png" />
                        <p
                            class="text-[12px] lg:text-[18px] px-1.5 bg-black text-white font-bold lg:px-[12px] lg:py-[8px] absolute -bottom-2 -left-4"
                        >
                            AFTER
                        </p>
                    </div>
                    <ul class="mt-6 list-disc text-gray-500 lg:ml-8 text-[12px] lg:text-[18px]">
                        <li>Feel Confident</li>
                        <li>Get More Matches</li>
                        <li>Go On Better Dates</li>
                    </ul>
                </div> -->
            </div>

            <!-- TEXT -->
            <article class="max-w-[475px] flex flex-col justify-center">
                <div class="hidden lg:flex flex-col justify-center">
                    <p class="text-primary-500 font-bold">
                        DATING PHOTOGRAPHY IN {{ cityInformation.city.toUpperCase() }},
                        {{ cityInformation.state.toUpperCase() }}
                    </p>
                    <h1 class="text-[44px] leading-[52px] tracking-[-1.32px] font-accent font-bold mt-1">
                        Transform Your Online Dating Profile
                    </h1>
                    <div class="bg-primary-500 w-[120px] h-[10px] my-8" />
                </div>

                <p class="lg:text-[22px]">"{{ cityInformation.review_1 }}"</p>
                <p class="mt-8 lg:text-[22px]">- {{ cityInformation.reviewer_1 }}</p>
            </article>
        </div>

        <!-- STAND OUT -->
        <div class="flex justify-between items-center container mx-auto max-w-[1200px] mt-20 flex-col lg:flex-row">
            <div class="max-w-[475px] mb-6 lg:mb-0">
                <p class="text-white font-bold text-[32px] leading-[38.4px] font-display text-center lg:text-left">
                    Stand Out in the Digital Dating Scene
                </p>
                <button class="btn btn-primary mt-6 w-full lg:w-auto" @click="scrollToBook">
                    Book a call
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14 4.92969L12.5 6.42969L17.0703 11H3V13H17.0703L12.5 17.5703L14 19.0703L21.0703 12L14 4.92969Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>

            <div class="flex flex-col lg:flex-row gap-8">
                <div class="text-white flex items-center gap-2">
                    <p class="font-bold text-[38px] font-display">1000+</p>
                    <p class="text-[12px]">
                        Successful <br />
                        Clients
                    </p>
                </div>
                <div class="text-white flex items-center gap-2">
                    <p class="font-bold text-[38px] font-display">20+</p>
                    <p class="text-[12px]">Marriages</p>
                </div>
                <div class="text-white flex items-center gap-2">
                    <p class="font-bold text-[38px] font-display">250+</p>
                    <p class="text-[12px]">Relationships</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ELEVATE -->
    <section class="bg-[#E5E5E5] lg:py-[180px] overflow-hidden">
        <div class="container mx-auto relative flex flex-col gap-8 lg:flex-row justify-end">
            <div class="h-[350px] lg:h-auto w-full relative mb-8">
                <div
                    class="relative lg:absolute w-[200px] lg:w-auto top-[50px] lg:top-0 h-full lg:h-auto overflow-hidden -right-1/4 lg:right-1/4"
                >
                    <nuxt-img src="/images/mockup.svg" />
                </div>
            </div>
            <article class="max-w-[560px] w-full p-4">
                <h1 class="font-bold text-[28px] leading-[33.6px] tracking-[-0.56px] lg:text-heading-h2 font-display">
                    Elevate Your Dating Profile with Professional Dating Photography
                </h1>
                <div class="bg-primary-500 w-[120px] h-[10px] my-8" />
                <p class="text-20px">
                    In a picture-first dating world, make sure your profile photo entices prospects to explore further
                    and discover your true potential.
                </p>

                <div class="flex flex-col gap-4 my-12">
                    <div class="flex items-center gap-4">
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2033_6624)">
                                <path
                                    d="M15.2807 4.25928C14.4838 4.25928 13.7557 4.68428 13.2557 5.43428L11.9557 7.45928H4.80566C2.59941 7.45928 0.805664 9.25303 0.805664 11.4593V30.6593C0.805664 32.8655 2.59941 34.6593 4.80566 34.6593H35.2057C37.4119 34.6593 39.2057 32.8655 39.2057 30.6593V11.4593C39.2057 9.25303 37.4119 7.45928 35.2057 7.45928H27.9557L26.6807 5.40928C26.19 4.6749 25.4525 4.25928 24.6557 4.25928H15.2807ZM8.00566 11.4593C8.88691 11.4593 9.60566 12.178 9.60566 13.0593C9.60566 13.9405 8.88691 14.6593 8.00566 14.6593C7.12441 14.6593 6.40566 13.9405 6.40566 13.0593C6.40566 12.178 7.12441 11.4593 8.00566 11.4593ZM20.0057 12.2593C24.8588 12.2593 28.8057 16.2062 28.8057 21.0593C28.8057 25.9124 24.8588 29.8593 20.0057 29.8593C15.1525 29.8593 11.2057 25.9124 11.2057 21.0593C11.2057 16.2062 15.1525 12.2593 20.0057 12.2593ZM20.0057 13.8593C16.0369 13.8593 12.8057 17.0905 12.8057 21.0593C12.8057 25.0312 16.0369 28.2593 20.0057 28.2593C23.9775 28.2593 27.2057 25.0312 27.2057 21.0593C27.2057 17.0905 23.9775 13.8593 20.0057 13.8593Z"
                                    fill="url(#paint0_linear_2033_6624)"
                                />
                            </g>
                            <defs>
                                <linearGradient
                                    id="paint0_linear_2033_6624"
                                    x1="10.5688"
                                    y1="30.535"
                                    x2="10.5688"
                                    y2="-5.77302"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#D2891C" />
                                    <stop offset="1" stop-color="#E4B266" />
                                </linearGradient>
                                <clipPath id="clip0_2033_6624">
                                    <rect
                                        width="40"
                                        height="40"
                                        fill="white"
                                        transform="translate(0.00585938 0.259277)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>

                        <p class="font-bold text-[22px] font-body">Make a great first impression</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.6727 3.59261C9.32863 3.59261 3.33936 9.58189 3.33936 16.9259C3.33936 24.27 9.32863 30.2593 16.6727 30.2593C20.0459 30.2593 23.1255 28.9877 25.478 26.9097L26.6727 28.1043V30.2593L33.3394 36.9259L36.6727 33.5926L30.006 26.9259H27.8511L26.6564 25.7313C28.7344 23.3788 30.006 20.2992 30.006 16.9259C30.006 9.58189 24.0167 3.59261 16.6727 3.59261ZM16.6727 6.92595C22.2153 6.92595 26.6727 11.3834 26.6727 16.9259C26.6727 22.4685 22.2153 26.9259 16.6727 26.9259C11.1301 26.9259 6.67269 22.4685 6.67269 16.9259C6.67269 11.3834 11.1301 6.92595 16.6727 6.92595ZM13.5477 11.9259C11.591 11.9259 10.006 13.5109 10.006 15.4676C10.006 18.5926 16.6727 23.5926 16.6727 23.5926C16.6727 23.5926 23.3394 18.5926 23.3394 15.4676C23.3394 13.5109 21.7544 11.9259 19.7977 11.9259C18.4344 11.9259 17.2644 12.7035 16.6727 13.8335C16.081 12.7035 14.911 11.9259 13.5477 11.9259Z"
                                fill="url(#paint0_linear_2033_6628)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_2033_6628"
                                    x1="11.8143"
                                    y1="32.4038"
                                    x2="11.8143"
                                    y2="-7.40771"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#D2891C" />
                                    <stop offset="1" stop-color="#E4B266" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <p class="font-bold text-[22px] font-body">Get more matches</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.7324 5.59261C7.91242 5.59261 4.00586 9.49917 4.00586 14.3192C4.00586 22.709 13.7378 30.7257 18.2845 34.2957C18.2888 34.2992 18.2932 34.3027 18.2975 34.3062C18.3287 34.3306 18.371 34.3654 18.4017 34.3895L18.4043 34.3869C18.8656 34.7354 19.4277 34.9246 20.0059 34.9259C20.5849 34.9252 21.148 34.736 21.61 34.3869V34.3895C21.619 34.3825 21.6323 34.3731 21.6413 34.366C21.6481 34.3607 21.6578 34.3532 21.6647 34.3478C21.6734 34.3401 21.6821 34.3323 21.6908 34.3244C26.2233 30.7671 36.0059 22.7291 36.0059 14.3192C36.0059 9.49917 32.0993 5.59261 27.2793 5.59261C22.6726 5.59261 20.0059 9.59261 20.0059 9.59261C20.0059 9.59261 17.3391 5.59261 12.7324 5.59261Z"
                                fill="url(#paint0_linear_2033_6632)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_2033_6632"
                                    x1="12.1418"
                                    y1="30.9464"
                                    x2="12.1418"
                                    y2="-4.08767"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#D2891C" />
                                    <stop offset="1" stop-color="#E4B266" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <p class="font-bold text-[22px] font-body">Go on better dates</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2033_6636)">
                                <path
                                    d="M8.1659 39.1393C8.00591 39.1393 7.84591 39.0593 7.68591 38.9793C7.44591 38.8193 7.2859 38.4193 7.36591 38.0993L10.8859 24.9793L0.325905 16.4193C0.00590518 16.2593 -0.0740948 15.8593 0.00590516 15.5393C0.0859052 15.2193 0.405905 14.9793 0.725905 14.9793L14.3259 14.2593L19.2059 1.53928C19.3659 1.29928 19.6859 1.05928 20.0059 1.05928C20.3259 1.05928 20.6459 1.29928 20.7259 1.53928L25.6059 14.2593L39.2059 14.9793C39.5259 14.9793 39.8459 15.2193 39.9259 15.5393C40.0059 15.8593 39.9259 16.1793 39.6859 16.4193L29.1259 24.9793L32.6459 38.0993C32.7259 38.4193 32.6459 38.7393 32.3259 38.9793C32.0859 39.1393 31.6859 39.2193 31.4459 38.9793L20.0059 31.6193L8.56591 38.9793C8.4059 39.1393 8.3259 39.1393 8.1659 39.1393Z"
                                    fill="url(#paint0_linear_2033_6636)"
                                />
                            </g>
                            <defs>
                                <linearGradient
                                    id="paint0_linear_2033_6636"
                                    x1="10.1416"
                                    y1="33.9731"
                                    x2="10.1416"
                                    y2="-11.5075"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#D2891C" />
                                    <stop offset="1" stop-color="#E4B266" />
                                </linearGradient>
                                <clipPath id="clip0_2033_6636">
                                    <rect
                                        width="40"
                                        height="40"
                                        fill="white"
                                        transform="translate(0.00585938 0.259277)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>

                        <p class="font-bold text-[22px] font-body">Feel more confident</p>
                    </div>
                </div>

                <button class="btn btn-primary mt-6 w-full lg:w-auto" @click="scrollToBook">
                    Book a call
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14 4.92969L12.5 6.42969L17.0703 11H3V13H17.0703L12.5 17.5703L14 19.0703L21.0703 12L14 4.92969Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </article>
        </div>
    </section>

    <!-- EXPERT GUIDANCE -->
    <section class="bg-black py-[180px] overflow-hidden">
        <div class="container mx-auto max-w-[1400px] relative flex gap-16 flex-col-reverse lg:flex-row">
            <article class="max-w-[560px] w-full text-white p-8">
                <h1 class="font-bold text-heading-h2 font-accent">Expert guidance in every step of your photoshoot</h1>
                <div class="bg-primary-500 w-[120px] h-[10px] my-8" />
                <p class="text-20px">
                    Our professional photographers strike the perfect balance between showcasing your best features and
                    maintaining an honest representation of yourself, avoiding the pitfalls of overediting and appearing
                    inauthentic.
                </p>

                <div class="flex flex-col gap-4 my-12">
                    <div class="flex items-center gap-4">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.0057 16.8155L14.0057 20.8155L22.0057 12.8155M29.339 16.8155C29.339 24.1792 23.3695 30.1488 16.0057 30.1488C8.6419 30.1488 2.67236 24.1792 2.67236 16.8155C2.67236 9.45165 8.6419 3.48212 16.0057 3.48212C23.3695 3.48212 29.339 9.45165 29.339 16.8155Z"
                                stroke="#22C55E"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <p class="text-[18.5px] font-body">Facial expression & body language coaching</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.0057 16.8155L14.0057 20.8155L22.0057 12.8155M29.339 16.8155C29.339 24.1792 23.3695 30.1488 16.0057 30.1488C8.6419 30.1488 2.67236 24.1792 2.67236 16.8155C2.67236 9.45165 8.6419 3.48212 16.0057 3.48212C23.3695 3.48212 29.339 9.45165 29.339 16.8155Z"
                                stroke="#22C55E"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <p class="text-[18.5px] font-body">4-5 hour shoot demonstrating your lifestyle and hobbies</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.0057 16.8155L14.0057 20.8155L22.0057 12.8155M29.339 16.8155C29.339 24.1792 23.3695 30.1488 16.0057 30.1488C8.6419 30.1488 2.67236 24.1792 2.67236 16.8155C2.67236 9.45165 8.6419 3.48212 16.0057 3.48212C23.3695 3.48212 29.339 9.45165 29.339 16.8155Z"
                                stroke="#22C55E"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <p class="text-[18.5px] font-body">Advice on your best photos and dating app optimizations</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.0057 16.8155L14.0057 20.8155L22.0057 12.8155M29.339 16.8155C29.339 24.1792 23.3695 30.1488 16.0057 30.1488C8.6419 30.1488 2.67236 24.1792 2.67236 16.8155C2.67236 9.45165 8.6419 3.48212 16.0057 3.48212C23.3695 3.48212 29.339 9.45165 29.339 16.8155Z"
                                stroke="#22C55E"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <p class="text-[18.5px] font-body">200-300 edited photos</p>
                    </div>
                </div>

                <button class="btn btn-primary mt-6 w-full lg:w-auto" @click="scrollToBook">
                    Book a call
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14 4.92969L12.5 6.42969L17.0703 11H3V13H17.0703L12.5 17.5703L14 19.0703L21.0703 12L14 4.92969Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </article>

            <div class="max-w-[766px] max-h-[766px]">
                <nuxt-img src="/images/location/group-image.png" />
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section class="bg-black">
        <div class="container mx-auto bg-white py-20 px-10 flex justify-between gap-20 flex-col lg:flex-row">
            <div class="max-w-[400px]">
                <h1 class="font-accent font-bold text-[54px]">FAQS</h1>
                <div class="bg-primary-500 w-[120px] h-[10px] my-4" />
                <p class="text-[18.5px] text-[#475467]">
                    Everything you need to know about the product and billing. Can’t find the answer you’re looking for?
                    Please chat to our friendly team.
                </p>
            </div>

            <div class="w-full">
                <div>
                    <p class="font-bold font-accent text-[26px]">{{ cityInformation.faq_question_1 }}</p>
                    <p class="text-[#475467] text-[16px] leading-[24px] font-body">
                        {{ cityInformation.faq_answer_1 }}
                    </p>
                </div>

                <div class="w-full h-px bg-black bg-opacity-20 my-10" />

                <div>
                    <p class="font-bold font-accent text-[26px]">{{ cityInformation.faq_question_2 }}</p>
                    <p class="text-[#475467] text-[16px] leading-[24px] font-body">
                        {{ cityInformation.faq_answer_2 }}
                    </p>
                </div>

                <div class="w-full h-px bg-black bg-opacity-20 my-10" />

                <div>
                    <p class="font-bold font-accent text-[26px]">{{ cityInformation.faq_question_3 }}</p>
                    <p class="text-[#475467] text-[16px] leading-[24px] font-body">
                        {{ cityInformation.faq_answer_3 }}
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- PRE FOOTER -->
    <section class="bg-[#090303] py-20">
        <div class="container mx-auto flex justify-between items-start px-4 lg:px-32 flex-col lg:flex-row">
            <article class="max-w-[560px] w-full text-white" id="inquire-now" ref="inquireForm">
                <h1 class="font-bold text-heading-h1 font-accent">
                    Professional Dating Photography in {{ cityInformation.city }}, {{ cityInformation.state }}
                </h1>
                <div class="bg-primary-500 w-[120px] h-[10px] my-4" />
                <p class="text-20px">
                    We tailor your photo experience with us to highlight things you enjoy doing most. Whether it's
                    kayaking, rock climbing, reading, or drinking coffee, you'll get more matches with a varied profile
                    filled with your talents.
                </p>

                <div class="flex flex-col gap-4 my-6">
                    <div class="flex items-center gap-4">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.0057 16.8155L14.0057 20.8155L22.0057 12.8155M29.339 16.8155C29.339 24.1792 23.3695 30.1488 16.0057 30.1488C8.6419 30.1488 2.67236 24.1792 2.67236 16.8155C2.67236 9.45165 8.6419 3.48212 16.0057 3.48212C23.3695 3.48212 29.339 9.45165 29.339 16.8155Z"
                                stroke="#22C55E"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <p class="text-[18.5px] font-body">Better dating profile</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.0057 16.8155L14.0057 20.8155L22.0057 12.8155M29.339 16.8155C29.339 24.1792 23.3695 30.1488 16.0057 30.1488C8.6419 30.1488 2.67236 24.1792 2.67236 16.8155C2.67236 9.45165 8.6419 3.48212 16.0057 3.48212C23.3695 3.48212 29.339 9.45165 29.339 16.8155Z"
                                stroke="#22C55E"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <p class="text-[18.5px] font-body">Go on better dates</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.0057 16.8155L14.0057 20.8155L22.0057 12.8155M29.339 16.8155C29.339 24.1792 23.3695 30.1488 16.0057 30.1488C8.6419 30.1488 2.67236 24.1792 2.67236 16.8155C2.67236 9.45165 8.6419 3.48212 16.0057 3.48212C23.3695 3.48212 29.339 9.45165 29.339 16.8155Z"
                                stroke="#22C55E"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <p class="text-[18.5px] font-body">Improved social media presence</p>
                    </div>
                </div>
            </article>

            <div class="p-6 bg-white max-w-[375px] flex-shrink-0 w-full flex flex-col items-start gap-8">
                <p class="font-bold font-accent text-[50px]">Inquire Now</p>

                <form class="flex flex-col gap-4 w-full">
                    <fieldset class="flex flex-col">
                        <label>First Name</label>
                        <input placeholder="John" class="input" />
                    </fieldset>

                    <fieldset class="flex flex-col">
                        <label>Last Name</label>
                        <input placeholder="Doe" class="input" />
                    </fieldset>

                    <fieldset class="flex flex-col">
                        <label>Email</label>
                        <input placeholder="john@gmail.com" class="input" />
                    </fieldset>
                </form>

                <button class="btn btn-primary lg:w-auto">
                    Inquire Now
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14 4.92969L12.5 6.42969L17.0703 11H3V13H17.0703L12.5 17.5703L14 19.0703L21.0703 12L14 4.92969Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </section>

    <Footer />
</template>

<style>
.carousel__slide {
    width: 350px !important;
    margin-right: 40px;
}
</style>
