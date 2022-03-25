import { Helmet } from 'react-helmet';

export const HelmetTitle = ({
  title = 'Youtube Clone',
  description = 'Youtube clone project built with Redux using Youtube API',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:locale' content='' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
    </Helmet>
  );
};
