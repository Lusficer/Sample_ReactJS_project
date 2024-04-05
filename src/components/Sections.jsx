export default function Sections({children, title, ...props}){
    return (
       <section {...props}>
            <h2>{title}</h2>
            {children}
       </section>
    );
}