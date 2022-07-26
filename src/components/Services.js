import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon
} from "@heroicons/react/outline";
import lawBookImg from "../assets/law-book.jpg";

const ScaleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const supportLinks = [
  {
    name: "الأحوال الشخصية",
    href: "#contact",
    description:
      "يحتل قانون الأحوال الشخصية أهمية كبرى لما يتضمنه من مسائل تتعلفق بالعلاقات الاسرية ونمتلك فريق من المحامين على أعلى مستوى",
    icon: ScaleIcon
  },
  {
    name: "القضايا المدنية",
    href: "#contact",
    description:
      "يحتل قانون الأحوال الشخصية أهمية كبرى لما يتضمنه من مسائل تتعلفق بالعلاقات الاسرية ونمتلك فريق من المحامين على أعلى مستوى",
    icon: SupportIcon
  },
  {
    name: "تأسيس الشركات",
    href: "#contact",
    description:
      "يحتل قانون الأحوال الشخصية أهمية كبرى لما يتضمنه من مسائل تتعلفق بالعلاقات الاسرية ونمتلك فريق من المحامين على أعلى مستوى",
    icon: NewspaperIcon
  },
  {
    name: "القضايا الجنائية",
    href: "#contact",
    description:
      "يحتل قانون الأحوال الشخصية أهمية كبرى لما يتضمنه من مسائل تتعلفق بالعلاقات الاسرية ونمتلك فريق من المحامين على أعلى مستوى",
    icon: ScaleIcon
  },
  {
    name: "قضايا الجنح ",
    href: "#contact",
    description:
      "يحتل قانون الأحوال الشخصية أهمية كبرى لما يتضمنه من مسائل تتعلفق بالعلاقات الاسرية ونمتلك فريق من المحامين على أعلى مستوى",
    icon: NewspaperIcon
  },
  {
    name: "القضايا الإداراية",
    href: "#contact",
    description:
      "يحتل قانون الأحوال الشخصية أهمية كبرى لما يتضمنه من مسائل تتعلفق بالعلاقات الاسرية ونمتلك فريق من المحامين على أعلى مستوى",
    icon: ScaleIcon
  }
];

export default function Services() {
  return (
    <div id="services" className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src={lawBookImg} alt="" />
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-center text-white md:text-5xl lg:text-6xl">
            خدماتنا
          </h1>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          تواصل معنا
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map(link => (
            <div
              key={link.name}
              className=" mb-10 flex flex-col bg-white rounded-2xl shadow-xl transform -translate-y-4"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8 ">
                <div className="absolute top-0 p-5 inline-block bg-green-600 rounded-xl shadow-lg transform -translate-y-4 ">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base font-bold text-gray-500">
                  {link.description}
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a
                  href={link.href}
                  className="text-base font-bold text-indigo-700 hover:text-indigo-600"
                >
                  تواصل معنا<span aria-hidden="true"> &larr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
