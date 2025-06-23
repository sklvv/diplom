/* Уникальный Id */
type Id = string;

/* Город */
type CityName = string;

export interface Resume {
	id: Id; // уникальный Id
	name: string; // имя соискателя
	proffession: string; // профессия
	skills: string[]; // навыки
	location: CityName | "Remote"; // расположение
	desiredSalary: number; // желаемая зарплата
	experienceYears: number; // опыт работы
	education: string; // образование
	contactInfo: {
		email: string; // email
		phone: string; // телефон
	};
	about: string; // о себе
}
