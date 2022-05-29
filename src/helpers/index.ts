export const getRandomArrayElement = <T>(arr: Array<T>) => arr[Math.floor(Math.random() * arr.length)]

export const slugify = (text: string) => text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')

export const getFunName = (): string => {
    const adjectives = [
        'очаровательные',
        'прекрасные',
        'чистые',
        'скучные',
        'элегантные',
        'длинные',
        'блестящие',
        'уродливые',
        'сердитые',
        'неуклюжие',
        'побеждённые',
        'смущённые',
        'ожесточённые',
        'сварливые',
        'беспомощные',
        'зудящие',
        'ревнивые',
        'леннивые',
        'загадочные',
        'нервные',
        'обеспокоенные'
    ]

    const nouns = [
        'женщины',
        'мужчины',
        'дети',
        'зубы',
        'ступни',
        'люди',
        'листья',
        'мыши',
        'гуси',
        'ножи',
        'жёны',
        'жизни',
        'томаты',
        'фокусы',
        'грибы',
        'анализы',
        'диагнозы',
    ]

    return `${getRandomArrayElement(adjectives)}-${getRandomArrayElement(adjectives)}-${getRandomArrayElement(nouns)}`
}
