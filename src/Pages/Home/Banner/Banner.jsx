import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner/banner1.png'
import banner2 from '../../../assets/banner/banner2.png'
import banner3 from '../../../assets/banner/banner3.png'
import banner4 from '../../../assets/banner/banner4.png'
import banner5 from '../../../assets/banner/banner5.png'
import banner6 from '../../../assets/banner/banner6.png'
const Banner = () => {
    return (
        <div >
             <Carousel>
                <div>
                    <img src={banner1}  />
                </div>
                <div>
                    <img src={banner2}/>
                </div>
                <div>
                    <img src={banner3 } />
                </div>
                <div>
                    <img src={banner4 } />
                </div>
                <div>
                    <img src={banner5 } />
                </div>
                <div>
                    <img src={banner6 } />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;