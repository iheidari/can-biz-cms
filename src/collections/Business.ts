import { CollectionConfig } from 'payload'

export const Business: CollectionConfig = {
  slug: 'business',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'media',
      type: 'group',
      fields: [
        {
          name: 'images',
          type: 'array',
          fields: [
            {
              name: 'presentationUrl',
              type: 'text',
              required: true,
            },
            {
              name: 'thumbnailUrl',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
            },
          ],
        },
      ],
    },
    {
      name: 'instagram',
      type: 'group',
      fields: [
        { name: 'id', type: 'text', required: true },
        { name: 'name', type: 'text', required: true },
        { name: 'followers', type: 'number', required: true },
        { name: 'description', type: 'textarea' },
        { name: 'posts', type: 'number' },
        { name: 'businessFollowers', type: 'number' },
      ],
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories', // Reference to Category collection
      required: true,
    },
    {
      name: 'serviceLocations',
      type: 'array',
      fields: [
        {
          name: 'city',
          type: 'text',
          required: true,
        },
        {
          name: 'province',
          type: 'text',
          required: true,
        },
        {
          name: 'country',
          type: 'text',
          required: true,
        },
        {
          name: 'latitude',
          type: 'number',
        },
        {
          name: 'longitude',
          type: 'number',
        },
      ],
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags', // Reference to Tag collection
      hasMany: true,
    },
    {
      name: 'createdAt',
      type: 'date',
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeChange: [({ originalDoc }) => originalDoc.createdAt || new Date()],
      },
    },
    {
      name: 'updatedAt',
      type: 'date',
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeChange: [() => new Date()],
      },
    },
    {
      name: 'isVerified',
      type: 'checkbox',
    },
  ],
}
