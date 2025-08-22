"use client";
import Image from "next/image";
import { useEffect } from "react";

function AboutPage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, observerOptions);

    // Observe all doctor cards
    const doctorCards = document.querySelectorAll(".doctor-card");
    doctorCards.forEach((card) => observer.observe(card));

    return () => {
      doctorCards.forEach((card) => observer.unobserve(card));
    };
  }, []);
  return (
    <div className="container-fluid px-4 py-5">
      {/* Hero Section */}
      <div
        className="text-center mb-5 position-relative"
        style={{
          backgroundImage: "url(/image/place.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "400px",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            top: 0,
            left: 0,
          }}
        ></div>

        {/* Content with relative positioning to appear above overlay */}
        <div className="position-relative py-5">
          <h1 className="display-4 fw-bold text-white mb-3">
            About Our Clinic
          </h1>
          <p className="lead fs-5 text-white mb-4">
            Dedicated to providing exceptional healthcare with compassion,
            expertise, and innovation
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="row align-items-center g-5 mb-5">
        <div className="col-lg-6">
          <div className="pe-lg-5">
            <h2 className="display-6 fw-bold mb-4">Our Mission</h2>
            <p className="lead text-muted mb-4">
              We are committed to delivering the highest quality healthcare
              services to our community, ensuring every patient receives
              personalized care in a comfortable and welcoming environment.
            </p>
            <p className="text-muted">
              Our clinic combines cutting-edge medical technology with the human
              touch, creating a healthcare experience that prioritizes both
              physical wellness and emotional comfort.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="text-center">
            <div className="bg-primary bg-opacity-10 rounded-4 p-5">
              <span className="display-1">🎯</span>
              <h4 className="mt-3 mb-2">Patient-Centered Care</h4>
              <p className="text-muted mb-0">
                Every decision we make is focused on what's best for our
                patients
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="row g-5 mb-5">
        <div className="col-lg-6">
          <div className="card h-100 border-0 shadow-lg rounded-4">
            <div className="card-body text-center p-5">
              <div className="mb-4">
                <Image
                  src="/image/man-doctor.png"
                  alt="Dr. John Smith - General Medicine"
                  width={200}
                  height={200}
                  //   className="shadow"
                />
              </div>
              <h3 className="card-title h4 mb-3">Dr. John Smith</h3>
              <p className="text-primary fw-semibold mb-2">
                General Medicine Specialist
              </p>
              <p className="card-text text-muted mb-4">
                With over 15 years of experience in general medicine, Dr. Smith
                provides comprehensive healthcare for patients of all ages. He
                specializes in preventive care, chronic disease management, and
                family medicine.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <span className="badge bg-primary bg-opacity-10 text-primary">
                  Preventive Care
                </span>
                <span className="badge bg-primary bg-opacity-10 text-primary">
                  Family Medicine
                </span>
                <span className="badge bg-primary bg-opacity-10 text-primary">
                  Chronic Care
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card h-100 border-0 shadow-lg rounded-4">
            <div className="card-body text-center p-5">
              <div className="mb-4">
                <Image
                  src="/image/woman-doctor.png"
                  alt="Dr. Sarah Johnson - Specialized Care"
                  width={200}
                  height={200}
                  //   className="shadow"
                />
              </div>
              <h3 className="card-title h4 mb-3">Dr. Sarah Johnson</h3>
              <p className="text-primary fw-semibold mb-2">
                Specialized Care Specialist
              </p>
              <p className="card-text text-muted mb-4">
                Dr. Johnson brings specialized expertise in advanced medical
                treatments and personalized care plans. She is dedicated to
                providing innovative solutions for complex health challenges.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <span className="badge bg-primary bg-opacity-10 text-primary">
                  Specialized Care
                </span>
                <span className="badge bg-primary bg-opacity-10 text-primary">
                  Innovation
                </span>
                <span className="badge bg-primary bg-opacity-10 text-primary">
                  Research
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="row g-4 mb-5">
        <div className="col-md-6 col-lg-3">
          <div className="text-center p-4">
            <div
              className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
              style={{ width: "60px", height: "60px" }}
            >
              <span className="display-6">❤️</span>
            </div>
            <h5 className="fw-bold mb-2">Compassion</h5>
            <p className="text-muted small">
              We treat every patient with kindness, empathy, and respect
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="text-center p-4">
            <div
              className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
              style={{ width: "60px", height: "60px" }}
            >
              <span className="display-6">🔬</span>
            </div>
            <h5 className="fw-bold mb-2">Excellence</h5>
            <p className="text-muted small">
              We maintain the highest standards in medical care and service
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="text-center p-4">
            <div
              className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
              style={{ width: "60px", height: "60px" }}
            >
              <span className="display-6">🤝</span>
            </div>
            <h5 className="fw-bold mb-2">Collaboration</h5>
            <p className="text-muted small">
              We work together with patients to achieve optimal health outcomes
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="text-center p-4">
            <div
              className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
              style={{ width: "60px", height: "60px" }}
            >
              <span className="display-6">🚀</span>
            </div>
            <h5 className="fw-bold mb-2">Innovation</h5>
            <p className="text-muted small">
              We embrace new technologies and methods to improve patient care
            </p>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="row align-items-center g-5 mb-5">
        <div className="col-lg-6">
          <div className="position-relative">
            <div className="bg-primary bg-opacity-10 rounded-4 p-5">
              <h3 className="fw-bold mb-3">Our Journey</h3>
              <div className="timeline">
                <div className="d-flex mb-3">
                  <div
                    className="bg-primary rounded-circle me-3"
                    style={{ width: "12px", height: "12px", marginTop: "8px" }}
                  ></div>
                  <div>
                    <h6 className="fw-bold mb-1">2010 - Founded</h6>
                    <p className="text-muted small">
                      Started with a vision to provide exceptional healthcare
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div
                    className="bg-primary rounded-circle me-3"
                    style={{ width: "12px", height: "12px", marginTop: "8px" }}
                  ></div>
                  <div>
                    <h6 className="fw-bold mb-1">2015 - Expansion</h6>
                    <p className="text-muted small">
                      Added specialized care services and modern equipment
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div
                    className="bg-primary rounded-circle me-3"
                    style={{ width: "12px", height: "12px", marginTop: "8px" }}
                  ></div>
                  <div>
                    <h6 className="fw-bold mb-1">2020 - Innovation</h6>
                    <p className="text-muted small">
                      Implemented telemedicine and advanced diagnostic tools
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div
                    className="bg-primary rounded-circle me-3"
                    style={{ width: "12px", height: "12px", marginTop: "8px" }}
                  ></div>
                  <div>
                    <h6 className="fw-bold mb-1">Today - Excellence</h6>
                    <p className="text-muted small">
                      Continuing to serve our community with dedication
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="ps-lg-5">
            <h2 className="display-6 fw-bold mb-4">Our Story</h2>
            <p className="lead text-muted mb-4">
              Founded in 2010, our clinic has grown from a small family practice
              to a comprehensive healthcare facility serving thousands of
              patients in our community.
            </p>
            <p className="text-muted mb-4">
              We've continuously evolved our services and facilities to meet the
              changing needs of our patients, always maintaining our core values
              of compassion, excellence, and innovation.
            </p>
            <button className="btn btn-primary btn-lg px-4 py-2 rounded-pill">
              Learn More About Our History
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-5">
        <div className="bg-primary bg-opacity-10 rounded-4 p-5">
          <h2 className="display-6 fw-bold mb-3">
            Ready to Experience Our Care?
          </h2>
          <p className="lead text-muted mb-4">
            Join thousands of satisfied patients who trust us with their health
            and wellness.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-primary btn-lg px-4 py-3 rounded-pill">
              Book Your First Visit
            </button>
            <button className="btn btn-outline-primary btn-lg px-4 py-3 rounded-pill">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
