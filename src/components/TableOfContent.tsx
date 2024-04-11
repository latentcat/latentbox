"use client";

import { Link } from "@/navigation";
import { useEffect, useState } from "react";

export function TableOfContent() {
  const [sections, setSections] = useState<HTMLHeadingElement[]>([]);
  useEffect(() => {
    setSections([...document.getElementsByTagName("h2")]);
  }, []);

  if (sections.length === 0) return null;
  return (
    <div className="fixed z-10 right-0">
      {sections.map((section) => (
        <Link key={section.innerText} href={`#${section.id}`}>
          <div>{section.innerText}</div>
        </Link>
      ))}
    </div>
  );
}
