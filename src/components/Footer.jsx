const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8  flex flex-wrap justify-between items-center">
            {" "}
            <p className="text-sm tex-muted-foreground">
                {" "}
                &copy; {new Date().getFullYear()} Amir.Taki. All rights reserved.
            </p>
        </footer>
    )
}

export default   Footer ;