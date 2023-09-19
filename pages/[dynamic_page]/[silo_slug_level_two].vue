<script setup>
import { ref } from 'vue';
import * as he from 'he';
const route = useRoute();

// ============================================================================
// FUNCTIONS
// ============================================================================
const slugify = (name) => {
    return name.split(' ').join('-').replace('?', '').replace('.', '').replace("'", '');
};

const cleanTitle = (string) => {
    return he.decode(
        string
            .replaceAll('<span>', '')
            .replaceAll('</span>', '')
            .replace(/<h2[^>]*./, '')
            .replace('</h2>', ''),
    );
};

const parseLevelThree = (html_string) => {
    const breakpoint = /<h2.+<\/h2>/;
    const content = html_string.split(breakpoint);
    const regex = /<h2.+<\/h2>/g;

    const titles = [...html_string.matchAll(regex)]
        .map((title) => title[0])
        .map((title, index) => {
            return {
                title: cleanTitle(title),
                href: null,
                slug: slugify(cleanTitle(title)),
                content: content[index + 1],
            };
        });

    return titles;
};

const changeCurrentHash = (slug) => {
    console.log('slug', slug);
    currentHash.value = slug;
};

const findLevelOneIndex = () => {
    const levelOneList = silo.fields.level_one_subject;
    const levelTwoSlug = secondSlug;

    let index = 0;
    for (var i = 0; i < levelOneList.length; i++) {
        const L1 = levelOneList[i];
        const L2Array = L1.fields.level_two;

        for (var j = 0; j < L2Array.length; j++) {
            const L2 = L2Array[j];

            if (L2.level_two_slug === levelTwoSlug) {
                index = i;
                break;
            }
        }
    }

    return index;
};

const findLevelTwo = (levelOneIndex, slug) => {
    const L2 = silo.fields.level_one_subject[levelOneIndex].fields.level_two;

    console.log('L2', L2);
    const object = L2.find((level) => level.level_two_slug === slug);
    return object;
};

const initData = (mainSlug, secondSlug) => {
    // Find index of the level one title
    const levelOneIndex = findLevelOneIndex();

    // Find the Level Two Object
    const levelTwo = findLevelTwo(levelOneIndex, secondSlug);

    // Parse Level Three
    const levelThree = parseLevelThree(levelTwo.level_three_children);

    // Update Current Hash
    currentHash.value = levelThree[0].slug;

    // Return Object
    return {
        level_one: levelOneIndex,
        level_two: {
            level_two_title: levelTwo.level_two_title,
            level_two_slug: levelTwo.level_two_slug,
            level_two_content: levelTwo.level_two_content,
        },
        level_three: levelThree,
    };
};

// ============================================================================
// DATA
// ============================================================================
const currentHash = ref('');
const loaded = ref(false);

// TODO: This is where we will decide if the url is a location or a silo
const page = route.params.dynamic_page;
const secondSlug = route.params.silo_slug_level_two;

// LOGIC FOR LOCATION PAGE

// LOGIC FOR SILO PAGE
// Assume Silo for now
const mainSlug = page;
const { data, error } = await useAsyncData('silo', async () => {
    const silo = await $fetch(`/api/getSilosBySlug?slug=${mainSlug}`);
    return { silo };
});

const silo = data.value.silo.data;
const menuData = silo.fields.level_one_subject.map((l_one) => {
    return {
        title: l_one.fields.level_one_title,
        href: null,
        slug: null,
        children: l_one.fields.level_two.map((l_two) => {
            return {
                title: l_two.level_two_title,
                href: null,
                slug: l_two.level_two_slug,
                children: parseLevelThree(l_two.level_three_children),
            };
        }),
    };
});
const currentPath = initData(mainSlug, secondSlug);
loaded.value = true;
</script>

<template>
    <Header />
    <div class="flex">
        <SideNavChat
            v-if="loaded"
            :current-hash="currentHash"
            :menu-data="menuData"
            :current-path="currentPath"
            :page-data="silo"
            :main-slug="mainSlug"
            @hash-change="changeCurrentHash"
        />

        <div class="w-full">
            <article class="w-full max-w-[800px] px-16">
                <header class="pt-[50px] mb-8">
                    <p class="font-display text-[18px] font-bold text-[#171717]">TINDER BASICS</p>
                    <h1 class="text-[50px] font-bold font-display py-2 leading-[60px] text-[#1E293B]">
                        How to Use Tinder for Free (2023 Expert's Guide)
                    </h1>
                    <div class="flex gap-2 items-center mb-4">
                        <div class="w-6 h-6 rounded-full bg-gray-400"></div>
                        <p class="text-[#475569]">Written By <span class="font-bold text-black">John Smith</span></p>
                    </div>

                    <div>
                        <div class="flex items-center gap-2">
                            <div class="w-6 h-6 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM15.293 16.707L11 12.414V6H13V11.586L16.707 15.293L15.293 16.707Z"
                                        fill="#475569"
                                    />
                                </svg>
                            </div>

                            <p>3 Minute Read</p>
                        </div>
                    </div>
                </header>

                <div class="silo-content" v-html="currentPath.level_two.level_two_content" />
            </article>
            <SiloBody
                class="silo-content"
                :current-content="currentPath.level_three"
                @hash-change="changeCurrentHash"
            />

            <div class="w-full pl-16 mt-16">
                <div class="flex w-full">
                    <div class="bg-[#227F94] flex gap-10 px-10 items-center h-[185px] w-1/2 cursor-pointer">
                        <div class="w-8 h-8 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                            >
                                <path
                                    d="M16 10.6667L10.6666 16.0001M10.6666 16.0001L16 21.3334M10.6666 16.0001H21.3333M29.3333 16.0001C29.3333 23.3639 23.3638 29.3334 16 29.3334C8.63616 29.3334 2.66663 23.3639 2.66663 16.0001C2.66663 8.63628 8.63616 2.66675 16 2.66675C23.3638 2.66675 29.3333 8.63628 29.3333 16.0001Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>

                        <div class="text-white">
                            <p>Tinder Basic</p>
                            <p class="font-bold text-[32px] font-display">What is Tinder?</p>
                        </div>
                    </div>
                    <div class="bg-[#990808] flex gap-10 px-10 items-center h-[185px] w-1/2 justify-end cursor-pointer">
                        <div class="text-white">
                            <p>Tinder Basic</p>
                            <p class="font-bold text-[32px] font-display">What is Tinder?</p>
                        </div>

                        <div class="w-8 h-8 flex items-center justify-center transform rotate-180">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                            >
                                <path
                                    d="M16 10.6667L10.6666 16.0001M10.6666 16.0001L16 21.3334M10.6666 16.0001H21.3333M29.3333 16.0001C29.3333 23.3639 23.3638 29.3334 16 29.3334C8.63616 29.3334 2.66663 23.3639 2.66663 16.0001C2.66663 8.63628 8.63616 2.66675 16 2.66675C23.3638 2.66675 29.3333 8.63628 29.3333 16.0001Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <section class="bg-[#090303] py-20 ml-16">
                <div
                    class="container mx-auto flex justify-between items-start px-4 lg:px-16 flex-col lg:flex-row gap-12"
                >
                    <article class="max-w-[560px] w-full text-white">
                        <h1 class="font-bold text-heading-h1 font-accent">Professional Dating Photography</h1>
                        <div class="bg-primary-500 w-[120px] h-[10px] my-4" />
                        <p class="text-20px">
                            We tailor your photo experience with us to highlight things you enjoy doing most. Whether
                            it's kayaking, rock climbing, reading, or drinking coffee, you'll get more matches with a
                            varied profile filled with your talents.
                        </p>

                        <div class="flex flex-col gap-4 my-6">
                            <div class="flex items-center gap-4">
                                <svg
                                    width="33"
                                    height="33"
                                    viewBox="0 0 33 33"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.0057 16.8155L14.0057 20.8155L22.0057 12.8155M29.339 16.8155C29.339 24.1792 23.3695 30.1488 16.0057 30.1488C8.6419 30.1488 2.67236 24.1792 2.67236 16.8155C2.67236 9.45165 8.6419 3.48212 16.0057 3.48212C23.3695 3.48212 29.339 9.45165 29.339 16.8155Z"
                                        stroke="#22C55E"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>

                                <p class="text-[18.5px] font-body mb-0">Better dating profile</p>
                            </div>
                            <div class="flex items-center gap-4">
                                <svg
                                    width="33"
                                    height="33"
                                    viewBox="0 0 33 33"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
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
                                <svg
                                    width="33"
                                    height="33"
                                    viewBox="0 0 33 33"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
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

                    <!-- FORM -->
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
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14 4.92969L12.5 6.42969L17.0703 11H3V13H17.0703L12.5 17.5703L14 19.0703L21.0703 12L14 4.92969Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <Footer />
</template>

<style>
.silo-content {
    font-family: 'IBM Plex Sans';
    size: 18px;
    color: #1e293b;
}
.silo-content img {
    margin-top: 24px;
}
.silo-content img,
.silo-content p {
    margin-bottom: 24px;
}

.silo-content h2 {
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 0px !important;
}
.silo-content a {
    color: #bf9441;
}

.silo-content ul {
    margin-bottom: 24px;
    list-style-type: disc;
    margin-left: 24px;
}
.silo-content ul p,
.silo-content ol p {
    margin-bottom: 0px;
}

.navigating-the-algorithms {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.content-styles {
    padding-right: 4rem;
    padding-left: 4rem;
}

.header-content {
    display: flex;
    flex-direction: row;
    background: black;
    position: relative;
}

.header-content__block {
    display: flex;
    color: white;
    align-items: center;
    max-width: 800px;
    padding-right: 4.2857142857rem;
    padding-left: 4.2857142857rem;
    width: 100%;
}

.header-content__block__description {
    display: flex;
    flex-direction: column;
    margin: 3rem 3rem 3rem 0;
    width: 100%;
}

.header-content__block__description h2 {
    background: linear-gradient(var(--mediumRed), var(--mediumRed)) bottom left no-repeat;
    background-size: 13% 5px;
    padding-bottom: 2rem;
}
.header-content__block__description p {
    width: 80%;
}

.app_logo {
    object-fit: contain;
    flex-grow: 0.2;
}

@media (max-width: 650px) {
    .header-content__block {
        flex-flow: column-reverse;
    }

    .header-content__block__description {
        width: 100%;
    }
    .app_logo {
        height: 20rem;
        width: 20rem;
        padding: 3rem;
    }
}
</style>
