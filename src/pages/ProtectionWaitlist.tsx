import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";

export const ProtectionWaitlist = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notifications: "",
    protectionLevel: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          waitlistType: 'Protection Waitlist',
          notificationPreference: formData.notifications,
          protectionLevel: formData.protectionLevel
        })
      });

      const responseData = await response.json();
      
      if (responseData.success) {
        alert('🎉 Successfully joined the Protection Waitlist! Your likeness is now being protected.');
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          notifications: "",
          protectionLevel: ""
        });
      } else {
        throw new Error(responseData.error || 'Failed to submit');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(`Something went wrong: ${error.message}. Please try again or contact us directly.`);
    }
  };

  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 h-[952px] min-h-px min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full">
        <div className="bg-white box-border caret-transparent min-h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          <main className="bg-[linear-gradient(oklab(0.979073_0.0000444055_0.0000195503_/_0.3)_0%,rgb(255,255,255)_50%,oklab(0.839909_-0.141908_-0.0158958_/_0.05)_100%)] box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] py-16 md:py-24">
            <div className="box-border caret-transparent max-w-none outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full mx-auto px-4 md:max-w-screen-xl">
              <div className="box-border caret-transparent max-w-screen-md outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto">
                
                {/* Header */}
                <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-center mb-12">
                  <button 
                    onClick={() => navigate('/')}
                    className="text-sm text-neutral-500 items-center box-border caret-transparent flex justify-center leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6 mx-auto hover:text-zinc-900"
                  >
                    ← Back to Home
                  </button>
                  
                  <div className="items-center box-border caret-transparent flex justify-center outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6">
                    <div className="items-center bg-[oklab(0.890537_0.003488_0.133287_/_0.1)] box-border caret-transparent flex h-12 justify-center outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-12 mr-3 rounded-[14px]">
                      <img
                        src="https://c.animaapp.com/mg05rtqgllY9ko/assets/icon-10.svg"
                        alt="Icon"
                        className="text-orange-300 box-border caret-transparent h-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-6"
                      />
                    </div>
                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                      <h1 className="text-3xl font-bold box-border caret-transparent leading-9 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] md:text-4xl">
                        Protect My Likeness
                      </h1>
                      <p className="text-neutral-500 text-lg box-border caret-transparent leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                        For rights protection
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-neutral-500 text-lg box-border caret-transparent leading-7 max-w-screen-sm outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto">
                    Claim your likeness and ensure it cannot be used without permission. Control without licensing — just protection.
                  </p>
                </div>

                {/* How It Works */}
                <div className="bg-white box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-6 border border-zinc-900/10 p-6 rounded-[14px] border-solid mb-8">
                  <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-center">
                    <h3 className="text-lg font-semibold box-border caret-transparent leading-7 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-4">
                      How It Works
                    </h3>
                    <div className="box-border caret-transparent gap-y-4 flex flex-col outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-left">
                      <div className="items-start box-border caret-transparent flex outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                        <div className="bg-orange-300 box-border caret-transparent h-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-6 mr-3 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-white text-xs font-medium">1</span>
                        </div>
                        <p className="text-sm box-border caret-transparent leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                          Claim your likeness and verify your identity once.
                        </p>
                      </div>
                      <div className="items-start box-border caret-transparent flex outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                        <div className="bg-orange-300 box-border caret-transparent h-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-6 mr-3 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-white text-xs font-medium">2</span>
                        </div>
                        <p className="text-sm box-border caret-transparent leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                          Lock in rights — choose to opt-out of all licensing.
                        </p>
                      </div>
                      <div className="items-start box-border caret-transparent flex outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                        <div className="bg-orange-300 box-border caret-transparent h-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-6 mr-3 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-white text-xs font-medium">3</span>
                        </div>
                        <p className="text-sm box-border caret-transparent leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                          Receive alerts if your face appears in AI projects without consent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(251,146,60)_0px_0px_0px_2px,rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-6 border border-[oklab(0.890537_0.003488_0.133287_/_0.3)] p-8 rounded-[14px] border-solid">
                  <form onSubmit={handleSubmit} className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                    
                    {/* Basic Info */}
                    <div className="box-border caret-transparent gap-x-3 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-3 mb-4 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
                      <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                        <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="text-base bg-stone-50 box-border caret-transparent flex h-12 leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-start w-full border px-3 py-1 rounded-lg border-solid border-transparent md:text-sm md:leading-5"
                        />
                      </div>
                      <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                        <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last name (optional)"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="text-base bg-stone-50 box-border caret-transparent flex h-12 leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-start w-full border px-3 py-1 rounded-lg border-solid border-transparent md:text-sm md:leading-5"
                        />
                      </div>
                    </div>

                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-4">
                      <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="text-base bg-stone-50 box-border caret-transparent flex h-12 leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-start w-full border px-3 py-1 rounded-lg border-solid border-transparent md:text-sm md:leading-5"
                      />
                    </div>

                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6">
                      <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="text-base bg-stone-50 box-border caret-transparent flex h-12 leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-start w-full border px-3 py-1 rounded-lg border-solid border-transparent md:text-sm md:leading-5"
                      />
                    </div>

                    {/* Specific Questions */}
                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6">
                      <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 mb-2">
                        Do you want to be notified if your face appears in an AI project without consent?
                      </label>
                      <select
                        name="notifications"
                        value={formData.notifications}
                        onChange={handleInputChange}
                        className="text-base bg-stone-50 box-border caret-transparent flex h-12 leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-start w-full border px-3 py-1 rounded-lg border-solid border-transparent md:text-sm md:leading-5"
                      >
                        <option value="">Select your preference</option>
                        <option value="yes-immediately">Yes, notify me immediately</option>
                        <option value="yes-weekly">Yes, send me weekly reports</option>
                        <option value="yes-monthly">Yes, send me monthly summaries</option>
                        <option value="major-violations-only">Only for major violations</option>
                        <option value="no-notifications">No, I don't want notifications</option>
                      </select>
                    </div>

                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6">
                      <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 mb-2">
                        What level of protection do you care about most?
                      </label>
                      <select
                        name="protectionLevel"
                        value={formData.protectionLevel}
                        onChange={handleInputChange}
                        className="text-base bg-stone-50 box-border caret-transparent flex h-12 leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-start w-full border px-3 py-1 rounded-lg border-solid border-transparent md:text-sm md:leading-5"
                      >
                        <option value="">Select protection level</option>
                        <option value="tracking-unauthorized">Tracking unauthorized use</option>
                        <option value="legal-support">Legal support for violations</option>
                        <option value="complete-opt-out">Complete opt-out from AI use</option>
                        <option value="takedown-assistance">Takedown assistance</option>
                        <option value="all-protection">All protection features</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="text-sm font-medium items-center bg-orange-300 caret-transparent gap-x-2 inline-flex shrink-0 h-10 justify-center leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 text-nowrap w-full px-4 py-0 rounded-lg hover:bg-orange-400 transition-colors"
                    >
                      Protect My Likeness
                      <img
                        src="https://c.animaapp.com/mg05rtqgllY9ko/assets/icon-13.svg"
                        alt="Icon"
                        className="box-border caret-transparent shrink-0 h-4 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-nowrap w-4 ml-2"
                      />
                    </button>

                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-center mt-6">
                      <p className="text-neutral-500 text-xs box-border caret-transparent leading-4 max-w-md outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-3 mx-auto">
                        By joining, you agree to receive updates about likelee.ai. We respect your privacy and won't spam you.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};
