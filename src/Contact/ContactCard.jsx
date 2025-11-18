import { motion } from "framer-motion";

const ContactCard = ({ image, media, name }) => {
  const mediaMap = {
    linkedin: "#0077bf",
    mail: "#73a7e7",
    github: "#a732a7",
  };
  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.1,
          color: mediaMap[media],
        }}
        whileTap={{ scale: 0.9 }}
        className="contact-card"
      >
        {image}
        <div>{name}</div>
      </motion.div>
    </>
  );
};

export default ContactCard;
