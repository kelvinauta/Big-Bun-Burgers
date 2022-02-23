export const people = {
  name: "people",
  title: "People",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "links",
        },
      ],
    },
  ],
};
export const link = {
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
};
