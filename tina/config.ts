import { defineConfig } from 'tinacms';

// TinaCMS configuration for NMCN Nepal.
// Docs: https://tina.io/docs/reference/config/

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

const localeOptions = [
  { value: 'en', label: 'English' },
  { value: 'ne', label: 'नेपाली (Nepali)' },
];

export default defineConfig({
  branch,
  clientId:
    process.env.TINA_CLIENT_ID ||
    process.env.PUBLIC_TINA_CLIENT_ID ||
    process.env.TINA_PUBLIC_CLIENT_ID ||
    '50340f72-ad16-46ad-9415-97cc07d05323',
  token: process.env.TINA_TOKEN || '',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      // ---------------------------------------------------------------
      // Pages — hero + body for every static page (English & Nepali)
      // ---------------------------------------------------------------
      {
        name: 'pages',
        label: 'Pages',
        path: 'src/content/pages',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Page Title', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'SEO Description', ui: { component: 'textarea' } },
          {
            type: 'string',
            name: 'locale',
            label: 'Language',
            options: localeOptions,
          },
          { type: 'string', name: 'heroEyebrow', label: 'Hero Eyebrow' },
          { type: 'string', name: 'heroTitle', label: 'Hero Title' },
          { type: 'string', name: 'heroSubtitle', label: 'Hero Subtitle', ui: { component: 'textarea' } },
          { type: 'image', name: 'heroImage', label: 'Hero Image' },
          { type: 'rich-text', name: 'body', label: 'Body Content', isBody: true },
        ],
      },

      // ---------------------------------------------------------------
      // Education Centres
      // ---------------------------------------------------------------
      {
        name: 'centres',
        label: 'Education Centres',
        path: 'src/content/centres',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Centre Name', isTitle: true, required: true },
          { type: 'string', name: 'locale', label: 'Language', options: localeOptions },
          { type: 'string', name: 'location', label: 'Location' },
          { type: 'string', name: 'established', label: 'Year Established' },
          { type: 'image', name: 'image', label: 'Featured Image' },
          { type: 'string', name: 'description', label: 'Summary Description', ui: { component: 'textarea' } },
          { type: 'rich-text', name: 'body', label: 'Full Details', isBody: true },
        ],
      },

      // ---------------------------------------------------------------
      // News / Blog posts
      // ---------------------------------------------------------------
      {
        name: 'news',
        label: 'News',
        path: 'src/content/news',
        format: 'md',
        defaultItem: () => ({ date: new Date().toISOString(), locale: 'en', draft: false }),
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'datetime', name: 'date', label: 'Date', required: true },
          { type: 'string', name: 'locale', label: 'Language', options: localeOptions },
          { type: 'string', name: 'excerpt', label: 'Excerpt', ui: { component: 'textarea' } },
          { type: 'image', name: 'image', label: 'Featured Image' },
          { type: 'string', name: 'imageAlt', label: 'Image Alt Text' },
          { type: 'string', name: 'author', label: 'Author' },
          { type: 'boolean', name: 'draft', label: 'Draft (hidden)' },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true },
        ],
      },

      // ---------------------------------------------------------------
      // Site settings (nav, footer, social) — one JSON file per locale
      // ---------------------------------------------------------------
      {
        name: 'settings',
        label: 'Site Settings',
        path: 'src/content/settings',
        format: 'json',
        fields: [
          { type: 'string', name: 'siteName', label: 'Site Name' },
          { type: 'string', name: 'tagline', label: 'Tagline' },
          {
            type: 'object',
            name: 'contact',
            label: 'Contact',
            fields: [
              { type: 'string', name: 'address', label: 'Address', ui: { component: 'textarea' } },
              { type: 'string', name: 'phone', label: 'Phone' },
              { type: 'string', name: 'email', label: 'Email' },
            ],
          },
          {
            type: 'object',
            name: 'social',
            label: 'Social Links',
            fields: [
              { type: 'string', name: 'facebook', label: 'Facebook URL' },
              { type: 'string', name: 'youtube', label: 'YouTube URL' },
              { type: 'string', name: 'instagram', label: 'Instagram URL' },
            ],
          },
          {
            type: 'object',
            name: 'nav',
            label: 'Navigation',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label }) },
            fields: [
              { type: 'string', name: 'label', label: 'Label' },
              { type: 'string', name: 'href', label: 'Link' },
            ],
          },
        ],
      },
    ],
  },
});
