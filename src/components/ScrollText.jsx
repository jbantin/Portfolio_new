import Lenis from "lenis";
import { useEffect } from "react";
import { motion } from 'motion/react'


const ScrollText = ({ scroll }) => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [scroll])


  return (
    <div className="overflow-hidden w-[218px]">
      <motion.div className="flex" style={{ x: scroll }}>
        <p>jbantin<span className="text-orange-500">_webDevelopment_</span></p>
        <p>jbantin<span className="text-orange-500">_webDevelopment_</span></p>
        <p>jbantin<span className="text-orange-500">_webDevelopment_</span></p>
        <p>jbantin<span className="text-orange-500">_webDevelopment_</span></p>
        <p>jbantin<span className="text-orange-500">_webDevelopment_</span></p>
        <p>jbantin<span className="text-orange-500">_webDevelopment_</span></p>
        <p>jbantin<span className="text-orange-500">_webDevelopment_</span></p>
        <p>jbantin<span className="text-orange-500">_webDevelopment_</span></p>
        <p>jbantin<span className="text-orange-500">_webDevelopment_</span></p>
        <p>jbantin<span className="text-orange-500">_webDevelopment_</span></p>
      </motion.div>
    </div>

  )
}
export default ScrollText