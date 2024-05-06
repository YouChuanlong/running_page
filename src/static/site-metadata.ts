interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: "🏃 Runner's Diary ",
  siteUrl: 'https://run.youchuanlong.com',
  logo: 'https://source.youchuanlong.com/blog/OSLO-14.png',
  description: '',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://blog.youchuanlong.com',
    },
    {
      name: 'Strava',
      url: 'https://www.strava.com/athletes/107854359'
    },
    {
      name: 'Page',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
