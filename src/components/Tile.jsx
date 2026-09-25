import { Link } from "react-router-dom";
import Photo from "./Photo";

export default function Tile({ n, title, body, to, img }) {
  return (
    <div>
      <Link to={to} className="relative block min-h-[22rem] rounded-2xl overflow-hidden group">
        <div className="absolute inset-0">
          {img ? (
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <Photo label={title} aspect="" className="h-full !rounded-none" />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navyDeep/90 via-navy/20 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end p-8">
          <p className="text-[0.75rem] font-bold tracking-[0.02em] uppercase text-gold">{n}</p>
          <h3 className="mt-2 text-[1.9rem] font-extrabold tracking-tight text-white">{title}</h3>
          <p className="mt-2 max-w-[22rem] text-white/85 text-sm">{body}</p>
        </div>
      </Link>
    </div>
  );
}
