import { CollectionConfig } from 'payload/types';
import MarkdownPreview from '../custom_fields/MarkdownPreview';

const Articles: CollectionConfig = {
    slug: 'articles',
    fields: [
        {
            name: 'slug',
            type: 'text',
            required: true,
        },
        {
            name: "category",
            type: "relationship",
            relationTo: ["categories"]
        },
        {
            name: "tags",
            type: "select",
            hasMany: true,
            admin: {
                isClearable: true,
                isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
            },
            options: [
                {
                    label: 'tag',
                    value: 'tag'
                },
                {
                    label: 'New NFT',
                    value: 'new_nft'
                },
            ]
        },
        {
            name: 'articleText', // required
            type: 'code', // required
            required: true,
            admin: {
                language: 'markdown',
            }
        },
        {
            name: 'images',
            label: 'Images',
            type: 'upload',
            relationTo: 'media',
            filterOptions: {
                mimeType: { contains: 'image' },
            },
        },
        {
            name: "markdownPreview", // required
            type: "ui", // required
            admin: {
                components: {
                    Field: MarkdownPreview,
                    // Cell: MyCustomUICell,
                },
            },
        },
    ],
    // admin: {
    //     preview: (doc, { locale }) => {
    //         if (doc?.slug) {
    //             return `https://bigbird.com/preview/articles/${doc.slug}?locale=${locale}`;
    //         }

    //         return null;
    //     },
    // },
};

export default Articles;