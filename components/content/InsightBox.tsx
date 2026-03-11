'use client'

interface InsightBoxProps {
  children: React.ReactNode
  title?: string
  icon?: string
  type?: 'insight' | 'principle' | 'warning' | 'tip'
  className?: string
}

export function InsightBox({ children, title, icon, type = 'insight', className = '' }: InsightBoxProps) {
  const getTypeStyles = () => {
    switch (type) {
      case 'principle':
        return {
          containerClass: 'insight-box border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20',
          iconClass: 'text-yellow-600 dark:text-yellow-400',
          titleClass: 'text-yellow-900 dark:text-yellow-100',
          textClass: 'text-yellow-800 dark:text-yellow-200'
        }
      case 'warning':
        return {
          containerClass: 'border-l-4 border-red-400 bg-red-50 dark:bg-red-900/20 p-4',
          iconClass: 'text-red-600 dark:text-red-400',
          titleClass: 'text-red-900 dark:text-red-100',
          textClass: 'text-red-800 dark:text-red-200'
        }
      case 'tip':
        return {
          containerClass: 'border-l-4 border-green-400 bg-green-50 dark:bg-green-900/20 p-4',
          iconClass: 'text-green-600 dark:text-green-400',
          titleClass: 'text-green-900 dark:text-green-100', 
          textClass: 'text-green-800 dark:text-green-200'
        }
      default: // insight
        return {
          containerClass: 'border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-900/20 p-4',
          iconClass: 'text-blue-600 dark:text-blue-400',
          titleClass: 'text-blue-900 dark:text-blue-100',
          textClass: 'text-blue-800 dark:text-blue-200'
        }
    }
  }

  const styles = getTypeStyles()
  const defaultIcon = type === 'principle' ? '💡' : type === 'warning' ? '⚠️' : type === 'tip' ? '💡' : '💡'
  const displayIcon = icon || defaultIcon
  const defaultTitle = type === 'principle' ? 'Operations Principle' : type === 'warning' ? 'Important' : type === 'tip' ? 'Pro Tip' : 'Key Insight'

  return (
    <div className={`${styles.containerClass} ${className} rounded-lg`}>
      {(title || displayIcon) && (
        <div className="flex items-center mb-2">
          {displayIcon && (
            <span className={`${styles.iconClass} mr-2 text-lg`}>
              {displayIcon}
            </span>
          )}
          {title && (
            <h4 className={`font-semibold ${styles.titleClass}`}>
              {title}
            </h4>
          )}
          {!title && (
            <h4 className={`font-semibold ${styles.titleClass}`}>
              {defaultTitle}
            </h4>
          )}
        </div>
      )}
      <div className={styles.textClass}>
        {children}
      </div>
    </div>
  )
}