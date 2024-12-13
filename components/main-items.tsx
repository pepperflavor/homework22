"use client";

import Link from "next/link";

interface squareImageProps {
  initialBillions: {
    id: string;
    squareImage: string;
    name: string;
    industries: string[];
    netWorth: number;
  };
}

export default function BillionsItem({ initialBillions }: squareImageProps) {
  const { id, name, industries } = initialBillions;
  return (
    <Link href={`/details/${id}`} className="flex flex-col gap-2">
      <div className="relative aspect-square flex items-center justify-center border border-neutral-400 rounded-lg">
        {/* {squareImage == undefined ? (
          <div>Loading...</div>
        ) : (
          <Image
            src={squareImage}
            width={300}
            height={300}
            alt={`${id}${name}`}
          />
        )} */}
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold">{name}</h2>
        <div className="flex gap-1">
          {industries.map((a, i) => (
            <span key={i}>{a}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
