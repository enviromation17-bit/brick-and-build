import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Photo from "./Photo";

export default function ProjectCard({ to, kicker, name, location, summary, featured = false, img }) {
  return (
    <motion.div whileHover="hover" initial="rest" animate="rest" className={featured ? "sm:col-span-2" : ""}>
      <Link to={to} className="relative block overflow-hidden border border-line bg-paper2 rounded-xl">
        {img ? (
          <div className={`overflow-hidden ${featured ? "aspect-video" : "aspect-[4/3]"}`}>
            <motion.img
              src={img}
              alt=""
              className="w-full h-full object-cover"
              variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        ) : (
          <Photo label={name} aspect={featured ? "aspect-video" : "aspect-[4/3]"} className="!rounded-none !border-0" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navyDeep via-navy/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-7">
          <p className="text-[0.75rem] font-bold tracking-[0.02em] uppercase text-gold">{kicker}</p>
          <h3 className="font-display mt-2 text-[1.7rem] text-white">{name}</h3>
          <p className="mt-1 text-[0.85rem] text-white/80">{location}</p>
          <p className="mt-2.5 max-w-[30rem] text-[0.88rem] text-white/65">{summary}</p>
        </div>
      </Link>
    </motion.div>
  );
}
