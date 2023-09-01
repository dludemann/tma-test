import { getGallery } from '~~/utils/butter';
export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const data = await getGallery();
    return data;
});
