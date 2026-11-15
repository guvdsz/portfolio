'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { PointerEvent } from 'react'

interface ProjectCardProps {
  href: string
  title: string
  description: string
  icon?: string
}

function moveSpotlight({ currentTarget, clientX, clientY, pointerType }: PointerEvent<HTMLAnchorElement>) {
  if (pointerType === 'touch') return

  const { left, top } = currentTarget.getBoundingClientRect()
  currentTarget.style.setProperty('--project-pointer-x', (clientX - left) + 'px')
  currentTarget.style.setProperty('--project-pointer-y', (clientY - top) + 'px')
}

export function ProjectCard({ href, title, description, icon }: ProjectCardProps) {
  return (
    <Link
      className="project-card"
      href={href}
      onPointerEnter={moveSpotlight}
      onPointerMove={moveSpotlight}
    >
      <span className="project-icon" aria-hidden="true">
        {icon && <Image src={icon} alt="" width={40} height={40} unoptimized />}
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  )
}
