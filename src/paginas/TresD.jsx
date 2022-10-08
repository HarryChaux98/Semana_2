import { motion } from "framer-motion-3d";
<motion.pointLight animate={{ x: 2 }} />;
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

return (
  <motion.meshStandardMaterial
    initial="hidden"
    animate="visible"
    variants={variants}
  />
);