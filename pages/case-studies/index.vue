<script setup lang="ts">
import LiteYouTubeEmbed from 'vue-lite-youtube-embed';
import 'vue-lite-youtube-embed/style.css';

const largeQuote1 = {
    quote: 'There was a significant difference when I got photos taken by The Match Artist. My photographer and I shot the shit and it felt like we were old friends, but we had just met that day..',
    author: 'Danny.',
};

interface StudyObject {
    firstName: string;
    hero: {
        image: string;
        subtext: string;
    };
    youtube?: string;
    quote?: {
        quote: string;
        author: string;
    };
    infoSection?: {
        preText?: string;
        title?: string;
        description?: string;
        images?: string[];
    };
    beforeAfter?: string;
}

const studies: StudyObject[] = [
    {
        firstName: 'Karthik',
        hero: {
            image: 'https://cdn.buttercms.com/w6ludDQ1SSmZRePfS8yi',
            subtext: 'From dating during Covid to Engaged from our Photos',
        },
        infoSection: {
            title: "Karthik's Engagement Session",
            description:
                'Karthik reached out a few weeks ago with a plan. He wanted to get some incredible photos of him and his girlfriend of just over two years—but sneak in a proposal at the end. So Allie and I flew out to San Francisco. We were a bit nervous with how much it was raining, but it turned out to be the most perfect day to fit our moody and more intense photo style.',
            images: [
                'https://cdn.buttercms.com/vVOY0E1SR0moRnmpuNPP',
                'https://cdn.buttercms.com/8G82HXj6QuKSPCOyfcZQ',
                'https://cdn.buttercms.com/6sS0xBwRZ2b8EjAwYjNY',
            ],
        },
    },
    {
        firstName: 'Rohit',
        hero: {
            image: 'https://cdn.buttercms.com/S3YLophHQeO5vw6kp9Rk',
            subtext: 'From separated during covid, to women chasing him and as many dates as he wants.',
        },
        youtube: 'Rd8QxTPfaA4',
        quote: {
            quote: "I talked to you initially a year ago, and I don't know why I didn't hire you right then. It was like a night and day difference....by the end of January I was dating non-stop.",
            author: 'Rohit',
        },
        infoSection: {
            title: 'Rohit: Behind the Scenes',
            images: ['https://cdn.buttercms.com/1XNJS6WDR1Kwgtz9sGYg'],
        },
        beforeAfter: 'https://cdn.buttercms.com/RqQrWbeQ3SW2QcMa9ES1',
    },
    {
        firstName: 'Ryan',
        hero: {
            image: 'https://cdn.buttercms.com/Rh9alOgOTIOBnAFNkvKA',
            subtext: 'From some dates to as many dates as he wants.',
        },
        youtube: 'cfZx5IGkTUY',
        quote: {
            quote: "When I first started implementing the photos, it was pretty much instant results. Nowadays I can pretty much get dates when I want them.... like how many dates do I want to go on this week?..... They coach you on how to have the best looks for your photos. This is something I had no idea about. Now when I'm taking pictures with friends, I know how to bring out the most attractive looks.",
            author: 'Ryan',
        },
        infoSection: {
            preText: 'Ryan met his girlfriend on bumble using our photos.',
            title: '1.5 year relationship',
            images: ['https://cdn.buttercms.com/8XpIiNqUQnaHkARX0VLN'],
        },
        beforeAfter: 'https://cdn.buttercms.com/ZM1tSSdQnKOB0qRq61pK',
    },
    {
        firstName: 'Danny',
        hero: {
            image: 'https://cdn.buttercms.com/T1MHJmuJShiX9HGPbhfl',
            subtext: 'From divorced to feeling confident in his image.',
        },
        youtube: 'pbnwwXSQH5w',
        quote: {
            quote: 'There was a significant difference when I got photos taken by The Match Artist. My photographer and I shot the shit and it felt like we were old friends, but we had just met that day..',
            author: 'Danny',
        },
        infoSection: {
            title: 'Some more from Danny',
            images: ['https://cdn.buttercms.com/sebow2aaTeGxAh1hXXdq'],
        },
        beforeAfter: 'https://cdn.buttercms.com/8IHxWcwSFmm7FbdATU8b',
    },
    {
        firstName: 'Brent',
        hero: {
            image: 'https://cdn.buttercms.com/pvl3xeqRP61yjNHficVc',
            subtext: 'Went from being good in person to using those skills + online dating.',
        },
        youtube: 'kraNsFGuC44',
        quote: {
            quote: "It was pretty smooth...it was actually kinda fun...it was 'lets go to a brewery and grab an actual beer.' It kinda felt like hanging out with a friend, but a friend that's got your back and got your best interest in mind. They are as interested in making you look great as you are interested in looking great. I got really good results once I started.",
            author: 'Brent',
        },
        infoSection: {
            title: '"An overall skyrocketing experience for my online dating." - Brent',
            images: ['https://cdn.buttercms.com/MSMjtUeTcKqJJuXChVWE'],
        },
        beforeAfter: 'https://cdn.buttercms.com/dDwz5BU1QE2TKHkEJQNE',
    },
    {
        firstName: 'Michael',
        hero: {
            image: 'https://cdn.buttercms.com/kxsGZLzmQ7ABgZ4mbe0k',
            subtext: 'Michael went from 1-2 (if that) matches per day, to 5-6 likes per day on hinge.',
        },
        youtube: '0lwNfJDm0s4',
        quote: {
            quote: "Fantastic process. Highly recommend it. It's been a few weeks, and no joke I'm averaging 5-6 likes per day on hinge. Previously, I think I'm a pretty good looking dude and was averaging 1-2 likes per day, but the photos didn't show my lifestyle. I've been bumped up to the higher tier of quality matches.",
            author: 'Michael',
        },
    },
    {
        firstName: 'Jake',
        hero: {
            image: 'https://cdn.buttercms.com/cFi5R3hRc2U3bZFqhSTQ',
            subtext: 'Jake went from a break up to more dates than he has time for.',
        },
        youtube: 'b1eL3wLmuYg',
        quote: {
            quote: "At the moment of doing this interview, I haven't done much effort outside of posting a couple of the photos...and I'm at the point where I would have too many dates a week...I've had to reschedule dates because I was feeling overwhelmed by the attention.had to reschedule dates.",
            author: 'Jake',
        },
    },
    {
        firstName: 'Ben',
        hero: {
            image: 'https://cdn.buttercms.com/ZAKZNjaWQWm3XOsD1KIb',
            subtext: 'From a few matches a week to 40 per week + a Girlfriend.',
        },
        youtube: 'g_hTlhWOhlQ',
        infoSection: {
            title: 'He met his girlfriend online from our photos.',
            description: "We went out to Phoenix to shoot some couple's photos for Ben and his girlfriend. ",
            images: ['https://cdn.buttercms.com/4iwLbIyVQb23U2WPWK0z'],
        },
    },
];

useHead({
    title: 'Case Studies',
    meta: [
        {
            name: 'description',
            content: 'See how The Match Artist is helping real people achieve their dating goals.',
        },
        {
            name: 'og:description',
            content: 'See how The Match Artist is helping real people achieve their dating goals.',
        },
        {
            name: 'og:title',
            content: 'Case Studies',
        },
        {
            name: 'og:url',
            content: 'https://thematchartist.com/case-studies',
        },
        {
            name: 'og:image',
            content: 'https://cdn.buttercms.com/yMmCAgvwToy9DG9iBAsP',
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

    <!-- HERO -->
    <div
        class="py-[150px] relative"
        :style="{
            backgroundImage: 'url(https://cdn.buttercms.com/QAOEDQovRhGECeLl12cL)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }"
    >
        <h1 class="font-light z-10 relative text-[96px] leading-[96px] text-center text-white">Case Studies</h1>

        <div class="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50 z-0" />
    </div>

    <div class="py-[50px] text-center justify-center flex flex-col max-w-[800px] mx-auto">
        <div class="flex gap-2 items-center mx-auto">
            <div class="h-px w-[10px] bg-[#171717]" />
            <p class="text-[18px] italic">We wanted to share some results driven case studies.</p>
            <div class="h-px w-[10px] bg-[#171717]" />
        </div>
        <h1 class="mb-[40px] text-[39px] font-bold">Case Studies</h1>
        <p class="text-[18px] px-6">
            It might be hard to believe that we can get the results for our clients that we claim, so we've put together
            some specific results driven case studies to show the life change with new photos.
        </p>
    </div>

    <!-- LOOP -->
    <section>
        <div v-for="study in studies" :key="study.firstName" class="px-6">
            <!-- TITLE -->
            <div
                class="py-[150px] relative my-[50px]"
                :style="{
                    backgroundImage: `url(${study.hero.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }"
            >
                <h1 class="font-light z-10 relative text-[96px] leading-[96px] text-center text-white">
                    {{ study.firstName }}'s Story
                </h1>

                <p
                    class="text-[26px] z-10 relative text-center tracking-[1px] leading-[44px] text-white max-w-[800px] mx-auto"
                >
                    {{ study.hero.subtext }}
                </p>

                <div class="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50 z-0" />
            </div>

            <!-- YT VIDEO -->

            <div class="max-w-[800px] mx-auto" v-if="study.youtube">
                <LiteYouTubeEmbed :id="study.youtube" :title="`${study.firstName}'s Story`" />
            </div>

            <!-- QUOTE -->

            <LargeQuote v-if="study.quote" v-bind="study.quote" />

            <!-- ARTICLE SECTION -->
            <article class="max-w-[800px] mx-auto" v-if="study.infoSection">
                <div class="flex gap-2 items-center mx-auto justify-center" v-if="study.infoSection.preText">
                    <div class="h-px w-[10px] bg-[#171717]" />
                    <p class="text-[18px] italic">{{ study.infoSection.preText }}</p>
                    <div class="h-px w-[10px] bg-[#171717]" />
                </div>
                <h2 class="text-center font-bold mb-[22px] text-[39px]">{{ study.infoSection.title }}</h2>
                <p class="text-[18px]">{{ study.infoSection.description }}</p>

                <div class="flex flex-col gap-4 py-10">
                    <div v-for="image in study.infoSection.images" :key="image">
                        <img :src="image" />
                    </div>
                </div>
            </article>

            <!-- BEFORE + AFTER -->
            <div v-if="study.beforeAfter" class="mx-auto max-w-[800px] flex flex-col items-center">
                <p class="text-center font-bold mb-4">Before + After</p>
                <img :src="study.beforeAfter" />
            </div>
        </div>
    </section>

    <ConnectWithUs />
    <Footer />
</template>
