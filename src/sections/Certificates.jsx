import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';
import CertificateModal from '../components/CertificateModal.jsx';
import SectionShell from '../components/SectionShell.jsx';
import { certificates } from '../data/portfolio.js';
import { fadeUp } from '../animations/motion.js';

export default function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const categories = useMemo(() => ['All', ...new Set(certificates.map((item) => item.category))], []);
  const visibleCertificates = certificates.filter((item) => selectedCategory === 'All' || item.category === selectedCategory);

  return (
    <SectionShell
      id="certificates"
      eyebrow="Credential Vault"
      title="Holographic certificate gallery."
      subtitle="A polished gallery with upload placeholders for embedded systems, C programming, Linux, workshops, and technical events."
    >
      <motion.div className="filter-strip mb-7 w-fit max-w-full" variants={fadeUp}>
        {categories.map((category) => (
          <button key={category} type="button" className={selectedCategory === category ? 'active' : ''} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </motion.div>

      <motion.div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" variants={fadeUp}>
        {visibleCertificates.map((certificate) => {
          const Icon = certificate.icon;
          return (
            <article key={certificate.title} className="certificate-card" data-cursor="interactive">
              <div className="certificate-holo">
                <Icon size={42} />
                <span>{certificate.category}</span>
              </div>
              <div className="p-5">
                <span className="status-badge">{certificate.status}</span>
                <h3 className="mt-4 font-display text-xl font-bold text-white">{certificate.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{certificate.issuer}</p>
                <div className="mt-5 flex gap-2">
                  <button type="button" className="cta-button ghost" onClick={() => setSelectedCertificate(certificate)}>
                    <Eye size={16} />
                    Preview
                  </button>
                  <button type="button" className="icon-link" aria-label={`Download ${certificate.title}`}>
                    <Download size={16} />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </motion.div>
      <CertificateModal certificate={selectedCertificate} onClose={() => setSelectedCertificate(null)} />
    </SectionShell>
  );
}
