module.exports = {
    mongo_url: process.env.MONGOHQ_URL || 'mongodb://localhost:27017/gtfs'
  , agencies: [
      /* Put agency_key names from gtfs-data-exchange.com.  
      Optionally, specify a download URL to use a dataset not from gtfs-data-exchange.com */
    // 'san-francisco-municipal-transportation-agency',
    // 'ac-transit',
    // 'city-of-seattle',
    // 'metropolitan-atlanta-rapid-transit-authority',
    { agency_key: 'norta', url: 'http://samhashemi.com/20140629G.clean.zip'}
    // 'la-metro',
    // 'wmata',
    // 'mta-bus-company',
    // 'carta',
    // 'massachusetts-bay-transportation-authority',
    // 'detroit-department-of-transportation',
    //   'alamedaoakland-ferry'
    // , { agency_key: 'caltrain', url: 'http://www.gtfs-data-exchange.com/agency/caltrain/latest.zip'}
    // , 'ac-transit'
    // , 'county-connection'
    // , 'san-francisco-municipal-transportation-agency'
    // , 'bay-area-rapid-transit'
    // , 'golden-gate-ferry'
    ]
};
