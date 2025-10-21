import { GraduationCap, Award, Languages, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Government College University",
      location: "Lahore, Pakistan",
      period: "2018 - 2022",
    },
    {
      degree: "Intermediate in Pre-Engineering (FSc)",
      institution: "MTB Colleges",
      location: "Sadiqabad, Pakistan",
      period: "2016 - 2018",
    },
  ];

  const achievements = [
    {
      title: "Employee of the Month",
      organization: "Brown Tech Int.",
      date: "May 2024",
      description: "Awarded for exceptional performance and contributions",
    },
  ];

  const languages = [
    { name: "English", level: "Full Professional Proficiency", percentage: 85 },
    { name: "Urdu", level: "Native or Bilingual Proficiency", percentage: 100 },
  ];

    const interests = [
        "Coding",
        "Debugging",
        "Optimization",
        "Testing",
        "Learning",
        "Innovation",
        "Collaboration",
        "Problem-solving",
        "Teamwork",
        "Open Source Contribution",
        "System Architecture",
        "Project Management",
        "Continuous Improvement",
        "Exploring New Frameworks",
        "Reading Tech Articles",
    ];

  return (
    <section id="education" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Education */}
        <div className="mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
            <p className="text-xl text-muted-foreground">
              My academic background and qualifications
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elevated transition-smooth animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-primary font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {edu.location} • {edu.period}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h2>
            <p className="text-xl text-muted-foreground">
              Recognition and awards
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elevated transition-smooth animate-scale-in"
              >
                <div className="flex items-start gap-4">
                  <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                    <p className="text-primary font-medium mb-1">
                      {achievement.organization}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {achievement.date}
                    </p>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Languages</h2>
            <p className="text-xl text-muted-foreground">
              Communication proficiency
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {languages.map((lang, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elevated transition-smooth animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <Languages className="h-6 w-6 text-primary" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-lg font-bold">{lang.name}</h3>
                      <span className="text-sm text-muted-foreground">
                        {lang.level}
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="gradient-primary h-2 rounded-full transition-smooth"
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Interests</h2>
            <p className="text-xl text-muted-foreground">
              What drives and motivates me
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-elevated transition-smooth">
              <div className="flex items-center gap-4 mb-6">
                <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">My Passions</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-base hover:scale-105 transition-bounce cursor-default shadow-smooth"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
