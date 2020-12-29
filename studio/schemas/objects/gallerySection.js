export default {
    type: 'object',
    name: 'gallerySection',
    title: 'Gallery Section',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Heading'
        },
        {
            name: 'label',
            type: 'string',
            title: 'Label'
        },
        {
            name: 'image',
            title: 'Image(s)',
            type: 'array',
            of: [{type: image}]
        }
    ]
}
