export default function (req, context) {
    if (context.url.hostname.includes('netlify.app')) {
      return new Response('', {
        headers: {
          location: new URL(context.url.pathname, 'https://csp.nightsidecode.com/'),
        },
        status: 301,
      });
    }
  }
  
  export const config = {
    path: '/*', // Applies to all routes
  };