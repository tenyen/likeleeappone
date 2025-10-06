import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";

export const BrandsStudiosWaitlist = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectTypes: "",
    frustration: ""
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
      const response = await fetch('https://formspree.io/f/mjkagdbk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          waitlistType: 'Brands & Studios Waitlist',
          projectTypes: formData.projectTypes,
          frustration: formData.frustration
        })
      });

      if (response.ok) {
        navigate('/thank-you'); // Redirect to ThankYou page
      } else {
        throw new Error('Failed to submit');
      }
      // Reset form regardless of success, or only on success if preferred
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        projectTypes: "",
        frustration: ""
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again or contact us directly.');
    }
  };

  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 h-[952px] min-h-px min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full">
        <div className="bg-white box-border caret-transparent min-h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          <main className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] py-16 md:py-24">
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
                    <div className="items-center bg-[oklab(0.711593_0.167053_0.0703646_/_0.1)] box-border caret-transparent flex h-12 justify-center outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-12 mr-3">
                      <img
                        src="https://c.animaapp.com/mg05rtqgllY9ko/assets/icon-8.svg"
                        alt="Icon"
                        className="text-red-400 box-border caret-transparent h-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-6"
                      />
                    </div>
                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                      <h1 className="text-3xl font-bold box-border caret-transparent leading-9 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] md:text-4xl">
                        Brands & Studios Waitlist
                      </h1>
                      <p className="text-neutral-500 text-lg box-border caret-transparent leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                        For directors & brands
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-neutral-500 text-lg box-border caret-transparent leading-7 max-w-screen-sm outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto">
                    Find and license authentic faces for your creative projects. Access diverse talent from our community.
                  </p>
                </div>

                {/* How It Works */}
                <div className="bg-white box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-6 border-2 border-black p-6 mb-8">
                  <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-center">
                    <h3 className="text-lg font-semibold box-border caret-transparent leading-7 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-4">
                      How It Works
                    </h3>
                    <div className="box-border caret-transparent gap-y-4 flex flex-col outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-left">
                      <div className="items-start box-border caret-transparent flex outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                        <div className="bg-red-400 box-border caret-transparent h-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-6 mr-3 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-white text-xs font-medium">1</span>
                        </div>
                        <p className="text-sm box-border caret-transparent leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                          Post a project brief or search our talent pool.
                        </p>
                      </div>
                      <div className="items-start box-border caret-transparent flex outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                        <div className="bg-red-400 box-border caret-transparent h-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-6 mr-3 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-white text-xs font-medium">2</span>
                        </div>
                        <p className="text-sm box-border caret-transparent leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                          License faces securely with proof-of-rights included.
                        </p>
                      </div>
                      <div className="items-start box-border caret-transparent flex outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                        <div className="bg-red-400 box-border caret-transparent h-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-6 mr-3 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-white text-xs font-medium">3</span>
                        </div>
                        <p className="text-sm box-border caret-transparent leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                          Download assets instantly and launch campaigns faster.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="bg-white box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-6 border-2 border-black p-8">
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
                          className="text-base bg-stone-50 box-border caret-transparent flex h-12 leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-start w-full border-2 border-black px-3 py-1 md:text-sm md:leading-5"
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
                          className="text-base bg-stone-50 box-border caret-transparent flex h-12 leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-start w-full border-2 border-black px-3 py-1 md:text-sm md:leading-5"
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
                        className="text-base bg-stone-50 box-border caret-transparent flex h-12 leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-start w-full border-2 border-black px-3 py-1 md:text-sm md:leading-5"
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
                        className="text-base bg-stone-50 box-border caret-transparent flex h-12 leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-start w-full border-2 border-black px-3 py-1 md:text-sm md:leading-5"
                      />
                    </div>

                    {/* Specific Questions */}
                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6">
                      <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 mb-2">
                        What type of projects are you most likely to use likenesses for?
                      </label>
                      <select
                        name="projectTypes"
                        value={formData.projectTypes}
                        onChange={handleInputChange}
                        className="text-base bg-stone-50 box-border caret-transparent flex h-12 leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-start w-full border-2 border-black px-3 py-1 md:text-sm md:leading-5"
                      >
                        <option value="">Select project type</option>
                        <option value="advertisements">Advertisements</option>
                        <option value="indie-films">Indie films</option>
                        <option value="ai-campaigns">AI campaigns</option>
                        <option value="fashion-shoots">Fashion shoots</option>
                        <option value="commercial-videos">Commercial videos</option>
                        <option value="social-media-content">Social media content</option>
                        <option value="multiple-types">Multiple project types</option>
                      </select>
                    </div>

                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6">
                      <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 mb-2">
                        What's your biggest frustration with current casting or sourcing talent?
                      </label>
                      <select
                        name="frustration"
                        value={formData.frustration}
                        onChange={handleInputChange}
                        className="text-base bg-stone-50 box-border caret-transparent flex h-12 leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-start w-full border-2 border-black px-3 py-1 md:text-sm md:leading-5"
                      >
                        <option value="">Select your biggest frustration</option>
                        <option value="too-expensive">Too expensive</option>
                        <option value="time-consuming">Too time-consuming</option>
                        <option value="limited-diversity">Limited diversity in talent pool</option>
                        <option value="complex-contracts">Complex contracts and legal issues</option>
                        <option value="scheduling-conflicts">Scheduling conflicts</option>
                        <option value="quality-consistency">Inconsistent quality</option>
                        <option value="geographic-limitations">Geographic limitations</option>
                        <option value="rights-management">Rights management complexity</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="text-sm font-medium items-center bg-red-400 caret-transparent gap-x-2 inline-flex shrink-0 h-10 justify-center leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 text-nowrap w-full px-4 py-0 border-2 border-black hover:bg-red-500 transition-colors"
                    >
                      Join Brands & Studios Waitlist
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
