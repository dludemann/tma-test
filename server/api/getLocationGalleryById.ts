import { getLocationsGalleryByID } from '~~/utils/butter';

export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    const data = await getLocationsGalleryByID(query.id);
    return data;
});
