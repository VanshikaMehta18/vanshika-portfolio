import React from 'react';

type ChatProvider = 'tawk' | 'crisp' | 'gptscript';

type Props = {
    provider?: ChatProvider;
    // For Tawk.to: propertyId and widgetId
    tawk?: { propertyId: string; widgetId: string };
    // For Crisp: websiteId
    crisp?: { websiteId: string };
};

const ChatWidget: React.FC<Props> = ({ provider = 'tawk', tawk, crisp }) => {
    React.useEffect(() => {
        if (provider === 'tawk') {
            const propertyId = tawk?.propertyId || 'default_property_id';
            const widgetId = tawk?.widgetId || 'default_widget_id';
            const s1 = document.createElement('script');
            s1.async = true;
            s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            document.body.appendChild(s1);
            return () => {
                document.body.removeChild(s1);
            };
        }

        if (provider === 'crisp') {
            const websiteId = crisp?.websiteId || 'default_website_id';
            (window as any).$crisp = [];
            (window as any).CRISP_WEBSITE_ID = websiteId;
            const d = document;
            const s = d.createElement('script');
            s.src = 'https://client.crisp.chat/l.js';
            s.async = true;
            d.getElementsByTagName('head')[0].appendChild(s);
            return () => {
                d.getElementsByTagName('head')[0].removeChild(s);
            };
        }
    }, [provider, tawk, crisp]);

    return null;
};

export default ChatWidget;


