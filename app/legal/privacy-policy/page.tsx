import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="text-white mt-3 mb-6 mx-7">
      <h1 className="text-3xl text-center font-bold">Privacy Policy</h1>
      <section className="mt-5">
        We are committed to protecting your privacy and ensuring the security of
        your personal information. In compliance with all applicable laws, we
        collect only the necessary data to provide our services, specifically
        your name, email, Discord username, Xbox Gamertag, and age. We strictly
        adhere to legal requirements and industry best practices to safeguard
        your personal information.
      </section>
      <section className="mt-5">
        We do not collect any personal data beyond what is mentioned above. Your
        personal data is used solely for the purpose of enhancing your
        experience on our website and providing our services effectively. We
        guarantee that your data will never be sold or disclosed to any third
        parties under any circumstances.
      </section>
      <section className="mt-5">
        Should our web services be discontinued, we will ensure that all
        collected data is permanently deleted. We take your privacy seriously
        and are committed to protecting your personal information throughout its
        lifecycle, from collection to deletion.
      </section>
      <section className="mt-5">
        You have the right to access, modify, or delete your personal
        information at any time. If you choose to delete your account, all
        associated data will be permanently removed from our systems. We provide
        easy-to-use options for you to manage your personal data and ensure that
        your privacy preferences are respected at all times.
      </section>
      <section className="mt-4">
        If you have any questions or concerns about our privacy policy, please
        use our contact form with the subject line &quot;Privacy Policy
        Inquiry&quot; to get in touch with us. We are committed to protecting
        your privacy and will respond promptly to any inquiries regarding our
        privacy practices.
      </section>
      <div className="w-full text-center mt-4">
        <Link href={"/legal/cookies"} className="underline w-full text-center">
          Click here to see our Cookie Policy
        </Link>
      </div>
    </div>
  );
}
