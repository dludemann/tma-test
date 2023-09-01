import Butter from 'buttercms';
const { butterApiToken } = useRuntimeConfig();
export const butter = Butter(butterApiToken);

export const getLocations = async (params?: any) => {
    try {
        const res = await butter.content.retrieve(['locations']);
        return res?.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getLocationsByCity = async (city?: any) => {
    try {
        const res = await butter.content.retrieve(['locations'], { 'fields.city': city });
        return res?.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getGallery = async () => {
    try {
        const res = await butter.page.list('gallery-page');
        return res?.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getGalleryBySlug = async (slug?: any) => {
    try {
        const res = await butter.page.retrieve('gallery-page', slug);
        return res?.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
