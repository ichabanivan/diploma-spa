# Common

### 1 Установить Node.js

[Latest LTS Version: 14.17.5 (includes npm 6.14.14)](https://nodejs.org/en/download/)

### 2 Установить Git

[Git](https://git-scm.com/downloads)

### 3 Установить Yarn

```bash
npm install --global yarn
```

### 4 Установить Http Server

```bash
npm install --global http-server
```

# SPA

### 1 Открыть консоль в папке с приложением

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

### 2 Собрать приложение
```bash
npm run build
```

### 3 В папке с проектом появится папка build

### 4 Заходим в папку
```bash
cd build
```

### 5 Запускаем сервер

```bash
http server . --port 3010
```

### 6 В консоле появится ссылка по которой доступно приложение

Например: `http://192.168.2.170:3010`
