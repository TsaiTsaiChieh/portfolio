declare module '*.jpg'
declare module '*.svg'
declare module '*.png'

type SkillCategory = 'backend' | 'frontend' | 'devOps'
type SkillTreeType = {
  name: string
  learnings: string[]
  icons: JSX.Element[]
  details: JSX.Element
}
type MilestoneType = {
  jobTitle: string
  company: string
  interval: string
  icon: string
  mainTask: string
  tasks: string[]
  links: string[]
  tags: string[]
}
type ProjectItemType = {
  name: string
}
