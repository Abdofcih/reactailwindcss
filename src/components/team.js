import React from 'react'
import lawyerOne from "../assets/l1.jpg";
import lawyerTow from "../assets/l2.jpg";
import lawyerThree from "../assets/l3.jpg";
const people = [
    {
      name: 'محمد محمود',
      role: 'محامي بالاستئناف العالي ومجلس الدولة',
      imageUrl:lawyerOne,
       facebookUrl: 'https://www.fb.com/pooda98',
      youtubeUrl: 'https://www.youtube.com',
    },
    {
        name: 'مروة عبدالرحمن',
        role: 'محامي بالاستئناف العالي ومجلس الدولة',
        imageUrl:lawyerTow,
         facebookUrl: 'https://www.fb.com/pooda98',
        youtubeUrl: 'https://www.youtube.com',
      },
      {
        name: 'احمد سعيد',
        role: 'محامي بالاستئناف العالي ومجلس الدولة',
        imageUrl:lawyerThree,
         facebookUrl: 'https://www.fb.com/pooda98',
        youtubeUrl: 'https://www.youtube.com',
      }
  ]

export const Team = () => {
    return (
        <div className="">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="mt-6 text-xl text-center text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
               أعضاء مؤسستنا
               </h2>
            </div>
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name} className="bg-white pb-4 shadow-lg overflow-hidden rounded-lg">
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover  " src={person.imageUrl} alt="" />
                    </div>
  
                    <div className="space-y-2">
                      <div className=" mr-2 text-lg leading-6 font-medium  my-4">
                        <p className="text-2xl font-bold">{person.name}</p>
                        <p className="text-green-600">{person.role}</p>
                      </div>
                      <ul role="list" className="flex space-x-5">
                        <li>
                          <a href={person.facebookUrl} className=" rounded-sm p-2 bg-blue-700 mx-2 text-white font-bold hover:text-gray-100">
                                  فيسبوك
                          </a>
                        </li>
                        <li>
                          <a href={person.youtubeUrl} className="rounded-sm p-2 bg-red-700 text-white font-bold hover:text-gray-100">
                          يوتيوب
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
}
