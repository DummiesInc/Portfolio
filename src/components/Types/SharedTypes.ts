type TextSpan = {
  start: number;
  end: number;
  type: string;
};

type RichTextBlock = {
  type: string;
  text: string;
  spans: TextSpan[];
  direction: 'ltr' | 'rtl';
};

type ImageResource = {
  dimensions: {
    width: number;
    height: number;
  };
  alt: string | null;
  copyright: string | null;
  url: string;
  id: string;
  edit: {
    x: number;
    y: number;
    zoom: number;
    background: string;
  };
};

type Button = {
  link_type: string;
  key: string;
  url?: string;
  text: string;
};

// Hero slice
type HeroSlice = {
  variation: string;
  version: string;
  items: unknown[];
  primary: {
    heading: RichTextBlock[];
    body: RichTextBlock[];
    button: Button;
    skateboard_deck_texture: ImageResource;
    skateboard_wheel_texture: ImageResource;
    skateboard_truck_color: string;
    skateboard_bolt_color: string;
  };
  id: string;
  slice_type: 'hero';
  slice_label: string | null;
};

// Product Grid slice
type ProductDocument = {
  id: string;
  type: string;
  tags: string[];
  lang: string;
  slug: string;
  first_publication_date: string;
  last_publication_date: string;
  uid: string;
  link_type: string;
  key: string;
  isBroken: boolean;
};

type ProductGridSlice = {
  variation: string;
  version: string;
  items: unknown[];
  primary: {
    heading: RichTextBlock[];
    body: RichTextBlock[];
    product: {
      skateboard: ProductDocument;
    }[];
  };
  id: string;
  slice_type: 'product_grid';
  slice_label: string | null;
};

// Text and Image slice
type TextAndImageSlice = {
  variation: string;
  version: string;
  items: unknown[];
  primary: {
    theme: string;
    heading: RichTextBlock[];
    body: RichTextBlock[];
    button: Button;
    background_image: ImageResource;
    foreground_image: ImageResource;
  };
  id: string;
  slice_type: 'text_and_image';
  slice_label: string | null;
};

type TextAndImageBundleSlice = {
  id: string;
  slice_type: 'text_and_image_bundle';
  slices: TextAndImageSlice[];
};

// Union type
export type Slice = HeroSlice | ProductGridSlice | TextAndImageBundleSlice;

// Data array type
export type Data = Slice[];
