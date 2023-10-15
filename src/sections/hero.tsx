import { motion } from 'framer-motion';
import './hero.css';

const Hero = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="hero">
        <video autoPlay muted loop id="background-video">
          <source
            src="https://cdn.discordapp.com/attachments/1146486237797040268/1160956231817637958/single_sexy_women_with_Night_Abstract_City_in_the_Rain_Cyberpunk_in_the_style_of_En_Hd_Neon_Noir_Neon_Aesthetic_NeNeon_Noir_Neon_Aesthetic_Neon_1696863898312.mp4"
            type="video/mp4"
          />
        </video>
        <div className="list">
          <h1 className="hero-heading">cybArt AI</h1>
          <text className="hero-tagline">Pushing the boundaries of AI art</text>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
