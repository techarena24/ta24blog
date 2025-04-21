'use client'

import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {structure} from './sanity/structure'

import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})

