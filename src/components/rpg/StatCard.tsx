import styles from './StatCard.module.css'
import { XpBar } from './XpBar'
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  name: string
  level: number
  xp: number
  xpNext: number
  icon: LucideIcon
  color: string
}

export function StatCard({ name, level, xp, xpNext, icon: Icon, color }: StatCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.icon} style={{ color }}>
          <Icon size={24} />
        </div>
        <div>
          <h3 className={styles.title}>{name}</h3>
          <span className={styles.level}>Lvl {level}</span>
        </div>
      </div>
      <XpBar current={xp} max={xpNext} />
    </div>
  )
}
