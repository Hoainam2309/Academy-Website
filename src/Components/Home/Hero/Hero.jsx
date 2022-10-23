import React from 'react'
import Title from '../../common/Title/Title'
import './Hero.css'
const Hero = () => {
  return (
    <>
     <section className="hero">
        <div className="container">
            <div className="row">
            <Title subTitle='WELLCOME TO ACADEMY' title= 'Best Online Education' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magnam molestias explicabo nisi, placeat eum consequatur maxime id tempora harum nihil odit dicta facere sapiente ducimus accusantium et quasi possimus.</p>
                <div className="button">
                    <button className='primary-btn'>
                        GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                    <button className=''>
                        VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                </div>
            </div>
        </div>
     </section>
     <div className='margin'></div>
    </>
  )
}

export default Hero

