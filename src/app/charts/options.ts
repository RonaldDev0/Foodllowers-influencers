import { useData } from '@/store'

export function useColors (title: String) {
  const { darkMode } = useData()

  const backgroundColor = ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)']
  const borderColor = ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)']

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom' as any,
        labels: {
          boxWidth: 20,
          padding: 15,
          font: {
            size: 14,
            color: darkMode ? 'white' : 'black'
          }
        }
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 20,
          weight: 'bold' as any,
          color: darkMode ? 'white' : 'black'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: darkMode ? 'white' : 'gray',
          font: { size: 14 }
        },
        grid: { color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }
      },
      x: {
        beginAtZero: true,
        ticks: {
          color: darkMode ? 'white' : 'gray',
          font: { size: 14 }
        },
        grid: { color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }
      }
    }
  }

  return { backgroundColor, borderColor, options }
}
