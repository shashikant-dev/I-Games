export default function Contact() {
  return (
    <main className="pt-20 min-h-screen bg-theme-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-theme-text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-theme-text-secondary max-w-3xl mx-auto mb-8">
            Get in touch with our team to discuss your gaming and sports API requirements.
            We're here to help you build amazing gaming experiences.
          </p>

          <div className="max-w-md mx-auto bg-theme-bg-secondary rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-theme-text-primary">Email</h3>
                <p className="text-theme-text-secondary">info@igames.cloud</p>
              </div>
              <div>
                <h3 className="font-semibold text-theme-text-primary">Phone</h3>
                <p className="text-theme-text-secondary">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}