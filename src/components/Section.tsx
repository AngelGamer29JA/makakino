export interface SectionProps {
    children?: React.ReactNode
    padding?: string
    margin?: string
    size?: "md" | "lg" | "sm"
    filled?: boolean,
    textCenter?: boolean
}

export default function Section(props: SectionProps) {
    const { children, margin, padding, size, filled, textCenter } = props;


    const style: React.CSSProperties = {
        padding: `${padding}`,
        margin: `${margin}`,
    }

    const filledData = filled ? "filled" : "";
    const classes = ["section", (size === undefined ? "" : size ), (filled === undefined ? "" : filledData), textCenter ?? "text-center"];

    return (
        <div className={classes.join(" ")} style={style}>
            {children}
        </div>
    )
}