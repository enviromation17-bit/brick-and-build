import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const META = {
  "/": {
    title: "Bricks & Built Developers — Toba Tek Singh & Pakpattan Property",
    description:
      "Established property development in Pakpattan, Punjab. Pak City Housing Society delivered. Next project: Toba Tek Singh — land, residential and commercial plots.",
  },
  "/about": {
    title: "About — Bricks & Built Developers",
    description:
      "Bricks & Built Developers is based in Pakpattan, Punjab. Led by CEO Waseem Bari with ten years in real estate and land development.",
  },
  "/services": {
    title: "Services — Land, Commercial & Residential | Bricks & Built",
    description:
      "Land development, commercial and residential projects across Punjab. Transparent delivery from Bricks & Built Developers.",
  },
  "/projects": {
    title: "Projects — Pak City & Toba Tek Singh | Bricks & Built",
    description:
      "Pak City Housing Society (Pakpattan) delivered. Toba Tek Singh project underway. View our portfolio.",
  },
  "/projects/toba-tek-singh": {
    title: "Toba Tek Singh Housing Project | Bricks & Built Developers",
    description:
      "Toba Tek Singh community project represented by Bricks & Built. 20 acres. Sales not yet open — register interest for updates.",
  },
  "/projects/pak-city": {
    title: "Pak City Housing Society, Pakpattan | Bricks & Built",
    description:
      "Pak City Housing Society — 29 acres across three sites in Pakpattan. Residential and commercial development by Bricks & Built.",
  },
  "/contact": {
    title: "Contact — Bricks & Built Developers",
    description:
      "Contact Bricks & Built in Pakpattan. WhatsApp 03011783333, 9 AM–10 PM daily. Enquire about Pak City or Toba Tek Singh.",
  },
};

const DEFAULT = META["/"];

function setMeta(name, content, attr = "name") {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function PageMeta() {
  const { pathname } = useLocation();
  const entry = META[pathname] || DEFAULT;

  useEffect(() => {
    document.title = entry.title;
    setMeta("description", entry.description);
    setMeta("og:title", entry.title, "property");
    setMeta("og:description", entry.description, "property");
    setMeta("twitter:title", entry.title);
    setMeta("twitter:description", entry.description);
  }, [pathname, entry.title, entry.description]);

  return null;
}
