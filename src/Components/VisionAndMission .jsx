import React from "react";
import "./VsionAndMission.css";
function VisionAndMission() {
  return (
    <>
      <div className="visionBanner row bannercenter" >
        <div className="col-md-5">
          <img
            src="/Images/my-daughter-isn-t-afraid-pay-visit-here.jpg"
            alt=""
            className="bannerimg"
          />
        </div>
        <div className="bannnertxt col-md-5 bannercenter" >
          <h3>Our Vision and Mission</h3>
          <h5>Caring for You, Advancing Medicine, Inspiring Wellness.</h5>
        </div>
      </div>
      <div className=" Vision" data-aos="fade-up" data-aos-duration="1000">
        <div className="row ">
          <div className="col-md-5 uscard1 ">
            <div className=" ">
              <h2 className="visiontxt">Our Mission</h2>
              <p>
                Our mission is to deliver compassionate, patient-centered care
                of the highest quality, supported by cutting-edge technology and
                a team of skilled and dedicated healthcare professionals. We
                believe in treating each patient as a unique individual,
                tailoring our services to their specific needs and preferences.
                Through our unwavering commitment to excellence, we aim to
                create a warm, welcoming, and supportive environment for all our
                patients and their families. <br />
                At the core of our mission is the belief that healthcare is not
                just about treating illnesses but also about empowering patients
                to take charge of their health and well-being. We strive to be
                more than just a hospital; we aspire to be a trusted partner in
                our patients' healthcare journey, offering comprehensive
                resources, education, and support to help them make informed
                decisions about their health. <br />
                We understand that navigating the complexities of healthcare can
                be overwhelming, and we are dedicated to simplifying the process
                for our patients. Our approach is built on open communication,
                active listening, and genuine empathy. We encourage questions,
                involve patients in their treatment plans, and provide clear
                information to ensure they feel empowered and confident in their
                healthcare choices. <br />
              </p>
            </div>
          </div>

          <div className="col-md-6 uscard1">
            <img
              src="/Images/social-assistant-worker-consoling-handicapped-pensioner-patient-touching-hands.jpg"
              className="visionimg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className=" Vision" data-aos="fade-up" data-aos-duration="1000">
        <div className="row ">
          <div className="col-md-5 uscard1 ">
            <img
              src="/Images/closeup-support-hands.jpg"
              className="visionimg"
              alt=""
            />
          </div>

          <div className="col-md-6 uscard1">
            <div className=" ">
              <h2 className="visiontxt">Our Vision</h2>
              <p>
                JK Hospital aims to create a future where healthcare is not only
                of the highest quality but also accessible to all, regardless of
                background or circumstance. The hospital places a strong
                emphasis on patient-centeredness, ensuring that each patient
                receives personalized care that meets their unique needs and
                preferences. Being a leader in patient-centered excellence, JK
                Hospital commits to delivering exceptional medical services,
                driven by a culture of compassion and empathy. The hospital
                envisions itself as a place of hope, where patients and their
                families find comfort, support, and understanding throughout
                their healthcare journey.
                <br />
                Medical innovation is another crucial aspect of the hospital's
                vision. JK Hospital aspires to be at the forefront of
                cutting-edge technologies and medical advancements, seeking to
                pioneer new treatments and improve patient outcomes
                continuously. Beyond its immediate medical services, the
                hospital envisions actively contributing to community
                well-being. By engaging in community health initiatives and
                promoting health awareness, JK Hospital aims to make a positive
                impact on the overall health and wellness of the communities it
                serves. <br />
                Ultimately, JK Hospital's vision centers on empowerment. The
                hospital is dedicated to empowering patients to take an active
                role in their healthcare decisions, providing them with the
                knowledge and resources they need to lead healthier and happier
                lives.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisionAndMission;
