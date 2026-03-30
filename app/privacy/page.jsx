export default function Privacy() {
  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up">
            Privacy Policy
          </h1>
          <p className="text-xl opacity-90 animate-fade-in">Last Updated: January 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <p className="text-muted-foreground">
                  At The Sanihara Hotel & Resort, we are committed to protecting your privacy and ensuring the security
                  of your personal information. This Privacy Policy explains how we collect, use, store, and protect
                  your data.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect the following types of information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <strong>Personal Information:</strong> Name, email address, phone number, postal address, date of
                    birth, government ID details
                  </li>
                  <li>
                    <strong>Booking Information:</strong> Check-in/out dates, room preferences, special requests
                  </li>
                  <li>
                    <strong>Payment Information:</strong> Credit card details, billing address (processed securely
                    through encrypted channels)
                  </li>
                  <li>
                    <strong>Communication Data:</strong> Emails, phone calls, feedback forms, and survey responses
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Website analytics, IP address, browser type, pages visited
                  </li>
                  <li>
                    <strong>Cookies:</strong> Small data files stored on your device to enhance user experience
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use your personal information for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Processing and managing your bookings and reservations</li>
                  <li>Providing customer service and responding to inquiries</li>
                  <li>Sending booking confirmations, updates, and important notices</li>
                  <li>Processing payments and preventing fraudulent transactions</li>
                  <li>Sending promotional offers and newsletters (with your consent)</li>
                  <li>Improving our services, website functionality, and guest experience</li>
                  <li>Complying with legal obligations and regulations</li>
                  <li>Conducting market research and analyzing usage patterns</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Data Storage & Security</h2>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your personal information from
                  unauthorized access, disclosure, alteration, or destruction. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                  <li>Secure Socket Layer (SSL) encryption for data transmission</li>
                  <li>Restricted access to personal information on a need-to-know basis</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Secure data centers with physical and digital safeguards</li>
                  <li>Regular staff training on data protection and privacy</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We retain your personal data only as long as necessary to fulfill the purposes outlined in this
                  policy or as required by law.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Sharing Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell your personal information to third parties. However, we may share your information
                  with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <strong>Service Providers:</strong> Payment processors, booking platforms, IT service providers
                  </li>
                  <li>
                    <strong>Business Partners:</strong> Travel agencies, tour operators (with your consent)
                  </li>
                  <li>
                    <strong>Legal Authorities:</strong> When required by law or to protect our legal rights
                  </li>
                  <li>
                    <strong>Corporate Transactions:</strong> In the event of merger, acquisition, or sale of assets
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  All third parties are required to maintain the confidentiality and security of your information.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Your Privacy Rights</h2>
                <p className="text-muted-foreground mb-4">You have the following rights regarding your personal data:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <strong>Access:</strong> Request a copy of the personal information we hold about you
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal data (subject to legal requirements)
                  </li>
                  <li>
                    <strong>Opt-out:</strong> Unsubscribe from marketing communications at any time
                  </li>
                  <li>
                    <strong>Data Portability:</strong> Request transfer of your data to another service provider
                  </li>
                  <li>
                    <strong>Restrict Processing:</strong> Request limitation on how we use your data
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To exercise these rights, please contact us at{" "}
                  <a href="mailto:privacy@thesanihara.com" className="text-brand hover:underline">
                    privacy@thesanihara.com
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Cookies Policy</h2>
                <p className="text-muted-foreground mb-4">
                  We use cookies to enhance your browsing experience. Types of cookies we use:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <strong>Essential Cookies:</strong> Required for website functionality
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how visitors use our website
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your settings and preferences
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  You can manage cookie preferences through your browser settings. Note that disabling cookies may
                  affect website functionality.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">GDPR Compliance</h2>
                <p className="text-muted-foreground">
                  If you are a resident of the European Economic Area (EEA), you have additional rights under the
                  General Data Protection Regulation (GDPR). We ensure compliance with GDPR requirements and provide
                  transparent information about data processing activities.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect
                  personal information from children. If you believe we have inadvertently collected information from a
                  child, please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal
                  requirements. We will notify you of significant changes by posting the updated policy on our website
                  with a revised "Last Updated" date.
                </p>
              </div>

              <div className="border-t pt-8">
                <h2 className="text-3xl font-serif font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                  please contact us:
                </p>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:privacy@thesanihara.com" className="text-brand hover:underline">
                      privacy@thesanihara.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+911234567890" className="text-brand hover:underline">
                      +91-1234567890
                    </a>
                  </p>
                  <p>
                    <strong>Address:</strong> 8/468A Lakkidi, Wayanad, Kerala 673576 – India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
