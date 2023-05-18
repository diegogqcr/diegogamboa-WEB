import { W } from 'windstitch'

import { CardSection } from './card.component'
import Javascript from '../../public/assets/skills/javascript.png';

export type CardSectionProps = W.Infer<typeof CardSection>
export interface CardProps extends CardSectionProps {
    children: React.ReactNode
    href?: string
    src?: string
}