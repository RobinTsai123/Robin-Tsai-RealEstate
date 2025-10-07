import React, { useState, useRef, useEffect } from 'react';
import './Appraisal.css';

const Appraisal = () => {
  const selfies = ['selfie1.jpg', 'selfie2.jpg', 'selfie3.jpg'];
  const whatsappImages = ['whatsapp1.jpg', 'whatsapp2.jpg', 'whatsapp3.jpg', 'whatsapp4.jpg', 'Whatsapp5.jpg'];
  
  const testimonials = [
    "We are second timer, and we tried to apply for 5-room BTO many times but were all unsuccessful. Met up with Robin and he gave us alternative advice and solution to our growing family needs. We managed to upgrade from a 4 room to 5 room smoothly and most importantly, it is within budget and the location that we wanted.\n\nBoth my husband and my work schedule are very packed, and Robin ensured that our time are not compromised",
    "Robin is very friendly and cheerful every time he met us... Ensuring our whole downsizing journey being very smooth without us worrying about what is going to happen next. Robin also listened to all our concerns and preferences for our new house and advice us accordingly. Extra plus points for Robin as he replied to our messages very quickly and efficiently throughout the whole process."
  ];

  const [selfieIndex, setSelfieIndex] = useState(0);
  const [whatsappIndex, setWhatsappIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const selfieRef = useRef(null);
  const whatsappRef = useRef(null);
  const testimonialRef = useRef(null);

  const handleSwipe = (ref, currentIndex, setIndex, maxLength) => {
    let startX = 0;
    let isDragging = false;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
    };

    const handleTouchEnd = (e) => {
      if (!isDragging) return;
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          setIndex((prev) => (prev + 1) % maxLength);
        } else {
          setIndex((prev) => (prev - 1 + maxLength) % maxLength);
        }
      }
      isDragging = false;
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('touchstart', handleTouchStart);
      element.addEventListener('touchmove', handleTouchMove);
      element.addEventListener('touchend', handleTouchEnd);

      return () => {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchmove', handleTouchMove);
        element.removeEventListener('touchend', handleTouchEnd);
      };
    }
  };

  useEffect(() => {
    const cleanup1 = handleSwipe(selfieRef, selfieIndex, setSelfieIndex, selfies.length);
    const cleanup2 = handleSwipe(whatsappRef, whatsappIndex, setWhatsappIndex, whatsappImages.length);
    const cleanup3 = handleSwipe(testimonialRef, testimonialIndex, setTestimonialIndex, testimonials.length);

    return () => {
      cleanup1 && cleanup1();
      cleanup2 && cleanup2();
      cleanup3 && cleanup3();
    };
  }, [selfieIndex, whatsappIndex, testimonialIndex, selfies.length, whatsappImages.length, testimonials.length]);

  return (
    <section id="appraisal" className="section appraisal-section">
      <h2>Appraisal & Client Satisfaction</h2>
      <p className="permission-note">*Permission granted before uploading on platform</p>

      <div className="feedback-container">
        <div className="selfies-column">
          <h3>Client Satisfaction</h3>
          <div className="carousel-container" ref={selfieRef}>
            <div className="carousel-track" style={{ transform: `translateX(-${selfieIndex * 100}%)` }}>
              {selfies.map((selfie, index) => (
                <div key={index} className="carousel-slide">
                  <img src={`${process.env.PUBLIC_URL}/images/${selfie}`} alt={`Client Selfie ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="carousel-dots">
              {selfies.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === selfieIndex ? 'active' : ''}`}
                  onClick={() => setSelfieIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button 
              className="carousel-arrow left" 
              onClick={() => setSelfieIndex((prev) => (prev - 1 + selfies.length) % selfies.length)}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button 
              className="carousel-arrow right" 
              onClick={() => setSelfieIndex((prev) => (prev + 1) % selfies.length)}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>

        <div className="whatsapp-column">
          <h3>WhatsApp Feedback</h3>
          <div className="carousel-container" ref={whatsappRef}>
            <div className="carousel-track" style={{ transform: `translateX(-${whatsappIndex * 100}%)` }}>
              {whatsappImages.map((whatsapp, index) => (
                <div key={index} className="carousel-slide">
                  <img src={`${process.env.PUBLIC_URL}/images/${whatsapp}`} alt={`WhatsApp Feedback ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="carousel-dots">
              {whatsappImages.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === whatsappIndex ? 'active' : ''}`}
                  onClick={() => setWhatsappIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button 
              className="carousel-arrow left" 
              onClick={() => setWhatsappIndex((prev) => (prev - 1 + whatsappImages.length) % whatsappImages.length)}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button 
              className="carousel-arrow right" 
              onClick={() => setWhatsappIndex((prev) => (prev + 1) % whatsappImages.length)}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <div className="comments-section">
        <h3>Client Testimonials</h3>
        <div className="carousel-container testimonial-carousel" ref={testimonialRef}>
          <div className="carousel-track" style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="carousel-slide">
                <div className="comment-card">
                  <p>{testimonial}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === testimonialIndex ? 'active' : ''}`}
                onClick={() => setTestimonialIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button 
            className="carousel-arrow left" 
            onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <button 
            className="carousel-arrow right" 
            onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Appraisal;