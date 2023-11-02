import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

type Props = {
  description?: string;
  lang?: string;
  meta?: Array<any>;
  keywords?: Array<any>;
  title?: string;
};

const SEO: React.FC<Props> = ({
  description,
  lang,
  meta,
  keywords,
  title,
}: Props) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            // titleTemplate={`${data.site.siteMetadata.title} | %s`}
            titleTemplate={`%s`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `og:locale`,
                content: `en-BD`,
              },
              {
                name: `og:image`,
                content: `https://www.marvel365bet.com/static/1-1152b446125e6fe1cdfa678efa67abd4.png`,
              },

              {
                property: `og:url`,
                content: `https://marvel365bet.com`,
              },
              {
                property: `og:site_name`,
                content: `MarvelBet Online Casino Betting Site in India | ${title}`,
              },
              {
                property: `og:description`,
                content: `A recommended online casino platform, what are the major features it should have? MarvelBet, the very popular gaming entertainment brand in India, will tell you. The key to winning the unanimous respect of Indian sports players and gaining the loyalty of their players is to have stable network connection quality, generous promotions of popular benefits, and fair and impartial game products.`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
