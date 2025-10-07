import React from 'react';

type ChatProvider = 'tawk' | 'crisp' | 'intercom';

type Props = {
    provider?: ChatProvider;
    // For Tawk.to: propertyId and widgetId
    tawk?: { propertyId: string; widgetId: string };
    // For Crisp: websiteId
    crisp?: { websiteId: string };
    // For Intercom: appId
    intercom?: { appId: string };
    // Custom styling
    position?: 'bottom-right' | 'bottom-left';
    theme?: 'light' | 'dark';
};

const ChatWidget: React.FC<Props> = ({ 
    provider = 'tawk', 
    tawk, 
    crisp, 
    intercom
}) => {
    React.useEffect(() => {
        // Add custom CSS for better positioning and styling
        const style = document.createElement('style');
        style.textContent = `
            .tawk-widget {
                z-index: 1000 !important;
            }
            .crisp-client {
                z-index: 1000 !important;
            }
            .intercom-launcher {
                z-index: 1000 !important;
            }
        `;
        document.head.appendChild(style);

        if (provider === 'tawk') {
            const propertyId = tawk?.propertyId || 'YOUR_TAWK_PROPERTY_ID';
            const widgetId = tawk?.widgetId || 'YOUR_TAWK_WIDGET_ID';
            
            if (propertyId === 'YOUR_TAWK_PROPERTY_ID' || widgetId === 'YOUR_TAWK_WIDGET_ID') {
                console.warn('Please configure your Tawk.to credentials in the ChatWidget component');
                return;
            }

            const s1 = document.createElement('script');
            s1.async = true;
            s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            document.body.appendChild(s1);
            
            return () => {
                if (document.body.contains(s1)) {
                    document.body.removeChild(s1);
                }
                if (document.head.contains(style)) {
                    document.head.removeChild(style);
                }
            };
        }

        if (provider === 'crisp') {
            const websiteId = crisp?.websiteId || 'YOUR_CRISP_WEBSITE_ID';
            
            if (websiteId === 'YOUR_CRISP_WEBSITE_ID') {
                console.warn('Please configure your Crisp credentials in the ChatWidget component');
                return;
            }

            (window as any).$crisp = [];
            (window as any).CRISP_WEBSITE_ID = websiteId;
            const d = document;
            const s = d.createElement('script');
            s.src = 'https://client.crisp.chat/l.js';
            s.async = true;
            d.getElementsByTagName('head')[0].appendChild(s);
            
            return () => {
                if (d.getElementsByTagName('head')[0].contains(s)) {
                    d.getElementsByTagName('head')[0].removeChild(s);
                }
                if (document.head.contains(style)) {
                    document.head.removeChild(style);
                }
            };
        }

        if (provider === 'intercom') {
            const appId = intercom?.appId || 'YOUR_INTERCOM_APP_ID';
            
            if (appId === 'YOUR_INTERCOM_APP_ID') {
                console.warn('Please configure your Intercom credentials in the ChatWidget component');
                return;
            }

            (window as any).Intercom('boot', { app_id: appId });
            
            return () => {
                if (document.head.contains(style)) {
                    document.head.removeChild(style);
                }
            };
        }
    }, [provider, tawk, crisp, intercom]);

    return null;
};

export default ChatWidget;


