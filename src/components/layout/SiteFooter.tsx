import Link from "next/link";
import { navigation, site, socials } from "@/content/site";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Text } from "@/components/ui/Text";
import { Spark } from "@/components/ui/Spark";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__identity">
          <Link href="/" className="site-footer__name">
            {site.name}
            <span lang="ar" dir="rtl" className="site-footer__arabic">
              {site.nameArabic}
            </span>
          </Link>
          <Text value={site.brandStatement} as="p" className="site-footer__statement" />
        </div>

        <nav aria-label="Footer" className="site-footer__nav">
          <p className="site-footer__heading">Navigate</p>
          <ul>
            {navigation.map((item) => (
              <li key={item.id}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/work">All work</Link>
            </li>
          </ul>
        </nav>

        <div className="site-footer__social">
          <p className="site-footer__heading">Elsewhere</p>
          <SocialLinks links={socials} />
        </div>
      </div>

      <div className="container site-footer__base">
        <Spark size={14} />
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <a href="#top" className="site-footer__top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
