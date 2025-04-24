export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Post Title',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Post Slug',
            options: {
                source: 'title',
                maxLength: 96,
            }
        },
        {
            name: 'postImage',
            type: 'image',
            title: 'Post Image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'author',
            type: 'reference',
            title: 'Author',
            to: [{ 
                type: 'author' 
            }]
        },
        {
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published At'
        },
        {
            name: 'categories',
            type: 'array',
            title: 'Categories',
            of: [{
                type: 'reference', to: [{ type: 'category' }]
            }]
        },
        {
            name: 'body',
            type: 'array',
            title: 'Post Body',
            of: [
                {type: 'block'},
                {type: 'image'},
                {
                    type: 'reference',
                    name: 'deviceReference',
                    title: 'Device Reference',
                    to: [{type: 'device'}]
                },
                {
                    type: 'reference',
                    name: 'postReference',
                    title: 'Post Reference',
                    to: [{type: 'post'}]
                },

            ]
        },
    ],
};