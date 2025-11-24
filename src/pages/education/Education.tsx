import { educations } from "../../constants/educationData";

function Education() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="2xl:max-w-[1400px] 2xl:mx-auto px-6 md:px-8 py-8 md:py-12">
        <div className="mb-8 md:mb-12">
          <h2 className="text-white md:text-5xl text-4xl font-normal mb-2">
            Education
          </h2>
          <p className="text-[#a6a6a6] text-sm md:text-base">
            학력 정보입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {educations.map((edu) => (
            <div
              key={edu.id}
              className="bg-[#373737] p-5 rounded-lg flex flex-col gap-4 hover:bg-[#404040] transition-colors duration-200"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="text-[14px] text-[#a6a6a6]">
                      {edu.period}
                    </span>
                    <div className="flex flex-col gap-1 mt-2">
                      <p className="text-white text-xl md:text-2xl font-semibold">
                        {edu.school}
                      </p>
                      <p className="text-[#a6a6a6] text-sm md:text-base">
                        {edu.major} · {edu.degree}
                      </p>
                      {edu.status === "attending" && (
                        <span className="text-[#a6a6a6] text-xs md:text-sm mt-1">
                          재학중
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {edu.description && (
                  <p className="text-[#a6a6a6] text-sm md:text-base leading-relaxed">
                    {edu.description}
                  </p>
                )}

                {edu.activities && edu.activities.length > 0 && (
                  <div className="pt-2 border-t border-[#4a4a4a]">
                    <ul className="text-[#a6a6a6] text-sm md:text-base space-y-1 list-disc list-outside pl-5">
                      {edu.activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
