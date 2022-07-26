const contactInfo = [
  { name: "العنوان", value: "شارع ابو الوفا - بجوار كوبري 6 أكتوبر - القاهرة" },
  { name: "البريد الإلكتروني", value: "azaizy@contac.us" },
  { name: "المحمـول", value: "0123456789" }
];

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="text-4xl bg-green-500 text-center  pb-8 font-extrabold text-white sm:text-4xl">
        لديك استشارة ؟؟
      </h2>

      <div className=" flex flex-col md:flex-row gap-4 md:gap-10">
        <div className=" pr-10 bg-green-500 py-10 flex-1 text-white md:p-10 lg:p-14">
          {contactInfo.map(({ name, value }, i) => {
            return (
              <p className="mb-4 text-center md:text-right">
                <span className="font-bold text-2xl block">{name}</span>
                <span className="text-lg text-gray-100">{value}</span>
              </p>
            );
          })}
        </div>
        <div className="p-4 my-6  mx-auto flex-1">
          <h2 className="text-3xl font-extrabold my-4  md:my-10 text-center text-green-600 sm:text-4xl">
            لا تتردد... الإستشارة مجانية{" "}
          </h2>
          <form action="#" method="" className="space-y-7">
            {/* name of the user */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700"
              >
                الاســم
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            {/* Email of the user */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700"
              >
                البريـد الإلكتروني
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            {/* Subjetc of the user */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700"
              >
                التلفون
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            {/* Message of the user */}
            <div>
              <label
                htmlFor="comment"
                className="block text-sm font-bold text-gray-700"
              >
                استشارتك
              </label>
              <div className="mt-1">
                <textarea
                  rows={4}
                  name="comment"
                  id="comment"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="pt-1">
              <button
                type="submit"
                className="w-full rounded-full border border-transparent bg-green-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                ارسل استشارتك <span aria-hidden="true">&larr;</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
