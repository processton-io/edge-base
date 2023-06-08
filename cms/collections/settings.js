import navigationField from '../fields/navigation-field';
import socialField from '../fields/social-field';
import { Title, Content, ImageField } from '../fields';

const collection = {
  name: 'settings',
  label: 'Settings',
  description: 'Settings for theme',
  files: [
    {
      label: 'Main Navigation',
      name: 'nav',
      file: 'src/settings/main.json',
      editor: {
        preview: false,
      },
      fields: [
        Title,
        ImageField(), 
        navigationField()],
    },
    {
      label: 'Social Links',
      name: 'social_links',
      file: 'src/settings/social_links.json',
      editor: {
        preview: true,
      },
      fields: [{
        label: 'Enable Header',
        name: 'show_above_header',
        widget: 'boolean',
        required: false,
      },socialField()],
    },
    {
      label: 'Footer Navigation',
      name: 'footer',
      file: 'src/settings/footer.json',
      editor: {
        preview: false,
      },
      fields: [
        Title,
        Content,
        ImageField(), 
        navigationField()],
    },
    {
      label: 'Colors',
      name: 'colors',
      file: 'src/settings/colors.json',
      editor: {
        preview: false,
      },
      fields: [
        {
          label: 'header',
          name: 'header',
          fields: [
            { label: 'Bg Color', name: 'header_bg', default: '#FFFFFF', widget : 'color', required: true },
            { label: 'Text Default Color', name: 'header_text_default_color', default: '#000000', widget : 'color', required: true },
          ],
        },
        { label: 'Header Bg', name: 'header_bg', default: '#FFFFFF', widget : 'color', required: true },
        { label: 'Header Text Default Color', name: 'header_text_default_color', default: '#000000', widget : 'color', required: true },
      ],
    },
    {
      label: 'Site Metadata & SEO Settings',
      name: 'seo',
      file: 'src/settings/seo.json',
      summary: 'Change basic SEO configuration and site meta like URL',
      editor: {
        preview: false,
      },
      fields: [
        {
          label: 'Base title',
          name: 'baseTitle',
          widget: 'string',
          required: false,
        },
        {
          label: 'Separator',
          name: 'separator',
          widget: 'string',
          required: false,
        },
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          required: false,
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'string',
          required: false,
        },
        {
          label: 'Language Code',
          name: 'lang',
          widget: 'string',
          required: false,
        },
        {
          label: 'Keywords',
          name: 'keyword',
          widget: 'string',
          required: false,
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
          required: false,
        },
        {
          label: 'Twitter Handle',
          name: 'twitterHandle',
          widget: 'string',
          required: false,
        },
        {
          label: 'Theme Color',
          name: 'themeColor',
          widget: 'color',
          required: false,
        },
      ],
    },
  ],
};

export default collection;
