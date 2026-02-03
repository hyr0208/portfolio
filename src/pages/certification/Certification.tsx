import { certifications } from "../../constants/certificationData";
import ScrollAnimation from "../../components/ScrollAnimation";

function Certification() {
  const getCategoryLabel = (category: string) => {
    const labels: { [key: string]: string } = {
      it: "IT",
      design: "디자인",
      accounting: "회계",
      office: "OA",
      other: "기타",
    };
    return labels[category] || category;
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      it: "bg-blue-500/20 text-blue-300",
      design: "bg-pink-500/20 text-pink-300",
      accounting: "bg-green-500/20 text-green-300",
      office: "bg-yellow-500/20 text-yellow-300",
      other: "bg-gray-500/20 text-gray-300",
    };
    return colors[category] || "bg-gray-500/20 text-gray-300";
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="2xl:max-w-[1400px] 2xl:mx-auto px-6 md:px-8 py-8 md:py-12">
        <ScrollAnimation animation="fade-up">
          <div className="mb-8 md:mb-12">
            <h2 className="text-white md:text-5xl text-4xl font-normal mb-2">
              Certification
            </h2>
            <p className="text-[#a6a6a6] text-sm md:text-base">
              보유하고 있는 자격증 목록입니다.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {certifications.map((cert, index) => (
            <ScrollAnimation
              key={cert.id}
              animation="fade-up"
              delay={index * 80}
              threshold={0.05}
            >
              <div className="bg-[#373737] p-4 md:p-5 rounded-lg flex flex-col gap-3 hover:bg-[#404040] transition-colors duration-200 h-full">
                {/* 자격증 이미지 */}
                {cert.image && (
                  <div className="w-full h-48 bg-[#404040] rounded-md overflow-hidden mb-2">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white text-lg md:text-xl font-semibold mb-1 break-words">
                      {cert.name}
                    </h3>
                    <p className="text-[#a6a6a6] text-sm md:text-base break-words">
                      {cert.issuer}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-xs md:text-sm font-medium ${getCategoryColor(
                      cert.category,
                    )}`}
                  >
                    {getCategoryLabel(cert.category)}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-[#4a4a4a]">
                  <span className="text-[#a6a6a6] text-xs md:text-sm">
                    취득일: {cert.date}
                  </span>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certification;
