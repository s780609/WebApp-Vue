# WebApp-Vue  
MVC version: .NET 6 (server side)  
Vue version: 3 (client side)  

WebApi & Vue3 template  
Use package [Microsoft.AspNetCore.SpaProxy](https://learn.microsoft.com/en-us/aspnet/core/client-side/spa/intro?view=aspnetcore-7.0) to build an MVC with Vue SPA template   
Client side is Vue   
Server side is ASP.NET MVC

## MVC(server side)
The project is a ASP.NET MVC project. So you can build your MVC view page if you need.

## Vue (client side)
the `client-app` folder is a vue 3.0 project build by vue-cli

###  communicate with api
Use rotue `api` can call server-side api controller

## docker 
build docker image
```bash
docker build -t hsutinghuan/webapp-vue .
```

build docker container
```bash
docker run -dp 3000:80 hsutinghuan/webapp-vue
```
