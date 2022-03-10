export const picrew = {
  name: "picrew",
  title: "PicRew",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "people" }],
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "featured" }],
    },
  ],
};
export const featured = {
  name: "featured",
  title: "Featured",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "assets",
      title: "Assets",
      type: "array",
      of: [{ type: "asset" }],
    },
  ],
};

export const asset = {
  name: "asset",
  title: "Asset",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
