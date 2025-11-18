import { motion } from "framer-motion";

const ContactCard = ({ image, media, name, link }) => {
  const mediaMap = {
    linkedin: "#0077bf",
    mail: "#90bbefff",
    github: "#a732a7",
  };
  return (
    <>
      <motion.a
        href={link}
        target="_blank"
        whileHover={{
          scale: 1.1,
          color: mediaMap[media],
        }}
        whileTap={{ scale: 0.9 }}
        className="contact-card"
      >
        {image}
        <div>{name}</div>
      </motion.a>
    </>
  );
};

export default ContactCard;
