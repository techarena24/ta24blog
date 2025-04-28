'use client'

import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { deskTool } from 'sanity/desk'  // Corrected import here
import { structure } from './sanity/structure'
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({ structure }),  // Correct usage of deskTool in Sanity v3
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})




