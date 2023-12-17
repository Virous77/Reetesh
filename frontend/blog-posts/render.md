---
title: "Two Forms of Pre-rendering"
date: "Dec 17 2023"
author: "Reetesh Kumar"
authorImage: "http://res.cloudinary.com/dw6wav4jg/image/upload/v1681244753/css_uiqpme.png"
blogImage: "http://res.cloudinary.com/dw6wav4jg/image/upload/v1682394047/js_xd923z.jpg"
about: "We are here to learn new things as we move ahead with time."
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
