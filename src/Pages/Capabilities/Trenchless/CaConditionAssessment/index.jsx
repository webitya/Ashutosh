import DyAboutSection from "../../../../DynamicPages/DyAboutSection";
import DyHeroSection from "../../../../DynamicPages/DyHeroSection";
import DyServices from "../../../../DynamicPages/DyServices";
import LayoutEl from "../../../../Shared/LayoutEl"


const CaConditionAssessment=()=>{
               // Hero Data
               const data = {
                title: 'Trenchless',
                subtitle: 'Conditional Assessment',
                backgroundImage: "/17.jpg",
              };
            //   Hero About Data
              const sectionData = {
                heading: 'Solutions That Meet Your Needs and Budget',
                paragraphs: [
                  "Keeping up with new regulations that affect your water treatment plant and distribution system can be a full-time job. That's where we can help as your trusted advisor.",
                  "Chances are you’ve done some investigations, are familiar with new state and federal requirements, and are ready to either procure funds or use the funds you’ve secured through a grant program. We can help by looking at your new infrastructure solution from all sides. We’ll ask what you really want out of your project because we don’t just design engineering solutions for your community’s infrastructure; we help you plan for the future with an affordable, efficient, and sustainable system.",
                  "Our practical approach, combined with a complete list of engineering, survey, science, and planning services, can help you meet your community’s vital water management needs.",
                ],
              };
            //   Services Data
            const servicesData = {
                heading: 'Services',
                services: [
                  'Capital improvements programs',
                  'Construction administration and management',
                  'Distribution, pumping, and storage evaluation and design',
                  'Environmental and regulatory compliance',
                  'Facility plans and Preliminary Engineering Reports (PER)',
                  'Factory Acceptance Testing (FAT)',
                  'Funding strategy assistance and implementation',
                  'Hydraulic computer modeling',
                  'Lead service line inventories and replacements',
                  'Rate analysis',
                  'Start-up, operations, and system optimization',
                  'Water supply development',
                  'Water reclamation and reuse',
                ],
              };
    return (
        <>
          <LayoutEl>
          <DyHeroSection
        title={data.title} 
        subtitle={data.subtitle} 
        backgroundImage={data.backgroundImage} 
      />
      <DyAboutSection heading={sectionData.heading} paragraphs={sectionData.paragraphs} />
      <DyServices heading={servicesData.heading} services={servicesData.services} />
          </LayoutEl>
        </>
    )

}
export default CaConditionAssessment





























