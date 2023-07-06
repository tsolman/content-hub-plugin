import { CollectionConfig } from 'payload/types';

const Categories: CollectionConfig = {
    slug: 'categories',
    // auth: true,
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'tag',
            type: 'text',
        },
    ],
};

export default Categories;