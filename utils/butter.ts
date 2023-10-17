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

export const getTeamMembers = async (params?: any) => {
    try {
        const res = await butter.content.retrieve(['team_member']);
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

export const getBlogPosts = async (page: number, page_size: number) => {
    try {
        const res = await butter.post.list({
            page,
            page_size,
        });
        return res?.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getBlogPost = async (slug: string) => {
    try {
        const res = await butter.post.retrieve(slug);
        return res?.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getTestimonials = async () => {
    try {
        const res = await butter.content.retrieve(['testimonials']);
        return res?.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getSilos = async () => {
    try {
        const res = await butter.page.list('algorithm-silos');
        return res?.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getSiloBySlug = async (slug?: any) => {
    try {
        const res = await butter.page.retrieve('algorithm-silos', slug);
        return res?.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
