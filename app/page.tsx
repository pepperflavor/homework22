import BillionsItem from "@/components/main-items";

import { MAIN_LIST_API } from "@/lib/constants";

async function getLists() {
  const response = await fetch(MAIN_LIST_API);

  const json = await response.json();
  return json;
}

export default async function Homepage() {
  const mainList = await getLists();
  return (
    <main>
      <div className="py-14">
        <div className="max-w-screen-lg w-full mx-auto px-5">
          <div className="grid grid-cols-4 gap-5">
            {mainList.map((a: any, i: number) => (
              <BillionsItem initialBillions={a} key={i} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
