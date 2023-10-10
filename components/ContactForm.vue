<script>
import axios from 'axios';

export default {
    name: 'ContactForm',
    inheritAttrs: false,
    props: {
        title: {
            type: String,
            default: 'Inquire Now',
        },
        bottom_text: {
            type: String,
            default:
                'Each session includes coaching on posing and facial expressions to help you look better in both photos and real life. You’ll receive a booklet with advice about how to use your photos online, how to open women online, and other tips for your adventures online.',
        },
        hasCityInput: {
            type: Boolean,
            default: true,
        },
        city: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            endpoint: 'https://hooks.zapier.com/hooks/catch/1261564/se0vhq/',
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                source: '',
                city: this.city,
            },
        };
    },
    computed: {
        contactFormAttribute: function () {
            return process.env.DEV_ENV === 'True' ? 'ContactFormSubmission-Dev' : 'ContactFormSubmission';
        },
    },
    mounted() {
        // Lee: add captcha script tag
        let captcha = document.createElement('script');
        captcha.setAttribute(
            'src',
            'https://www.google.com/recaptcha/api.js?render=6LeSWvAfAAAAAIBb7J-L3uaN-mTSJqT3qtgZwI2s',
        );
        document.head.appendChild(captcha);

        //append plausible tracking
        let plausible = document.createElement('script');
        plausible.setAttribute('src', 'https://plausible.io/js/script.js');
        plausible.setAttribute('defer', 'defer');
        plausible.setAttribute('data-domain', 'thematchartist.com');
        document.head.appendChild(plausible);
        let exec = document.createElement('script');
        exec.innerHTML =
            'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }';
        document.head.appendChild(exec);

        // load email and source from cookie
        let email = this.getCookie('email');
        let source = this.getCookie('source');

        this.formData.email = email;
        this.formData.source = source;
    },
    methods: {
        submitForm(event) {
            event.preventDefault();
            let plausibleBtn = event.target.querySelectorAll('button[data-analytics]').item(0);

            let attributes = plausibleBtn.getAttribute('data-analytics').split(/,(.+)/);
            let events = [attributes[0], attributes[1] || '{}'];
            // eslint-disable-next-line no-undef
            plausible(...events);
            setTimeout(function () {}, 150);

            const { firstName, lastName, email, city, source } = this.formData;
            const preparedData = {
                FirstName: firstName,
                LastName: lastName,
                Email: email,
                City: city,
                Source: source,
                Token: '',
            };
            // eslint-disable-next-line no-undef
            grecaptcha.ready(function () {
                // eslint-disable-next-line no-undef
                grecaptcha
                    .execute('6LeSWvAfAAAAAIBb7J-L3uaN-mTSJqT3qtgZwI2s', {
                        action: 'submit',
                    })
                    .then(function (token) {
                        // Add your logic to submit to your backend server here.
                        console.log('gcaptcha token', token);
                        preparedData.Token = token;
                        // axios call to zapier
                        axios
                            .post('https://hooks.zapier.com/hooks/catch/1261564/bdpikub/', preparedData, {
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded',
                                },
                            })
                            .then((res) => {
                                window.location.href =
                                    'https://bookme.name/thematchartist/lite/free-consultation-with-shane';
                            })
                            .catch((error) => {
                                console.log('ERROR');
                                console.log(error);
                            });
                    });
            });
        },
        getCookie(cname) {
            let name = cname + '=';
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return '';
        },
    },
};
</script>
<template>
    <form class="flex flex-col gap-4 w-full" method="POST" :action="endpoint" @submit.stop.prevent="submitForm">
        <fieldset class="flex flex-col">
            <label class="contact__label" for="firstName">First Name </label>
            <input
                id="firstName"
                v-model="formData.firstName"
                class="input"
                type="text"
                name="FirstName"
                placeholder="Enter your First Name"
                required
            />
        </fieldset>

        <fieldset class="flex flex-col">
            <label class="contact__label" for="lastName">Last Name </label>
            <input
                id="lastName"
                v-model="formData.lastName"
                class="input"
                type="text"
                name="LastName"
                placeholder="Enter your Last Name"
                required
            />
        </fieldset>

        <fieldset class="flex flex-col" v-if="hasCityInput">
            <label class="contact__label" for="city">City </label
            ><input
                id="city"
                v-model="formData.city"
                class="input"
                type="text"
                name="City"
                placeholder="Where do you live?"
                required
            />
        </fieldset>

        <fieldset class="flex flex-col">
            <label class="contact__label" for="email">Email </label>

            <input
                id="email"
                v-model="formData.email"
                class="input"
                type="email"
                name="Email"
                placeholder="Enter your Email"
                required
            />
        </fieldset>

        <input v-if="!hasCityInput" type="hidden" name="City" :value="city" />
        <button class="btn btn-primary lg:w-auto" type="submit" :data-analytics="contactFormAttribute">
            Inquire Now
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14 4.92969L12.5 6.42969L17.0703 11H3V13H17.0703L12.5 17.5703L14 19.0703L21.0703 12L14 4.92969Z"
                    fill="white"
                />
            </svg>
        </button>
    </form>
</template>
