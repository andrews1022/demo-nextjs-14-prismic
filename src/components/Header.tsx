import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

import { createClient } from "@/prismicio";

const Header = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <div>
      <Link href="/">Home</Link>

      <nav>
        <ul>
          {settings.data.navigation.map((item) => {
            const { label, link } = item;

            return (
              <li key={label}>
                <PrismicNextLink field={link}>{label}</PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
