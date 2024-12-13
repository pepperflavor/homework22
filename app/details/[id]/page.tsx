import { CARD_API } from "@/lib/constants";

async function getData(id: string) {
  const response = await fetch(`${CARD_API}/${id}`);
  return await response.json();
}

type paramType = Promise<{ id: string }>;

export default async function PersonDetail({ params }: { params: paramType }) {
  const { id } = await params;
  const detailData = await getData(id);

  return (
    <div className="py-14">
      <div className="max-w-screen-lg w-full mx-auto px-5 space-y-10">
        <div className="flex flex-col gap-2">
          <div className="relative aspect-square flex items-center justify-center border border-neutral-400 rounded-lg max-w-80"></div>
          <h1 className="text-2xl font-bold">{detailData.name}</h1>
          <span>Country: {detailData.country}</span>
          <span>Industry: {detailData.industries[0]}</span>
          {/* <p>
            {detailData.bio.map((a: as any) => (
              <>{a}</>
            ))}
          </p> */}
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Financial Assets</h2>
          <div className="grid grid-cols-4 gap-4">
            {detailData.financialAssets.map((a: any, i: number) => (
              <div
                className="border rounded-lg p-4 flex flex-col gap-1"
                key={i}
              >
                <span>Ticker: {a.ticker}</span>
                {/* <span>Shares: {formatToNumber(a.numberOfShares)}</span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
