'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import type { ContactFormData, ContactFormResponse } from '@/types';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  general?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Client-side validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim() || formData.subject.length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset status
    setSubmitStatus('idle');
    setStatusMessage('');

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: ContactFormResponse = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setStatusMessage(data.message);
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.message);
        if (data.errors) {
          setErrors(data.errors as FormErrors);
        }
      }
    } catch {
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="container-fluid" data-aos="fade-up">
        <div className="section-header">
          <h3>Contact Us</h3>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="map mb-4 mb-lg-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                style={{ border: 0, width: '100%', height: '340px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-5 info">
                <i className="bi bi-geo-alt"></i>
                <p>A108 Adam Street, NY 535022</p>
              </div>
              <div className="col-md-4 info">
                <i className="bi bi-envelope"></i>
                <p>info@devcodecare.in</p>
              </div>
              <div className="col-md-3 info">
                <i className="bi bi-phone"></i>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

            <div className="form">
              <form onSubmit={handleSubmit} className="php-email-form" noValidate>
                <div className="row">
                  <div className="form-group col-lg-6">
                    <input
                      type="text"
                      name="name"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      autoComplete="name"
                    />
                    {errors.name && (
                      <div className="error-message" style={{ display: 'block' }}>
                        {errors.name}
                      </div>
                    )}
                  </div>
                  <div className="form-group col-lg-6 mt-3 mt-lg-0">
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={255}
                      autoComplete="email"
                    />
                    {errors.email && (
                      <div className="error-message" style={{ display: 'block' }}>
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    maxLength={200}
                  />
                  {errors.subject && (
                    <div className="error-message" style={{ display: 'block' }}>
                      {errors.subject}
                    </div>
                  )}
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    name="message"
                    rows={5}
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={5000}
                  />
                  {errors.message && (
                    <div className="error-message" style={{ display: 'block' }}>
                      {errors.message}
                    </div>
                  )}
                </div>
                <div className="my-3">
                  {isSubmitting && (
                    <div className="loading" style={{ display: 'block' }}>
                      Loading
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="error-message" style={{ display: 'block' }}>
                      {statusMessage}
                    </div>
                  )}
                  {submitStatus === 'success' && (
                    <div className="sent-message" style={{ display: 'block' }}>
                      {statusMessage}
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
