export default {
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'bio',
            type: 'text',
            title: 'Bio',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Profile Image',
            options: {
                hotspot: true,
            },
        },
    ],
};