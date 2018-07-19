# Example of multi-domains / subdomains handle by one express local node server. 

## Virtual Hosts
Set-up your virtual hosts by editing /etc/hosts file:

```txt
# Virtual hosts
127.0.0.1   app1.test
127.0.0.1   app2.test
127.0.0.1   app3.test
127.0.0.1   dashboard.app3.test
```

## install and launch the server

```
$ git clone https://github.com/rdhox/domains-and-subdomains-node-server.git projects/
$ cd projects
$ npm install
$ node server.js
```

Open your browser and try one of the url you configured on your hosts file.