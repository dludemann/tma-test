import { getSiloBySlug } from '~~/utils/butter';
export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    const data = await getSiloBySlug(query.slug);
    return data;
});
