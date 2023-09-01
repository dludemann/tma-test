import { getLocationsByCity } from '~~/utils/butter';

export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    const data = await getLocationsByCity(query.city);
    return data;
});
