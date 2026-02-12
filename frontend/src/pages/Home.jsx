import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { 
  fetchPersonalInfo, 
  fetchProjects, 
  fetchSkills, 
  fetchExperience, 
  fetchAchievements 
} from '../services/api';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [portfolioData, setPortfolioData] = useState({
    personalInfo: null,
    projects: [],
    skills: null,
    experience: [],
    achievements: []
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        setLoading(true);
        
        // Fetch all data in parallel
        const [personalInfoRes, projectsRes, skillsRes, experienceRes, achievementsRes] = await Promise.all([
          fetchPersonalInfo(),
          fetchProjects(),
          fetchSkills(),
          fetchExperience(),
          fetchAchievements()
        ]);

        setPortfolioData({
          personalInfo: personalInfoRes.data,
          projects: projectsRes.data,
          skills: skillsRes.data,
          experience: experienceRes.data,
          achievements: achievementsRes.data
        });
      } catch (error) {
        console.error('Error loading portfolio data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPortfolioData();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#0a0a0a] text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <Header scrolled={scrolled} personalInfo={portfolioData.personalInfo} />
      <Hero personalInfo={portfolioData.personalInfo} />
      <About personalInfo={portfolioData.personalInfo} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Experience experience={portfolioData.experience} achievements={portfolioData.achievements} />
      <Contact personalInfo={portfolioData.personalInfo} />
      <Footer personalInfo={portfolioData.personalInfo} />
    </div>
  );
};

export default Home;
