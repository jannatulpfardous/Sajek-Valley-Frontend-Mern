import React from 'react';
import "../../carousel/Carousel.css";

const AboutUs = () => {
    return (
        <div>
            <div class="container ">
                <div class="row  mt-lg-5 mt-md-0 mt-sm-0 col-lg-12 col-md-12 col-sm-12">
                    <h2 style={{ textAlign: "center", color: "#4a4a4a", fontFamily: "Besley" }} >Welcome To "Travel <span style={{color:"blue"}}>Nation</span>"</h2>
                    
                    <hr />
                    <br />

                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <img class="aboutImage img-car"  src="https://rodipedia7.files.wordpress.com/2018/02/pexels-photo-6723583.jpeg" alt="" />

                    </div>

                    <div class="col">
                       
                        <h2 style={{ color: "blue", fontFamily: "Besley" }}>What Is Tour Guiding Service ? </h2>

                        <p style={{ color: "#213859", fontFamily: "Besley" }}>Guides Are Tourism Professionals That Lead Their Guests Through The Most Interesting Parts Of Their Region. It Is Their Task To Entertain Visitors To Their Region And To Help Them To Interpret The Sights That They Are Visiting.</p>
                        <br />


                        <hr />


                        <h2 style={{ color: "blue", fontFamily: "Besley" }}>How should a tour guide dress?</h2>

                        <p style={{ color: "#213859", fontFamily: "Besley" }}>Wear Clear And Neat, Casual But Not Too Loose. Guiding Is A Way Of Presentation. Clear And Neat Dressing Provides A Good First Impression To Your Clients. As Most Tour Guides Meet Clients On Vacation And Trips, Casual Dressing Is Recommended</p>
                    </div>




                    





                </div>



            </div>
        </div>
    );
};

export default AboutUs;