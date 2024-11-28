import React from 'react';
import { Carousel } from 'antd';

import img1 from '../../assets/img/lien-hoan-phim-nhat-2024-banner.jpg';
import img2 from '../../assets/img/linh-mieu-banner.jpg';
import img3 from '../../assets/img/gladiator-banner.jpg';
import img4 from '../../assets/img/wicked-banner.jpg';

const contentStyle: React.CSSProperties = {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
};

const Banners: React.FC = () => (
    <Carousel autoplay>
        <div>
            <img src={img1} alt="Slide 1" style={contentStyle}/>
        </div>
        <div>
            <img src={img2} alt="Slide 2" style={contentStyle}/>
        </div>
        <div>
            <img src={img3} alt="Slide 3" style={contentStyle}/>
        </div>
        <div>
            <img src={img4} alt="Slide 4" style={contentStyle}/>
        </div>
    </Carousel>
);

export default Banners;