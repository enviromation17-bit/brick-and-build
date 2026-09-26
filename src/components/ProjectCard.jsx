import { Link } from "react-router-dom";
import Photo from "./Photo";

export default function ProjectCard({ to, kicker, name, location, summary, featured = false, img }) {
  return (
    <div className={featured ? "sm:col-span-2" : ""}>
      <Link
        to={to}
        className="relative block overflow-hidden border border-line bg-paper2 rounded-xl group card-lift"
      >
        {img ? (
          <div className={`overflow-hidden ${featured ? "aspect-video" : "aspect-[4/3]"}`}>
            <img
              src={img}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
        ) : (
          <Photo label={name} aspect={featured ? "aspect-video" : "aspect-[4/3]"} className="!rounded-none !border-0" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navyDeep via-navy/25 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-[0.75rem] font-bold tracking-[0.02em] uppercase text-gold">{kicker}</p>
          <h3 className="font-display mt-2 text-[1.55rem] sm:text-[1.7rem] text-white">{name}</h3>
          <p className="mt-1 text-[0.85rem] text-white/80">{location}</p>
          <p className="mt-2.5 max-w-[30rem] text-[0.88rem] text-white/65 opacity-90 group-hover:opacity-100 transition-opacity">{summary}</p>
          <span className="mt-3 inline-flex text-[0.78rem] font-bold text-gold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View project →
          </span>
        </div>
      </Link>
    </div>
  );
}
