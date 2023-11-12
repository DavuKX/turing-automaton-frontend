import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'es', 'pt'],

    defaultLocale: 'es'
});

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};