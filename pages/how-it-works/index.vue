<template>
    <Header />

    <div
        class="py-[120px] bg-gray-600 relative"
        :style="{
            backgroundImage: 'url(https://cdn.buttercms.com/9E2CsIwQx2TyOfxFZ3eQ)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }"
    >
        <p class="text-[26px] z-10 relative text-center tracking-[1px] leading-[44px] text-white">Show the best you.</p>
        <h1 class="font-light z-10 relative text-[96px] leading-[96px] text-center text-white">Go on better dates!</h1>
        <div class="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50 z-0" />
    </div>

    <div class="grid grid-cols-2 items-center bg-[#171717] text-white">
        <div class="h-[896px] w-full relative">
            <img src="https://cdn.buttercms.com/ncCpNkMzTWOEYxxijRha" class="object-cover w-full h-full" />
        </div>
        <article class="p-[70px] flex flex-col items-start">
            <h1 class="font-bold text-[39px] tracking-[0.252px] leading-[40px] mx-auto border-b-[3px] pb-1 mb-[2.2rem]">
                What you get
            </h1>

            <ul class="list-disc">
                <li class="text-[20px] leading-[34px]">
                    A personalized 4-5 hour photoshoot with an A-list photographer who comes to you so that you're never
                    out of your element.
                </li>
                <li class="text-[20px]">
                    Our photographers will remove all pressure (most of our clients say the shoot was much more fun than
                    they thought a shoot could be).
                </li>
                <li class="text-[20px]">
                    We'll tell you exactly what to wear, where to stand, and how to act so that there's zero guesswork
                    on game day, and all you have to do is show up.
                </li>
                <li class="text-[20px]">
                    We'll provide real-time coaching to make sure your facial expressions allow others to see you the
                    exact same way you see yourself (most photographers aren't even aware facial expression coaching
                    exists).
                </li>
                <li class="text-[20px]">
                    We'll give you 200+ photos, each uniquely edited to highlight your best features and truly represent
                    who you are (probably for the first time) to the online world.
                </li>
            </ul>
        </article>
    </div>

    <div class="grid grid-cols-2 items-center bg-[#171717] text-white">
        <article class="p-[70px] flex flex-col items-start">
            <h1 class="font-bold text-[39px] tracking-[0.252px] leading-[40px] mx-auto border-b-[3px] pb-1 mb-[2.2rem]">
                How it works
            </h1>
            <ul class="list-disc">
                <li class="text-[20px] leading-[34px]">Book a call with our photographer</li>
                <li class="text-[20px]">Fill out detailed questionnaire.</li>
                <li class="text-[20px]">Brainstorm/strategy session with our photographer.</li>
                <li class="text-[20px]">Each shoot includes 200-300 edited images.</li>
                <li class="text-[20px]">
                    Personalized recommendations on how to leverage your new photos to get more matches.
                </li>
            </ul>
        </article>
        <div class="h-[896px] w-full relative">
            <img src="https://cdn.buttercms.com/fjpAFZARfeSgrqpy6hxe" class="object-cover w-full h-full" />
        </div>
    </div>

    <!-- MORE THAN JUST PHOTOS -->
    <section class="container mx-auto max-w-[1040px]">
        <div class="py-[50px] text-center justify-center flex flex-col">
            <div class="flex gap-2 items-center mx-auto">
                <div class="h-px w-[10px] bg-[#171717]" />
                <p class="text-[18px] italic">Results</p>
                <div class="h-px w-[10px] bg-[#171717]" />
            </div>
            <h1 class="mb-[40px] text-[39px] font-bold">More than just photos</h1>
            <p class="text-[#CE3E3E] text-[18px]">
                Looking your best is important for your photoshoot and in real life. We'll do both!
            </p>
        </div>

        <div class="flex gap-20">
            <div class="w-[300px] flex flex-col items-center">
                <img src="https://cdn.buttercms.com/vKL0LdS8TMuGuyPe5wY3" class="h-[100px] w-[100px] mx-auto" />
                <p class="text-center mb-[22px] font-bold text-[31px]">Coaching</p>
                <p class="text-[18px] leading-[30px] tracking-[0.252px]">
                    Upon arriving, you'll meet with one of our photographers. Together, you will practice your facial
                    expressions so you'll be ready to look confident during the shoot.
                </p>
            </div>

            <div class="w-[300px] flex flex-col items-center">
                <img src="https://cdn.buttercms.com/QWywGtPeRAaWTohrbCec" class="h-[100px] w-[100px] mx-auto" />
                <p class="text-center mb-[22px] font-bold text-[31px]">Photos</p>
                <p class="text-[18px] leading-[30px] tracking-[0.252px]">
                    After the coaching session, our photographer will bring out your true confidence. We use a unique
                    style of photography that allows you to look like a model without actually having to be a model.
                </p>
            </div>

            <div class="w-[300px] flex flex-col items-center">
                <img src="https://cdn.buttercms.com/43Yy1LMwTayfhm1QFv4r" class="h-[100px] w-[100px] mx-auto" />
                <p class="text-center mb-[22px] font-bold text-[31px]">Hobby Photos</p>
                <p class="text-[18px] leading-[30px] tracking-[0.252px]">
                    After you've nailed your studio session, we get a wide variety of lifestyle photos. We figure out
                    what makes you interesting and capture you engaging in your favorite hobbies.
                </p>
            </div>
        </div>

        <div class="py-[50px] text-center">
            <p class="text-[39px] mb-[40px] font-bold">Like what you see</p>
            <button class="border-b-2 text-[18px] py-1 border-black">Book a Call</button>
        </div>
    </section>

    <ConnectWithUs />
    <Footer />
</template>
