# Common

### Установить Node.js

[Latest LTS Version: 14.17.5 (includes npm 6.14.14)](https://nodejs.org/en/download/)

### Установить Git

[Git](https://git-scm.com/downloads)

### Установить Yarn

```bash
npm install --global yarn
```

### Установить Http Server

```bash
npm install --global http-server
```

# SPA

### Открыть консоль в папке с приложением

Например
```bash
cd  ~/Desktop/diploma-spa 
```

### Установить зависисмости
```bash
yarn
```

### Автоматически избавиться от потенциальных проблем с кодом
```bash
npm run eslint:fix
```

### Собрать приложение
```bash
npm run build
```

### В папке с проектом появится папка build

### Заходим в папку
```bash
cd build
```

### Запускаем сервер

```bash
http server . --port 3010
```

### В консоле появится ссылка по которой доступно приложение

Например: `http://192.168.2.170:3010`
