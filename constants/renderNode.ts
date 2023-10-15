import { BLOCKS } from "@contentful/rich-text-types";

export const DEFAULT_RENDER_NODE = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { title, description, file } = node.data.target.fields;
      const extension = file.url.slice(-4);
      switch (extension) {
        case ".mp4":
          return `<video controls class="max-w-lg mb-4 mx-auto"><source src="${file.url}" type="video/mp4"></video>`;
        case ".mp3":
          return `<audio controls class="max-w-lg mb-4 mx-auto"><source src="${file.url}" type="audio/mp3"></audio>`;
        default:
          return `<img src="${file.url}" alt="${title}" title="${description}"/>`;
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
      switch (node.data.target.fields.title) {
        case "Skillset": {
          const { skillset } = node.data.target.fields;
          let result = "";
          result += `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-3 mb-8 w-full">`;
          skillset.items.map((item: any) => {
            result += `<div class="w-full bg-base-100 md:shadow-xl pb-8 md:p-4">`;
            result += `<div class="p-6 main-box h-full">`;
            result += `<h4 class="text-2xl font-bold">${item.title}</h4>`;
            result += `<ul class="list-disc text-lg">`;
            item.content.map((content: any) => {
              result += `<li>${content}</li>`;
              return result;
            });
            result += `</ul>`;
            result += `</div>`;
            result += `</div>`;
            return result;
          });
          result += `</div>`;
          return result;
        }
      }
    },
    [BLOCKS.PARAGRAPH]: (node: any, next: any) => {
      let iframe = null;
      node.content.map((item: any) => {
        if (
          item.nodeType === "hyperlink" &&
          item.data.uri.includes("youtube")
        ) {
          iframe = `<iframe src="${item.data.uri}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="py-4" allowfullscreen></iframe>`;
        }
        return item;
      });
      return iframe ?? `<p>${next(node.content)}</p>`;
    },
  },
};
