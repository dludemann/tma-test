import { getGalleryBySlug } from '~~/utils/butter';
export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    const data = await getGalleryBySlug(query.slug);
    return data;
});
