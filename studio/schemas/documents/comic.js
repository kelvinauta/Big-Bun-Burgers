export const comic = {
  name: "comic",
  title: "Comic",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "characters",
      title: "Characters",
      type: "array",
      of: [{ type: "reference", to: { type: "character" } }],
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "pages",
      title: "Pages",
      type: "array",
      of: [
        {
          type: "page",
        },
      ],
    },
  ],
};
export const page = {
  name: "page",
  title: "Page",
  type: "object",
  fields: [
    {
      name: "img",
      title: "Image",
      type: "image",
    },
    {
      name: "text",
      title: "Text",
      type: "text",
    },
  ],
};
