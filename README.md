### Настройка проекта
База данных используется *MongoDB*, [mongo](https://www.mongodb.com/) предоставляет бесплатную облачную базу данных с местом в **500mb**. Для проекта в папке **/server** нужно создать файл **.env** в котором должны быть перечисленны следующие переменные:

    MONGO_USER:       Логин БД
    MONGO_PASS:       Пароль БД
    MONGO_DB:         Имя базы данных
    SECRET:           Пароль для генерации JWT токена
    SALT:             Число для шифрования пароля

### Команды

    yarn all-install - Установка зависимостей сервера и клиента
    yarn dev - Запуск сервера в режиме разработки
