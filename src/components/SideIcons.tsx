import data from '@/data';
import React from 'react'

const {tools} = data;

const SideIcons = () => {
  return (
    <ul className="flex items-center space-x-3 md:space-x-0 md:justify-start md:flex-col">
			{tools.map((tool) => (
				<li key={tool.id}>
					<a
						href={"/"}
						title={tool.name}
						className="p-[10px] inline-block transition-normal md:hover:-translate-y-[3px] hover:text-green"
						target="_blank"
						rel="noreferrer"
					>
						<tool.icon size={20} />
					</a>
				</li>
			))}
			<span className="hidden md:block w-[1px] h-[90px] bg-blue-500 mt-5 mx-auto"></span>
		</ul>
  )
}

export default SideIcons