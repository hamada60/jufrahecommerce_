import Image from 'next/image';
import Slider from "react-slick";

import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';

import styles from './../styles/Slider.module.css';

import tablet from '../public/image/tablet.jpg';
import tvscreen from '../public/image/tvscreen.jpg';
import camera from '../public/image/camera.jpg';
import headphone from '../public/image/headphone.jpg';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#aa0e1c", borderRadius: "2px" }}
        onClick={onClick}
      />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#aa0e1c", borderRadius: "2px" }}
        onClick={onClick}
      />
    );
  }

export default function CardSlide() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.container}>
        <Slider {...settings}>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={tablet} width={140} height={140} name='' alt='tablet' />
            </div>
            <h5 className="py-3">تابلت هواوي</h5>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={tvscreen} width={140} height={140} name='' alt='' />
            </div>
            <h5 className="py-3">تلفون سامسونج</h5>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={camera} width={140} height={140} name='' alt='' />
            </div>
            <h5 className="py-3">كاميرا كانون</h5>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={headphone} width={140} height={140} name='' alt='' />
            </div>
            <h5 className="py-3">سماعة راس</h5>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={tablet} width={140} height={140} name='' alt='tablet' />
            </div>
            <h5 className="py-3">تابلت هواوي</h5>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={tvscreen} width={140} height={140} name='' alt='' />
            </div>
            <h5 className="py-3">تلفون سامسونج</h5>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={camera} width={140} height={140} name='' alt='tablet' />
            </div>
            <h5 className="py-3">كاميرا كانون</h5>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={tvscreen} width={140} height={140} name='' alt='' />
            </div>
            <h5 className="py-3">تلفون سامسونج</h5>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={camera} width={140} height={140} name='' alt='tablet' />
            </div>
            <h5 className="py-3">كاميرا كانون</h5>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={tvscreen} width={140} height={140} name='' alt='' />
            </div>
            <h5 className="py-3">تلفون سامسونج</h5>
          </div>
        </Slider>
      </div>
  );
}
