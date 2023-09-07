import { getBlogPosts } from '~~/utils/butter';
export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const page = parseInt(query.page as string);
    const data = await getBlogPosts(page, 5);
    return data;
});
