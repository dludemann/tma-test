<script setup lang="ts">
import { useHead } from 'nuxt/app';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { team } from '../../configs/team';

const settings = {
    itemsToShow: 6,
};

useHead({
    title: 'Online Dating Photographer | The Match Artist',
});
</script>

<template>
    <Header />

    <!-- HERO SECTION -->
    <section class="bg-black">
        <div
            class="container mx-auto flex flex-col lg:py-[57px] px-6 items-center justify-center lg:gap-[118px] lg:flex-row"
        >
            <div class="h-[412px] lg:h-[670px] max-w-[534px] w-full flex-shrink-0 overflow-hidden">
                <a href="/images/hero-image.png">
                    <nuxt-img src="/images/hero-image.png" />
                </a>
            </div>
            <div class="max-w-[575px] py-[30px]">
                <span class="text-[#E4B266] text-xs font-semibold tracking-[1.2px] leading-[120%] font-display block">
                    ABOUT THE MATCH ARTIST
                </span>
                <h1 class="text-white text-heading-h2 lg:text-heading-h1 font-display font-bold my-2">
                    Professional Dating Photography
                </h1>
                <p class="text-body-small lg:text-body-regular font-body block text-white">
                    We are a photography company specializing in transforming online dating profiles through intriguing
                    photography, facial expression coaching, and showing off you in your element. Based in Austin, TX,
                    and we shoot all over the U.S.
                </p>
                <button class="btn btn-primary mt-6 w-full lg:w-auto">
                    Download Media Kit
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

    <!-- MATCH ARTIST TEAM -->
    <section class="bg-black">
        <div class="container mx-auto py-[98px] px-4">
            <h2 class="text-white text-heading-h2 font-bold mb-9 text-center lg:text-left">The Match Artist Team</h2>
            <div class="flex gap-10 overflow-hidden">
                <Carousel v-bind="settings">
                    <Slide v-for="slide in team" :key="slide.name">
                        <div class="slide mr-10">
                            <TeamMember :name="slide.name" :title="slide.title" :img="slide.img" />
                        </div>
                    </Slide>
                </Carousel>
            </div>
        </div>
    </section>

    <!-- STATS -->
    <section class="city-bg h-auto py-[51px] lg:py-0 lg:h-[320px] flex items-center">
        <div class="container mx-auto flex flex-col lg:flex-row justify-center gap-4 lg:gap-10">
            <div class="flex gap-2 items-center flex-col lg:flex-row">
                <p class="text-white font-display font-bold text-heading-h2 lg:text-[64px] lg:leading-[120%]">2010</p>
                <p class="text-white font-body text-[12px] lg:text-body-xlarge">Founded</p>
            </div>

            <div class="flex gap-2 items-center flex-col lg:flex-row">
                <p class="text-white font-display font-bold text-heading-h2 lg:text-[64px] lg:leading-[120%]">100k+</p>
                <p class="text-white font-body text-[12px] lg:text-body-xlarge">
                    Successful <br class="hidden lg:block" />
                    Stories
                </p>
            </div>

            <div class="flex gap-2 items-center flex-col lg:flex-row">
                <p class="text-white font-display font-bold text-heading-h2 lg:text-[64px] lg:leading-[120%]">20</p>
                <p class="text-white font-body text-[12px] lg:text-body-xlarge">
                    Professional <br class="hidden lg:block" />
                    Photographers
                </p>
            </div>

            <div class="flex gap-2 items-center flex-col lg:flex-row">
                <p class="text-white font-display font-bold text-heading-h2 lg:text-[64px] lg:leading-[120%]">5.0</p>
                <p class="text-white font-body text-[12px] lg:text-body-xlarge">
                    Rating of our <br class="hidden lg:block" />
                    Services
                </p>
            </div>
        </div>
    </section>

    <!-- Match Artist Mission -->
    <section class="bg-[#FAFAFA]">
        <div class="container mx-auto flex flex-col items-center py-10 lg:py-[120px] px-6">
            <h2
                class="text-center text-gray-900 text-heading-h3 lg:text-heading-h2 font-bold max-w-[700px] font-display"
            >
                The Match Artist is on a mission to elevate online dating photography
            </h2>

            <div class="w-full max-w-[770px] overflow-hidden py-4 lg:py-[60px] h-[500px] lg:h-auto relative">
                <a href="/images/mission-image.jpeg">
                    <nuxt-img src="/images/mission-image.jpeg" class="object-cover w-full h-full" />
                </a>
            </div>

            <p class="max-w-[660px] text-center font-body text-body-small lg:text-body-regular">
                One of the most common questions we get is, "Is dating photography a thing?" Yes, it is quite literally
                a thing and the best thing ever for someone in the dating game. If you are unable to find the match that
                you want or are being looked over by women or men even on an app like Tinder, then it's important to
                take a close hard look at those dating photos.
            </p>
            <button class="btn btn-primary mt-8 w-full lg:w-auto">
                Download Media Kit
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14 4.92969L12.5 6.42969L17.0703 11H3V13H17.0703L12.5 17.5703L14 19.0703L21.0703 12L14 4.92969Z"
                        fill="white"
                    />
                </svg>
            </button>
        </div>
    </section>

    <!-- INQUIRIES -->
    <section class="container mx-auto flex flex-col lg:flex-row gap-10 py-20 justify-center px-6">
        <div class="py-6 px-10 bg-[#E4E4E4] flex flex-col gap-[14px] max-w-[600px]">
            <h2 class="text-heading-h2 font-bold font-display text-secondary-900">Press Inquiries</h2>
            <p class="text-secondary-900 text-body-regular font-body">
                We're here to help - contact us if you have any queries about our services and we'll be happy to offer
                personalized guidance
            </p>
            <a href="#" class="underline text-error-900 font-body font-medium text-body-regular"
                >media@thematchartist.com</a
            >
        </div>
        <div class="py-6 px-10 bg-primary-900 flex flex-col gap-[14px] max-w-[600px]">
            <h2 class="text-heading-h2 font-bold font-display text-white">Media Kit</h2>
            <p class="text-white text-body-regular font-body">
                Want to write about us? download our press kit which includes our brand assets, guidelines and company
                info
            </p>
            <button class="btn btn-primary justify-start px-0">
                Download Media Kit
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14 4.92969L12.5 6.42969L17.0703 11H3V13H17.0703L12.5 17.5703L14 19.0703L21.0703 12L14 4.92969Z"
                        fill="white"
                    />
                </svg>
            </button>
        </div>
    </section>

    <Footer />
</template>

<style scoped>
.carousel__slide {
    width: 300px !important;
    margin-right: 40px;
}
</style>
