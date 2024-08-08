import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';

export default function PackSticker({
	title,
	id,
	type,
}: {
	title: string;
	id: number;
	type: string;
}) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{type}</CardDescription>
			</CardHeader>
			<CardContent>
				<p>ID number: {id}</p>
			</CardContent>
			<CardFooter>
				ADD
				{/* Aquí agregas lógica para el botón de "Agregar al álbum" */}
			</CardFooter>
		</Card>
	);
}
