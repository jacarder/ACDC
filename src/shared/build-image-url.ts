import React from 'react'
import { sanityClient } from "sanity:client";
import imageUrlBuilder from '@sanity/image-url'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(sanityClient)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export default function buildImageUrl(source: any) {
	return builder.image(source)
}