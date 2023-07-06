import { CollectionConfig } from 'payload/types';
import MarkdownPreview from '../custom_fields/MarkdownPreview';

const Artwork: CollectionConfig = {
    slug: 'artwork',
    admin: {
        useAsTitle: 'Name',
    },
    fields: [
        {
            name: 'slug',
            type: 'text',
            required: true,
        },
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'description', 
            label: 'Description',
            type: 'text',
            required: true,
        },
        {
            name: 'image',
            label: 'Artwork Picture',
            type: 'upload',
            relationTo: 'media',
            filterOptions: {
                mimeType: { contains: 'image' },
            },
        },
        {
            name: "Owner",
            type: "relationship",
            relationTo: ["artists"]
        },
    ],
};

export default Artwork;