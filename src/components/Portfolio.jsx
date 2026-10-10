import { motion } from 'framer-motion';
import { FaArrowRight, FaGoogleDrive, FaInstagram, FaYoutube } from 'react-icons/fa';

const brands = [
    { name: 'Ponvel Coco', country: 'Canada', work: 'Lead generation ad edit', url: 'https://drive.google.com/file/d/1lAVy3DOb1USj26-OyQtFoLQ7-uQWKnBr/view?usp=sharing' },
    { name: 'Onstage', country: 'Germany', work: 'Test edit', url: 'https://drive.google.com/file/d/10No1hYxX8iJGft_uc8ZdcIW3xOOCy_Jo/view?usp=sharing' },
    { name: 'Bayleaf', country: 'United States', work: 'Lead generation ad edit', url: 'https://drive.google.com/file/d/1K0lNvG7IqRoKJIief8xnp3Ki6dKOet32/view?usp=sharing' },
    { name: 'The Design Code TVL', country: '', work: 'Lead generation ad edit', url: 'https://drive.google.com/file/d/15AowGlAgD6tzvSsBEbJpxsHl1DCm8XTv/view?usp=sharing' },
    { name: 'Ambal', country: '', work: 'Lead generation ad edit', url: 'https://drive.google.com/file/d/14ZvytjT1soJpSNsYnwiFAUZOVM1VIshB/view?usp=sharing' },
];

const creators = [
    { name: 'Doctor Sheeba', platform: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/drsheeba_dental_diary?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==' },
    { name: 'Engineering Facts', platform: 'YouTube', icon: FaYoutube, url: 'https://www.youtube.com/@engineeringfacts' },
];

const ExternalLink = ({ href, children, icon: Icon }) => (
    <a className="portfolio-link" href={href} target="_blank" rel="noopener noreferrer">
        {children} {Icon && <Icon />} <FaArrowRight />
    </a>
);

const Portfolio = () => (
    <section id="portfolio" className="section-padding bg-bg-secondary relative">
        <div className="container portfolio-container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="portfolio-eyebrow">COLLABORATIONS</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">Brands &amp; <span className="text-gradient">Creators</span></h2>
                <p className="text-text-secondary portfolio-intro">A selection of brands and creators I have partnered with for high-performing video edits.</p>
            </motion.div>

            <div className="portfolio-group">
                <div className="portfolio-group-heading"><span>01</span><h3>Brands</h3></div>
                <div className="collaboration-grid brand-grid">
                    {brands.map((brand, index) => (
                        <motion.article key={brand.name} className="collaboration-card brand-card" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} whileHover={{ y: -6 }}>
                            <div className="card-number">0{index + 1}</div><div><p className="card-type">BRAND COLLABORATION</p><h4>{brand.name}</h4>{brand.country && <p className="card-country">{brand.country}</p>}</div>
                            <div className="card-footer"><p>{brand.work}</p><ExternalLink href={brand.url} icon={FaGoogleDrive}>View edit</ExternalLink></div>
                        </motion.article>
                    ))}
                </div>
            </div>

            <div className="portfolio-group creators-group">
                <div className="portfolio-group-heading"><span>02</span><h3>Creators</h3></div>
                <div className="collaboration-grid creator-grid">
                    {creators.map((creator, index) => {
                        const Icon = creator.icon;
                        return <motion.article key={creator.name} className="collaboration-card creator-card" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -6 }}>
                            <Icon className="creator-icon" /><p className="card-type">CONTENT CREATOR</p><h4>{creator.name}</h4><p className="creator-platform">{creator.platform}</p><ExternalLink href={creator.url} icon={Icon}>Visit {creator.platform}</ExternalLink>
                        </motion.article>;
                    })}
                </div>
            </div>

            <motion.a className="more-work-cta" href="https://drive.google.com/drive/folders/1iv0cy--BnEZQ5z8IbsHSFnUJWjYVLkox?usp=sharing" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <span>Want to see more?</span><strong>Explore my complete edit library</strong><FaArrowRight />
            </motion.a>
        </div>
    </section>
);

export default Portfolio;
