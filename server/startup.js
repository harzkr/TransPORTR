var createServiceConfiguration;

createServiceConfiguration = function(service, clientId, secret) {
  var config;
  ServiceConfiguration.configurations.remove({
    service: service
  });
  config = {
    generic:{
        service: service,
        clientId: clientId,
        secret:secret
    },
    google: {
      service: service,
      clientId: clientId,
      secret: secret
    },
    facebook: {
      service: service,
      appId: clientId,
      secret: secret
    },
    twitter: {
      service: service,
      consumerKey: clientId,
      secret: secret
    }
  };
  switch (service) {
    case 'facebook':
      return ServiceConfiguration.configurations.insert(config.facebook);
    case 'twitter':
      return ServiceConfiguration.configurations.insert(config.twitter);
    case 'google':
      return ServiceConfiguration.configurations.insert(config.google);
    default:
      return ServiceConfiguration.configurations.insert(config.generic);
  }
};
//createServiceConfiguration('facebook', 'Insert your appId here.', 'Insert your secret here.')
createServiceConfiguration('google', '422486253878-pe7ntvla0h1ni40b3baf54d4ccn4g6k6.apps.googleusercontent.com', 'j-VsOGwynb-pvGNozmX0qdYT')
createServiceConfiguration('twitter', 'aeEuiIBVofdXiVKs7vwQeKI0R',  '53jLgD7rdeZxa8D9btqAf2lxsoqQhnpqRQTqluj8v8cgHzJyMK')
createServiceConfiguration('facebook', '900915729974151',  '0e6d516af79de5ff2eb5e059b4555b45')
