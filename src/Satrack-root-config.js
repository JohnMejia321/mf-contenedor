import { registerApplication, start } from "single-spa";


registerApplication({
  name: "@Satrack/mf-mapa",
  app: () => System.import("@Satrack/mf-mapa"),
  activeWhen: ["/"],
});


start({
  urlRerouteOnly: true,
});

