// IMPORTANT: update all these property values in src/lib/config.js
import { siteTitle, siteDescription, siteURL } from "$lib/config";

export const prerender = true;

export const GET = async () => {
  const data = await Promise.all(
    Object.entries(import.meta.glob("$lib/blogs/*.md")).map(
      async ([path, page]) => {
        const { metadata } = await page();
        const slug = path.split("/").pop().split(".").shift();
        return { ...metadata, slug };
      }
    )
  ).then((blogs) => {
    return blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
  });

  const body = render(data);
  const headers = {
    "Cache-Control": `max-age=0, s-max-age=${600}`,
    "Content-Type": "application/xml",
  };
  return new Response(body, {
    status: 200,
    headers,
  });
};

//Be sure to review and replace any applicable content below!
const render = (blogs) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="https://${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${blogs
    .map(
      (blog) => `<item>
<guid isPermaLink="true">https://${siteURL}/blog/${blog.slug}</guid>
<title>${blog.title}</title>
<link>https://${siteURL}/blog/${blog.slug}</link>
<description>${blog.excerpt}</description>
<pubDate>${new Date(blog.date).toUTCString()}</pubDate>
</item>`
    )
    .join("")}
</channel>
</rss>
`;
