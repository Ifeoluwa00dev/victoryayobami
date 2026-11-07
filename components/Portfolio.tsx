"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content as c } from "@/lib/content";

export default function Portfolio() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia(root.current ?? undefined);

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // HERO intro
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero-bar", { scaleY: 0, transformOrigin: "top", duration: 0.9 }, 0)
        .from(".hero-line > span", { yPercent: 115, duration: 1.1, stagger: 0.12 }, 0.1)
        .from(".hero-role", { y: 18, opacity: 0, duration: 0.7 }, "-=0.6")
        .from(".hero-tagline", { y: 18, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-contact > *", { y: 14, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.4");

      // Hero parallax orbs
      gsap.to(".orb-a", {
        yPercent: -35,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".orb-b", {
        yPercent: 25,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });

      // Generic reveals
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%" },
        });
      });

      // Staggered groups
      gsap.utils.toArray<HTMLElement>(".stagger").forEach((group) => {
        gsap.from(group.children, {
          y: 44,
          opacity: 0,
          duration: 0.85,
          stagger: 0.13,
          ease: "power3.out",
          scrollTrigger: { trigger: group, start: "top 84%" },
        });
      });

      // Timeline line draws as you scroll
      gsap.fromTo(
        ".tl-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: { trigger: ".tl", start: "top 70%", end: "bottom 65%", scrub: true },
        }
      );

      // Timeline dots pop
      gsap.utils.toArray<HTMLElement>(".tl-dot").forEach((dot) => {
        gsap.from(dot, {
          scale: 0,
          duration: 0.5,
          ease: "back.out(2.4)",
          scrollTrigger: { trigger: dot, start: "top 80%" },
        });
      });

      // Skills marquee
      gsap.to(".marquee-track", { xPercent: -50, ease: "none", repeat: -1, duration: 30 });

      // Card tilt on hover (desktop only)
      gsap.utils.toArray<HTMLElement>(".work-card").forEach((card) => {
        const move = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          gsap.to(card, { rotateY: x * 6, rotateX: -y * 6, duration: 0.4, ease: "power2.out" });
        };
        const leave = () =>
          gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: "power3.out" });
        card.addEventListener("mousemove", move);
        card.addEventListener("mouseleave", leave);
      });
    });

    return () => mm.revert();
  }, []);

  const marqueeSkills = [...c.skills, ...c.skills];

  return (
    <div ref={root}>
      {/* HERO */}
      <header className="hero">
        <span className="hero-bar" aria-hidden />
        <span className="orb orb-a" aria-hidden />
        <span className="orb orb-b" aria-hidden />
        <div className="wrap hero-grid">
          <div>
            <h1 className="hero-name">
              <span className="hero-line">
                <span className="teal">{c.name.first}</span>
              </span>
              <span className="hero-line">
                <span className="orange">{c.name.last}</span>
              </span>
            </h1>
            <p className="hero-role">{c.role}</p>
            <p className="hero-tagline">{c.tagline}</p>
          </div>
          <div className="hero-contact">
            <h2 className="mini-head">Contact details</h2>
            <a href={`mailto:${c.contact.email}`}>{c.contact.email}</a>
            <a href={`tel:${c.contact.phone.replace(/\s/g, "")}`}>{c.contact.phone}</a>
            <a href={c.contact.linkedin} target="_blank" rel="noopener noreferrer">
              {c.contact.linkedinLabel}
            </a>
            <span>{c.contact.location}</span>
          </div>
        </div>
      </header>

      {/* ABOUT + FOCUS */}
      <section className="band-teal">
        <div className="wrap">
          <div className="banner reveal">
            <span>Profile summary</span>
            <i aria-hidden />
          </div>
          <p className="about reveal">{c.about}</p>

          <div className="focus stagger">
            {c.focus.map((f, i) => (
              <article key={f.title} className="focus-item">
                <span className="badge">{String(i + 1).padStart(2, "0")}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section">
        <div className="wrap">
          <div className="banner banner-dark reveal">
            <span>Professional experience</span>
            <i aria-hidden />
          </div>

          <div className="tl">
            <span className="tl-line" aria-hidden />
            {c.experience.map((e) => (
              <article key={e.role} className="tl-item">
                <span className="tl-dot" aria-hidden />
                <div className="tl-date">{e.dates}</div>
                <div className="tl-body reveal">
                  <h3>{e.role}</h3>
                  <p className="company">{e.company}</p>
                  <ul>
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="section section-tint">
        <div className="wrap">
          <div className="banner banner-dark reveal">
            <span>Selected work</span>
            <i aria-hidden />
          </div>

          <div className="work-grid stagger">
            {c.work.map((w) => (
              <article key={w.title} className="work-card">
                <p className="work-context">{w.context}</p>
                <h3>{w.title}</h3>
                <p className="k">The problem</p>
                <p>{w.problem}</p>
                <p className="k">What I did</p>
                <p>{w.action}</p>
                {"outcome" in w && (w as { outcome?: string }).outcome ? (
                  <span className="chip">{(w as { outcome?: string }).outcome}</span>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS MARQUEE */}
      <section className="marquee" aria-label="Skills">
        <div className="marquee-track">
          {marqueeSkills.map((s, i) => (
            <span key={`${s}-${i}`} className="marquee-item">
              {s}
              <b aria-hidden>●</b>
            </span>
          ))}
        </div>
      </section>

      {/* EDUCATION / CERTS */}
      <section className="section">
        <div className="wrap two-col">
          <div className="reveal">
            <div className="banner banner-dark">
              <span>Education</span>
              <i aria-hidden />
            </div>
            {c.education.map((ed) => (
              <div key={ed.degree} className="edu">
                <strong>{ed.degree}</strong>
                <span>
                  {ed.school} | <em>{ed.year}</em>
                </span>
              </div>
            ))}
            <p className="langs">
              <strong>Languages:</strong> {c.languages.join(", ")}
            </p>
          </div>
          <div className="reveal">
            <div className="banner banner-dark">
              <span>Certifications</span>
              <i aria-hidden />
            </div>
            <ul className="cert-list">
              {c.certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap footer-inner reveal">
          <h2>Let&apos;s talk product.</h2>
          <a className="cta" href={`mailto:${c.contact.email}`}>
            {c.contact.email}
          </a>
          <p>
            © {new Date().getFullYear()} {c.name.first} {c.name.last}
          </p>
        </div>
      </footer>
    </div>
  );
}
