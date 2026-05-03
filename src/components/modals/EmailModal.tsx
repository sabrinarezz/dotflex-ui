'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Paperclip, Sparkles } from 'lucide-react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [formData, setFormData] = useState({
    from: '',
    subject: '',
    cc: '',
    body: '',
  });
  const [attachment, setAttachment] = useState<File | null>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.from || !formData.subject || !formData.body) {
      alert("⚠️ Please fill in all required fields.");
      return;
    }

    setIsSending(true);

    const payload = new FormData();
    payload.append('from', formData.from);
    payload.append('subject', formData.subject);
    payload.append('cc', formData.cc);
    payload.append('body', formData.body);
    if (attachment) payload.append('attachment', attachment);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        body: payload,
      });

      if (res.ok) {
        alert("✅ Message successfully sent to Dotflex.UI Mission Control!");
        onClose();
        setFormData({ from: '', subject: '', cc: '', body: '' });
        setAttachment(null);
      } else {
        const data = await res.json();
        alert("❌ " + (data.message || "Failed to send message"));
      }
    } catch (err) {
      alert("❌ Could not connect to server. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal fade show d-block glass">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="modal-content glass border border-cyan-400/30"
            >
              {/* Header */}
              <div className="modal-header border-0 pb-0">
                <div className="d-flex align-items-center gap-3">
                  <Sparkles className="text-cyan-400" size={28} />
                  <h4 className="modal-title fw-bold fs-3">Transmit to <span className="text-info">Dotflex.UI</span></h4>
                </div>
                <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
              </div>

              <div className="modal-body p-5">
                <form onSubmit={handleSubmit}>
                  {/* Form fields remain same as before */}
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label className="form-label">Your Email Address</label>
                      <input type="email" required value={formData.from} onChange={(e) => setFormData({...formData, from: e.target.value})} className="form-control form-control-lg bg-dark border-secondary text-white" placeholder="you@domain.com" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Subject</label>
                      <input type="text" required value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="form-control form-control-lg bg-dark border-secondary text-white" placeholder="Branding Project Inquiry" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">CC (Optional)</label>
                      <input type="text" value={formData.cc} onChange={(e) => setFormData({...formData, cc: e.target.value})} className="form-control form-control-lg bg-dark border-secondary text-white" placeholder="partner@company.com" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Your Message</label>
                      <textarea required value={formData.body} onChange={(e) => setFormData({...formData, body: e.target.value})} rows={7} className="form-control form-control-lg bg-dark border-secondary text-white" placeholder="Write your message here..." />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Attachment (Optional)</label>
                      <input type="file" onChange={(e) => setAttachment(e.target.files?.[0] || null)} className="form-control form-control-lg bg-dark border-secondary text-white" />
                    </div>
                  </div>

                  <button type="submit" disabled={isSending} className="btn btn-cosmic w-100 mt-5 py-4 fs-5 fw-semibold rounded-3">
                    {isSending ? "Transmitting through Nebula..." : "Send Message to Dotflex.UI"}
                    <Send size={22} className="ms-3" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}