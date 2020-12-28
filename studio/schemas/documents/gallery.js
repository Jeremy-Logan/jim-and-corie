export default {
    name: 'gallery',
    type: 'document',
    title: 'Gallery',
    fieldsets: [
        {
            title: 'SEO & metadata',
            name: 'metadata'
        }
    ],
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'image',
            type: 'figure',
            title: 'Image'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            description: 'This description populates meta-tags on the webpage',
            fieldset: 'metadata'
        }
    ],

    preview: {
        select: {
            title: 'title',
            media: 'openGraphImage'
        }
    }
}
