import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

/**
 * Renders the Home component for the clinic's website.
 */
export default function Home() {
  return (
    <div className={`${styles.page} container-fluid p-5`}>
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary mb-3">
          Welcome to Our Clinic
        </h1>
        <p className="lead fs-5 text-muted mb-4">
          Providing exceptional healthcare with compassion and expertise
        </p>
        <div>
          <Link href="/about" className="btn btn-lg btn-primary rounded-pill">
            about page (see)
          </Link>
        </div>
        {/* <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-primary btn-lg px-4 py-2 rounded-pill">
            Book Appointment
          </button>
          <button className="btn btn-outline-primary btn-lg px-4 py-2 rounded-pill">
            Learn More
          </button>
        </div> */}
      </div>

      {/* Services Section */}
      <div className="row g-5 mb-5">
        <div className="col-lg-4 col-md-6">
          <div className="card h-100 border-0 shadow-lg rounded-4 hover-lift">
            <div className="card-body text-center p-5">
              <div
                className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                style={{ width: "80px", height: "80px" }}
              >
                <span className="display-4">👨‍⚕️</span>
              </div>
              <h3 className="card-title h4 mb-3">General Medicine</h3>
              <p className="card-text text-muted">
                Comprehensive healthcare services for all ages with experienced
                physicians.
              </p>
              <button className="btn btn-outline-primary rounded-pill mt-3">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card h-100 border-0 shadow-lg rounded-4 hover-lift">
            <div className="card-body text-center p-5">
              <div
                className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                style={{ width: "80px", height: "80px" }}
              >
                <span className="display-4">👩‍⚕️</span>
              </div>
              <h3 className="card-title h4 mb-3">Specialized Care</h3>
              <p className="card-text text-muted">
                Expert specialists providing advanced treatments and
                personalized care plans.
              </p>
              <button className="btn btn-outline-primary rounded-pill mt-3">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card h-100 border-0 shadow-lg rounded-4 hover-lift">
            <div className="card-body text-center p-5">
              <div
                className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                style={{ width: "80px", height: "80px" }}
              >
                <span className="display-4">🏥</span>
              </div>
              <h3 className="card-title h4 mb-3">Emergency Care</h3>
              <p className="card-text text-muted">
                24/7 emergency medical services with rapid response and expert
                care.
              </p>
              <button className="btn btn-outline-primary rounded-pill mt-3">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="row align-items-center g-5 mb-5">
        <div className="col-lg-6">
          <div className="pe-lg-5">
            <h2 className="display-6 fw-bold mb-4">Why Choose Our Clinic?</h2>
            <p className="lead text-muted mb-4">
              We combine cutting-edge medical technology with compassionate care
              to provide the best possible outcomes for our patients.
            </p>
            <div className="row g-3">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div
                    className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <span className="text-success">✓</span>
                  </div>
                  <span className="fw-semibold">Experienced Staff</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div
                    className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <span className="text-success">✓</span>
                  </div>
                  <span className="fw-semibold">Modern Equipment</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div
                    className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <span className="text-success">✓</span>
                  </div>
                  <span className="fw-semibold">Patient-Focused</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div
                    className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <span className="text-success">✓</span>
                  </div>
                  <span className="fw-semibold">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="position-relative">
            <div className="bg-primary bg-opacity-10 rounded-4 p-5 text-center">
              <span className="display-1">🏥</span>
              <h4 className="mt-3 mb-2">State-of-the-Art Facility</h4>
              <p className="text-muted mb-0">
                Modern medical equipment and comfortable patient rooms
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-5">
        <div className="bg-primary bg-opacity-10 rounded-4 p-5">
          <h2 className="display-6 fw-bold mb-3">Ready to Get Started?</h2>
          <p className="lead text-muted mb-4">
            Book your appointment today and experience the difference quality
            healthcare makes.
          </p>
          <button className="btn btn-primary btn-lg px-5 py-3 rounded-pill">
            Schedule Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
