import { getTestimonials } from '~~/utils/butter';
export default defineEventHandler(async (event) => {
    const data = await getTestimonials();
    return data;
});
