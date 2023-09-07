import { getBlogPost } from '~~/utils/butter';
export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const slug = query.slug as string;
    const data = await getBlogPost(slug);
    return data;
});
