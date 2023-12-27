import { AnimatePresence, motion } from "framer-motion";
import CardList from "../elements/card/CardList";
import ListContainer from "./ListContainer";

const MainContainer = ({ children, list, handleClick }) => {
  return (
    <div className="w-4/5 bg-slate-200 text-gray-900 min-h-96 rounded-2xl p-5">
      {children}
      <ListContainer>
        <AnimatePresence>
          {list &&
            list.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <CardList
                    key={item.id}
                    id={item.id}
                    text={item.value}
                    handleClick={() => {
                      handleClick(item.id);
                    }}
                  />
                </motion.div>
              );
            })}
        </AnimatePresence>
      </ListContainer>
    </div>
  );
};

export default MainContainer;
