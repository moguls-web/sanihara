export default function Terms() {
  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up">
            Terms & Conditions
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
                <h2 className="text-3xl font-serif font-bold mb-4">Booking Terms</h2>
                <p className="text-muted-foreground mb-4">
                  All bookings are subject to availability and confirmation from The Sanihara Hotel & Resort. A valid
                  government-issued ID and credit card are required at the time of check-in.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Bookings must be made by guests 18 years or older</li>
                  <li>Advance payment or credit card guarantee may be required</li>
                  <li>Special requests are subject to availability</li>
                  <li>Room rates are subject to applicable taxes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Check-in & Check-out Policy</h2>
                <p className="text-muted-foreground mb-4">
                  <strong>Check-in Time:</strong> 2:00 PM<br />
                  <strong>Check-out Time:</strong> 12:00 PM (Noon)
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Early check-in subject to availability (additional charges may apply)</li>
                  <li>Late check-out available on request (additional charges may apply)</li>
                  <li>Valid photo ID and address proof required at check-in</li>
                  <li>Guests must settle all outstanding bills before check-out</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Cancellation & Refund Policy</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>24 hours before check-in:</strong> Full refund</li>
                  <li><strong>12-24 hours before check-in:</strong> 50% refund</li>
                  <li><strong>Less than 12 hours or no-show:</strong> No refund</li>
                  <li>Group bookings and event reservations may have different cancellation policies</li>
                  <li>Refunds will be processed within 7-10 business days</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  We accept the following payment methods:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Credit Cards (Visa, Mastercard, American Express)</li>
                  <li>Debit Cards</li>
                  <li>UPI and Digital Wallets</li>
                  <li>Bank Transfers</li>
                  <li>Cash (subject to applicable limits)</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  All rates are quoted in Indian Rupees (INR) and include applicable taxes unless otherwise stated.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Guest Conduct & House Rules</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Guests must respect other guests' privacy and maintain peaceful conduct</li>
                  <li>Smoking is prohibited in rooms and indoor areas (designated smoking areas available)</li>
                  <li>Pets are allowed in designated pet-friendly rooms only</li>
                  <li>Visitors must register at reception and adhere to visiting hours</li>
                  <li>Illegal activities are strictly prohibited</li>
                  <li>Any damage to property will be charged to the guest</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Damage & Liability</h2>
                <p className="text-muted-foreground">
                  Guests are liable for any damage caused to resort property during their stay. The resort reserves
                  the right to charge for repair or replacement of damaged items. The Sanihara Hotel & Resort is not
                  responsible for loss or damage to guests' personal belongings. We recommend using in-room safes for
                  valuables.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Force Majeure</h2>
                <p className="text-muted-foreground">
                  The Sanihara Hotel & Resort shall not be held liable for failure to perform obligations due to events
                  beyond reasonable control, including but not limited to natural disasters, acts of terrorism, civil
                  unrest, pandemics, or government restrictions.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Dispute Resolution</h2>
                <p className="text-muted-foreground">
                  Any disputes arising from these terms and conditions shall be subject to the exclusive jurisdiction
                  of courts in Wayanad, Kerala, India. The resort will make every effort to resolve disputes amicably
                  before legal proceedings.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Modifications to Terms</h2>
                <p className="text-muted-foreground">
                  The Sanihara Hotel & Resort reserves the right to modify these terms and conditions at any time.
                  Changes will be effective immediately upon posting on our website. Continued use of our services
                  constitutes acceptance of modified terms.
                </p>
              </div>

              <div className="border-t pt-8">
                <p className="text-muted-foreground">
                  For any questions or clarifications regarding these terms and conditions, please contact us at{" "}
                  <a href="mailto:info@thesanihara.com" className="text-brand hover:underline">
                    info@thesanihara.com
                  </a>{" "}
                  or call{" "}
                  <a href="tel:+911234567890" className="text-brand hover:underline">
                    +91-1234567890
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
