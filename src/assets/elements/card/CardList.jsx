import { motion } from "framer-motion";

const CardList = ({ text, handleClick, id }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 900, damping: 40 }}
      className="w-fit bg-slate-300 text-gray-900 rounded-xl p-2 cursor-pointer hover:bg-slate-400"
      onClick={() => handleClick(text)}
    >
      <input type="hidden" value={id} />
      {text}
    </motion.div>
  );
};

export default CardList;
