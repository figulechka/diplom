# diplom

## Локальная разработка
### На эмуляторе
1. Запустить эмулятор Android  
    `emulator @Pixel_XL_API_28`
2. В соседнем терминале запустить dev-сервер
    `npm run android`
### На физическом Android-устройстве
1. Подключить устройство по USB
2. В появившемся на устройстве после подлючения попапе выбрать `Передача файлов`
3. Открыть терминал
4. Проверить, что устройство подключено
    * Выполнить в терминале команду `adb devices`
    * В ответ в терминале должно появитьчто что-то типа этого: 
    ```
    List of devices attached
    FFY5T18108060050	device
    ```
5. Запустить dev-сервер:  
    `npm run android`

#### Если приложение зависло на бесконечном `Loading from localhost:8081...`
1. Выполнить в соседнем терминале команду `adb reverse --list`.
    Ожидается, что из-за ошибки результат выполнения команды будет пустым
2. Выполнить команду `adb reverse tcp:8081 tcp:8081`
3. Повторно выполнить команду `adb reverse --list`. Теперь результат должен быть чем=то типа
    ```
    (reverse) tcp:8081 tcp:8081
    ```
4. Потрясти телефон (ты тряси, тряси смартфон) и в появившемся попапе выбрать `Reload`
5. Должно заработать
