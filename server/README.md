# Server layout

The server file structure takes a different approach than the client side layout.

config - Has configuration info for the entire app, and lib specific configuration(express in this case)

controllers - controller logic files go here
models - model schemas
routes - module level routing can be handled here
views - server rendered views are stored here - currently only index.ejs is rendered
server.js - Main application file.
