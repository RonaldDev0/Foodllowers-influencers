'use client'
import { useColors } from '../colors'

export function useOptions () {
  const { colorBlack, preOptions } = useColors()

  return {
    ...preOptions,
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          boxWidth: 20,
          padding: 15,
          font: {
            size: 14,
            color: colorBlack
          }
        }
      },
      title: {
        display: true,
        text: 'Ganancias',
        font: {
          size: 20,
          weight: 'bold',
          color: colorBlack
        }
      }
    }
  }
}
