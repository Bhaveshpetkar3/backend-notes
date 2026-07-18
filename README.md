# Backend Notes

A growing, practical collection of backend engineering guides — databases,
APIs, infrastructure, and everything in between. Published as a static site
via GitHub Pages, with no build step.

**Site:** published automatically from this repo's GitHub Pages settings
(see the repo's "About" section for the live link).

## Structure

```
index.html                          site home — category/guide index
assets/theme.css, assets/theme.js   shared styling + dark/light mode toggle
<category>/<guide-slug>/
  index.html                        renders the guide (marked.js + mermaid)
  content.md                        the guide's source markdown
```

Each guide is plain markdown rendered client-side, so adding a new one is:

1. Add `<category>/<guide-slug>/content.md` with the guide content.
2. Copy an existing `<category>/<guide-slug>/index.html` as a template
   (it just fetches `content.md`, renders it, and builds a page-local TOC).
3. Link it from the home page (`index.html`) under its category.

## Guides

- **Databases**
  - [DocumentDB Indexing — From Fundamentals to Production](databases/documentdb-indexing/content.md)
