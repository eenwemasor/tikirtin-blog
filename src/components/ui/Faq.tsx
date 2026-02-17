import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqs from "@/database/faqs.json";
import { Minus, Plus } from "lucide-react";

type Faq = {
  question: string;
  answer: string;
};

type FaqItemProps = {
  id: string;
  data: Faq;
  expandedId: string;
  setExpanded: React.Dispatch<React.SetStateAction<string>>;
};

const FaqItem = ({ id, expandedId, setExpanded, data }: FaqItemProps) => {
  const isOpen = id === expandedId;

  return (
    <div
      onClick={() => setExpanded(isOpen ? "" : id)}
      className={`p-10 rounded-lg cursor-pointer mb-3 ${isOpen ? "bg-secondary" : "bg-transparent"}`}
    >
      <div>
        <div className="flex justify-between">
          <motion.header initial={false} className="text-2xl mb-3 font-semibold">
            {data.question}
          </motion.header>
          {isOpen ? <Minus className="text-primary" /> : <Plus className="text-primary" />}
        </div>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="max-w-[70%]"
            >
              <p className="font-inter">{data.answer}</p>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Faq = () => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expandedId, setExpanded] = useState<string>(faqs[0].uuid);

  return faqs.map((faq) => (
    <FaqItem key={faq.uuid} data={faq} id={faq.uuid} expandedId={expandedId} setExpanded={setExpanded} />
  ));
};

export default Faq;
