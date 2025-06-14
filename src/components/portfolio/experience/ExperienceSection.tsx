
import ResumeDownload from './ResumeDownload';
import WorkExperience from './WorkExperience';
import EducationSection from './EducationSection';
import CertificationsSection from './CertificationsSection';
import AwardsSection from './AwardsSection';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Experience & Credentials</h2>
          
          <div className="space-y-12">
            <ResumeDownload />
            <WorkExperience />
            <EducationSection />
            <CertificationsSection />
            <AwardsSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
