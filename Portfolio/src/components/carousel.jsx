
// import { AnimatePresence, motion } from 'framer-motion';
// import { useState } from 'react';
// import Img1 from '../images/unnamed-18.jpg';
// import Img2 from '../images/services/Service2.jpg';
// import Img3 from '../images/unnamed-16.jpg';
// import Img4 from '../images/unnamed-3.png';
// import Img5 from '../images/unnamed-17.jpg';
// import Img6 from '../images/unnamed-2.png';
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';

// import AwesomeSliderStyles from 'react-awesome-slider/dist/styles.css';

// import withAutoplay from 'react-awesome-slider/dist/autoplay' 




// export default function App() {
//   const AutoplaySlider = withAutoplay(AwesomeSlider)



//   return(

//     <div>
      
//     <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25394191' frameborder='0' width='100%' height='350'></iframe>
//      </div>

//   )
// };

/*
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
 // const items = ['1', '2', '3', '4', '5','6'];

  const items = [
          <img className='carousel-img' src={Img1} ></img>,
          <img className='carousel-img' src={Img2} ></img>,
          <img className='carousel-img' src={Img3} ></img>,
          <img className='carousel-img' src={Img4} ></img>,
          <img className='carousel-img' src={Img5} ></img>,
          <img className='carousel-img' src={Img6} ></img>]


  
  // we want the scope to be always to be in the scope of the array so that the carousel is endless
  const indexInArrayScope =
    ((activeIndex % items.length) + items.length) % items.length;
  
  // so that the carousel is endless, we need to repeat the items twice
  // then, we slice the the array so that we only have 3 items visible at the same time
  const visibleItems = [...items, ...items].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );
  const handleClick = newDirection => {
    setActiveIndex(prevIndex => [prevIndex[0] + newDirection, newDirection]);
  };

  return (
    <div className="main-wrapper">

    <div className='carousel-div'>
    <h2>Let us help you safeguard your property with reliable and reasonably priced foundation repair solutions. Rely on us to lay the groundwork for your property's future!</h2>
    </div>
      <div className="wrapper">

        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item) => {
            // The layout prop makes the elements change its position as soon as a new one is added
            // The key tells framer-motion that the elements changed its position
            return (
              <motion.div
                className="card"
                key={item}
                layout
                custom={{
                  direction,
                  position: () => {
                    if (item === visibleItems[0]) {
                      return 'left';
                    } else if (item === visibleItems[1]) {
                      return 'center';
                    } else {
                      return 'right';
                    }
                  },
                }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1 }}
              >
                {item}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="buttons">
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => handleClick(-1)}
        >
          ◀︎
        </motion.button>
        <motion.button whileTap={{ scale: 0.8 }} onClick={() => handleClick(1)}>
          ▶︎
        </motion.button>
      </div>
    </div>
  );
}

const variants = {
  enter: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position }) => {
    return {
      scale: position() === 'center' ? 1 : 0.7,
      x: 0,
      zIndex: zIndex[position()],
      opacity: 1,
    };
  },
  exit: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
  },
};

const zIndex = {
  left: 1,
  center: 2,
  right: 1,
};


/*
import React from 'react';
import ReactDOM from "react-dom";
import { Link }  from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import Img4 from '../images/CN-6.jpg';
import Img5 from '../images/CN-27.jpg';
import Img6 from '../images/CN-6.jpg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default function CarouselPage() {
  

class Carousel extends React.Component {
   
  
  constructor(props) {
      super(props)
      this.state = {
          items: this.props.items,
          active: this.props.active,
          direction: ''
      }
      this.rightClick = this.moveRight.bind(this)
      this.leftClick = this.moveLeft.bind(this)
  }

  generateItems() {
      var items = []
      var level
      console.log(this.state.active)
      for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
          var index = i
          if (i < 0) {
              index = this.state.items.length + i
          } else if (i >= this.state.items.length) {
              index = i % this.state.items.length
          }
          level = this.state.active - i
          items.push(<Item key={index} id={this.state.items[index]} level={level} />)
      }
      return items
  }
  
  moveLeft() {
      var newActive = this.state.active
      newActive--
      this.setState({
          active: newActive < 0 ? this.state.items.length - 1 : newActive,
          direction: 'left'
      })
  }
  
  moveRight() {
      var newActive = this.state.active
      this.setState({
          active: (newActive + 1) % this.state.items.length,
          direction: 'right'
      })
  }
  
  render() {
      return(
          <div id="carousel" className="noselect">
              <div className="arrow arrow-left" onClick={this.leftClick}><i className="fi-arrow-left"></i></div>
              <ReactCSSTransitionGroup 
                  transitionName={this.state.direction}>
                  {this.generateItems()}
              </ReactCSSTransitionGroup>
              <div className="arrow arrow-right" onClick={this.rightClick}><i className="fi-arrow-right"></i></div>
          </div>
      )
  }
}

class Item extends React.Component {
  
  constructor(props) {
      super(props)
      this.state = {
          level: this.props.level
      }
  }
  
  render() {
      const className = 'carousel-item level' + this.props.level
      return(
          <div className={className}>
              {this.props.id}
          </div>
      )
  }
}


var items = [<img className='carousel-img' src={Img4} ></img>,
<img className='carousel-img' src={Img4} ></img>,
<img className='carousel-img' src={Img5} ></img>,
<img className='carousel-img' src={Img4} ></img>,
<img className='carousel-img' src={Img5} ></img>,
<img className='carousel-img' src={Img4} ></img>,
<img className='carousel-img' src={Img5} ></img>,
<img className='carousel-img' src={Img4} ></img>, 3]
//var items = [Img4, Img5, Img6, Img4, Img4, Img4, Img5, Img4, 9, 10]

return(
  <div className='carousel-div'>
    <h2>Let us help you safeguard your property with reliable and reasonably priced foundation repair solutions. Rely on us to lay the groundwork for your property's future!</h2>
    <Carousel items={items} active={0}/>
  </div>
);
//ReactDOM.render(<Carousel items={items} active={0}/>, document.getElementById('app'))

};

//export default CarouselPage;
*/// Carousel.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const buildStars = (rating) => {
  const safeRating = Math.max(0, Math.min(5, Math.round(rating || 0)));
  return Array.from({ length: 5 }, (_, index) => index < safeRating);
};

const formatRelativeTime = (relativeText) => {
  if (!relativeText) return '';
  return relativeText.replace(' ago', '');
};

const Carousel = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    fetch('/api/reviews')
      .then((res) => res.json())
      .then((data) => {
        const safeData = Array.isArray(data) ? data : [];
        setReviews(safeData);
        setStatus('ready');
      })
      .catch(() => {
        setStatus('error');
      });
  }, []);

  const slides = useMemo(() => {
    if (reviews.length > 0) return reviews;
    if (status === 'ready') return [];
    return [];
  }, [reviews, status]);

  return (
    <section className="google-reviews-section">
      <div className="google-reviews-header">
        <div className="google-reviews-title">
          <span className="google-gmark">G</span>
          <div>
            <h2>Google Reviews</h2>
            <p>What customers are saying</p>
          </div>
        </div>
        <a
          className="google-reviews-link"
          href="https://www.google.com/maps"
          target="_blank"
          rel="noreferrer"
        >
          View on Google
        </a>
      </div>

      {status === 'loading' && (
        <div className="google-reviews-state">Loading reviews...</div>
      )}
      {status === 'error' && (
        <div className="google-reviews-state">
          Could not load reviews right now.
        </div>
      )}

      {slides.length > 0 && (
        <Swiper
          className="google-reviews-carousel"
          modules={[Autoplay, Pagination]}
          loop={slides.length > 1}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
          }}
        >
          {slides.map((review, index) => {
            const stars = buildStars(review.rating);
            const initials = (review.author_name || 'G')
              .split(' ')
              .map((part) => part[0])
              .join('')
              .slice(0, 2)
              .toUpperCase();

            return (
              <SwiperSlide key={`${review.author_name || 'review'}-${index}`}>
                <article className="google-review-card">
                  <header className="google-review-meta">
                    <div className="google-review-avatar" aria-hidden="true">
                      {initials}
                    </div>
                    <div>
                      <div className="google-review-author">
                        {review.author_name || 'Google User'}
                      </div>
                      <div className="google-review-sub">
                        <span className="google-review-time">
                          {formatRelativeTime(review.relative_time_description)}
                        </span>
                        <span className="google-review-dot">•</span>
                        <span className="google-review-source">Google</span>
                      </div>
                    </div>
                  </header>

                  <div className="google-review-stars">
                    {stars.map((filled, starIndex) => (
                      <span
                        key={starIndex}
                        className={filled ? 'star star-filled' : 'star'}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="google-review-text">
                    {review.text || 'Great experience!'}
                  </p>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
};

export default Carousel;
