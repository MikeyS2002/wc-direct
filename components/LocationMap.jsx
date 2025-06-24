import React from "react";

const LocationMap = () => {
    return (
        <div className="order-2 md:order-1 w-full h-[50svh] md:h-[100svh] overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d512.279884610312!2d4.943322682076597!3d52.508160262874924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6072985ade91d%3A0xd832ad2232653708!2sOude%20Sluis%2010A%2C%201441%20CG%20Purmerend!5e0!3m2!1snl!2snl!4v1731606762368!5m2!1snl!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
};

export default LocationMap;
