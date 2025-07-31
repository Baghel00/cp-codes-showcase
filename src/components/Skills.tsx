import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Frameworks",
      skills: ["React", "Next.js", "Vue.js", "Angular", "Svelte"]
    },
    {
      category: "Styling & Design",
      skills: ["Tailwind CSS", "Styled Components", "Sass", "CSS3", "Figma"]
    },
    {
      category: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Webpack", "Vite", "npm", "Docker", "VS Code"]
    },
    {
      category: "State Management",
      skills: ["Redux", "Zustand", "Context API", "Pinia", "MobX"]
    },
    {
      category: "Testing & Quality",
      skills: ["Jest", "Cypress", "Testing Library", "ESLint", "Prettier"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30" id="skills">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="bg-hero-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks 
            I use to build exceptional web applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;