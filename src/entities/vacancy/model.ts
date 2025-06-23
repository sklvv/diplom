/* Дата в формате строки */
type DateStr = string;

/* Уникальный Id */
type Id = string;

/* Город */
type CityName = string;

export interface Vacancy {
	id: Id; // уникальный Id
	name: string; // название
	createdAt: DateStr; // дата создания вакансии
	closedAt: DateStr; // дата создания вакансии
	budgetStart: number; // начало зарплатной вилки
	budgetEnd: number; // конец зарплатной вилки
	description: string; // описание вакансии
	location: CityName | "Remote"; // расположение
	requirements: string[]; // требуемые навыки
	minYearsExpirience: number; // мининум лет опыта
}
