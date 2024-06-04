import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

import { createClient } from "@/prismicio";

const Footer = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <div>
      <Link href="/">Home</Link>

      <p className="text-xs">
        ©{new Date().getFullYear()} {settings.data.site_title}
      </p>

      <ul className="flex">
        {settings.data.navigation.map(({ link, label }) => (
          <li key={label}>
            <PrismicNextLink field={link} className="p-3">
              {label}
            </PrismicNextLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
