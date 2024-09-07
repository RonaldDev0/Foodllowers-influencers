import { Smartphone, Landmark, Globe, User } from 'lucide-react'
import { BankAccount, SocialNetworks, Name } from './Components'
import { PhoneNumber } from './Components/PhoneNumber'

export interface IStep {
  icon: any
  title: string
  component: any
  tableReference: string
}

const size = 40

export const registerSteps: IStep[] = [
  {
    icon: <User size={size} />,
    title: 'Nombre',
    component: <Name onClose={() => {}} />,
    tableReference: 'full_name'
  },
  {
    icon: <Smartphone size={size} />,
    title: 'Número de celular',
    component: <PhoneNumber onClose={() => {}} />,
    tableReference: 'phone_number'
  },
  {
    icon: <Globe size={size} />,
    title: 'Redes Sociales',
    component: <SocialNetworks onClose={() => {}} />,
    tableReference: 'social_networks'
  },
  {
    icon: <Landmark size={size} />,
    title: 'Cuenta Bancaria',
    component: <BankAccount onClose={() => {}} />,
    tableReference: 'bank_account'
  }
]
