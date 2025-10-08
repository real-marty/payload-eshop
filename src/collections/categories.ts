import { slugField } from '@/fields/slug'
import type { CollectionConfig } from 'payload'

export const categories: CollectionConfig = {
    slug: 'categories',
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        ...slugField('name', { slugOverrides: { required: true } }),
        {
            name: 'color',
            type: 'text',

        },
        {
            name: 'parent',
            type: 'relationship',
            relationTo: 'categories',
            hasMany: false,
        },
        {
            name: 'subcategories',
            type: 'join',
            collection: 'categories',
            on: 'parent',
            hasMany: true,
        }
    ]
}