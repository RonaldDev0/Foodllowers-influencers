'use client'
import { faker } from '@faker-js/faker'
import { useColors } from '../colors'
import type { IMode } from './index'

const labelSets = {
  año: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  mes: ['semana 1', 'semana 2', 'semana 3', 'semana 4'],
  semana: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  personalizado: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}

const generateData = (labels: string[], min: number, max: number) =>
  labels.map(() => faker.number.int({ min, max }) * 2500)

export function useData (mode: IMode) {
  const { backgroundColor, borderColor } = useColors()

  const { labels, min, max } = (() => {
    switch (mode.category) {
      case 'mes': return { labels: labelSets.mes, min: 25, max: 250 }
      case 'semana': return { labels: labelSets.semana, min: 5, max: 50 }
      default: return { labels: labelSets.año, min: 100, max: 1000 }
    }
  })()

  const data = generateData(labels, min, max)

  return {
    labels,
    datasets: [
      {
        label: 'Ganancias',
        data,
        backgroundColor: backgroundColor[1],
        borderColor: borderColor[1],
        borderWidth: 2
      }
    ]
  }
}
