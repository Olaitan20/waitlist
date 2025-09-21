'use client';

import { useState } from "react";
import toast from "react-hot-toast";

export default function Form() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      const response = await fetch("https://flx-2v7a.onrender.com/api/v1/waitlist/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setEmail("");
      toast.success("🎉 Thanks for joining the waitlist!", {
        duration: 4000,
        style: {
          background: '#ffffff',
          padding: '16px',
          color: '#000',
          fontWeight: 600,
          fontSize: '12px',
          boxShadow: '0 12px 20px rgba(113,64,235,0.2)',
          borderRadius: '12px',
        },
        icon: '✅',
      });
    } catch (err) {
      toast.error("❌ Failed to join waitlist. Please try again.", {
        duration: 4000,
        style: {
          background: '#fff5f5',
          padding: '16px',
          color: '#d32f2f',
          fontWeight: 600,
          fontSize: '12px',
          boxShadow: '0 12px 20px rgba(255,0,0,0.1)',
          borderRadius: '12px',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center mt-4">
      <div className="relative w-full max-w-md">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-3 text-[16px] pr-32 border border-[#7140EB80] rounded-none bg-transparent focus:outline-none focus:ring-0 focus:bg-transparent"
        />

        <button
          type="submit"
          disabled={loading}
          className={`absolute top-1/2 right-1 transform -translate-y-1/2 font-bold text-white text-[12px] lg:text-[16px] py-2 px-4 rounded-none transition ${
            loading
              ? 'bg-gradient-to-r from-[#7140EB] to-[#FB8E8E] cursor-not-allowed'
              : 'bg-gradient-to-r from-[#7140EB] to-[#FB8E8E]'
          }`}
        >
          {loading ? "Joining..." : "Join Waitlist"}
        </button>
      </div>
    </form>
  );
}


