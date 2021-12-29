import Archive from 'components/Archive/Archive';
import { useArchives } from 'hoc/ContextProvider';

export default function ArchiveContainer() {
	const { archives } = useArchives();

	const displayArchives = archives.map((archive) => <Archive key={archive.id} timer={archive} />);
	return <section className="mt-6 timer-container">{displayArchives}</section>;
}
