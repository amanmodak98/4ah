import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | 4Ability Hive',
  description: 'Read the terms and conditions for using 4Ability Hive services. Understand your rights, obligations, and our service policies.',
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-6">
              <FileText className="w-4 h-4 text-orange" />
              <span className="text-sm font-bold text-orange">Legal Agreement</span>
            </div>
            <h1 className="text-5xl font-display font-black text-white mb-4">
              Terms & Conditions
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
                Welcome to 4Ability Hive. These Terms and Conditions ("Terms") govern your access to and use of our website, training programs, and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Please read these Terms carefully before using our services. If you do not agree with any part of these Terms, you must not use our services.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">1. Definitions</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>"Company," "we," "us," or "our"</strong> refers to 4Ability Hive</li>
                <li><strong>"User," "you," or "your"</strong> refers to individuals or entities using our services</li>
                <li><strong>"Services"</strong> refers to all training programs, courses, workshops, and related offerings</li>
                <li><strong>"Platform"</strong> refers to our website and associated digital platforms</li>
                <li><strong>"Content"</strong> refers to training materials, documents, videos, and other resources</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">2. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By registering for our programs, accessing our platform, or using our services, you acknowledge that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You have read and understood these Terms</li>
                <li>You agree to be legally bound by these Terms</li>
                <li>You are at least 16 years of age or have parental/guardian consent</li>
                <li>You have the authority to enter into this agreement</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">3. Services Offered</h2>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">3.1 Training Programs</h3>
              <p className="text-gray-700 mb-4">We offer the following types of training programs:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Soft skills development</li>
                <li>Aptitude and reasoning training</li>
                <li>Communication skills enhancement</li>
                <li>Technical skills training</li>
                <li>Placement readiness programs</li>
                <li>Corporate training solutions</li>
              </ul>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">3.2 Service Delivery</h3>
              <p className="text-gray-700">
                Services may be delivered through in-person sessions, online classes, hybrid models, or recorded content. The mode of delivery will be specified at the time of enrollment.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">4. Registration and Enrollment</h2>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">4.1 Account Creation</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You must provide accurate and complete information during registration</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
                <li>You are solely responsible for all activities under your account</li>
              </ul>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">4.2 Enrollment Requirements</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You must meet the eligibility criteria specified for each program</li>
                <li>Enrollment is subject to availability and acceptance</li>
                <li>We reserve the right to refuse enrollment for any reason</li>
                <li>Enrollment confirmation is provided via email after payment verification</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">5. Payment Terms</h2>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">5.1 Fees</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Program fees are specified at the time of enrollment</li>
                <li>All fees are in Indian Rupees (INR) unless otherwise stated</li>
                <li>Fees are subject to change without prior notice (changes do not affect already enrolled students)</li>
                <li>Additional charges may apply for materials, certifications, or optional services</li>
              </ul>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">5.2 Payment Methods</h3>
              <p className="text-gray-700">
                We accept payments through credit/debit cards, UPI, net banking, and other approved payment methods. All payments are processed securely through third-party payment gateways.
              </p>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">5.3 Payment Schedule</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Full payment is required at the time of enrollment unless installment plans are offered</li>
                <li>Installment plans, if available, must be completed as per the agreed schedule</li>
                <li>Failure to make timely payments may result in suspension or termination of access</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">6. Refund and Cancellation Policy</h2>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">6.1 Cancellation by User</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Before program start:</strong> 80% refund if cancelled 7+ days before start date; 50% refund if cancelled 3-6 days before; No refund if cancelled within 2 days</li>
                <li><strong>After program start:</strong> No refund once the program has commenced</li>
                <li>Refunds are processed within 14-21 business days</li>
              </ul>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">6.2 Cancellation by Company</h3>
              <p className="text-gray-700">
                We reserve the right to cancel or reschedule programs due to insufficient enrollment, trainer unavailability, or unforeseen circumstances. In such cases, you will receive a full refund or be offered an alternative program.
              </p>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">6.3 Non-Refundable Items</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Registration and processing fees</li>
                <li>Physical materials already shipped</li>
                <li>Certification fees</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">7. User Obligations</h2>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">7.1 Attendance and Participation</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You must attend at least 75% of sessions to be eligible for certification</li>
                <li>Active participation in activities, assignments, and assessments is expected</li>
                <li>Punctuality and professional conduct are required during all sessions</li>
              </ul>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">7.2 Prohibited Conduct</h3>
              <p className="text-gray-700 mb-4">You agree NOT to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Share, distribute, or resell training materials without authorization</li>
                <li>Record, screenshot, or reproduce content without permission</li>
                <li>Use our services for unlawful or fraudulent purposes</li>
                <li>Engage in disruptive, abusive, or disrespectful behavior</li>
                <li>Impersonate others or provide false information</li>
                <li>Attempt to access unauthorized areas of the platform</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">8. Intellectual Property Rights</h2>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">8.1 Ownership</h3>
              <p className="text-gray-700">
                All content, materials, trademarks, logos, and intellectual property provided through our services are owned by 4Ability Hive or licensed to us. This includes but is not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Training modules and curriculum</li>
                <li>Videos, presentations, and documents</li>
                <li>Assessments and evaluation tools</li>
                <li>Website design and functionality</li>
              </ul>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">8.2 Limited License</h3>
              <p className="text-gray-700">
                We grant you a limited, non-exclusive, non-transferable license to access and use our materials solely for your personal learning purposes. You may not modify, reproduce, distribute, or create derivative works.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">9. Certifications and Credentials</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Certificates are issued upon successful completion of program requirements</li>
                <li>Certificates are valid and verifiable through our platform</li>
                <li>We reserve the right to revoke certificates if obtained fraudulently</li>
                <li>Digital certificates are provided by default; physical copies may incur additional charges</li>
              </ul>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">10. Disclaimers and Limitations of Liability</h2>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">10.1 Service Disclaimer</h3>
              <p className="text-gray-700">
                Our services are provided "as is" without warranties of any kind, express or implied. We do not guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Specific learning outcomes or employment results</li>
                <li>Uninterrupted or error-free access to our platform</li>
                <li>Accuracy or completeness of third-party content</li>
              </ul>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">10.2 Limitation of Liability</h3>
              <p className="text-gray-700">
                To the maximum extent permitted by law, 4Ability Hive shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of data, profits, or opportunities</li>
                <li>Damages exceeding the fees paid for the specific program</li>
              </ul>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">11. Privacy and Data Protection</h2>
              <p className="text-gray-700">
                Your use of our services is also governed by our <Link href="/privacy-policy" className="text-orange font-semibold hover:underline">Privacy Policy</Link>. We are committed to protecting your personal information in accordance with applicable data protection laws.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">12. Termination</h2>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">12.1 By User</h3>
              <p className="text-gray-700">
                You may terminate your account at any time, subject to our cancellation and refund policy.
              </p>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">12.2 By Company</h3>
              <p className="text-gray-700 mb-4">We may suspend or terminate your access immediately if you:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Violate these Terms</li>
                <li>Engage in prohibited conduct</li>
                <li>Fail to make required payments</li>
                <li>Provide false or misleading information</li>
              </ul>
            </div>

            {/* Section 13 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">13. Dispute Resolution</h2>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">13.1 Informal Resolution</h3>
              <p className="text-gray-700">
                In the event of any dispute, both parties agree to attempt informal resolution through good-faith negotiation before pursuing formal proceedings.
              </p>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">13.2 Arbitration</h3>
              <p className="text-gray-700">
                Any disputes that cannot be resolved informally shall be settled through binding arbitration in accordance with Indian arbitration laws.
              </p>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 mt-6">13.3 Governing Law</h3>
              <p className="text-gray-700">
                These Terms are governed by the laws of India. The courts of [Your City] shall have exclusive jurisdiction over any disputes.
              </p>
            </div>

            {/* Section 14 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">14. Force Majeure</h2>
              <p className="text-gray-700">
                We shall not be liable for any failure to perform our obligations due to circumstances beyond our reasonable control, including but not limited to natural disasters, pandemics, government actions, strikes, or technical failures.
              </p>
            </div>

            {/* Section 15 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">15. Modifications to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page with a revised "Last updated" date. Your continued use of our services after changes constitutes acceptance of the modified Terms.
              </p>
            </div>

            {/* Section 16 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">16. Severability</h2>
              <p className="text-gray-700">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </div>

            {/* Section 17 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">17. Entire Agreement</h2>
              <p className="text-gray-700">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and 4Ability Hive regarding the use of our services.
              </p>
            </div>

            {/* Section 18 */}
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">18. Contact Information</h2>
              <p className="text-gray-700 mb-6">
                For questions, concerns, or clarifications regarding these Terms, please contact us:
              </p>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">4Ability Hive</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-orange" />
                    <a href="mailto:legal@4ah.in" className="text-gray-700 hover:text-orange transition-colors">
                      legal@4ah.in
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-orange" />
                    <a href="tel:+919999999999" className="text-gray-700 hover:text-orange transition-colors">
                      +91 99999 99999
                    </a>
                  </div>
                </div>
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
