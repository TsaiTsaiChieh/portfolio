import {SkillTags} from '../constant/Skill'
import {colors} from '../constant/Variables'

export const aTag = (arr: string[], i?: number): JSX.Element[] =>
  arr.map((ele, idx) => (
    <a
      key={i ? i : idx + 1}
      href={ele}
      target='_blank'
      rel='noopener noreferrer'
    />
  ))
export const tagColor = (val: string) => {
  switch (true) {
    case SkillTags.backend.includes(val):
      return colors.primary[200]
    case SkillTags.frontend.includes(val):
      return colors.primary[300]
    default:
      return colors.primary[400]
  }
}
