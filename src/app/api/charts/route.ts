/* eslint-disable camelcase */
import { NextRequest, NextResponse } from 'next/server'
import { supabase } from './supabase'
import { parseISO, getYear, getMonth, getDate, getDay } from 'date-fns'

type IMode = {
  category: string
  year: string
  month: string
  weekOfMonth: string
}

const labelSets: Record<string, string[]> = {
  año: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  mes: ['semana 1', 'semana 2', 'semana 3', 'semana 4'],
  semana: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  personalizado: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}

// Función para obtener el número del mes basado en el nombre del mes
function getMonthNumber (monthStr: string): string {
  const monthIndex = labelSets.año.findIndex(
    (mes) => mes.toLowerCase() === monthStr.toLowerCase()
  )
  return monthIndex >= 0 ? (monthIndex + 1).toString().padStart(2, '0') : '01' // Devuelve '01' si no se encuentra el mes
}

// Función para obtener detalles de la fecha usando date-fns
function getDateDetails (dateStr: string) {
  const date = parseISO(dateStr)
  return {
    year: getYear(date),
    month: getMonth(date) + 1,
    weekOfMonth: Math.ceil(getDate(date) / 7),
    day: getDay(date) + 1
  }
}

// Función para agrupar las ganancias
function groupEarnings (data: any[], mode: IMode) {
  const isYearMode = mode.category === 'año'
  const isMonthMode = mode.category === 'mes'
  const isWeekMode = mode.category === 'semana'

  const totalLength = isYearMode ? 12 : isMonthMode ? 4 : 7
  const earningsGrouped = new Array(totalLength).fill(0)

  return data.reduce((acc, current) => {
    const { year, month, weekOfMonth, day } = current.date
    const yearMatch = year === Number(mode.year)
    const monthMatch = labelSets.año[month - 1].toLowerCase() === mode.month.toLowerCase()
    const weekMatch = isWeekMode ? weekOfMonth === Number(mode.weekOfMonth) : true

    if (yearMatch && (monthMatch || isYearMode) && weekMatch) {
      const index = isYearMode
        ? month - 1
        : isMonthMode
          ? weekOfMonth - 1
          : day - 1

      acc[index] += current.earning
    }

    return acc
  }, earningsGrouped)
}

export async function POST (req: NextRequest) {
  const { mode, influencerId }: { mode: IMode, influencerId: string } = await req.json()

  let startDate = ''
  let endDate = ''

  switch (mode.category) {
    case 'año':
      startDate = `${mode.year}-01-01T00:00:00.000Z`
      endDate = `${mode.year}-12-31T23:59:59.999Z`
      break

    case 'mes': {
      const month = getMonthNumber(mode.month)
      const lastDayOfMonth = new Date(Number(mode.year), Number(month), 0).getDate()
      startDate = `${mode.year}-${month}-01T00:00:00.000Z`
      endDate = `${mode.year}-${month}-${lastDayOfMonth.toString().padStart(2, '0')}T23:59:59.999Z`
      break
    }

    case 'semana': {
      const month = getMonthNumber(mode.month)
      const weekStart = (Number(mode.weekOfMonth) - 1) * 7 + 1
      const weekEnd = weekStart + 6
      startDate = `${mode.year}-${month}-${weekStart.toString().padStart(2, '0')}T00:00:00.000Z`
      endDate = `${mode.year}-${month}-${weekEnd.toString().padStart(2, '0')}T23:59:59.999Z`
      break
    }

    default:
      throw new Error('Categoría no válida')
  }

  const { data, error } = await supabase
    .from('shipments')
    .select('created_at, transaction_amount->influencer')
    .eq('influencer_id', influencerId)
    .gte('created_at', startDate)
    .lte('created_at', endDate)

  if (error) return NextResponse.json({ error })

  const processedData = data.map(({ created_at, influencer }) => ({
    earning: influencer,
    date: getDateDetails(created_at)
  }))

  return NextResponse.json({
    labels: labelSets[mode.category],
    data: groupEarnings(processedData, mode)
  })
}
