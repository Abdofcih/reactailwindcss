const statsData = [
  { name: "عملائنا", number: "200+" },
  { name: "مرفعاتنا", number: "1000+" },
  { name: "استشارة", number: "10000+" }
];
export default function Stats() {
  return (
    <div id="stats" className="bg-green-500">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            خبرة أكثر من 20 عام
          </h2>
          <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
            نخبة من المحامين في جميع التخصصات
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          {statsData.map((stat, i) => {
            return (
              <div className="flex flex-col" key={i}>
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                  {stat.name}
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-white">
                  {stat.number}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
