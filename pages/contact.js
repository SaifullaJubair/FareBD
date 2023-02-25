import ContactUs from '@/Components/Home/Contactus/ContactUs';
import React from 'react';

const contact = () => {
    return (
        <div>
            
            <section className="mb-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div>
                            <div className="mapouter">
                                <div className="gmap_canvas rounded-xl">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d261538.06262279715!2d89.16399421712215!3d22.85985491569819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff73d602120427%3A0x4ebc0662266c0c9a!2sPanjia%20Secondary%20School!5e0!3m2!1sen!2sbd!4v1676211730621!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon"></a><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactUs></ContactUs>
        </div>
    );
};

export default contact;