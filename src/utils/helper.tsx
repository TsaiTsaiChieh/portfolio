export const aTag = (arr: string[]): JSX.Element[] =>
  arr.map((ele, idx) => (
    <a key={idx + 1} href={ele} target='_blank' rel='noopener noreferrer' />
  ))
