import { getLocations } from '~~/utils/butter';
export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const data = await getLocations(query);
    return data;
});
