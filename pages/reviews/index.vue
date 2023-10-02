<script setup>
const { data, error } = await useAsyncData('reviews', async () => {
    const reviews = await $fetch('/api/getTestimonials');
    return { reviews };
});

const reviews = data.value.reviews.data.testimonials;

useHead({
    title: 'Reviews',
});
</script>

<template>
    <Header />

    <div
        class="py-[100px] lg:py-[150px] relative"
        :style="{
            backgroundImage: 'url(/images/assets/ray.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }"
    >
        <h1 class="font-light z-10 relative text-[39px] lg:text-[96px] lg:leading-[96px] text-center text-white">
            Reviews
        </h1>
        <p class="text-[18px] lg:text-[26px] z-10 relative text-center tracking-[1px] leading-[44px] text-white">
            Success stories from happy customers
        </p>

        <div class="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50 z-0" />
    </div>

    <section class="bg-[#171717] py-[50px] px-8">
        <div class="container max-w-[1000px] mx-auto flex flex-col gap-8">
            <div class="flex flex-col lg:flex-row gap-20 text-white relative items-center">
                <img src="https://cdn.buttercms.com/rxCNfDQQu9L6DMb1sgW8" class="object-contain" />
                <LargeQuote
                    quote="I’ve been seeing a girl that[‘s] the most perfect human being for me. [...] the coaching on eye movement + pictures is life changing"
                />
            </div>

            <div class="flex flex-col lg:flex-row-reverse gap-20 text-white relative items-center">
                <img src="https://cdn.buttercms.com/9IOr0R38TAqCKF6gk24V" class="object-contain" />
                <LargeQuote quote="I met my fiance on a dating site using the photos taken by The Match Arist." />
            </div>

            <div class="flex flex-col lg:flex-row gap-20 text-white relative items-center">
                <img src="https://cdn.buttercms.com/TBSgAOFmTcOpnkRySU9q" class="object-contain" />
                <LargeQuote quote="[...] 40 matches so far putting in zero effort!" />
            </div>

            <div class="flex flex-col lg:flex-row-reverse gap-20 text-white relative items-center">
                <img src="https://cdn.buttercms.com/AmrxhAJKQVeandJwkQ2G" class="object-contain" />
                <LargeQuote
                    quote="he knows how to bring out your best. [...] Finding the right partner is one of the most important and exciting challenges you’ll ever face - so investing a bit of time and money in professional photos should be a no-brainer."
                />
            </div>
        </div>
    </section>

    <article style="width: 100%" class="max-w-[1000px] mx-auto">
        <h1 class="text-center font-bold text-[39px] my-12">More Testimonials</h1>
        <mosaic :imgs="reviews" />
    </article>

    <div class="py-[50px] text-center">
        <p class="text-[39px] mb-[40px] font-bold">Like what you see?</p>
        <nav-link to="/online-dating-photographer-near-me">
            <button class="border-b-2 text-[18px] py-1 border-black">Book a Call</button>
        </nav-link>
    </div>

    <ConnectWithUs />
    <Footer />
</template>
