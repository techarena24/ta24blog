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
            name: 'deviceImage',
            type: 'image',
            title: 'Device Image',
            options: {
                hotspot: true,
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
                    name: 'display',
                    type: 'string',
                    title: 'Display'
                },
                {
                    name: 'camera',
                    type: 'string',
                    title: 'Camera'
                },
                {
                    name: 'chipset',
                    type: 'string',
                    title: 'Chipset'
                },
                {
                    name: 'network',
                    type: 'string',
                    title: 'Network'
                },
                {
                    name: 'battery',
                    type: 'string',
                    title: 'Battery'
                },
                {
                    name: 'ram',
                    type: 'number',
                    title: 'Ram'
                },
                {
                    name: 'storage',
                    type: 'number',
                    title: 'Storage'
                },
                {
                    name: 'software',
                    type: 'string',
                    title: 'Software'
                },
                {
                    name: 'launchDate',
                    type: 'date',
                    title: 'Launch Date'
                },
                {
                    name: 'availableDate',
                    type: 'date',
                    title: 'Available Date'
                },
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