import React from 'react'
import '../css/CardTestimonial.scss';

const CardTestimonial = (props) => {
    return (
        <div className="card-testimonial">
            <div className="card-testimonial__head">
                <div className="testimonial-img">
                    <img src={props.testimonial.img_src} alt={props.testimonial.img_name}/>
                </div>
                <div className="testimonial-perfil">
                    <span className="testimonial-perfil__name">{props.testimonial.name}</span>
                    <span className="testimonial-perfil__code_name">{props.testimonial.code_name}</span>
                </div>
                <a href={props.testimonial.lilink} className="share-twitter-link" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-twitter'></i>
                </a>
            </div>
            <div className="card-testimonial__body">
                <p>{props.testimonial.content}</p>
            </div>
            <div className="card-testimonial__date">
                <span>{props.testimonial.date}</span>
            </div>
        </div>
    )
}

export default CardTestimonial
