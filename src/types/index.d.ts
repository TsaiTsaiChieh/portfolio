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
