export const character = {
  name: "character",
  title: "Character",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "biography",
      title: "Biography",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            {
              title: "Normal",
              value: "normal",
            },
          ],
          lists: [],
        },
      ],
    },
    {
      name: "personality",
      title: "Personality",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "photoFace",
      title: "Photo Face",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "photoBody",
      title: "Photo Body",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "comission",
      title: "Comission",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
    },
    {
      name: "show",
      title: "Show",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
    },
    {
      name: "credits",
      title: "Credits",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "people",
            },
          ],
        },
      ],
    },
  ],
};
