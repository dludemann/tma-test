<template>
    <Header />

    <div
        class="py-[120px] bg-gray-600 relative overflow-hidden"
        :style="{
            backgroundImage: 'url(https://cdn.buttercms.com/sPhdWx9SQWaM5cReCMkv)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }"
    >
        <p class="text-[26px] z-10 relative text-center tracking-[1px] leading-[44px] text-white">The Match Artist</p>
        <h1 class="font-light z-10 relative text-[50px] lg:text-[96px] lg:leading-[96px] text-center text-white">
            Online Dating <br />Photography
        </h1>
        <div class="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50 z-0" />
    </div>

    <!-- INTRODUCTING -->
    <section class="container mx-auto max-w-[1040px] px-8">
        <div class="py-[50px] text-center justify-center flex flex-col">
            <div class="flex gap-2 items-center mx-auto">
                <div class="h-px w-[10px] bg-[#171717]" />
                <p class="text-[18px] italic">Introducing</p>
                <div class="h-px w-[10px] bg-[#171717]" />
            </div>
            <h1 class="mb-[40px] text-[39px] font-bold font-display">The Match Artist</h1>
            <p class="text-[#CE3E3E] text-[18px] tracking-wider leading-8 max-w-[800px] mx-auto">
                We are a photography company specializing in transforming online dating profiles through intriguing
                photography, facial expression coaching, and showing off you in your element. Based in Austin, TX, and
                we shoot all over the U.S.
            </p>
        </div>

        <div class="pb-[50px] text-center flex gap-4 justify-center items-center">
            <nav-link to="/how-it-works">
                <button class="border-b-2 text-[18px] py-1 border-black">How it works</button>
            </nav-link>

            <p class="font-bold">/</p>

            <nav-link to="/online-dating-photographer-near-me">
                <button class="border-b-2 text-[18px] py-1 border-black">Book a Call</button>
            </nav-link>
        </div>
    </section>

    <!-- BETTER DATES -->
    <section class="bg-[#171717] px-4">
        <div class="container mx-auto flex flex-col lg:flex-row gap-8 py-16 x-8 max-w-[1040px]">
            <section>
                <div className="flex gap-4">
                    <div class="flex flex-col overflow-hidden justify-center gap-2 items-center">
                        <p class="text-white font-medium text-[18px]">Before</p>
                        <div class="w-[245px] h-[245px] bg-gray-400">
                            <img
                                src="https://cdn.buttercms.com/bsndGGmESnievLxM43ze"
                                class="object-cover h-full w-full"
                            />
                        </div>
                    </div>
                    <div class="flex flex-col overflow-hidden justify-center gap-2 items-center">
                        <p class="text-white font-medium text-[18px]">After</p>
                        <div class="w-[245px] h-[245px] bg-gray-400">
                            <img
                                src="https://cdn.buttercms.com/U4PPNSpSCmdqOqCdgHdg"
                                class="object-cover h-full w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 mt-4">
                    <div class="flex flex-col overflow-hidden justify-center gap-2 items-center">
                        <p class="text-white font-medium text-[18px]">Before</p>
                        <div class="w-[245px] h-[245px] bg-gray-400">
                            <img
                                src="https://cdn.buttercms.com/rqoEklE8QpqqgUvif32Y"
                                class="object-cover h-full w-full"
                            />
                        </div>
                    </div>
                    <div class="flex flex-col overflow-hidden justify-center gap-2 items-center">
                        <p class="text-white font-medium text-[18px]">After</p>
                        <div class="w-[245px] h-[245px] bg-gray-400">
                            <img
                                src="https://cdn.buttercms.com/n7AsVWx1QsSPi3HQUM9P"
                                class="object-cover h-full w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div class="flex flex-col items-center">
                <h1 class="text-white font-bold text-[36px] border-b">Go on Better Dates</h1>
                <p class="mt-4 text-white text-[18px] text-center leading-9">
                    Our photographers have studied the success of body language and facial expressions. They knows how
                    to create eye-catching photos that won’t be quickly glanced over. Your new photos will catch more
                    eyes and highlight your personality through naturally looking photos of your hobbies and interests.
                </p>
            </div>
        </div>

        <div class="container mx-auto flex flex-col lg:flex-row gap-8 py-16 x-8 max-w-[1040px]">
            <div class="flex flex-col items-center">
                <h1 class="text-white font-bold text-[36px] border-b">Look Confident</h1>
                <p class="mt-4 text-white text-[18px] text-center leading-9">
                    If your new photos catch a lady’s eye and highlight your personality, she is bound to click on your
                    profile. We tailor your photo experience with us to highlight things you enjoy doing most. Whether
                    it’s kayaking, rock climbing, reading, or drinking coffee, you’ll get more matches with a varied
                    profile filled with your talents.
                </p>
            </div>

            <section>
                <div className="flex gap-4">
                    <div class="flex flex-col overflow-hidden justify-center gap-2 items-center">
                        <p class="text-white font-medium text-[18px]">Before</p>
                        <div class="w-[245px] h-[245px] bg-gray-400">
                            <img
                                src="https://cdn.buttercms.com/EBPjAzeBQLyh1nr4wXVp"
                                class="object-cover h-full w-full"
                            />
                        </div>
                    </div>
                    <div class="flex flex-col overflow-hidden justify-center gap-2 items-center">
                        <p class="text-white font-medium text-[18px]">After</p>
                        <div class="w-[245px] h-[245px] bg-gray-400">
                            <img
                                src="https://cdn.buttercms.com/3bXujMSISQGiGyAsdzgf"
                                class="object-cover h-full w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 mt-4">
                    <div class="flex flex-col overflow-hidden justify-center gap-2 items-center">
                        <p class="text-white font-medium text-[18px]">Before</p>
                        <div class="w-[245px] h-[245px] bg-gray-400">
                            <img
                                src="https://cdn.buttercms.com/E9O0ftP2R630LWjQpXr5"
                                class="object-cover h-full w-full"
                            />
                        </div>
                    </div>
                    <div class="flex flex-col overflow-hidden justify-center gap-2 items-center">
                        <p class="text-white font-medium text-[18px]">After</p>
                        <div class="w-[245px] h-[245px] bg-gray-400">
                            <img
                                src="https://cdn.buttercms.com/29kFvBorRfiX7n0jCg48"
                                class="object-cover h-full w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>

    <!-- IMPORTANT -->
    <section class="container mx-auto max-w-[1040px] px-16">
        <div class="py-[50px] text-center justify-center flex flex-col">
            <div class="flex gap-2 items-center mx-auto">
                <div class="h-px w-[10px] bg-[#171717]" />
                <p class="text-[18px] italic">The Importance of</p>
                <div class="h-px w-[10px] bg-[#171717]" />
            </div>
            <h1 class="mb-[40px] text-[39px] font-bold font-display">Professional Dating Photography</h1>
            <p class="text-[18px] tracking-wider leading-8 max-w-[800px] mx-auto text-justify mb-6">
                One of the most common questions we get is, "Is dating photography a thing?" Yes, it is quite literally
                a thing and the best thing ever for someone in the dating game. If you are unable to find the match that
                you want or are being looked over by women or men even on an app like Tinder, then it's important to
                take a close hard look at those dating photos. In fact, with many dating platforms being picture first,
                like Tinder, the prospect's first impression of your profile picture needs to be the best it can. It
                would help if you made a good enough impression for the prospect to tap on your picture profile and
                browse through some of those other pictures you uploaded before reading the bio.
            </p>

            <p class="text-[18px] tracking-wider leading-8 max-w-[800px] mx-auto text-justify mb-6">
                The vast majority of people on Tinder, Bumble, or Hinge, for example, will never read the bio without
                first being lured in by a photo that, for them, has potential. It is often subtle cues that signal to a
                prospect they should take a closer look at you. Dating photography specializes in making sure that not
                only are you seen in the best light, but that those subtle cues are more prominent. That's why dating
                photography is an instrumental part of building a dating profile that helps you attract the right
                people. However, a lot more goes into dating photography, which includes research into what attracts the
                people you want to date. Everyone is different and is attracted to an entirely different set of physical
                or facial attributes. It goes without saying that specific facial and physical attributes are more
                attractive for some people than others.
            </p>
            <p class="text-[18px] tracking-wider leading-8 max-w-[800px] mx-auto text-justify mb-6">
                Dating photographs need to be honest and show off those so-called "best attributes" without appearing
                overdone. Yes, we know it's confusing, but there is often a thin line between having an attractive
                dating photograph or one that comes across as being extensively edited. Today, people are much more
                capable of spotting a doctored image, which will almost always take points off your credibility score.
                If anything, you never want to come across as being dodgy in your dating profile.
            </p>
            <p class="text-[18px] tracking-wider leading-8 max-w-[800px] mx-auto text-justify mb-6">
                Interestingly, when you hire a professional dating photographer, you are getting an edge over the
                competition, especially considering that 85% of people on dating websites use selfies. Many also have
                photos taken by someone they are close to and—worst of all—use a multitude of filters, all of which work
                to their disadvantage.
            </p>
            <p class="text-[18px] tracking-wider leading-8 max-w-[800px] mx-auto text-justify mb-6">
                As dating photographers, we know that you have about 3 seconds to make an initial, great impression.
                Those initial 3 seconds can make or break your profile. That's why we work so hard to make sure our
                clients send out the right subliminal cues. Our dating photographers help you gain those extra seconds
                (long enough for the prospect to read your bio). Speaking of which, we tend to think your pictures a lot
                more critical than your bio, but a well-written bio will mean that a lot of those prospects attracted by
                your dating profile picture are motivated to contact you. The first step to ensuring that we get your
                dating profile right is to consult with us. Dating photography requires us to create a profile of who
                you're trying to attract and then take photos just for them. It isn't uncommon for us to take several
                dozen photos before we short through to figure out which ones will have the most impact.
            </p>
        </div>
    </section>

    <div
        class="py-[120px] bg-gray-600 relative"
        :style="{
            backgroundImage: 'url(https://cdn.buttercms.com/rnmGuN7RdevcFCCWGtO5)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }"
    >
        <h1
            class="font-light z-10 relative text-[40px] lg:text-[50px] font-display lg:leading-[96px] text-center text-white"
        >
            Sessions available in all major U.S. cities
        </h1>
        <div class="flex justify-center mb-4">
            <nuxt-link class="text-[18px] z-10 relative text-center tracking-[1px] leading-[34px] text-white border-b-2"
                >Schedule a photography session now.</nuxt-link
            >
        </div>

        <p class="text-[18px] z-10 relative text-center tracking-[1px] leading-[44px] text-white">
            Base in Austin, Texas.
        </p>

        <div class="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50 z-0" />
    </div>

    <section class="container mx-auto max-w-[800px] px-6">
        <div class="py-[50px] text-center justify-center flex flex-col">
            <h1 class="mb-[40px] text-[39px] font-bold font-display px-8">
                Who needs online dating photography for their online dating profile?
            </h1>
            <p class="text-[18px] tracking leading-8 mx-auto text-justify mb-6">
                Based on what you've read so far, you would assume that everyone needs online dating photography to find
                the right match. In reality, that's not the case. While everyone can benefit from professional online
                dating photography, just like everyone can use a new car, some people benefit from it more than others.
            </p>

            <p class="text-[18px] tracking leading-8 max-w-[800px] mx-auto text-justify mb-6">
                For instance, a young woman in her early to mid-20s can get away with selfies. Even average-looking
                young women may not have to invest in professional online dating photography. Often, young women looking
                for more mature men don't need anything other than a few selfies because, for many older men, that's
                enough. According to some experts, an increasingly fewer number of men read women's dating profiles;
                they swipe and message if it's a young woman in decent physical condition. That's why many women in
                their 20s are overwhelmed with messages and dating offers, so much so that they have to block people
                online.
            </p>
            <p class="text-[18px] tracking leading-8 max-w-[800px] mx-auto text-justify mb-6">
                On the flip side, younger men don't receive as much attention. Young men in their late to early 20s are
                seen as being immature. The selfies don't help their case either, because most women just swipe past
                them since it's similar to every other frat boy or young man to them. Even posting pictures of your
                six-pack will only get you so far. Don't get us wrong, most women aren't looking for a guy with a
                potbelly, puffed up face, or someone who likes dressing up as a cosplay character, but maturity matters.
                As professional photographers, we know what attributes attract women. Whether it's an older man or a
                young man, highlighting those attributes will help attract women of the right age and type.
            </p>
            <div class="flex flex-col lg:flex-row gap-8 mb-6">
                <div>
                    <p class="text-[18px] tracking leading-8 max-w-[800px] mx-auto text-justify mb-6">
                        So, here are a couple of examples of men and women who can benefit significantly from a
                        professionally created online dating profile:
                    </p>
                    <p class="text-[18px] tracking leading-8 max-w-[800px] mx-auto text-justify mb-6">
                        <strong>Young Men Looking for Women Their Age</strong> – If you don't want to be overlooked by
                        women your age, you have to signal your maturity. Men in their 20s can appear more mature with
                        the right pose, facial expressions, and clothes. Fortunately, here too, we've helped scores of
                        our clients find more dates by simply changing the way they look in their dating profiles—in
                        some cases, very subtly.
                    </p>
                </div>
                <div class="max-w-[385px] w-full flex-shrink-0">
                    <img src="https://cdn.buttercms.com/r4zvx8sSTcTcWZMAw7JT" class="object-contain h-full w-full" />
                </div>
            </div>

            <p class="text-[18px] tracking leading-8 max-w-[800px] mx-auto text-justify mb-6">
                <strong>Below Average Looking Men</strong> – Honestly, we firmly believe that there is no such thing as
                an average-looking man. Every man is different and can attract a woman by exuberating the right subtle
                cues in their dating profile photographs. The key is for us to use our experience to best present you to
                your target audience in a way that gets them hooked. It can often take several pictures after a
                consultation to shortlist those few photographs that we think will make you stand out.
            </p>

            <p class="text-[18px] tracking leading-8 max-w-[800px] mx-auto text-justify mb-6">
                <strong>Older Women Looking For Men</strong> – Career women in their early to late 30s, 40s, and 50s are
                often overlooked by men their age. It's not always because they could look younger, but that these women
                don't show off those subtle cues that attract the men they want. Our approach to online dating
                photography for women is to understand the type of men they want to date, create a profile, and then
                start the actual photography. Each photograph is geared to that profile. The right approach, which means
                successfully presenting those subtle cues in an online dating profile bio, has, in our experience,
                delivered excellent results for clients.
            </p>

            <p class="text-[18px] tracking leading-8 max-w-[800px] mx-auto text-justify mb-6">
                <strong>Anyone Who Has Not Seen Results</strong> – By this, we mean anyone who has had an online dating
                profile for a while across multiple platforms but has not seen much in the way of results. This could
                also include older men and women returning to the dating game after a significantly long hiatus. Most
                likely, you are an older male since women swipe on only 6% of male profiles. Also, women who haven't
                been able to attract the type of man they want can benefit significantly from professional online dating
                photography.
            </p>
        </div>
    </section>

    <div
        class="py-[120px] bg-gray-600 relative"
        :style="{
            backgroundImage: 'url(https://cdn.buttercms.com/FIkDIkcLT5eXxRY6kafK)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }"
    >
        <h1 class="font-light z-10 relative text-[50px] font-display leading-[96px] text-center text-white">
            We are the online dating experts.
        </h1>
        <div class="flex justify-center mb-4">
            <nuxt-link class="text-[18px] z-10 relative text-center tracking-[1px] leading-[34px] text-white border-b-2"
                >Schedule a photography session now.</nuxt-link
            >
        </div>

        <div class="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50 z-0" />
    </div>

    <section class="container mx-auto max-w-[800px] py-[50px] px-6">
        <div class="py-[25px] text-center lg:text-left justify-center flex flex-col">
            <h1 class="mb-[20px] text-[39px] font-bold font-display">
                Dating profile pictures photography – 5 must-have dating photos for success
            </h1>
            <p class="text-[18px] tracking leading-8 mx-auto text-justify mb-6">
                Each day we meet with men and women who feel anxious about getting back into the dating game. Men and
                women who have been in a single relationship for a long time are often the hardest hit. While we
                advocate that you kick off your online dating journey with professional dating profile pictures, the
                other question we often get asked is, "What types of pictures work best?" In our experience, there are 5
                types of photos that your profile should have and are offered as part of our dating profile pictures
                photography service.
            </p>
        </div>
        <div class="py-[25px] text-center lg:text-left justify-center flex flex-col">
            <h1 class="mb-[20px] text-[39px] font-bold font-display">The Headshot with a Smile</h1>
            <p class="text-[18px] tracking leading-8 mx-auto text-justify mb-6">
                99.9% of people visiting your online dating profile will start by seeing your headshot. Whether it's
                Tinder, Bumble, or Facebook, that headshot gives a prospect their first impression of you. In the world
                of dating profile picture photography, pulling off a truly fantastic headshot needs more than just a
                beautiful simile. It needs to be interesting and intriguing enough to get a prospect to tap or swipe on
                it. So you don't want a headshot that resembles more of a close-up. The picture is usually framed from
                the chest up. Also, this isn't a passport photo, so try to smile. If anything, it goes a long way to
                make the person considering your profile feel more comfortable. The blurred background is fine since the
                emphasis is on you. But the most critical element, second to perhaps your smile, is the lighting. We try
                to avoid using overhead lights, which make the features appear too harsh. Our team uses eye-level lights
                which accentuate your facial features. Also, the goal is to produce a portrait that does not look flat.
                That's why it generally takes a pretty long time to frame and take what we consider to be a winning
                headshot for a dating profile.
            </p>
        </div>

        <div class="py-[25px] text-center lg:text-left justify-center flex flex-col">
            <h1 class="mb-[20px] text-[39px] font-bold font-display">A Candid Portrait</h1>
            <p class="text-[18px] tracking leading-8 mx-auto text-justify mb-6">
                Candid photos are an excellent way to show off your personality. When done right, or professionally (we
                must add), it will impress people who are looking to find someone who likes having fun. Candid shots, by
                their very definition, need to be taken when the subject isn't aware they are being photographed. The
                majority of candid shots are faked, and the subject tries acting natural, which is perfectly fine if it
                is pulled off with perfection.
            </p>
            <p class="text-[18px] tracking leading-8 mx-auto text-justify mb-6">
                Our dating profile pictures photography service achieves candid shots with careful planning and
                positioning. We also find the right angle for the shot to get that impromptu look. In our experience, it
                helps immensely if the shot is of you engaged in some activity like maybe fetching drinks from the
                counter, playing the guitar, etc. However, the key is to get our clients to relax and rehearse the shot
                before it is taken.
            </p>
        </div>

        <div class="py-[25px] text-center lg:text-left justify-center flex flex-col">
            <h1 class="mb-[20px] text-[39px] font-bold font-display">Shots of Your Hobbies</h1>
            <p class="text-[18px] tracking leading-8 mx-auto text-justify mb-6">
                We don't mean pictures of your stamp collection, but instead, you engaged in pasting stamps, maybe.
                While platforms like Tinder have proven to be instrumental in connecting people, the opportunity to
                learn about the other party is almost non-existent without contacting them. However, you can communicate
                your hobbies and passion via a series of photographs. If you like reading, playing the guitar, or doing
                Pilates, a few photos in your natural habitat helps communicate to the prospect what you enjoy doing.
            </p>
            <p class="text-[18px] tracking leading-8 mx-auto text-justify mb-6">
                As professional photographers, we know that every picture tells a story. That's why our goal is to try
                and convey as much information as possible. Also, these photos help you steer clear from the otherwise
                monotonous, repetitive rut other profiles seem to find themselves in. So this is an opportunity for you
                to connect with a prospect, which ideally is a like-minded person who shares your passion.
            </p>
        </div>

        <div class="py-[25px] text-center lg:text-left justify-center flex flex-col">
            <h1 class="mb-[20px] text-[39px] font-bold font-display">A Full Body Shot</h1>
            <p class="text-[18px] tracking leading-8 mx-auto text-justify mb-6">
                We usually recommend a full body shot to avoid any misunderstandings. A full body shot shows off how you
                look. However, as dating photographers, these are among the hardest to get right because you need to
                find the right pose, optimal angle, and the best lighting, not to mention get the look right.
            </p>
            <p class="text-[18px] tracking leading-8 mx-auto text-justify mb-6">
                Ideally, you'll want to take the shot outdoors, an hour or so before sunset. Again, the primary light
                source is set at eye level, making it the best time for this natural light shot. Though if the same shot
                were to be taken indoors, we'd use artificial lighting that's at eye-level with a wide aperture lens.
                Our goal is to get everything from the waist up in the frame while blurring out the background to
                eliminate distractions.
            </p>
        </div>

        <div class="py-[25px] text-center lg:text-left justify-center flex flex-col">
            <h1 class="mb-[20px] text-[39px] font-bold font-display">A Selfie</h1>
            <p class="text-[18px] tracking leading-8 mx-auto text-justify mb-6">
                We did mention earlier that selfies aren't exactly the best idea for a dating profile. However, there is
                an exception to this rule. Don't use a phone selfie as a professional portrait—even the best
                front-facing camera isn't going to capture what needs to be captured for a profile photo. But it can be
                included in your profile.
            </p>
            <p class="text-[18px] tracking leading-8 mx-auto text-justify mb-6">
                The key to a selfie photograph is to embrace the fact that you're taking a selfie and not try to hide
                it. Selfies are always fun. They are personal and tell the potential prospect about you. It isn't about
                the eyes or lighting, but you can try to angle the phone so that it points slightly down or up. Angling
                the camera and tilting your head can make for some interesting shots.
            </p>

            <p class="text-[18px] tracking leading-8 mx-auto text-justify mb-6">
                You can also take selfies with an actual camera. Cameras have much larger sensors, and the resulting
                images are understandably of a much higher quality than those taken with a phone. However, you might
                need some help to mimic a so-called "selfie-like" portrait.
            </p>

            <p class="text-[18px] tracking leading-8 mx-auto text-justify mb-6">
                The only thing you'll want to avoid is the use of filters. Filters make a photo appear what isn't
                necessarily a natural representation of your skin and face, which can come across as being disingenuous
                when used on a dating profile.
            </p>
        </div>
    </section>

    <ConnectWithUs />

    <Footer />
</template>
