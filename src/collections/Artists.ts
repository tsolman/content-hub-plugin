import { CollectionConfig } from 'payload/types';
import MarkdownPreview from '../custom_fields/MarkdownPreview';

const Artists: CollectionConfig = {
    slug: 'artists',
    admin: {
        useAsTitle: 'ArtistName',
    },
    fields: [
        {
            name: 'slug',
            type: 'text',
            required: true,
        },
        {
            name: 'artistname',
            label: 'Artist Name',
            type: 'text',
            required: true,
        },
        {
            name: 'bio',
            label: 'Bio',
            type: 'text',
            required: true,
        },
        {
            name: 'profile_picture',
            label: 'Profile Picture',
            type: 'upload',
            relationTo: 'media',
        },
    ],
};

export default Artists;