import Link from "next/link";

export default function CookiesPage() {
  return (
    <div className="text-white mt-3 mb-6 mx-7">
      <h1 className="text-3xl text-center font-bold">Cookie Policy</h1>
      <section className="mt-5">
        <h2 className="text-xl font-bold">General</h2>
        <p>
          We use session cookies and default anonymous website traffic cookies
          to ensure the proper functionality of our website and to monitor
          website traffic volume. Session cookies are temporary and are deleted
          after you close your browser, while anonymous website traffic cookies
          help us analyze how visitors use our website, allowing us to improve
          the user experience.
        </p>
      </section>
      <section className="mt-5">
        <h2 className="text-xl font-bold">Types of Cookies Used</h2>
        <h3 className="font-bold mt-2">Session Cookies:</h3>
        <p>
          These cookies are essential for the operation of our website. They
          enable you to navigate our site and use its features, such as
          accessing secure areas or making transactions. Session cookies are
          temporary and are deleted once you close your browser.
        </p>
        <h3 className="font-bold mt-2">Anonymous Website Traffic Cookies:</h3>
        <p>
          These cookies provide anonymous information about how visitors use our
          website. They help us analyze traffic patterns, identify popular
          pages, and improve our website&apos;s performance and content.
        </p>
      </section>
      <section className="mt-5">
        <h2 className="text-xl font-bold">Cookie Consent</h2>
        <p>
          By using our website, you consent to the use of session cookies and
          anonymous website traffic cookies as described in this policy. You can
          manage or delete cookies through your browser settings, although doing
          so may affect your experience on our website.
        </p>
      </section>
      <section className="mt-5">
        <h2 className="text-xl font-bold">Updates to the Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes
          in cookie usage or legal requirements. Any updates will be posted on
          this page, and we encourage you to review this policy periodically for
          any changes.
        </p>
      </section>
      <section className="mt-5">
        <h2 className="text-xl font-bold">Contact Information</h2>
        <p>
          If you have any questions or concerns about our cookie policy, please
          use our contact form with the subject line &quot;Cookie Policy
          Inquiry&quot; to get in touch with us. We are committed to protecting
          your privacy and will respond promptly to any inquiries regarding our
          privacy practices.
        </p>
      </section>
      <div className="w-full text-center mt-4">
        <Link
          href={"/legal/privacy-policy"}
          className="underline w-full text-center"
        >
          Click here to see our Privacy Policy
        </Link>
      </div>
    </div>
  );
}
