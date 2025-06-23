import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { MOCK_RESUMES } from "../mock/resume";

ChartJS.register(ArcElement, Tooltip, Legend);
const COLORS = [
	"rgb(255, 99, 132)", // розово-красный
	"rgb(255, 159, 64)", // оранжевый
	"rgb(255, 205, 86)", // тёплый жёлтый
	"rgb(75, 192, 108)", // зелёный
	"rgb(153, 102, 255)", // сиреневый
	"rgb(201, 203, 207)", // светло-серый
	"rgb(255, 86, 196)", // малиновый
	"rgb(144, 64, 255)", // фиолетовый
	"rgb(255, 64, 64)", // ярко-красный
];

const professionCountMap = MOCK_RESUMES.reduce((acc, resume) => {
	const prof = resume.proffession;
	acc.set(prof, (acc.get(prof) || 0) + 1);
	return acc;
}, new Map<string, number>());

const professions = Array.from(professionCountMap.keys());
const counts = Array.from(professionCountMap.values());

const data = {
	datasets: [
		{
			label: "Кол-во резюме",
			data: counts,
			backgroundColor: counts.map((_, i) => COLORS[i]),
			borderColor: counts.map((_, i) => COLORS[i]),
			borderWidth: 1,
		},
	],
	labels: professions,
};

export function PieChart() {
	return (
		<Pie
			data={data}
			options={{
				responsive: true,
				maintainAspectRatio: false,
				plugins: { legend: { position: "bottom" } },
			}}
		/>
	);
}
