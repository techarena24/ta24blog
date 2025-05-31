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
                    name: 'backcamera',
                    type: 'string',
                    title: 'Back Camera'
                },
                {
                    name: 'frontcamera',
                    type: 'string',
                    title: 'Front Camera'
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
                    type: 'string',
                    title: 'Ram'
                },
                {
                    name: 'storage',
                    type: 'string',
                    title: 'Storage'
                },
                {
                    name: 'software',
                    type: 'string',
                    title: 'Software'
                },
                {
                    name: 'announcedDate',
                    type: 'date',
                    title: 'Announced Date'
                },
                {
                    name: 'availableDate',
                    type: 'date',
                    title: 'Available Date'
                },
                {
                    name: 'buyOptions',
                    title: 'Available For Purchase',
                    type: 'array',
                    of: [
                      {
                        type: 'object',
                        name: 'buyOption',
                        fields: [
                          {
                            name: 'platform',
                            title: 'Platform',
                            type: 'string',
                            options: {
                              list: [
                                { title: 'Giztop', value: 'Buy on Giztop' },
                                { title: 'Amazon EUR', value: 'Buy on Amazon EUR' },
                                { title: 'Amazon UK', value: 'Buy on Amazon EUR' },
                                { title: 'Amazon US', value: 'Buy on Amazon US' },
                              ],
                              layout: 'dropdown',
                            },
                            validation: Rule => Rule.required(),
                          },
                          {
                            name: 'url',
                            title: 'Affiliate Link',
                            type: 'url',
                            validation: Rule => Rule.uri({
                              scheme: ['http', 'https'],
                            }),
                          },
                        ],
                      },
                    ],
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
    ]
};