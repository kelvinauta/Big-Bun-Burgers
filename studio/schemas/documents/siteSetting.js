export const siteSetting = {
  name: "setting",
  title: "Configuración del sitio web",
  type: "document",
  fields: [
    {
      name: "generalData",
      title: "Datos generales",
      type: "generalData",
      options: {
        collapsible: true,
      },
    },
    {
      name: "landingPage",
      title: "Página de inicio",
      type: "landingPage",
      options: {
        collapsible: true,
      },
    },
    {
      name: "links",
      title: "Enlaces",
      type: "links",
      options: {
        collapsible: true,
      },
    },
  ],
};

export const generalData = {
  name: "generalData",
  title: "Datos generales",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Descripción",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "icon",
      title: "Icono",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};

export const landingPage = {
  name: "landingPage",
  title: "Página de inicio",
  type: "object",
  fields: [
    {
      // ImageTopButton
      name: "imageTopButton",
      title: "Imagen de botón superior",
      type: "image",
    },
    {
      // Text button
      name: "textButton",
      title: "Texto del botón",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      // Image Bottom Page
      name: "imageBottomPage",
      title: "Imagen de abajo de la página",
      type: "image",
    },
  ],
};

// make a Object Sanity of Links
export const links = {
  name: "links",
  title: "Enlaces",
  type: "object",
  fields: [
    {
      name: "twitter",
      title: "Twitter",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "patreon",
      title: "Patreon",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
