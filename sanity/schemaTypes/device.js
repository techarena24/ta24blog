export default {
    name: 'device',
    type: 'document',
    title: 'Latest Devices',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Device Title',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'author',
            type: 'reference',
            title: 'Author',
            to: [
                {
                    type: 'author'
                }
            ]
        },
        {
            name: 'releaseDate',
            type: 'date',
            title: 'Release Date'
        },
        {
            name: 'categories',
            type: 'array',
            title: 'Categories',
            of: [
                {
                    type: 'reference',
                    to: [{type: 'category'}]
                }
            ]
        },
        {
            name: 'specs',
            type: 'object',
            title: 'Device Specs',
            fields: [
                {
                    name: 'ram',
                    type: 'string',
                    title: 'RAM'
                },
                {
                    name: 'storage',
                    type: 'string',
                    title: 'Storage'
                },
                {
                    name: 'battery',
                    type: 'string',
                    title: 'Battery'
                },
                {
                    name: 'brand',
                    type: 'string',
                    title: 'Brand'
                },
                {
                    name: 'software',
                    type: 'string',
                    title: 'Software'
                }
            ]
        },
        {
            name: 'publishDate',
            type: 'date',
            title: 'Publish Date'
        },
        {
            name: 'body',
            type: 'blockContent',
            title: 'Body'
        }
    ]
};