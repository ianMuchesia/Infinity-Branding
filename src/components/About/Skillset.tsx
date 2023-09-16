import data from "@/data";


const { skills } = data
interface Props{
    className:string;
    pillClassName?:string;
}

const Skillset = ({className,pillClassName}:Props) => {
  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
    {skills.map((skill, index) => (
        <li key={index}>
            <div className={`pill ${pillClassName}`}>{skill}</div>
        </li>
    ))}
</ul>
  )
}

export default Skillset