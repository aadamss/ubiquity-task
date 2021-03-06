// The file path where the XML sitemap file is written to.
const filePath = '../sitemaps/sitemap.xml';

// The subpages of the website that need to be placed in a sitemap, with custom config options.
const links = [
  {
      loc: 'https://www.atraocta.lv/lv/par-mums',
      priority: '1.00',
      changefreq: 'weekly',
  },
  {
      loc: 'https://www.atraocta.lv/lv/privatuma-politika',
      priority: '1.00',
      changefreq: 'weekly',
  },
  {
      loc: 'https://www.atraocta.lv/lv/kontakti',
      priority: '1.00',
      changefreq: 'weekly',
  },
  {
      loc: 'https://www.atraocta.lv/lv/buj',
      priority: '1.00',
      changefreq: 'weekly',
  },
  {
    loc: 'https://www.atraocta.lv/lv/letapolise.lv-ziedo',
    priority: '1.00',
    changefreq: 'weekly',
  },
  {
    loc: 'https://www.atraocta.lv/lv/',
    priority: '1.00',
    changefreq: 'weekly',
  },
  {
    loc: 'https://www.atraocta.lv/lv/octa',
    priority: '1.00',
    changefreq: 'weekly',
  },
  {
    loc: 'https://www.atraocta.lv/lv/kasko',
    priority: '1.00',
    changefreq: 'weekly',
  },
  {
    loc: 'https://www.atraocta.lv/lv/veseliba',
    priority: '1.00',
    changefreq: 'weekly',
  },
  {
    loc: 'https://www.atraocta.lv/lv/celojumi',
    priority: '1.00',
    changefreq: 'weekly',
  },
  {
    loc: 'https://www.atraocta.lv/lv/ipasums',
    priority: '1.00',
    changefreq: 'weekly',
  },
  {
    loc: 'https://www.atraocta.lv/lv/atlidzibas-izmaksa',
    priority: '1.00',
    changefreq: 'weekly',
  },
];

module.exports = {filePath, links};
