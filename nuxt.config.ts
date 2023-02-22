// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            datocms: {
                apiToken: process.env.NUXT_ENV_DATOCMS_READ_ONLY_API_TOKEN
            },
        },
    },
})
