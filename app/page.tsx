import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center gap-4 main-section">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>
          Votre{" "}
          <span className={`${title({ color: "violet" })} changing-text`}>
            application
          </span>
          .<br />
          Adaptée à <span className={title({ color: "violet" })}>vos</span>{" "}
          besoins.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Sûr-mesure, rapide, sécurisée, réactive.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          as={NextLink}
          href="/login"
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Connexion
        </Link>
        <Link
          isExternal
          as={NextLink}
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  );
}
