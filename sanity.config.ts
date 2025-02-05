// sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './studio/schemaTypes'

export default defineConfig({
	name: 'ACDC-test',
	title: 'ACDC Test',
	projectId: '87t9hq25',
	dataset: 'production',
	plugins: [structureTool()],
	schema: {
		types: schemaTypes
	},
})