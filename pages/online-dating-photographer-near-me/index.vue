<script setup>
// const { data, error } = await useAsyncData(
//     'location',
//     () => $fetch('https://dulcet-swan-3e453a.netlify.app/.netlify/functions/findUserLocation'),
//     { transform: (input) => JSON.parse(input) },
// );

const { data: ip } = await useFetch('https://api.ipify.org/?format=json', { server: false });
const { data: location } = await useFetch('https://dulcet-swan-3e453a.netlify.app/.netlify/functions/findUserLocation');

const data = JSON.parse(location.value);
console.log('data', data);
console.log('ip', ip);

const headerString = data?.message ? `${data.message.city}, ${data.message.state}` : 'Across The United States';

const largeQuote1 = {
    quote: 'Before getting pics taken by The Match Artist, I was getting 2-3 tinder matches a week. After getting new high value pictures from The Match Artist and tweaking my bio I was getting over 5 matches per day with really great girls. The results truly speak for themselves.',
    author: 'Cameron T.',
};

const largeQuote2 = {
    quote: "Before getting my pictures done with The Match Artist, I had been getting matches with women who are 5/10 off of Tinder. After getting my pictures done, I've been getting matches with women who are 10/10. This changes everything. I recommend this company if you are looking to get your pictures professionally taken.",
    author: 'John G.',
};

useHead({
    title: 'Online Dating Photos',
});
</script>

<template>
    <Header />

    <div
        class="py-[150px] relative"
        :style="{
            backgroundImage: 'url(/images/assets/ray.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }"
    >
        <p class="text-[26px] z-10 relative text-center tracking-[1px] leading-[44px] text-white">
            Online Dating Photos
        </p>
        <h1 class="font-light z-10 relative text-[96px] leading-[96px] text-center text-white">
            {{ headerString }}
        </h1>

        <div class="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50 z-0" />
    </div>

    <!-- RESULT -->
    <div class="grid grid-cols-2 items-center bg-[#171717] text-white">
        <div class="h-[896px] w-full relative">
            <img src="https://cdn.buttercms.com/5qBc3FSbuOUGnsrjmOwY" class="object-cover w-full h-full" />
        </div>
        <article class="p-[70px] flex flex-col items-start">
            <h1 class="font-bold text-[39px] tracking-[0.252px] leading-[40px] mx-auto border-b-[3px] pb-1 mb-[2.2rem]">
                Results
            </h1>

            <ul class="list-disc">
                <li class="text-[20px] leading-[34px]">Better Dating Profile.</li>
                <li class="text-[20px]">Go on Better Dates.</li>
                <li class="text-[20px]">Improved Social Media Presence.</li>
            </ul>
        </article>
    </div>

    <LargeQuote v-bind="largeQuote1" />

    <!-- INCLUDED -->
    <div class="grid grid-cols-2 items-center bg-[#171717] text-white">
        <article class="p-[70px] flex flex-col items-start">
            <h1 class="font-bold text-[39px] tracking-[0.252px] leading-[40px] mx-auto border-b-[3px] pb-1 mb-[2.2rem]">
                Every Photoshoot Includes
            </h1>

            <ul class="list-disc">
                <li class="text-[20px] leading-[34px]">Facial expression & body language coaching.</li>
                <li class="text-[20px]">10-15 outfit changes.</li>
                <li class="text-[20px]">4-5 hour shoot demonstrating your lifestyle and hobbies.</li>
                <li class="text-[20px]">200-300 edited photos.</li>
                <li class="text-[20px]">Advice on your best photos and Instagram optimization.</li>
                <li class="text-[20px]">Help with apps and which premium features work well.</li>
            </ul>
        </article>
        <div class="h-[896px] w-full relative">
            <img src="https://cdn.buttercms.com/9XdIv9saQQCOtNAoV2D9" class="object-cover w-full h-full" />
        </div>
    </div>

    <LargeQuote v-bind="largeQuote2" />

    <!-- INQUIRE -->
    <div class="p-6 bg-white max-w-[800px] mx-auto flex-shrink-0 w-full flex flex-col items-center gap-8">
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

    <div class="max-w-[900px] mx-auto text-center mt-4">
        <p>
            Each session includes coaching on posing and facial expressions to help you look better in both photos and
            real life. You’ll receive a booklet with advice about how to use your photos online, how to open women
            online, and other tips for your adventures online.
        </p>
    </div>

    <ConnectWithUs />
    <Footer />
</template>
