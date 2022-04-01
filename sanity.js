import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: 'production',
  projectId: '3apjgndb',
  apiVersion: '2021-04-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
}

export const sanityClient = createClient(config)

export const urlFor = (source) => createImageUrlBuilder(config).image(source)
