<template>
    <div class="mosaic-gallery flex-col">
        <div
            class="h-[250px] lg:h-[500px] w-full overflow-hidden bg-cover relative flex justify-center items-center"
            v-bind:style="{ backgroundImage: 'url(' + bannerImage + ')' }"
        >
            <p class="text-white text-[39px] lg:text-[96px] relative z-10 font-light">{{ galleryName }}</p>
            <div class="bg-black bg-opacity-50 absolute w-full h-full top-0 left-0" />
        </div>
        <span class="gallery-titles mb-8">
            <h5 class="font-bold text-[20px]">{{ galleryName }}</h5>
            <subtitle> The Match Artist</subtitle>
        </span>
        <div class="masonry-with-columns">
            <div v-for="indexCol in columns" :key="indexCol" class="column">
                <div
                    v-for="(image, index) in columnsArray[indexCol - 1]"
                    :key="`${index}-${indexCol - 1}`"
                    class="mosaic-image"
                    @click="onImageClick(index, indexCol)"
                >
                    <v-lazy-image :src="image" />
                </div>
            </div>
        </div>
        <div v-if="showPopup" class="popup-overlay" @click="closePopup">
            <div class="popup-content">
                <img :src="popupImageSrc" class="popup-image" />
            </div>
        </div>
    </div>
</template>

<script>
import VLazyImage from 'v-lazy-image';

export default {
    name: 'PhotoGallery',
    components: { VLazyImage },
    props: {
        images: {
            type: Array,
            required: true,
        },
        gap: {
            type: Number,
            default: 10,
        },
        galleryName: {
            type: String,
            default: '',
        },
        bannerImage: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            showPopup: false,
            popupImageIndex: 0,
            columns: 3,
        };
    },
    computed: {
        columnsArray() {
            const len = this.images.length;
            const subArraySize = Math.floor(len / this.columns);
            const remainder = len % this.columns;
            const subArrays = [];

            let startIndex = 0;
            let endIndex = 0;

            for (let i = 0; i < this.columns; i++) {
                endIndex += subArraySize + (i < remainder ? 1 : 0);
                subArrays.push(this.images.slice(startIndex, endIndex));
                startIndex = endIndex;
            }

            return subArrays;
        },
        popupImageSrc() {
            return this.images[this.popupImageIndex];
        },
    },
    mounted() {
        window.matchMedia('(max-width: 500px)').matches ? (this.columns = 2) : (this.columns = 3);
    },
    methods: {
        onImageClick(index, indexCol) {
            console.log('HELLO');
            const subArrayIndex = indexCol - 1;
            const subArraySize = Math.floor(this.images.length / this.columns);
            const remainder = this.images.length % this.columns;
            const subArrayOffset = subArraySize * subArrayIndex + Math.min(subArrayIndex, remainder);
            const actualIndex = subArrayOffset + index;
            this.popupImageIndex = actualIndex;
            this.showPopup = true;
            document.body.style.overflow = 'hidden';
        },
        closePopup() {
            this.showPopup = false;
            document.body.style.overflow = '';
        },
    },
};
</script>

<style>
.gallery-titles {
    margin-left: 1rem;
    margin-top: 1rem;
}
.gallery-titles > h5 {
    margin-bottom: 2px;
}
.gallery-titles > subtitle {
    opacity: 60%;
}
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;
}
.popup-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.popup-image {
    max-width: 90%;
    max-height: 90%;
}
.mosaic-gallery {
    display: flex;
}
.v-lazy-image {
    filter: blur(25px);
}
.v-lazy-image-loaded {
    filter: blur(0);
}
.mosaic-image {
    cursor: pointer;
    margin: 0.5rem;
}
.mosaic-image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.column {
    display: flex;
    flex-direction: column;
}
.masonry-with-columns {
    display: flex;
    flex-direction: row;
}
</style>
