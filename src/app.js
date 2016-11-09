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
              route: 'about',
              moduleId: 'about', 
              name: 'about'
          },
          { 
              route: 'mapping',   
              moduleId: 'mapping',
              name: 'mapping' },
          {
              route: 'references',  
              moduleId: 'references',
              name: 'references' 
          },
          { 
              route: 'technologies',  
              moduleId: 'technologies',
              name: 'technologies'
          }
        ]);

        this.router = router;
    }
}