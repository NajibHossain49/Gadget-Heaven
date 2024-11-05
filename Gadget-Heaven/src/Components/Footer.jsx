import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="text-center container mx-auto pb-8">
        <h1 className="text-4xl font-bold pb-5">Gadget Heaven</h1>
        <p className="pb-5">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <hr />
      <footer className="flex justify-around container mx-auto mb-8">
        <div className="text-center flex flex-col gap-3 py-6">
          <h6 className="footer-title font-bold">Services</h6>
          <Link className="link link-hover" to="#">
            Product Support
          </Link>
          <Link className="link link-hover" to="#">
            Order Tracking
          </Link>
          <Link className="link link-hover" to="#">
            Shipping & Delivery
          </Link>
          <Link className="link link-hover" to="#">
            Returns
          </Link>
        </div>

        <div className="text-center flex flex-col gap-3 py-6">
          <h6 className="footer-title font-bold">Company</h6>
          <Link className="link link-hover" to="#">
            About Us
          </Link>
          <Link className="link link-hover" to="#">
            Careers
          </Link>
          <Link className="link link-hover" to="#">
            Contact
          </Link>
        </div>

        <div className="text-center flex flex-col gap-3 py-6">
          <h6 className="footer-title font-bold">Legal</h6>
          <Link className="link link-hover" to="#">
            Terms of Use
          </Link>
          <Link className="link link-hover" to="#">
            Privacy Policy
          </Link>
          <Link className="link link-hover" to="#">
            Cookie Policy
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
