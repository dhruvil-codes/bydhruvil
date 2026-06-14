'use client'
import { toast } from 'sonner'
import React from 'react'

interface ProjectType {
  link: string;
}

export function InteractiveLink({ children, project }: { children: React.ReactNode, project: ProjectType }) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      toast(
        'Looking for the code?', {
        duration: 9000,
        action: {
          label: 'Open Code',
          onClick: () => window.open(project.link, '_blank')
        }
      });
    };

    return (
      <a onClick={handleClick} href={project.link} target="_blank" rel="noopener noreferrer" className='bg-muted/50 group p-6 rounded-lg sm:justify-between border-border/50 border hover:border-border/80 hover:bg-muted/80 transition-all w-full flex flex-col justify-between'>
          {children}
      </a>
    );
}
