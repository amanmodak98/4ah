import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | 4Ability Hive',
  description: 'Learn how 4Ability Hive collects, uses, and protects your personal information. Our privacy policy outlines our commitment to data security and user privacy.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-6">
              <Shield className="w-4 h-4 text-orange" />
              <span className="text-sm font-bold text-orange">Your Privacy Matters</span>
            </div>
            <h1 className="text-5xl font-display font-black text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                At 4Ability Hive ("we," "us," or "our"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with our training programs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                By using our website and services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">1. Information We Collect</h2>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">1.1 Personal Information</h3>
              <p className="text-gray-700 mb-4">We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Contact Information:</strong> Name, email address, phone number, postal address</li>
                <li><strong>Educational Information:</strong> College/university name, course, year of study, academic performance</li>
                <li><strong>Professional Information:</strong> Company name, designation, work experience</li>
                <li><strong>Account Information:</strong> Username, password (encrypted), profile details</li>
                <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely through third-party payment processors)</li>
              </ul>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">1.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, referring URLs</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar technologies to enhance user experience</li>
              </ul>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">1.3 Information from Third Parties</h3>
              <p className="text-gray-700">
                We may receive information about you from educational institutions, corporate clients, or other third parties who refer you to our services.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our training programs and services</li>
                <li><strong>Communication:</strong> To send program updates, training materials, certificates, and respond to inquiries</li>
                <li><strong>Personalization:</strong> To customize training content based on your learning needs and progress</li>
                <li><strong>Payment Processing:</strong> To process transactions and send receipts</li>
                <li><strong>Analytics:</strong> To understand how our services are used and improve user experience</li>
                <li><strong>Marketing:</strong> To send promotional materials, newsletters, and updates (with your consent)</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">3.1 We May Share Your Information With:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Educational Institutions:</strong> Progress reports, attendance, and performance data with your college/university</li>
                <li><strong>Corporate Clients:</strong> Training completion reports for corporate-sponsored programs</li>
                <li><strong>Service Providers:</strong> Third-party vendors who assist with payment processing, email delivery, hosting, and analytics</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights and safety</li>
              </ul>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">3.2 We Do NOT:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Sell your personal information to third parties</li>
                <li>Share your data with unauthorized parties</li>
                <li>Use your information for purposes other than those stated in this policy without your consent</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Deliver personalized content and advertisements</li>
                <li>Improve website performance and security</li>
              </ul>
              <p className="text-gray-700 mt-4">
                You can control cookies through your browser settings. However, disabling cookies may limit certain features of our website.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Encryption of sensitive data (SSL/TLS)</li>
                <li>Secure servers and databases with restricted access</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Employee training on data protection practices</li>
              </ul>
              <p className="text-gray-700 mt-4">
                While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where consent is the legal basis</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please contact us using the details provided below.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">7. Data Retention</h2>
              <p className="text-gray-700">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Training records, certificates, and academic performance data may be retained for up to 7 years for compliance and verification purposes.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700">
                Our services are intended for individuals aged 16 and above. We do not knowingly collect personal information from children under 16. If we become aware that we have collected information from a child under 16, we will take steps to delete it promptly.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
              <p className="text-gray-700">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after changes are posted constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">4Ability Hive</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-orange" />
                    <a href="mailto:privacy@4ah.in" className="text-gray-700 hover:text-orange transition-colors">
                      privacy@4ah.in
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-orange" />
                    <a href="tel:+919999999999" className="text-gray-700 hover:text-orange transition-colors">
                      +91 99999 99999
                    </a>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-6">
                  We will respond to your inquiry within 30 business days.
                </p>
              </div>
            </div>

          </div>

          {/* Back to home */}
          <div className="text-center mt-12">
            <Link href="/" className="btn btn-outline btn-lg">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
