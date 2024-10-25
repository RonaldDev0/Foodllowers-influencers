'use client'
import { useColors } from '../colors'
import type { IMode } from './index'
import { labelSets, supabaseData, getDateDetails, groupEarningsByCategory } from '../blackBox'

export function useData (mode: IMode, color: number) {
  const { backgroundColor, borderColor } = useColors()

  function generateData () {
    const data = supabaseData.map((item: any) => ({
      earning: item.transaction_amount.influencer,
      date: getDateDetails(item.created_at)
    }))

    switch (mode.category) {
      case 'año':
        return {
          labels: labelSets.año,
          data: groupEarningsByCategory(data, mode)
        }
      case 'mes':
        return {
          labels: labelSets.mes,
          data: groupEarningsByCategory(data, mode)
        }
      case 'semana':
        return {
          labels: labelSets.semana,
          data: groupEarningsByCategory(data, mode)
        }
      case 'personalizado':
        return {
          labels: labelSets.personalizado,
          data: groupEarningsByCategory(data, mode)
        }
      default:
        return {
          labels: labelSets.año,
          data: groupEarningsByCategory(data, mode)
        }
    }
  }

  const { data, labels }: any = generateData()

  return {
    labels,
    datasets: [
      {
        label: 'Ganancias',
        backgroundColor: backgroundColor[color],
        borderColor: borderColor[color],
        borderWidth: 2,
        data
      }
    ]
  }
}
