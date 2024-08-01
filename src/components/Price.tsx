"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    qa: [
      {
        question: "Coupe",
        answer: (
          <ul className="space-y-4 text-sm px-1">
            <li className="flex justify-between">
              <div className="">Coupe enfant</div>
              <div className="">
                <span className="text-neutral-400">30min • </span> 15€
              </div>
            </li>
            <li className="flex justify-between">
              <div className="">
                Coupe simple{" "}
                <span className="text-neutral-400">
                  (shampoing sur demande)
                </span>
              </div>
              <div className="">
                <span className="text-neutral-400">30min • </span> 18€
              </div>
            </li>
            <li className="flex justify-between">
              <div className="">
                Taillage barbe{" "}
                <span className="text-neutral-400">(seul sans soin)</span>
              </div>
              <div className="">
                <span className="text-neutral-400">30min • </span> 20€
              </div>
            </li>
            <li className="flex justify-between">
              <div className="">
                Coupe + Barbe{" "}
                <span className="text-neutral-400">
                  (taillage au coupe chou)
                </span>
              </div>
              <div className="">
                <span className="text-neutral-400">30min • </span> 24€
              </div>
            </li>
            <li className="flex justify-between">
              <div className="">Coupe + Design</div>
              <div className="">
                <span className="text-neutral-400">30min • </span> 25€
              </div>
            </li>
            <li className="flex justify-between">
              <div className="">Soins barbe + Blackmask</div>
              <div className="">
                <span className="text-neutral-400">30min • </span> 30€
              </div>
            </li>
            <li className="flex justify-between">
              <div className="">Coupe + Couleur</div>
              <div className="">
                <span className="text-neutral-400">2h • </span> 80€
              </div>
            </li>
            <li className="flex justify-between">
              <div className="">Coupe spécial</div>
              <div className="">
                <span className="text-neutral-400">45min • </span> 25€
              </div>
            </li>
            <li className="flex justify-between">
              <div className="">Coupe + Barbe + Blackmask</div>
              <div className="">
                <span className="text-neutral-400">45min • </span> de 30€ à 45€
              </div>
            </li>
          </ul>
        ),
      },
      {
        question: "Tresses & Locks",
        answer: (
          <ul className="space-y-4 text-sm px-1">
            <li className="flex justify-between">
              <div className="">
                Tresses collés <span className="text-neutral-400">- de 6</span>
              </div>
              <div className="">
                <span className="text-neutral-400">30min • </span> 30€
              </div>
            </li>
            <li className="flex justify-between">
              <div className="">
                Tresses collés <span className="text-neutral-400">+ de 6</span>
              </div>
              <div className="">
                <span className="text-neutral-400">1h • </span> 40€
              </div>
            </li>
            <li className="flex justify-between">
              <div className="">Coiffure mixte tresses + vanille</div>
              <div className="">
                <span className="text-neutral-400">1h • </span> 45€
              </div>
            </li>
            <li className="flex justify-between">
              <div className="">
                Reprise locks (- de 75){" "}
                <span className="text-neutral-400">
                  + 10€ si coiffure (vanilles, barrels twists etc...)
                </span>
              </div>
              <div className="">
                <span className="text-neutral-400">1h • </span> 40€
              </div>
            </li>
            <li className="flex justify-between">
              <div className="">
                Reprise locks (+ de 75){" "}
                <span className="text-neutral-400">
                  + 10€ si coiffure (vanilles, barrels twists etc...)
                </span>
              </div>
              <div className="">
                <span className="text-neutral-400">1h 15min • </span> 50€
              </div>
            </li>
            <li className="flex justify-between">
              <div className="">
                Départ locks (- de 75){" "}
                <span className="text-neutral-400">
                  + 10€ si coiffure (vanilles, barrels twists etc...)
                </span>
              </div>
              <div className="">
                <span className="text-neutral-400">1h 15min • </span> 55€
              </div>
            </li>
            <li className="flex justify-between">
              <div className="">
                Départ locks (+ de 75){" "}
                <span className="text-neutral-400">
                  + 10€ si coiffure (vanilles, barrels twists etc...)
                </span>
              </div>
              <div className="">
                <span className="text-neutral-400">1h 30min • </span> 65€
              </div>
            </li>
            <li className="flex justify-between">
              <div className="">Vanille sur dégradé</div>
              <div className="">
                <span className="text-neutral-400">1h • </span> 35€
              </div>
            </li>
            <li className="flex justify-between">
              <div className="">Vanille sur taper</div>
              <div className="">
                <span className="text-neutral-400">1h • </span> 45€
              </div>
            </li>
          </ul>
        ),
      },
      {
        question: "Abonnement coupe",
        answer: (
          <ul className="space-y-4 text-sm px-1">
            <li className="flex justify-between">
              <div className="">
                Abonnement coupe simple{" "}
                <span className="text-neutral-400">1 mois</span>
              </div>
              <div className="">
                <span className="text-neutral-400">30min • </span> 16€
              </div>
            </li>
            <li className="flex justify-between">
              <div className="">
                Abonnement coupe + barbe{" "}
                <span className="text-neutral-400">1 mois</span>
              </div>
              <div className="">
                <span className="text-neutral-400">30min • </span> 20€
              </div>
            </li>
          </ul>
        ),
      },
    ],
  },
];

export default function Price() {
  const fadeInRef = useRef(null);
  const fadeInInView = useInView(fadeInRef, {
    once: true,
  });

  const fadeUpVariants = {
    initial: {
      opacity: 0,
      y: 24,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.section id="faq">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <motion.h2
              className="text-balance bg-gradient-to-br from-30% bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent from-white to-white/40 sm:text-3xl md:text-4xl lg:text-5xl text-center mb-4"
              ref={fadeInRef}
              animate={fadeInInView ? "animate" : "initial"}
              variants={fadeUpVariants}
              initial={false}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
                type: "spring",
              }}
            >
              Nos Tarifs
            </motion.h2>
          </div>
          <motion.div
            className="container mx-auto my-12 max-w-5xl space-y-12"
            ref={fadeInRef}
            animate={fadeInInView ? "animate" : "initial"}
            variants={fadeUpVariants}
            initial={false}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.21, 0.47, 0.32, 0.98],
              type: "spring",
            }}
          >
            {faqs.map((faq, idx) => (
              <section key={idx}>
                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col items-center justify-center"
                >
                  {faq.qa.map((faq, idx) => (
                    <AccordionItem
                      key={idx}
                      value={faq.question}
                      className="w-full"
                    >
                      <AccordionTrigger className="text-xl">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
