interface FormattedDateProps {
	date: Date;
}

export default function FormattedDate({ date }: FormattedDateProps) {
	return (
		<time dateTime={date.toISOString()} className="text-muted-foreground">
			{date.toLocaleDateString('en-us', {
				year: 'numeric',
				month: 'short',
				day: 'numeric'
			})}
		</time>
	);
}
