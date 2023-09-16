import useHover from "@/utils/useHover";
import Image from "next/image";

const ProfilePic = () => {
    const [isHovering, handleMouseOver, handleMouseOut] = useHover();

  return (
    <div
			className={`profile-pic-wrapper ${
				!isHovering && "before:mix-blend-screen"
			}`}
			onMouseOver={()=>handleMouseOver}
			onMouseOut={()=>handleMouseOut}
		>

<div
				className={`max-w-[500px] transition-normal ease-out contrast-[1] ${
					!isHovering && "grayscale mix-blend-multiply"
				}`}
			>

                <Image
                src="/logo.jpeg"
                width={200}
                height={200}
                className="h-full w-full"
                alt="logo"
                />
            </div>
        </div>
  )
}

export default ProfilePic