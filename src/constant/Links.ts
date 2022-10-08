export const NavbarHref: {[index: string]: string} = {
  home: '#home',
  skills: '#skills',
  experience: '#experience',
  projects: '#projects',
}
export const SocialHref: {[index: string]: string} = {
  linkedIn:
    'https://www.linkedin.com/in/%E9%87%87%E6%BD%94-%E8%94%A1-211aa6151',
  cakeResume: 'https://www.cakeresume.com/tsaitsaichieh',
  github: 'https://github.com/TsaiTsaiChieh',
}
export const Personality: {[index: string]: string} = {
  adventurer: 'https://www.16personalities.com/isfp-personality',
}

export const SkillHref: {[skill in SkillCategory]: string[]} = {
  backend: [
    'https://expressjs.com',
    'https://fastapi.tiangolo.com',
    'https://firebase.google.com',
    'https://cheerio.js.org',
  ],
  frontend: [
    'https://redux-toolkit.js.org/tutorials/overview',
    'https://redux-toolkit.js.org/rtk-query/overview',
    'https://styled-components.com',
  ],
  devOps: [
    'https://aws.amazon.com/ec2',
    'https://aws.amazon.com/s3',
    'https://aws.amazon.com/rds',
    'https://aws.amazon.com/codedeploy',
    'https://cloud.google.com/compute',
    'https://pm2.keymetrics.io',
    'https://docs.docker.com/compose',
  ],
}
