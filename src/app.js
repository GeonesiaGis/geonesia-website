export class App {

    configureRouter(config, router){
        config.title = 'Geonesia';
        config.map([
          { 
              route: ['', 'home'],
              moduleId: 'home',
              name: 'home'
          },
          {
              route: 'services',
              moduleId: 'services', 
              name: 'services'
          },
          {
              route: 'references',  
              moduleId: 'references',
              name: 'references' 
          },
          { 
              route: 'resources',  
              moduleId: 'resources',
              name: 'resources'
          }
        ]);

        this.router = router;
    }
}