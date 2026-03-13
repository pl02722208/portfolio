import Image from "next/image";

interface CardProps {
  name: string;
  size?: number;
}

export function Card({name, size=120} : CardProps) {
  return (
    <div className={"flex-none bg-gray-200 rounded-xl p-4 shadow"}>
      <Image
        src={`/${name}-icon.svg`}
        alt={`${name} icon`}
        width={size}
        height={size}
      />
    </div>
  )
}