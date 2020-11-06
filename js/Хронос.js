function getWeekDay(date){
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']

    return days[date.getDay()];
};

let date = new Date(2020, 11, 03);
alert(getWeekDay(date));