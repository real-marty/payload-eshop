import configPromise from "@payload-config";
import { getPayload } from "payload";

export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    limit: 10,
  });

  return (
    <div className="">
      <p className="">{JSON.stringify(data, null, 2)}</p>
    </div>
  );
}
