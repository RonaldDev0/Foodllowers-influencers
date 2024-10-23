'use client'
import { useData } from '@/store'

export function useColors () {
  const { darkMode } = useData()

  const backgroundColor = darkMode
    ? ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)']
    : ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)']

  const borderColor = darkMode
    ? ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)']
    : ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)']

  const colorBlack = darkMode ? 'white' : 'black'

  const x = {
    beginAtZero: true,
    ticks: {
      color: darkMode ? 'white' : 'gray',
      font: { size: 14 }
    },
    grid: { color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }
  }

  const preOptions = {
    responsive: true,
    animations: {
      tension: {
        duration: 1200,
        easing: 'easeInOutQuad',
        from: 1,
        to: 0,
        loop: false
      }
    },
    scales: { y: x, x }
  }

  return { backgroundColor, borderColor, colorBlack, preOptions }
}
