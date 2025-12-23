'use client'

import { motion } from 'framer-motion'
import styles from './XpBar.module.css'

interface XpBarProps {
  current: number
  max: number
  label?: string
  color?: string // Optional override
}

export function XpBar({ current, max, label, color }: XpBarProps) {
  const percentage = Math.min(100, Math.max(0, (current / max) * 100));

  return (
    <div className={styles.container}>
      {label && (
        <div className={styles.label}>
          <span>{label}</span>
          <span>{current}/{max}</span>
        </div>
      )}
      <div className={styles.track}>
        <motion.div 
          className={styles.fill}
          style={{ backgroundColor: color }} // Override color if provided
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, steps: 10 }} // Stepped animation for retro feel?
        />
      </div>
    </div>
  )
}
