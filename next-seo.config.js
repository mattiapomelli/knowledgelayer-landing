const title = "KnowledgeLayer - The open protocol for educational platforms";
const description =
  "KnowledgeLayer is an open protocol and developer toolkit for building web3 educational platforms.";
const url = "https://knowledgelayer-landing.vercel.app/";

const image = "https://knowledgelayer-landing.vercel.app/og-image.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title,
  description,
  canonical: url,
  openGraph: {
    type: "website",
    locale: "en_IE",
    site_name: "My App",
    title,
    description,
    images: [
      {
        url: image,
        alt: "KnowledgeLayer - The open protocol for educational platforms",
        type: "image/png",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
};
