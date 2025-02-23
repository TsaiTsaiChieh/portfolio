/* eslint-disable max-len */
export const NavbarHref: { [index: string]: string } = {
  home: '#home',
  skills: '#skills',
  experience: '#experience',
  projects: '#projects',
}
export const SocialHref: { [index: string]: string } = {
  linkedIn:
    'https://www.linkedin.com/in/%E9%87%87%E6%BD%94-%E8%94%A1-211aa6151',
  cakeResume: 'https://www.cakeresume.com/tsaitsaichieh',
  github: 'https://github.com/TsaiTsaiChieh',
}
export const Personality: { [index: string]: string } = {
  adventurer: 'https://www.16personalities.com/isfp-personality',
}

export const SkillHref: { [skill in SkillCategory]: string[] } = {
  backend: [
    'https://expressjs.com',
    'https://fastapi.tiangolo.com',
    'https://firebase.google.com',
    'https://cheerio.js.org',
  ],
  frontend: [
    'https://redux-toolkit.js.org/tutorials/overview',
    'https://redux-toolkit.js.org/rtk-query/overview',
    'https://ngrx.io',
  ],
  devOps: [
    'https://azure.microsoft.com',
    'https://docs.docker.com/compose',
    'https://aws.amazon.com/ec2',
    'https://aws.amazon.com/s3',
    'https://aws.amazon.com/rds',
    'https://aws.amazon.com/codedeploy',
    'https://vercel.com',
  ],
}
export const ExperienceHref: { [index: string]: string[] } = {
  '0': [],
  '1': [],
  '2': [
    'https://github.com/TsaiTsaiChieh/sport-api',
    'https://github.com/TsaiTsaiChieh/sport-crawler',
  ],
  '3': [
    'https://github.com/TsaiTsaiChieh/stylish',
    'https://github.com/TsaiTsaiChieh/pet_home',
  ],
  '4': [],
  '5': [],
  '6': [
    'https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/login?o=dnclcdr&s=id=%22107NCTU5112002%22.&searchmode=basic',
  ],
  '7': [],
}
export const ProjectsHref: { [index: string]: string } = {
  '0': 'https://pet-adoption-next.vercel.app/pet',
  '1': 'https://never-stray-e15a5.web.app',
  '2': 'https://dotted-sign.web.app',
  '3': 'https://tsaitsaichieh.github.io/pokemon-boost-emblems',
  '4': 'https://tsaitsaichieh.github.io/chat-talker-ai',
}
export const ProjectsGithub: { [index: string]: string } = {
  '0': 'https://github.com/TsaiTsaiChieh/pet-adoption-next',
  '1': 'https://github.com/TsaiTsaiChieh/never-stray',
  '2': 'https://github.com/TsaiTsaiChieh/dotted-sign',
  '3': 'https://github.com/TsaiTsaiChieh/pokemon-boost-emblems',
  '4': 'https://github.com/TsaiTsaiChieh/pet_home',
}
