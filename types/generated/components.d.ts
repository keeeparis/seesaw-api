import type { Schema, Attribute } from '@strapi/strapi';

export interface UiFooter extends Schema.Component {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'footer';
    description: '';
  };
  attributes: {
    telegram: Attribute.String;
    instagram: Attribute.String;
  };
}

export interface UiHeader extends Schema.Component {
  collectionName: 'components_ui_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logo: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ui.footer': UiFooter;
      'ui.header': UiHeader;
    }
  }
}
