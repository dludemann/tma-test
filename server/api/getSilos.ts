import { getSilos } from '~~/utils/butter';
export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const data = await getSilos();
    return data;
});
