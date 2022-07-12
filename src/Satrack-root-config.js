import { registerApplication, start } from "single-spa";


registerApplication({
  name: "@Satrack/mf-mapa",
  app: () => System.import("@Satrack/mf-mapa"),
  activeWhen: ["/"],
});


registerApplication({
  name: "@Satrack/mf-sidenav-izquierdo",
  app: () => System.import("@Satrack/mf-sidenav-izquierdo"),
  activeWhen: ["/"],
});


start({
  urlRerouteOnly: true,
});

