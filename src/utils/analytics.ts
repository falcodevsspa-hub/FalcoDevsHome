export const trackConversion = (event: string, property?: string) => {
    // Logic for GTM, Facebook Pixel or GA4 could go here
    console.log(`[Analytics] Event: ${event}`, property ? `Property: ${property}` : "");

    // Example for GTM:
    // if (window.dataLayer) {
    //   window.dataLayer.push({ event, property });
    // }
};
