import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

const DecorativeBracket = ({ className }: { className?: string }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M40 1H1V40" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export default function LicensePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="pt-[100px]">
        <section className="relative bg-black py-[120px] lg:py-20 md:py-15">
          <div className="absolute top-0 left-0 w-10 h-10 text-[rgba(255,255,255,0.2)]">
            <DecorativeBracket />
          </div>
          <div className="absolute top-0 right-0 w-10 h-10 text-[rgba(255,255,255,0.2)] transform -scale-x-100">
            <DecorativeBracket />
          </div>
          <div className="absolute bottom-0 left-0 w-10 h-10 text-[rgba(255,255,255,0.2)] transform -scale-y-100">
            <DecorativeBracket />
          </div>
          <div className="absolute bottom-0 right-0 w-10 h-10 text-[rgba(255,255,255,0.2)] transform -scale-x-100 -scale-y-100">
            <DecorativeBracket />
          </div>
          
          <div className="container max-w-[900px]">
            <div className="text-center mb-16">
              <p className="sub-title">/ legal</p>
              <h1 className="h1 mt-4 mb-6">LICENSE</h1>
              <p className="text-text-secondary text-lg">
                Terms and conditions for using SurakshaSetu services and products.
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="h3 mb-4">Software License Agreement</h2>
                <p className="text-text-secondary">
                  This Software License Agreement ("Agreement") is entered into as of the date of purchase between SurakshaSetu Security ("Licensor") and the purchaser ("Licensee").
                </p>
              </div>

              <div>
                <h3 className="h4 mb-3">1. Grant of License</h3>
                <p className="text-text-secondary mb-4">
                  Subject to the terms of this Agreement, Licensor grants Licensee a non-exclusive, non-transferable license to use the SurakshaSetu cybersecurity software and services ("Software") for the term specified in the purchase agreement.
                </p>
                <ul className="space-y-2 text-text-secondary">
                  <li>• The license is limited to the number of devices specified in your plan</li>
                  <li>• Use is restricted to the organization named in the purchase agreement</li>
                  <li>• Licensee may not sublicense, rent, lease, or lend the Software</li>
                </ul>
              </div>

              <div>
                <h3 className="h4 mb-3">2. Restrictions</h3>
                <p className="text-text-secondary mb-4">
                  Licensee shall not:
                </p>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Modify, adapt, translate, reverse engineer, decompile, or disassemble the Software</li>
                  <li>• Remove or alter any copyright, trademark, or other proprietary notices</li>
                  <li>• Use the Software to develop competing products or services</li>
                  <li>• Share login credentials with unauthorized users</li>
                  <li>• Attempt to circumvent usage limitations or security features</li>
                </ul>
              </div>

              <div>
                <h3 className="h4 mb-3">3. Intellectual Property</h3>
                <p className="text-text-secondary">
                  All rights, title, and interest in and to the Software, including all intellectual property rights, remain with Licensor. This Agreement does not grant Licensee any ownership rights to the Software.
                </p>
              </div>

              <div>
                <h3 className="h4 mb-3">4. Support and Updates</h3>
                <p className="text-text-secondary">
                  During the term of this Agreement, Licensor will provide software updates, patches, and technical support as outlined in your service plan. Enterprise and Quantum plan customers receive priority support with guaranteed response times.
                </p>
              </div>

              <div>
                <h3 className="h4 mb-3">5. Data Privacy and Security</h3>
                <p className="text-text-secondary mb-4">
                  SurakshaSetu is committed to protecting your data:
                </p>
                <ul className="space-y-2 text-text-secondary">
                  <li>• All data is encrypted in transit and at rest using AES-256 encryption</li>
                  <li>• We comply with GDPR, CCPA, and other applicable data protection regulations</li>
                  <li>• Customer data is never sold or shared with third parties</li>
                  <li>• Detailed privacy policy available at surakshasetu.com/privacy</li>
                </ul>
              </div>

              <div>
                <h3 className="h4 mb-3">6. Warranty Disclaimer</h3>
                <p className="text-text-secondary">
                  THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. LICENSOR DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
                </p>
              </div>

              <div>
                <h3 className="h4 mb-3">7. Limitation of Liability</h3>
                <p className="text-text-secondary">
                  IN NO EVENT SHALL LICENSOR BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
              </div>

              <div>
                <h3 className="h4 mb-3">8. Termination</h3>
                <p className="text-text-secondary mb-4">
                  This Agreement is effective until terminated. Your rights under this license will terminate automatically without notice if you fail to comply with any term of this Agreement. Upon termination:
                </p>
                <ul className="space-y-2 text-text-secondary">
                  <li>• You must cease all use of the Software</li>
                  <li>• Delete all copies of the Software in your possession</li>
                  <li>• Return or destroy all confidential information received from Licensor</li>
                </ul>
              </div>

              <div>
                <h3 className="h4 mb-3">9. Governing Law</h3>
                <p className="text-text-secondary">
                  This Agreement shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 mt-8">
                <h3 className="h4 mb-3">Questions About Licensing?</h3>
                <p className="text-text-secondary mb-4">
                  If you have questions about this license agreement or need clarification on any terms, please contact our legal team.
                </p>
                <div className="space-y-2 text-text-secondary">
                  <p>Email: legal@surakshasetu.com</p>
                  <p>Phone: +1 234 456</p>
                </div>
              </div>

              <div className="text-center pt-8 border-t border-border">
                <p className="text-text-muted text-sm">
                  Last Updated: January 1, 2025<br />
                  © 2025 SurakshaSetu Security. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
