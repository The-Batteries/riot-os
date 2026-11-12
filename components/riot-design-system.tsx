import type { ReactNode } from 'react'

type RiotModuleHeadingProps = {
  className?: string
  kickerClassName?: string
  kicker: ReactNode
  title: ReactNode
  description: ReactNode
  notice?: ReactNode
}

export function RiotModuleHeading({
  className,
  kickerClassName,
  kicker,
  title,
  description,
  notice,
}: RiotModuleHeadingProps) {
  return (
    <header className={['riot-module-heading', className].filter(Boolean).join(' ')}>
      <div className="riot-module-heading-copy">
        <span className={['riot-module-kicker', kickerClassName].filter(Boolean).join(' ')}>{kicker}</span>
        <h1 className="riot-module-title">{title}</h1>
        <p className="riot-module-description">{description}</p>
      </div>
      {notice}
    </header>
  )
}
