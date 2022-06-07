import React from 'react';
import  Image  from './main-img.jpg';

console.log(Image)
export const AboutMe = () => {
  return (
    <section class="about">
		<div class="main">
		<img src={Image} alt="profile" />
			
			<div class="about-text">
				<h2>About Me</h2>
				<h5>Front-End <span>Web Developer</span></h5>
				<p>Creative and IT focused Bachelor of Business Information System graduate with basic knowledge of hardware and coding like CSS, HTML, JavaScript, MYSQL and PHP seeking a job role to apply my knowledge and skills. Experienced in communicating with clients and delivering presentations, I am seeking to apply my knowledge and skills to this role. My objective is to obtain a position in IT Company where I can work with experienced people in a dynamic and inspiring environment.</p>
				<button type="button">Let's Talk</button>
			</div>
		</div>
	</section>
  )
}
