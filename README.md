MN-CHECK - vps
========

# Install
      sudo apt-get install curl -y
      sudo apt-get install curl python-software-properties -y
      curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
      sudo apt-get install nodejs -y

      git clone https://github.com/GordenPirs/mnchek-vps.git mn1
      cd mn1
      npm install
      npm install pm2 -g

# Config
Скопируйте полученные данные из панели. (замените параметры RPC)

      vi .env
```
ID=vRgwaaARdGnPfnjAP

API=example
RPCUSER=paycorerpc
RPCPASSWORD=5zetcZEHP8itbV11KUTLMJgKuUR8G3aEUMoCZEX293Ur
RPCPORT=30100
RPCHOST=localhost

SERVERIP=127.0.0.1
```

# Run
      pm2 start init.js --name mn01
