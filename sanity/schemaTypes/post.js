export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Post Title',
            validation: Rule => Rule.required().error('Post title is required'),
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Post Slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required().error('Slug is required')
        },
        {
            name: 'postImage',
            type: 'image',
            title: 'Post Image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Important for SEO and accessiblity'
                },
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                }
            ],
            validation: Rule => Rule.required().error('Post image is required'),
        },
        {
            name: 'author',
            type: 'reference',
            title: 'Author',
            to: [{ 
                type: 'author' 
            }],
            validation: Rule => Rule.required().error('Author is required')
        },
        {
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published At',
            validation: Rule => Rule.required().error('Publish date is required')
        },
        {
            name: 'categories',
            type: 'array',
            title: 'Categories',
            of: [{
                type: 'reference', to: [{ type: 'category' }]
            }],
            validation: Rule => Rule.min(1).error('Select at least one category')
        },
        {
            name: 'body',
            type: 'array',
            title: 'Post Body',
            initialValue: [],
            of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'Heading 1', value: 'h1' },
                    { title: 'Heading 2', value: 'h2' },
                    { title: 'Heading 3', value: 'h3' },
                    { title: 'Heading 4', value: 'h4' },
                    { title: 'Heading 5', value: 'h5' },
                    { title: 'Heading 6', value: 'h6' },
                    { title: 'Quote', value: 'blockquote' }, 
                  ],
                  lists: [
                    { title: 'Bullet', value: 'bullet' },
                    { title: 'Numbered', value: 'number' }
                  ],
                  marks: {
                    decorators: [
                      { title: 'Strong', value: 'strong' },
                      { title: 'Emphasis', value: 'em' },
                      { title: 'Code', value: 'code' },
                    ],
                    annotations: [
                      {
                        name: 'link',
                        type: 'object',
                        title: 'URL',
                        fields: [
                          {
                            name: 'href',
                            type: 'url',
                            title: 'URL',
                            validation: Rule => Rule.uri({
                              scheme: ['http', 'https', 'mailto', 'tel']
                            }).required()
                          },
                          {
                            name: 'openInNewTab',
                            type: 'boolean',
                            title: 'Open in new tab?',
                            initialValue: false
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text',
                            validation: Rule => Rule.required()
                        },
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption'
                        }
                    ]
                }, 
                {
                  type: 'reference',
                  name: 'deviceReference',
                  title: 'Device Reference',
                  to: [{ type: 'device' }],
                  validation: Rule => Rule.required()
                },
                {
                  type: 'reference',
                  name: 'postReference',
                  title: 'Post Reference',
                  to: [{ type: 'post' }],
                  validation: Rule => Rule.required()
                },     
                  
            ],
            validation: Rule => Rule.required().min(1).error('Post body is required'),
        },
    ],
};