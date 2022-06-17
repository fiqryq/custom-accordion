import { CSSProperties } from "react"

export type IExperiment = {
    onClick?: () => void
    show?: boolean
    title: string
    content: string
    id?: number
    className?: CSSProperties
}