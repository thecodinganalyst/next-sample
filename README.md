This is a boilerplate for a static website generator created with NextJS on React, using Material UI for the layout, and Cypress for testing. It also uses Typescript instead of javascript. 

This project will create a simple website with an Appbar and a Drawer with navigation menu at the side. The navigation menu can be altered by altering the return from the `getNavigation()` function in `/lib/content.ts`. The navigation menu is arranged by categories and item, so to modify the content for any of the pages, you'll need to modify the `/pages/[category]/[item].tsx`. 

The `index.tsx` is the main page, and it uses the `Layout` component from `/components/layout.tsx` which provides the Appbar and Drawer, so that it can be easily integrated in all the pages. It employs the `Navigation` component for each category of the navigation. 

The `getStaticPaths()` in `/pages/[category]/[item].tsx` needs to return all the possible paths from /[category]/[item], in the format [{params: {category: cat1, item: item1}}, {params: {category: cat1, item: item2}}, ...]. And all the contents from all possible links within /[category]/[item] are handled in this file. 

To setup the project after downloading/cloning it from github, simply run `npm install`, to get all the dependencies installed.

To run in dev, `npm run dev`. 
To build it for production, `npm run build` to build it and `npm run start` to run it on localhost:3000.

To run the test, `npx cypress open`

For more information on how this is set up, please refer to the below blog post.
https://thecodinganalyst.github.io/knowledgebase/create-a-new-nextjs-site-with-typescript-materialui-and-cypress/
