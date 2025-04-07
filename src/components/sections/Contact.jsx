import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "emailjs-com";
import { useTheme } from "../../context/ThemeContext";
export const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => alert("something went wrong."));
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="px-4 w-150">
        <h2 className="text-4xl tracking-[-0.08em] font-black mb-8 bg-gradient-to-br from-orange-500 to-zinc-400 bg-clip-text text-transparent">
          Contact
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <motion.div
            initial={{
              transform: "translateX(300px)",
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              transform: "translateX(0px)",
              opacity: 1,
              scale: 1,
              transition: { duration: 0.7 },
            }}
          >
            <div className="relative">
              <input
                type="text"
                value={formData.name}
                id="name"
                name="name"
                required
                className={`w-full rounded px-4 py-3 transition focus:outline-none focus:border-orange-400 ${
                  isDarkMode
                    ? "bg-white/5 border border-white/10 text-white focus:bg-blue-500/5"
                    : "bg-white/90 border border-gray-300 text-gray-800 focus:bg-orange-50"
                }`}
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
          </motion.div>
          <motion.div
            initial={{
              transform: "translateX(-300px)",
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              transform: "translateX(0px)",
              opacity: 1,
              scale: 1,
              transition: { duration: 0.9 },
            }}
          >
            <div className="relative">
              <input
                type="email"
                value={formData.email}
                id="email"
                name="email"
                required
                className={`w-full rounded px-4 py-3 transition focus:outline-none focus:border-orange-400 ${
                  isDarkMode
                    ? "bg-white/5 border border-white/10 text-white focus:bg-blue-500/5"
                    : "bg-white/90 border border-gray-300 text-gray-800 focus:bg-orange-50"
                }`}
                placeholder="Email..."
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </motion.div>
          <motion.div
            initial={{
              transform: "translateX(300px)",
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              transform: "translateX(0px)",
              opacity: 1,
              scale: 1,
              transition: { duration: 1.2 },
            }}
          >
            <div className="relative">
              <textarea
                value={formData.message}
                id="message"
                name="message"
                required
                rows={5}
                className={`w-full rounded px-4 py-3 transition focus:outline-none focus:border-orange-400 ${
                  isDarkMode
                    ? "bg-white/5 border border-white/10 text-white focus:bg-blue-500/5"
                    : "bg-white/90 border border-gray-300 text-gray-800 focus:bg-orange-50"
                }`}
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
          </motion.div>
          <motion.div
            initial={{
              transform: "translateX(-300px)",
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              transform: "translateX(0px)",
              opacity: 1,
              scale: 1,
              transition: { duration: 1.5 },
            }}
          >
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 px-6 rounded font-medium transistion relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </motion.div>
        </form>
      </div>
    </section>
  );
};
