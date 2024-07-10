

const SectionTitle = ({ color = "main", text }) => {
    const colorVariants = {
        white: "text-white",
        main: "text-main",
        accent: "text-accent"
    }
    return (
        <h2 className={`font-semibold text-4xl ${colorVariants[color]} text-center my-10`}>{text}</h2>
    )
}

export default SectionTitle