export type IAccordion = {
    onClick?: () => void
    show?: boolean
    title: string
    content: string
    id: number
}

export type IContainer = {
    children: React.ReactNode
    show: boolean
}

export type IButton = {
    onClick?: () => void
    children: React.ReactNode
}

export type IPanel = {
    children: React.ReactNode
}